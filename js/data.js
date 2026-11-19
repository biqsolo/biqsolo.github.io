const DEPARTMENTS_DATA = [
  {
    slug: "creative-design-branding",
    number: "01",
    name: "Creative Design & Branding",
    tagline: "Distinctive visual identities and high-impact creative assets built to command authority.",
    overview: "We craft cohesive visual systems, memorable brand identities, and polished digital and print collateral that position individuals, startups, and enterprises with clarity and distinction.",
    services: [
      "Brand identity and logo design",
      "Graphic design",
      "Digital graphics",
      "Social media designs",
      "Promotional materials"
    ],
    deliverables: ["Primary & Secondary Logo Suite", "Brand Style & Colour Guidelines", "Social Media & Campaign Templates", "Print & Promotional Collateral"]
  },
  {
    slug: "business-development-management",
    number: "02",
    name: "Business Development & Management",
    tagline: "Structured growth strategies, operational clarity, and sustainable enterprise planning.",
    overview: "We partner with founders and organizations to turn concepts into viable business models, actionable roadmaps, and resilient management structures.",
    services: [
      "Business planning",
      "Business development",
      "Business strategy",
      "Business management support",
      "Organizational development"
    ],
    deliverables: ["Comprehensive Business Plans", "Growth & Market Expansion Roadmaps", "Operational SOPs & Workflow Frameworks", "Executive Advisory & Strategy Briefs"]
  },
  {
    slug: "software-technology-solutions",
    number: "03",
    name: "Software & Technology Solutions",
    tagline: "Modern web engineering, bespoke software systems, and pragmatic tech advisory.",
    overview: "We engineer responsive websites, custom software tools, and digital platforms architected for reliability, security, and long-term maintainability.",
    services: [
      "Website development",
      "Software development",
      "Software management",
      "Digital solutions",
      "Technology consulting"
    ],
    deliverables: ["Responsive Web Applications & Portals", "Custom Software & Automation Tools", "System Maintenance & Performance Audits", "Technical Architecture Consulting"]
  },
  {
    slug: "career-development-services",
    number: "04",
    name: "Career Development Services",
    tagline: "Executive-grade career documents, strategic positioning, and application support.",
    overview: "We equip professionals, graduates, and leaders with sharp, accomplishment-driven CVs, cover letters, and application portfolios tailored to competitive opportunities.",
    services: [
      "Professional CV writing",
      "Cover letters",
      "Job research",
      "Career support",
      "Professional application documents"
    ],
    deliverables: ["Tailored Executive & Industry CVs", "Role-Specific Cover Letters", "Targeted Opportunity & Role Research", "Application Statements & Career Profiles"]
  },
  {
    slug: "product-design-development",
    number: "05",
    name: "Product Design & Development",
    tagline: "From market research and digital products to launch-ready execution.",
    overview: "We guide product creation end-to-end—validating ideas, designing intuitive digital products and planners, supporting production, and structuring go-to-market launches.",
    services: [
      "Product research",
      "Product design",
      "Digital product development",
      "Product production support",
      "Product marketing"
    ],
    deliverables: ["Market & User Validation Research", "Digital Planners, Kits & Tools", "Production & Quality Coordination", "Launch & Product Positioning Plans"]
  },
  {
    slug: "digital-marketing-communications",
    number: "06",
    name: "Digital Marketing & Communications",
    tagline: "Strategic visibility, compelling content, and consistent brand messaging.",
    overview: "We help organizations attract, engage, and retain audiences through targeted digital campaigns, structured social media management, and authoritative communications.",
    services: [
      "Digital marketing",
      "Social media management",
      "Content creation",
      "Marketing strategies",
      "Business communications"
    ],
    deliverables: ["Multi-Channel Marketing Campaigns", "Content Calendars & Editorial Assets", "Audience & Funnel Growth Strategies", "Corporate & Stakeholder Messaging"]
  }
];

const PORTFOLIO_PROJECTS = [
  {
    title: "Enterprise Web & Client Portal Architecture",
    department: "Software & Technology Solutions",
    summary: "Multi-view digital platform integrating authenticated client portals, real-time cloud records, and verified online payments.",
    outcome: "Streamlined client onboarding, request tracking, and digital product fulfillment."
  },
  {
    title: "Executive Life & Productivity Planning System",
    department: "Product Design & Development",
    summary: "Structured digital planning suite combining annual visioning, quarterly milestones, weekly execution, and personal reflection.",
    outcome: "Delivered a clean, reusable productivity framework built for daily discipline."
  },
  {
    title: "Luxury Corporate Identity & Brand Standards",
    department: "Creative Design & Branding",
    summary: "Cohesive black, white, and gold visual identity with typography hierarchy, grid standards, and digital brand touchpoints.",
    outcome: "Established a consistent, high-trust visual presence across web and social channels."
  },
  {
    title: "Venture Strategy & Operational Blueprint",
    department: "Business Development & Management",
    summary: "End-to-end business model structuring, service packaging, and operational workflow planning for an emerging service studio.",
    outcome: "Created a clear execution roadmap from launch to scalable operations."
  },
  {
    title: "Career & Application Positioning Suite",
    department: "Career Development Services",
    summary: "Structured CV architecture, cover letter frameworks, and role-aligned application documentation for specialized professionals.",
    outcome: "Improved clarity, presentation hierarchy, and readiness for competitive roles."
  },
  {
    title: "Digital Campaign & Brand Content Engine",
    department: "Digital Marketing & Communications",
    summary: "Coordinated content themes, promotional graphics, and audience messaging designed to convert interest into enquiries.",
    outcome: "Aligned brand storytelling with clear calls to action across digital touchpoints."
  }
];

const DEFAULT_STORE_PRODUCTS = [
  {
    id: "prod-planner-suite",
    type: "digital",
    category: "Product Design & Development",
    title: "The Ultimate Life & Productivity Planner (Digital Edition)",
    description: "Structured goal-setting, habit tracking, priority planning, and reflection pages designed for focused execution.",
    price: 4500,
    img: "https://picsum.photos/600/400?random=11",
    fileUrl: "#"
  },
  {
    id: "prod-brand-kit",
    type: "digital",
    category: "Creative Design & Branding",
    title: "Executive Brand & Social Media Kit",
    description: "Clean, high-contrast layout templates and visual assets for modern businesses and creators.",
    price: 6000,
    img: "https://picsum.photos/600/400?random=12",
    fileUrl: "#"
  },
  {
    id: "prod-cv-pack",
    type: "digital",
    category: "Career Development Services",
    title: "Modern CV & Cover Letter Blueprint Pack",
    description: "Professionally structured resume layouts and cover letter guides to present your experience clearly.",
    price: 3500,
    img: "https://picsum.photos/600/400?random=13",
    fileUrl: "#"
  },
  {
    id: "prod-craft-frame",
    type: "physical",
    category: "Product Design & Development",
    title: "Bespoke Framed Studio Artwork",
    description: "Handcrafted physical piece finished with clean framing for offices, studios, and personal spaces.",
    price: 22000,
    img: "https://picsum.photos/600/400?random=14"
  }
];
