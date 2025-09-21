"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Zap, 
  Target, 
  Shield, 
  BarChart3, 
  Globe, 
  Clock,
  ArrowRight
} from "lucide-react"

export default function FeaturesHero() {
  const highlights = [
    { icon: Zap, label: "10M+ prix analysés/jour", color: "text-yellow-600" },
    { icon: Target, label: "99.9% précision", color: "text-green-600" },
    { icon: Clock, label: "Temps réel", color: "text-blue-600" },
    { icon: Globe, label: "150+ pays", color: "text-purple-600" }
  ]

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700">
              🚀 Plateforme complète
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Toute la puissance de{" "}
              <span className="text-orange-500 font-bold">
                Value-IT
              </span>
              {" "}en détail
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez comment notre plateforme de competitive intelligence révolutionne 
              votre stratégie pricing avec des fonctionnalités avancées et une technologie 
              de pointe développée à Madagascar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-brand hover:bg-gradient-brand-dark"
              >
                Commencer l'essai gratuit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                <BarChart3 className="mr-2 w-4 h-4" />
                Voir les cas d'usage
              </Button>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-center space-x-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20"
                >
                  <highlight.icon className={`w-5 h-5 ${highlight.color}`} />
                  <span className="text-sm font-medium text-gray-700">{highlight.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard Mockup */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dashboard Value-IT</h3>
                    <p className="text-xs text-gray-500">Surveillance en temps réel</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700 border-0">En ligne</Badge>
              </div>

              {/* Metrics Cards */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">10.2M</div>
                  <div className="text-xs text-gray-600">Prix analysés</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-xs text-gray-600">Précision</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-xs text-gray-600">Surveillance</div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="h-32 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg flex items-end justify-between p-4">
                {[40, 65, 45, 80, 55, 75, 60, 85, 70, 90].map((height, i) => (
                  <div 
                    key={i}
                    className="bg-gradient-brand rounded-t w-6 opacity-80"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                Mise à jour en cours...
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                +127 alertes aujourd'hui
              </div>
            </div>

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Target className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}