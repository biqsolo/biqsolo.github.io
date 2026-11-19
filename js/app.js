const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC2yN83olfOBbmk735xl5KbmGDZpweH89c",
  authDomain: "biqsolo-digital.firebaseapp.com",
  projectId: "biqsolo-digital",
  storageBucket: "biqsolo-digital.firebasestorage.app",
  messagingSenderId: "881087122322",
  appId: "1:881087122322:web:3be2d57796cb1e2a8c4f4b"
};

const PAYSTACK_PUBLIC_KEY = "pk_live_fd3f31b1a0485deab79c1124eb217ddf14006847";

if (typeof firebase !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

const auth = typeof firebase !== "undefined" ? firebase.auth() : null;
const db = typeof firebase !== "undefined" ? firebase.firestore() : null;
const functions = typeof firebase !== "undefined" && firebase.functions ? firebase.functions() : null;

let currentUser = null;
let isAdminUser = false;
let userProfile = { wallet: 0, cart: [], downloads: [] };
let storeProducts = typeof DEFAULT_STORE_PRODUCTS !== "undefined" ? [...DEFAULT_STORE_PRODUCTS] : [];

function formatNaira(amount) {
  return "₦" + Number(amount || 0).toLocaleString("en-NG");
}

function renderSharedHeader(activePage = "") {
  const navItems = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "about", label: "About Us", href: "about.html" },
    { id: "services", label: "Our Services", href: "services.html" },
    { id: "portfolio", label: "Portfolio", href: "portfolio.html" },
    { id: "store", label: "Digital Store", href: "store.html" },
    { id: "contact", label: "Contact", href: "contact.html" }
  ];

  const headerEl = document.getElementById("site-header");
  if (!headerEl) return;

  headerEl.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
      <a href="index.html" class="flex items-center space-x-3">
        <span class="w-10 h-10 border border-[#d4af37] flex items-center justify-center text-[#d4af37] font-serif-luxury font-bold text-xl">B</span>
        <span class="text-lg sm:text-xl font-bold tracking-wider text-white">BIQSOLO <span class="gold-text">DIGITAL</span></span>
      </a>

      <nav class="hidden xl:flex items-center space-x-6 text-sm font-medium">
        ${navItems.map(item => `
          <a href="${item.href}" class="${activePage === item.id ? "gold-text font-semibold" : "text-zinc-300 hover:text-[#d4af37]"} transition">
            ${item.label}
          </a>
        `).join("")}
        <a href="client-dashboard.html" id="nav-client-link" class="hidden ${activePage === "client" ? "gold-text font-semibold" : "text-amber-300 hover:text-[#d4af37]"} transition">Client Portal</a>
        <a href="admin.html" id="nav-admin-link" class="hidden ${activePage === "admin" ? "gold-text font-semibold" : "text-amber-200 hover:text-[#d4af37]"} transition">
          <i class="fa-solid fa-shield-halved mr-1 text-xs"></i>Admin
        </a>
      </nav>

      <div class="flex items-center space-x-2.5">
        <div class="hidden sm:flex items-center space-x-2 bg-[#15151a] border border-zinc-800 px-3 py-1.5 rounded text-xs">
          <i class="fa-solid fa-wallet gold-text"></i>
          <span class="text-zinc-400">Wallet:</span>
          <strong id="header-wallet" class="gold-text">₦0</strong>
          <button onclick="openTopupModal()" class="btn-gold px-1.5 py-0.5 rounded text-[11px]" title="Fund Wallet">+</button>
        </div>

        <a href="store.html#cart" class="relative p-2 bg-[#15151a] border border-zinc-800 rounded text-[#d4af37] hover:border-[#d4af37] transition" title="Shopping Cart">
          <i class="fa-solid fa-bag-shopping text-sm"></i>
          <span id="header-cart-count" class="absolute -top-1.5 -right-1.5 bg-[#d4af37] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
        </a>

        <div id="header-auth-controls"></div>

        <button onclick="toggleMobileNav()" class="xl:hidden p-2 bg-[#15151a] border border-zinc-800 rounded text-zinc-200" aria-label="Menu">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>

    <div id="mobile-nav-drawer" class="hidden xl:hidden bg-[#0c0c0f] border-t border-zinc-800 px-6 py-4 space-y-3 text-sm">
      ${navItems.map(item => `<a href="${item.href}" class="block py-1 text-zinc-300 hover:text-[#d4af37]">${item.label}</a>`).join("")}
      <a href="client-dashboard.html" id="mob-client-link" class="hidden block py-1 gold-text font-semibold">Client Portal</a>
      <a href="admin.html" id="mob-admin-link" class="hidden block py-1 text-amber-200 font-semibold">Admin Dashboard</a>
    </div>
  `;
}

function renderSharedFooter() {
  const footerEl = document.getElementById("site-footer");
  if (!footerEl) return;

  const deptLinks = typeof DEPARTMENTS_DATA !== "undefined"
    ? DEPARTMENTS_DATA.map(d => `<li><a href="department.html?dept=${d.slug}" class="hover:text-[#d4af37] transition">${d.name}</a></li>`).join("")
    : "";

  footerEl.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
      <div class="space-y-3">
        <div class="flex items-center space-x-2.5">
          <span class="w-9 h-9 border border-[#d4af37] flex items-center justify-center text-[#d4af37] font-serif-luxury font-bold">B</span>
          <span class="font-bold tracking-wider">BIQSOLO <span class="gold-text">DIGITAL</span></span>
        </div>
        <p class="text-zinc-400 text-xs leading-relaxed">
          Creative & Digital Solutions Studio. We provide innovative digital, creative, business and technology solutions to individuals, entrepreneurs and organizations.
        </p>
      </div>

      <div>
        <h4 class="font-bold text-white mb-3 text-sm uppercase tracking-wider">Company</h4>
        <ul class="space-y-2 text-xs text-zinc-400">
          <li><a href="index.html" class="hover:text-[#d4af37]">Home</a></li>
          <li><a href="about.html" class="hover:text-[#d4af37]">About Us</a></li>
          <li><a href="services.html" class="hover:text-[#d4af37]">Our Services</a></li>
          <li><a href="portfolio.html" class="hover:text-[#d4af37]">Portfolio</a></li>
          <li><a href="store.html" class="hover:text-[#d4af37]">Digital Store</a></li>
          <li><a href="contact.html" class="hover:text-[#d4af37]">Contact & Service Requests</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-white mb-3 text-sm uppercase tracking-wider">Departments</h4>
        <ul class="space-y-2 text-xs text-zinc-400">
          ${deptLinks}
        </ul>
      </div>

      <div class="space-y-2 text-xs text-zinc-400">
        <h4 class="font-bold text-white mb-3 text-sm uppercase tracking-wider">Contact & Availability</h4>
        <p>Official Email: <a href="mailto:Biqsolodigital@gmail.com" class="gold-text font-medium">Biqsolodigital@gmail.com</a></p>
        <p class="leading-relaxed">Available 24/7 for enquiries and online consultations.</p>
        <div class="pt-2">
          <a href="client-dashboard.html" class="inline-block btn-outline-gold px-4 py-2 rounded text-xs">Client Portal</a>
        </div>
      </div>
    </div>
    <div class="border-t border-zinc-900 py-5 text-center text-xs text-zinc-500">
      &copy; ${new Date().getFullYear()} BIQSOLO DIGITAL. All Rights Reserved.
    </div>
  `;
}

function toggleMobileNav() {
  document.getElementById("mobile-nav-drawer")?.classList.toggle("hidden");
}

function updateHeaderState() {
  const walletEl = document.getElementById("header-wallet");
  const cartEl = document.getElementById("header-cart-count");
  const authBox = document.getElementById("header-auth-controls");

  if (walletEl) walletEl.textContent = formatNaira(userProfile.wallet || 0);
  if (cartEl) cartEl.textContent = (userProfile.cart || []).length;

  if (authBox) {
    if (currentUser) {
      authBox.innerHTML = `<button onclick="signOutUser()" class="bg-[#15151a] hover:border-red-500/60 text-xs px-3 py-1.5 rounded border border-zinc-800 transition">Sign Out</button>`;
    } else {
      authBox.innerHTML = `<button onclick="openAuthModal()" class="btn-gold text-xs px-3.5 py-1.5 rounded">Sign In</button>`;
    }
  }

  document.getElementById("nav-client-link")?.classList.toggle("hidden", !currentUser);
  document.getElementById("mob-client-link")?.classList.toggle("hidden", !currentUser);
  document.getElementById("nav-admin-link")?.classList.toggle("hidden", !isAdminUser);
  document.getElementById("mob-admin-link")?.classList.toggle("hidden", !isAdminUser);
}

let authRegisterMode = false;
function openAuthModal() {
  if (!document.getElementById("global-auth-modal")) {
    const modal = document.createElement("div");
    modal.id = "global-auth-modal";
    modal.className = "fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4";
    modal.innerHTML = `
      <div class="bg-[#101014] border border-[#d4af37]/40 w-full max-w-md rounded-xl p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 id="auth-modal-title" class="text-xl font-bold">Client <span class="gold-text">Sign In</span></h3>
          <button onclick="closeAuthModal()" class="text-zinc-400 hover:text-white text-xl">&times;</button>
        </div>
        <form onsubmit="submitAuthForm(event)" class="space-y-4">
          <div>
            <label class="block text-xs text-zinc-400 mb-1">Email Address</label>
            <input type="email" id="auth-input-email" required class="w-full bg-black border border-zinc-800 rounded p-3 text-sm outline-none focus:border-[#d4af37]">
          </div>
          <div>
            <label class="block text-xs text-zinc-400 mb-1">Password (Min. 8 characters)</label>
            <input type="password" id="auth-input-pass" minlength="8" required class="w-full bg-black border border-zinc-800 rounded p-3 text-sm outline-none focus:border-[#d4af37]">
          </div>
          <button type="submit" id="auth-submit-btn" class="w-full btn-gold py-3 rounded text-sm">Sign In</button>
        </form>
        <p class="mt-4 text-center text-xs text-zinc-400">
          <span id="auth-toggle-label">Don't have an account?</span>
          <button type="button" onclick="toggleAuthModalMode()" id="auth-toggle-action" class="gold-text font-semibold ml-1 hover:underline">Register</button>
        </p>
      </div>
    `;
    document.body.appendChild(modal);
  }
  document.getElementById("global-auth-modal").classList.remove("hidden");
}

function closeAuthModal() {
  document.getElementById("global-auth-modal")?.classList.add("hidden");
}

function toggleAuthModalMode() {
  authRegisterMode = !authRegisterMode;
  document.getElementById("auth-modal-title").innerHTML = authRegisterMode
    ? `Create <span class="gold-text">Client Account</span>`
    : `Client <span class="gold-text">Sign In</span>`;
  document.getElementById("auth-submit-btn").textContent = authRegisterMode ? "Create Account" : "Sign In";
  document.getElementById("auth-toggle-label").textContent = authRegisterMode ? "Already registered?" : "Don't have an account?";
  document.getElementById("auth-toggle-action").textContent = authRegisterMode ? "Sign In" : "Register";
}

async function submitAuthForm(e) {
  e.preventDefault();
  if (!auth) return alert("Firebase Auth not initialized.");
  const email = document.getElementById("auth-input-email").value.trim();
  const pass = document.getElementById("auth-input-pass").value;

  try {
    if (authRegisterMode) {
      await auth.createUserWithEmailAndPassword(email, pass);
    } else {
      await auth.signInWithEmailAndPassword(email, pass);
    }
    closeAuthModal();
  } catch (err) {
    alert(err.message);
  }
}

async function signOutUser() {
  if (!auth) return;
  await auth.signOut();
  window.location.href = "index.html";
}

function openTopupModal() {
  if (!currentUser) { openAuthModal(); return; }
  if (!document.getElementById("global-topup-modal")) {
    const modal = document.createElement("div");
    modal.id = "global-topup-modal";
    modal.className = "fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4";
    modal.innerHTML = `
      <div class="bg-[#101014] border border-[#d4af37]/40 w-full max-w-md rounded-xl p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold">Fund <span class="gold-text">Wallet</span></h3>
          <button onclick="closeTopupModal()" class="text-zinc-400 hover:text-white text-xl">&times;</button>
        </div>
        <div class="space-y-4">
          <div>
            <label class="block text-xs text-zinc-400 mb-1">Amount (NGN ₦)</label>
            <input type="number" id="topup-naira-input" value="5000" min="500" class="w-full bg-black border border-zinc-800 rounded p-3 text-sm outline-none focus:border-[#d4af37]">
          </div>
          <p class="text-xs text-zinc-400 bg-black p-3 rounded border border-zinc-800">
            Secured by Paystack. Wallet balances are credited only after server-side payment verification.
          </p>
          <button onclick="startPaystackWalletTopup()" class="w-full btn-gold py-3 rounded text-sm">Pay with Paystack</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  document.getElementById("global-topup-modal").classList.remove("hidden");
}

function closeTopupModal() {
  document.getElementById("global-topup-modal")?.classList.add("hidden");
}

function startPaystackWalletTopup() {
  const amount = Number(document.getElementById("topup-naira-input")?.value || 0);
  if (!amount || amount < 500) return alert("Minimum top-up amount is ₦500.");

  const ref = `BIQ_WAL_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
  const handler = PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email: currentUser.email,
    amount: Math.round(amount * 100),
    currency: "NGN",
    ref,
    callback: async function (response) {
      try {
        if (!functions) throw new Error("Cloud Functions unavailable.");
        const verifyFn = functions.httpsCallable("verifyPaystackTransaction");
        const res = await verifyFn({
          reference: response.reference,
          purpose: "wallet_topup",
          expectedAmountNaira: amount
        });
        closeTopupModal();
        alert(res.data.message || "Wallet funded successfully!");
      } catch (err) {
        alert("Verification failed: " + err.message);
      }
    }
  });
  handler.openIframe();
}

