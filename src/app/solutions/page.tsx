import { Metadata } from "next"
import SolutionsHero from "@/components/sections/SolutionsHero"
import SolutionsGrid from "@/components/sections/SolutionsGrid"
import SolutionsComparison from "@/components/sections/SolutionsComparison"
import SolutionsCTA from "@/components/sections/SolutionsCTA"

export const metadata: Metadata = {
  title: "Solutions - Value-IT",
  description: "Découvrez nos solutions de veille concurrentielle adaptées à votre secteur : E-commerce, Retail, API et solutions sur-mesure.",
  keywords: ["solutions pricing", "e-commerce intelligence", "retail pricing", "API pricing", "veille concurrentielle"]
}

export default function SolutionsPage() {
  return (
    <div className="pt-16">
      <SolutionsHero />
      <SolutionsGrid />
      <SolutionsComparison />
      <SolutionsCTA />
    </div>
  )
}