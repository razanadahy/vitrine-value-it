"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, TrendingUp, Globe, BarChart3, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import MetricsCounter from "@/components/interactive/MetricsCounter"
// import { COMPANY_INFO } from "@/lib/constants"
import Link from "next/link"
import { useDemandeDevis } from "@/contexts/DemandeDevisContext"

export default function HeroSection() {
  const { openModal } = useDemandeDevis()

  const metrics = [
    {
      title: "Prix Analysés par Jour",
      value: 10000000,
      suffix: "+",
      description: "Surveillance des prix en temps réel",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Disponibilité Garantie",
      value: 99.9,
      suffix: "%",
      description: "Toujours disponible",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Années d'Expérience",
      value: 6,
      suffix: "+",
      description: "Expertise dans le domaine",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Clients Satisfaits",
      value: 200,
      suffix: "+",
      description: "Confiance des entreprises",
      icon: <Users className="w-5 h-5" />
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                🚀 Confiance de plus de 200 entreprises dans le monde
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Intelligence Tarifaire</span>{" "}
                <span className="text-gray-900">Compétitive</span>{" "}
                <span className="text-gray-900">Simplifiée</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Surveillez vos concurrents, optimisez vos stratégies de prix et augmentez vos marges avec notre
                plateforme propulsée par l'IA. Analyse de <strong>plus de 10M de prix par jour</strong> dans plus de 15 pays.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-gradient-brand hover:bg-gradient-brand-dark group" onClick={openModal}>
                Commencer l'Essai Gratuit
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="group">
                  <Play className="mr-2 w-4 h-4" />
                  Voir la Démo
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Certifié SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Conforme RGPD</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Prêt pour l'Entreprise</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual/Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl">
              {/* Simulated Dashboard */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Tableau de Bord Intelligence Tarifaire</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                </div>
                
                {/* Mock Chart */}
                <div className="h-32 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-end justify-around p-4">
                  {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                      className="bg-gradient-brand w-8 rounded-t-md"
                    />
                  ))}
                </div>

                {/* Mock Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Baisse Moy. des Prix</div>
                    <div className="text-xl font-bold text-green-600">-12.3%</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">SKUs Surveillés</div>
                    <div className="text-xl font-bold text-blue-600">2,847</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium">Données en Direct</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border"
              >
                <div className="text-xs text-gray-600">
                  <div className="font-medium">Alerte Prix</div>
                  <div className="text-green-600">Concurrent a baissé de 15%</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}