function initPageShell(activePage, onReadyCallback) {
  renderSharedHeader(activePage);
  renderSharedFooter();
  updateHeaderState();

  if (db) {
    db.collection("products").onSnapshot(snap => {
      const custom = [];
      snap.forEach(doc => custom.push({ id: doc.id, ...doc.data() }));
      storeProducts = [...custom, ...(typeof DEFAULT_STORE_PRODUCTS !== "undefined" ? DEFAULT_STORE_PRODUCTS : [])];
      if (typeof onProductsLoaded === "function") onProductsLoaded(storeProducts);
    }, () => {
      if (typeof onProductsLoaded === "function") onProductsLoaded(storeProducts);
    });
  }

  if (auth && db) {
    auth.onAuthStateChanged(async user => {
      if (user) {
        currentUser = user;
        const token = await user.getIdTokenResult(true);
        isAdminUser = token.claims.admin === true;
        updateHeaderState();

        db.collection("users").doc(user.uid).onSnapshot(doc => {
          userProfile = doc.exists ? doc.data() : { wallet: 0, cart: [], downloads: [] };
          updateHeaderState();
          if (typeof onUserDataLoaded === "function") onUserDataLoaded(user, isAdminUser, userProfile);
        });
      } else {
        currentUser = null;
        isAdminUser = false;
        userProfile = { wallet: 0, cart: [], downloads: [] };
        updateHeaderState();
        if (typeof onUserDataLoaded === "function") onUserDataLoaded(null, false, userProfile);
      }
      if (typeof onReadyCallback === "function") onReadyCallback(currentUser, isAdminUser);
    });
  } else if (typeof onReadyCallback === "function") {
    onReadyCallback(null, false);
  }
}
