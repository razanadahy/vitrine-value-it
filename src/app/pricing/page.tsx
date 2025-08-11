import { Metadata } from "next"
import PricingHero from "@/components/sections/PricingHero"
import PricingPlans from "@/components/sections/PricingPlans"
import ROICalculatorSection from "@/components/sections/ROICalculatorSection"
import PricingFAQ from "@/components/sections/PricingFAQ"

export const metadata: Metadata = {
  title: "Tarifs - Value-IT",
  description: "Découvrez nos plans tarifaires transparents pour la veille concurrentielle. Essai gratuit 14 jours, sans engagement.",
  keywords: ["prix value-it", "tarifs pricing", "essai gratuit", "plans SaaS", "roi calculator"]
}

export default function PricingPage() {
  return (
    <div className="pt-16">
      <PricingHero />
      <PricingPlans />
      <ROICalculatorSection />
      <PricingFAQ />
    </div>
  )
}