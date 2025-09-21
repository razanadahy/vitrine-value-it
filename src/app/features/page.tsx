import type { Metadata } from "next"
import FeaturesHero from "@/components/sections/FeaturesHero"
import CoreFeatures from "@/components/sections/CoreFeatures"
import TargetAudience from "@/components/sections/TargetAudience"
import TechnicalFeatures from "@/components/sections/TechnicalFeatures"
import IntegrationFeatures from "@/components/sections/IntegrationFeatures"
import SecurityFeatures from "@/components/sections/SecurityFeatures"
import CtaSection from "@/components/sections/CtaSection"

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description: "Découvrez toutes les fonctionnalités de Value-IT : surveillance de prix, analyse concurrentielle, alertes automatiques et bien plus.",
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <FeaturesHero />
      <CoreFeatures />
      <TargetAudience />
      <TechnicalFeatures />
      <IntegrationFeatures />
      <SecurityFeatures />
      <CtaSection />
    </div>
  )
}