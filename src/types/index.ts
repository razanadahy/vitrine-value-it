// Common Types
export interface NavItem {
  name: string
  href: string
  description?: string
}

export interface Feature {
  title: string
  description: string
  icon: string
  href?: string
}

export interface Metric {
  label: string
  value: string | number
  suffix?: string
  prefix?: string
  animated?: boolean
}

export interface PricingPlan {
  name: string
  price: number | null
  currency: string
  period: string
  description: string
  features: string[]
  cta: string
  popular: boolean
  href?: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
}

export interface CaseStudy {
  id: string
  title: string
  company: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    improvement: string
    value: string
  }[]
  image: string
  logo: string
  testimonial?: Testimonial
}