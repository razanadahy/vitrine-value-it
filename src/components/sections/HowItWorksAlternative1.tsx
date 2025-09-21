"use client"

import { motion } from "framer-motion"
import { Search, Settings, BarChart3, Target, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    number: 1,
    title: "Connexion & Configuration",
    description: "Intégrez facilement vos produits et sources de données concurrentes.",
    icon: <Settings className="w-8 h-8" />,
    features: ["Intégration en un clic", "Détection auto des concurrents", "Règles de prix personnalisées"],
    color: "bg-blue-500",
    lightColor: "bg-blue-100",
    textColor: "text-blue-600"
  },
  {
    number: 2,
    title: "Surveillance & Analyse",
    description: "Surveillance des prix en temps réel sur tous les canaux avec analyse intelligente.",
    icon: <Search className="w-8 h-8" />,
    features: ["Surveillance 24/7", "Alertes intelligentes", "Suivi multi-canal"],
    color: "bg-purple-500",
    lightColor: "bg-purple-100",
    textColor: "text-purple-600"
  },
  {
    number: 3,
    title: "Insights & Rapports",
    description: "Transformez les données brutes en insights actionnables avec des analyses avancées.",
    icon: <BarChart3 className="w-8 h-8" />,
    features: ["Analyses avancées", "Tableaux de bord personnalisés", "Capacités d'export"],
    color: "bg-green-500",
    lightColor: "bg-green-100",
    textColor: "text-green-600"
  },
  {
    number: 4,
    title: "Optimisation & Croissance",
    description: "Implémentez des stratégies de prix basées sur les données.",
    icon: <Target className="w-8 h-8" />,
    features: ["Optimisation des prix", "Suivi du ROI", "Recommandations stratégiques"],
    color: "bg-orange-500",
    lightColor: "bg-orange-100",
    textColor: "text-orange-600"
  }
]

// Design 1: Timeline Vertical
export default function HowItWorksAlternative1() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-6 bg-purple-100 text-purple-700">
            Comment ça Marche
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Timeline <span className="text-gradient">Verticale</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 to-orange-500"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Step circle */}
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 flex-shrink-0`}>
                {step.number}
              </div>

              {/* Content */}
              <div className="ml-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  <div className={`${step.lightColor} p-4 rounded-xl ml-6`}>
                    <div className={step.textColor}>
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 + featureIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className={`w-5 h-5 ${step.textColor}`} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}