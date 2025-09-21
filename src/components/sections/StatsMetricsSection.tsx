"use client"

import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Globe, Users, Database, Clock, Shield, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedNumber from "@/components/ui/animated-number"

const stats = [
  {
    title: "Prix Analysés par Jour",
    value: 10000000,
    suffix: "+",
    description: "Intelligence de marché en temps réel",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Clients Actifs",
    value: 200,
    suffix: "+",
    description: "Entreprises dans le monde",
    icon: <Users className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Années d'Expérience",
    value: 6,
    suffix: "+",
    description: "Expertise dans le domaine",
    icon: <Globe className="w-6 h-6" />,
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Disponibilité Garantie",
    value: 99.9,
    suffix: "%",
    description: "Toujours disponible",
    icon: <Shield className="w-6 h-6" />,
    color: "from-orange-500 to-red-500"
  }
]

const additionalStats = [
  {
    label: "Points de Données Traités",
    value: "1B+",
    description: "Données historiques de prix",
    icon: <Database className="w-5 h-5" />
  },
  {
    label: "Temps de Réponse Moyen",
    value: "< 200ms",
    description: "API ultra-rapide",
    icon: <Zap className="w-5 h-5" />
  },
  {
    label: "Mises à Jour",
    value: "24/7",
    description: "Surveillance continue",
    icon: <Clock className="w-5 h-5" />
  },
  {
    label: "Appels API/Mois",
    value: "50M+",
    description: "Infrastructure haute performance",
    icon: <BarChart3 className="w-5 h-5" />
  }
]

interface StatCardProps {
  stat: typeof stats[0]
  index: number
}

function StatCard({ stat, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <Card className="relative overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
        <CardContent className="p-8 text-center relative h-full flex flex-col justify-between">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`}
          >
            {stat.icon}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            className="flex-1 flex flex-col justify-center space-y-4"
          >
            <AnimatedNumber
              value={stat.value}
              suffix={stat.suffix}
              className="text-4xl lg:text-5xl font-bold text-gray-900"
            />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 leading-tight">{stat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function StatsMetricsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
            Confiance Mondiale
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Propulsons <span className="text-gradient">l'intelligence tarifaire</span> globalement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des startups aux géants de l'entreprise, les entreprises du monde entier font confiance à Value-IT pour fournir
            des informations concurrentielles en temps réel qui permettent des décisions de prix plus intelligentes.
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <StatCard key={stat.title} stat={stat} index={index} />
          ))}
        </div>

        {/* Additional Stats Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/70 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Conçu pour l'échelle et la performance
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre infrastructure est conçue pour gérer des volumes de données massifs tout en maintenant
              une vitesse et une fiabilité exceptionnelles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 transition-all duration-300 group hover:shadow-lg"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600 mb-4 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Trust Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12 pt-8 border-t border-gray-200"
          >
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Fait confiance par des entreprises du monde entier
            </h4>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Notre plateforme traite des millions de points de données quotidiennement pour vous donner l'avantage concurrentiel dont vous avez besoin
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <span className="font-medium">Rejoignez plus de 200 entreprises qui en bénéficient déjà</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}