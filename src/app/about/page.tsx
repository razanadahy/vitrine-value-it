import { Metadata } from "next"
import AboutHero from "@/components/sections/AboutHero"
import AboutStory from "@/components/sections/AboutStory"
import AboutTeam from "@/components/sections/AboutTeam"
import AboutOffices from "@/components/sections/AboutOffices"
import AboutValues from "@/components/sections/AboutValues"

export const metadata: Metadata = {
  title: "À propos - Value-IT",
  description: "Découvrez l'histoire de Value-IT, notre équipe internationale basée à Madagascar, France, Inde et Mexique. Leaders de la veille concurrentielle depuis 2018.",
  keywords: ["about value-it", "équipe internationale", "madagascar", "histoire entreprise", "veille concurrentielle"]
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutOffices />
      <AboutValues />
    </div>
  )
}