import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import CaseStudiesSection from "@/components/sections/CaseStudiesSection"

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CaseStudiesSection />
    </div>
  )
}
