import { Metadata } from "next"
import DemoHero from "@/components/sections/DemoHero"
import DemoForm from "@/components/sections/DemoForm"
import ContactInfo from "@/components/sections/ContactInfo"
import DemoPreview from "@/components/sections/DemoPreview"

export const metadata: Metadata = {
  title: "Demander une démo - Value-IT",
  description: "Planifiez une démonstration personnalisée de Value-IT avec nos experts. Découvrez comment optimiser votre stratégie pricing en 30 minutes.",
  keywords: ["demo value-it", "essai gratuit", "demonstration", "contact", "rdv commercial"]
}

export default function DemoPage() {
  return (
    <div className="pt-16">
      <DemoHero />
      <DemoForm />
      <DemoPreview />
      <ContactInfo />
    </div>
  )
}