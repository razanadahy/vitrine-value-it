"use client"

import { motion } from "framer-motion"
import { Search, Settings, BarChart3, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    number: "01",
    title: "Connexion & Configuration",
    description: "Intégrez facilement vos produits et sources de données concurrentes.",
    icon: <Settings className="w-12 h-12" />,
    features: ["Intégration en un clic", "Détection auto des concurrents", "Règles de prix personnalisées"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    title: "Surveillance & Analyse",
    description: "Surveillance des prix en temps réel sur tous les canaux avec analyse intelligente.",
    icon: <Search className="w-12 h-12" />,
    features: ["Surveillance 24/7", "Alertes intelligentes", "Suivi multi-canal"],
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    title: "Insights & Rapports",
    description: "Transformez les données brutes en insights actionnables avec des analyses avancées.",
    icon: <BarChart3 className="w-12 h-12" />,
    features: ["Analyses avancées", "Tableaux de bord personnalisés", "Capacités d'export"],
    color: "from-green-500 to-teal-500"
  },
  {
    number: "04",
    title: "Optimisation & Croissance",
    description: "Implémentez des stratégies de prix basées sur les données.",
    icon: <Target className="w-12 h-12" />,
    features: ["Optimisation des prix", "Suivi du ROI", "Recommandations stratégiques"],
    color: "from-orange-500 to-red-500"
  }
]

// Design 2: Hexagones connectés
export default function HowItWorksAlternative2() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-6 bg-purple-100 text-purple-700">
            Comment ça Marche
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Design <span className="text-gradient">Hexagonal</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
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
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>

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
          ))}
        </div>
      </div>
    </section>
  )
}