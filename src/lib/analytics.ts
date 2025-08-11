// Google Analytics 4 Configuration and Utilities

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
    // Google Analytics Global Site Tag
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `
    document.head.appendChild(script2)
  }
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: title || document.title,
      page_location: url,
    })
  }
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Business-specific tracking events
export const trackBusinessEvents = {
  // Demo requests
  demoRequested: (source: string, userType: string) => {
    trackEvent('demo_requested', 'lead_generation', source, undefined)
    trackEvent('demo_requested_by_type', 'user_segmentation', userType, undefined)
  },

  // Pricing calculator usage
  roiCalculatorUsed: (revenue: number, industry: string) => {
    trackEvent('roi_calculator_used', 'engagement', industry, revenue)
  },

  // Contact form submissions
  contactFormSubmitted: (formType: string, leadQuality: string) => {
    trackEvent('contact_form_submitted', 'lead_generation', formType, undefined)
    trackEvent('lead_quality', 'qualification', leadQuality, undefined)
  },

  // Page engagement
  sectionViewed: (sectionName: string, timeSpent?: number) => {
    trackEvent('section_viewed', 'engagement', sectionName, timeSpent)
  },

  // Download events
  resourceDownloaded: (resourceType: string, resourceName: string) => {
    trackEvent('resource_downloaded', 'content_engagement', resourceType, undefined)
    trackEvent('specific_download', 'resources', resourceName, undefined)
  },

  // Case study interactions
  caseStudyViewed: (caseStudyId: string, industry: string) => {
    trackEvent('case_study_viewed', 'content_engagement', caseStudyId, undefined)
    trackEvent('case_study_by_industry', 'content_segmentation', industry, undefined)
  },

  // Testimonial interactions
  testimonialInteraction: (action: string, testimonialAuthor: string) => {
    trackEvent(`testimonial_${action}`, 'social_proof', testimonialAuthor, undefined)
  },

  // Solution page visits
  solutionViewed: (solutionType: string, userJourney: string) => {
    trackEvent('solution_viewed', 'product_interest', solutionType, undefined)
    trackEvent('user_journey_stage', 'conversion_funnel', userJourney, undefined)
  },

  // Pricing page interactions
  pricingInteraction: (action: string, planType?: string) => {
    trackEvent(`pricing_${action}`, 'conversion_intent', planType || 'unknown', undefined)
  }
}

// E-commerce tracking for lead scoring
export const trackLeadScoring = (leadData: {
  company: string
  industry: string
  teamSize: string
  timeline: string
  currentSolution: string
}) => {
  // Score calculation based on lead quality indicators
  let leadScore = 0
  
  // Industry scoring
  const highValueIndustries = ['E-commerce', 'Retail', 'Tech', 'Finance']
  if (highValueIndustries.includes(leadData.industry)) leadScore += 20

  // Team size scoring
  const teamSizeScores: { [key: string]: number } = {
    '1-10': 5,
    '11-50': 15, 
    '51-200': 25,
    '201-1000': 30,
    '1000+': 35
  }
  leadScore += teamSizeScores[leadData.teamSize] || 0

  // Timeline scoring
  const timelineScores: { [key: string]: number } = {
    'Immédiatement': 30,
    'Dans le mois': 25,
    'Dans le trimestre': 15,
    'Pas défini': 5
  }
  leadScore += timelineScores[leadData.timeline] || 0

  // Current solution scoring (indicates pain points)
  if (leadData.currentSolution.toLowerCase().includes('excel')) leadScore += 20
  if (leadData.currentSolution.toLowerCase().includes('manual')) leadScore += 25

  // Track the lead score
  trackEvent('lead_scored', 'qualification', `score_${Math.floor(leadScore / 10) * 10}`, leadScore)
  
  return leadScore
}

// Hotjar integration
export const initHotjar = () => {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_HOTJAR_ID) {
    const hotjarScript = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `
    const script = document.createElement('script')
    script.innerHTML = hotjarScript
    document.head.appendChild(script)
  }
}

// Cookie consent management
export const trackConsentStatus = (consentGiven: boolean) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: consentGiven ? 'granted' : 'denied',
      ad_storage: consentGiven ? 'granted' : 'denied'
    })
  }
  
  trackEvent('consent_status', 'privacy', consentGiven ? 'granted' : 'denied', undefined)
}

// Declare gtag as global
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}