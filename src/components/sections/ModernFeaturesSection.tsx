"use client"

import { motion } from "framer-motion"
import {
  Zap,
  Shield,
  Globe,
  BarChart3,
  Clock,
  Target,
  TrendingUp,
  Database,
  Settings,
  Users
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useDemandeDevis } from "@/contexts/DemandeDevisContext"

const features = [
  {
    title: "Intelligence Tarifaire en Temps Réel",
    description: "Surveillez les prix des concurrents sur tous les canaux avec une précision à la milliseconde. Recevez des alertes instantanées lors de changements.",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    size: "large",
    benefits: ["Suivi des prix en direct", "Notifications instantanées", "Couverture multi-canal"]
  },
  {
    title: "Analyses Propulsées par l'IA",
    description: "Des algorithmes d'apprentissage automatique avancés analysent les modèles de prix et les tendances du marché.",
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    size: "medium",
    benefits: ["Analyses prédictives", "Prévisions de marché", "Identification des tendances"]
  },
  {
    title: "Couverture Marché Globale",
    description: "Surveillez les prix dans plus de 15 pays avec une expertise locale et la conversion de devises.",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-green-500 to-teal-500",
    bgGradient: "from-green-50 to-teal-50",
    size: "medium",
    benefits: ["15+ pays", "Expertise locale", "Multi-devises"]
  },
  {
    title: "Sécurité Entreprise",
    description: "Conformité SOC 2 Type II avec chiffrement de bout en bout et sécurité de niveau entreprise.",
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    size: "small",
    benefits: ["Certifié SOC 2", "Chiffrement bout-en-bout", "Conforme RGPD"]
  },
  {
    title: "API Ultra Rapide",
    description: "API haute performance avec temps de réponse <200ms et garantie de disponibilité de 99,9%.",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50",
    size: "small",
    benefits: ["Réponse <200ms", "Disponibilité 99,9%", "Infrastructure scalable"]
  }
]

interface FeatureCardProps {
  feature: typeof features[0]
  index: number
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const sizeClasses = {
    small: "md:col-span-1 md:row-span-1",
    medium: "md:col-span-1 md:row-span-1 lg:col-span-1",
    large: "md:col-span-2 md:row-span-2 lg:col-span-2"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 80
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className={`${sizeClasses[feature.size]} group`}
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm overflow-hidden relative">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />

        {/* Floating decorative elements */}
        <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

        <CardContent className={`relative h-full p-6 ${feature.size === 'large' ? 'lg:p-10' : 'lg:p-8'} flex flex-col`}>
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`inline-flex p-3 ${feature.size === 'large' ? 'p-4' : 'p-3'} rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 w-fit`}
          >
            {feature.icon}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            className="flex-grow space-y-4"
          >
            <h3 className={`font-bold text-gray-900 ${feature.size === 'large' ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`}>
              {feature.title}
            </h3>
            <p className={`text-gray-600 leading-relaxed ${feature.size === 'large' ? 'text-lg' : 'text-base'}`}>
              {feature.description}
            </p>

            {/* Benefits list */}
            <div className="space-y-2">
              {feature.benefits.map((benefit, benefitIndex) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 + benefitIndex * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} flex-shrink-0 mt-1.5`}></div>
                  <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </CardContent>
      </Card>
    </motion.div>
  )
}

const additionalFeatures = [
  { icon: <Database className="w-5 h-5" />, title: "10M+ prix analysés par jour", description: "Capacité de traitement massive" },
  { icon: <Clock className="w-5 h-5" />, title: "Surveillance 24/7", description: "Surveillance continue des prix" },
  { icon: <Target className="w-5 h-5" />, title: "Ciblage intelligent", description: "Identification des concurrents par IA" },
  { icon: <Settings className="w-5 h-5" />, title: "Intégration facile", description: "Connectivité API transparente" },
  { icon: <Users className="w-5 h-5" />, title: "Support expert", description: "Équipe dédiée au succès client" }
]

export default function ModernFeaturesSection() {
  const { openModal } = useDemandeDevis()

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 text-sm font-medium border-0">
            Fonctionnalités
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Tout ce dont vous avez besoin pour un <span className="text-gradient">avantage concurrentiel</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des fonctionnalités puissantes conçues pour vous donner une visibilité complète sur votre paysage concurrentiel
            et les insights nécessaires pour optimiser votre stratégie de prix.
          </p>
        </motion.div>

        {/* Features Bento Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Additional Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50 shadow-xl"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Et bien plus pour accélérer votre succès
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des fonctionnalités et capacités supplémentaires qui font de Value-IT la solution complète
              pour l'intelligence tarifaire concurrentielle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600 mb-4 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">{feature.title}</h4>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={openModal}
          >
            Explorer Toutes les Fonctionnalités
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block ml-2"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}