import HeroSection from "@/components/sections/HeroSection"
import StatsMetricsSection from "@/components/sections/StatsMetricsSection"
import HowItWorksSection from "@/components/sections/HowItWorksSection"
import ModernFeaturesSection from "@/components/sections/ModernFeaturesSection"
import PowerfulCTASection from "@/components/sections/PowerfulCTASection"

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <StatsMetricsSection />
      <HowItWorksSection />
      <ModernFeaturesSection />
      <PowerfulCTASection />
    </div>
  )
}
