"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, CheckCircle, Calendar } from "lucide-react"

export default function DemoHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-40" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700">
            🎯 Démo personnalisée
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Découvrez</span>{" "}
            <span className="text-gradient">Value-IT</span>{" "}
            <span className="text-gray-900">en action</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Planifiez une démonstration de 30 minutes avec nos experts et découvrez 
            comment Value-IT peut révolutionner votre stratégie pricing.
          </p>

          {/* Demo benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">30 minutes</div>
              <div className="text-sm text-gray-600">Demo personnalisée</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Expert dédié</div>
              <div className="text-sm text-gray-600">Accompagnement sur-mesure</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200">
              <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Sans engagement</div>
              <div className="text-sm text-gray-600">Gratuit et personnalisé</div>
            </div>
          </div>

          {/* What you'll see */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 max-w-2xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-4">Ce que vous découvrirez :</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Dashboard temps réel</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Alertes intelligentes</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Analyse concurrentielle</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Calcul ROI personnalisé</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Intégrations possibles</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Plan de déploiement</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}