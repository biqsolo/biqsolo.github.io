const fetch = require('node-fetch');
const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined
    })
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { reference, amount, userId } = req.body;

    if (!reference || !amount || !userId) {
      return res.status(400).json({ error: 'Missing required parameters.' });
    }

    const db = admin.firestore();

    // 1. Check duplicate reference
    const txRef = db.collection('transactions').doc(reference);
    const txDoc = await txRef.get();
    if (txDoc.exists) {
      return res.status(400).json({ error: 'Transaction reference has already been used.' });
    }

    // 2. Verify with Paystack
    const paystackRes = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` }
    });
    const result = await paystackRes.json();

    if (result.status && result.data.status === 'success' && (result.data.amount / 100) >= amount) {
      // 3. Credit wallet and save transaction atomically
      await db.runTransaction(async t => {
        const userRef = db.collection('users').doc(userId);
        const userDoc = await t.get(userRef);
        const currentWallet = userDoc.exists ? (userDoc.data().wallet || 0) : 0;

        t.set(userRef, { wallet: currentWallet + amount }, { merge: true });
        t.set(txRef, { userId, amount, reference, createdAt: new Date().toISOString() });
      });

      return res.status(200).json({ success: true, message: 'Wallet successfully funded!' });
    } else {
      return res.status(400).json({ error: 'Payment verification failed or amount mismatch.' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
