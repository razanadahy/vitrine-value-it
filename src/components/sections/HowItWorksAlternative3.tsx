"use client"

import { motion } from "framer-motion"
import { Search, Settings, BarChart3, Target, ArrowDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    number: 1,
    title: "Connexion & Configuration",
    description: "Intégrez facilement vos produits et sources de données concurrentes.",
    icon: <Settings className="w-8 h-8" />,
    features: ["Intégration en un clic", "Détection auto des concurrents", "Règles de prix personnalisées"],
    color: "blue"
  },
  {
    number: 2,
    title: "Surveillance & Analyse",
    description: "Surveillance des prix en temps réel sur tous les canaux avec analyse intelligente.",
    icon: <Search className="w-8 h-8" />,
    features: ["Surveillance 24/7", "Alertes intelligentes", "Suivi multi-canal"],
    color: "purple"
  },
  {
    number: 3,
    title: "Insights & Rapports",
    description: "Transformez les données brutes en insights actionnables avec des analyses avancées.",
    icon: <BarChart3 className="w-8 h-8" />,
    features: ["Analyses avancées", "Tableaux de bord personnalisés", "Capacités d'export"],
    color: "green"
  },
  {
    number: 4,
    title: "Optimisation & Croissance",
    description: "Implémentez des stratégies de prix basées sur les données.",
    icon: <Target className="w-8 h-8" />,
    features: ["Optimisation des prix", "Suivi du ROI", "Recommandations stratégiques"],
    color: "orange"
  }
]

const colorMap = {
  blue: {
    bg: "bg-blue-500",
    light: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    gradient: "from-blue-500 to-cyan-500"
  },
  purple: {
    bg: "bg-purple-500",
    light: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-200",
    gradient: "from-purple-500 to-pink-500"
  },
  green: {
    bg: "bg-green-500",
    light: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
    gradient: "from-green-500 to-teal-500"
  },
  orange: {
    bg: "bg-orange-500",
    light: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-200",
    gradient: "from-orange-500 to-red-500"
  }
}

// Design 3: Zigzag layout avec flow moderne
export default function HowItWorksAlternative3() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Flow <span className="text-gradient">Moderne</span>
          </h2>
        </motion.div>

        {/* Steps in zigzag pattern */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const colors = colorMap[step.color as keyof typeof colorMap]
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center gap-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Visual side */}
                <div className="flex-1 relative">
                  <div className={`${colors.light} rounded-3xl p-12 ${colors.border} border-2 relative overflow-hidden`}>
                    {/* Background decoration */}
                    <div className={`absolute -top-4 -right-4 w-24 h-24 ${colors.bg} rounded-full opacity-10`}></div>
                    <div className={`absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r ${colors.gradient} rounded-full opacity-10`}></div>

                    {/* Step number (large) */}
                    <div className={`text-8xl font-bold ${colors.text} opacity-20 text-center`}>
                      {step.number.toString().padStart(2, '0')}
                    </div>

                    {/* Icon centered */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`${colors.bg} rounded-2xl p-6 shadow-xl`}>
                        <div className="text-white">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="space-y-6"
                  >
                    <div className={`inline-flex items-center space-x-3 ${colors.light} px-4 py-2 rounded-full`}>
                      <div className={`w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                        {step.number}
                      </div>
                      <span className={`font-semibold ${colors.text}`}>Étape {step.number}</span>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>

                    {/* Features with styled bullets */}
                    <div className="space-y-3 pt-4">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + 0.5 + featureIndex * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className={`w-3 h-3 ${colors.bg} rounded-full flex-shrink-0`}></div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Connector arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-16 z-10"
                  >
                    <div className="bg-white rounded-full p-3 shadow-lg border-2 border-gray-200">
                      <ArrowDown className="w-6 h-6 text-gray-400" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}