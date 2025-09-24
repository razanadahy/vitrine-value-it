// Company Information
export const COMPANY_INFO = {
  name: "Value-IT",
  tagline: "Competitive Price Intelligence Made Simple",
  description: "Plateforme SaaS leader en intelligence tarifaire concurrentielle analysant plus de 10M de prix quotidiennement",
  founded: "2018",
  headquarters: "Madagascar",
  employees: "50+",
  metrics: {
    pricesAnalyzed: "10M+",
    dailyProcessing: "10,000,000",
    uptime: "99.9%",
    clients: "200+",
    countries: 15,
    dataPoints: "1B+"
  }
}

// Navigation Menu
export const NAVIGATION = [
  { name: "Accueil", href: "/" },
  { name: "Solutions", href: "/features" },
  { name: "Tarifs", href: "/pricing" },
  { name: "À propos", href: "/about" },
  { name: "Démo", href: "/demo" }
]

// Features List
export const FEATURES = [
  {
    title: "Intelligent Web Scraping",
    description: "Advanced AI-powered scraping technology that adapts to any e-commerce site",
    icon: "globe"
  },
  {
    title: "Real-time Dashboards", 
    description: "Live pricing data with customizable dashboards and instant notifications",
    icon: "dashboard"
  },
  {
    title: "Price Monitoring",
    description: "24/7 automated price tracking across all your competitors",
    icon: "trending"
  },
  {
    title: "Market Intelligence",
    description: "Deep insights and analytics to optimize your pricing strategy",
    icon: "analytics"
  },
  {
    title: "API Integration",
    description: "Seamless integration with your existing systems via REST API",
    icon: "api"
  },
  {
    title: "Global Coverage",
    description: "Monitor prices across 15+ countries with local market expertise",
    icon: "world"
  }
]

// Pricing Plans
export const PRICING_PLANS = [
  {
    name: "Starter",
    price: 299,
    currency: "EUR",
    period: "month",
    description: "Perfect for small businesses getting started with price monitoring",
    features: [
      "Up to 100 products monitored",
      "Daily price updates",
      "Basic dashboard",
      "Email alerts",
      "API access"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional", 
    price: 899,
    currency: "EUR",
    period: "month",
    description: "Advanced features for growing e-commerce businesses",
    features: [
      "Up to 1,000 products monitored",
      "Real-time price updates",
      "Advanced analytics",
      "Custom alerts",
      "Priority API access",
      "Dedicated support"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: null,
    currency: "EUR",
    period: "month",
    description: "Custom solutions for large enterprises",
    features: [
      "Unlimited products",
      "Custom integrations",
      "White-label solutions",
      "24/7 support",
      "SLA guarantee",
      "On-premise deployment"
    ],
    cta: "Contact Sales",
    popular: false
  }
]

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Head of E-commerce",
    company: "TechMart",
    avatar: "/testimonials/sarah.jpg",
    content: "Value-IT transformed our pricing strategy. We increased margins by 15% while staying competitive.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez", 
    role: "Pricing Manager",
    company: "GlobalRetail",
    avatar: "/testimonials/marcus.jpg", 
    content: "The real-time insights helped us react to market changes instantly. ROI was visible within weeks.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "CEO",
    company: "FashionForward",
    avatar: "/testimonials/emily.jpg",
    content: "Their Madagascar team provides exceptional support. The platform scales with our growth perfectly.",
    rating: 5
  }
]

// Contact Information
export const CONTACT_INFO = {
  email: "contact@value-it.com",
  phone: "+33 1 23 45 67 89",
  addresses: {
    madagascar: {
      address: "Antananarivo, Madagascar",
      phone: "+261 20 22 123 45"
    },
    france: {
      address: "Paris, France", 
      phone: "+33 1 23 45 67 89"
    },
    india: {
      address: "Bangalore, India",
      phone: "+91 80 1234 5678"
    },
    mexico: {
      address: "Mexico City, Mexico",
      phone: "+52 55 1234 5678"
    }
  },
  social: {
    linkedin: "https://linkedin.com/company/value-it",
    twitter: "https://twitter.com/valueit", 
    github: "https://github.com/value-it"
  }
}