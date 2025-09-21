"use client"

import { motion } from "framer-motion"
import { Search, Settings, BarChart3, Target, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useDemandeDevis } from "@/contexts/DemandeDevisContext"

const steps = [
  {
    number: "01",
    title: "Connexion & Configuration",
    description: "Setup rapide et intuitif en quelques clics. Notre IA détecte automatiquement vos concurrents.",
    icon: <Settings className="w-8 h-8" />,
    features: ["Intégration en un clic", "Détection auto des concurrents", "Règles de prix personnalisées"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    solidColor: "bg-blue-500"
  },
  {
    number: "02",
    title: "Surveillance & Analyse",
    description: "Monitoring continu des prix avec alertes intelligentes sur tous les canaux de vente.",
    icon: <Search className="w-8 h-8" />,
    features: ["Surveillance 24/7", "Alertes intelligentes", "Suivi multi-canal"],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    solidColor: "bg-purple-500"
  },
  {
    number: "03",
    title: "Insights & Rapports",
    description: "Tableaux de bord avancés qui transforment vos données en insights actionnables.",
    icon: <BarChart3 className="w-8 h-8" />,
    features: ["Analyses avancées", "Tableaux de bord personnalisés", "Capacités d'export"],
    color: "from-green-500 to-teal-500",
    bgColor: "from-green-50 to-teal-50",
    solidColor: "bg-green-500"
  },
  {
    number: "04",
    title: "Optimisation & Croissance",
    description: "Stratégies de prix intelligentes qui maximisent vos marges et votre croissance.",
    icon: <Target className="w-8 h-8" />,
    features: ["Optimisation des prix", "Suivi du ROI", "Recommandations stratégiques"],
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    solidColor: "bg-orange-500"
  }
]

interface StepCardProps {
  step: typeof steps[0]
  index: number
}

function HexagonStepCard({ step, index }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="text-center group"
    >
      {/* Hexagon container */}
      <div className="relative mb-8">
        {/* Hexagon background */}
        <div className={`relative w-32 h-32 mx-auto bg-gradient-to-br ${step.color} transform rotate-45 rounded-3xl shadow-2xl group-hover:scale-110 transition-all duration-300`}>
          {/* Icon container */}
          <div className="absolute inset-0 flex items-center justify-center transform -rotate-45">
            <div className="text-white">
              {step.icon}
            </div>
          </div>
        </div>

        {/* Step number */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg text-gray-900 shadow-lg border-4 border-gray-100">
            {step.number}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed px-4">{step.description}</p>

        {/* Features with custom bullets */}
        <div className="space-y-2 pt-4">
          {step.features.map((feature, featureIndex) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 + featureIndex * 0.1 }}
              className="flex items-center justify-center space-x-2"
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
              <span className="text-gray-700 text-sm font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function HowItWorksSection() {
  const { openModal } = useDemandeDevis()

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-6 bg-purple-100 text-purple-700 px-4 py-2 text-sm font-medium">
            Comment ça Marche
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Commencez en <span className="text-gradient">4 étapes simples</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            De la configuration à l'optimisation, notre processus simplifié vous donne des insights concurrentiels
            en quelques minutes, pas en mois. Aucune expertise technique requise.
          </p>
        </motion.div>

        {/* Hexagonal Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <HexagonStepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Bottom section with timeline visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-noise opacity-20" />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Prêt à transformer votre stratégie de prix ?
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                Rejoignez des centaines d'entreprises qui utilisent déjà Value-IT pour garder une longueur d'avance.
                Commencez votre essai gratuit aujourd'hui et voyez les résultats en quelques heures.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold">5 minutes</div>
                <div className="text-blue-200">Temps d'installation</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold">30 jours</div>
                <div className="text-blue-200">Essai gratuit</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-200">Support expert</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center mt-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={openModal}
              >
                Commencer l'Essai Gratuit
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

