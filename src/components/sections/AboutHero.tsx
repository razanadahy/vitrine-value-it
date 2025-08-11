"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Calendar, TrendingUp } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              🌍 Une vision globale
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">L'histoire de</span>{" "}
                <span className="text-gradient">Value-IT</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Depuis 2018, nous démocratisons l'accès à l'intelligence concurrentielle 
                grâce à notre expertise technique et notre présence internationale. 
                De Madagascar à la France, notre équipe multiculturelle révolutionne 
                la veille pricing.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2018</div>
                    <div className="text-sm text-gray-600">Année de création</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Collaborateurs</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4</div>
                    <div className="text-sm text-gray-600">Pays d'implantation</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">200+</div>
                    <div className="text-sm text-gray-600">Clients satisfaits</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* World Map Representation */}
            <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Notre Présence Mondiale
                </h3>
                <p className="text-gray-600 text-sm">
                  4 bureaux, 3 continents, 1 vision
                </p>
              </div>
              
              {/* Simplified world representation */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-medium">Madagascar</span>
                  </div>
                  <span className="text-sm text-gray-600">Siège social</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">France</span>
                  </div>
                  <span className="text-sm text-gray-600">Bureau Europe</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Inde</span>
                  </div>
                  <span className="text-sm text-gray-600">Centre R&D</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="font-medium">Mexique</span>
                  </div>
                  <span className="text-sm text-gray-600">Hub Amériques</span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-gradient-brand text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
              >
                24/7
              </motion.div>
              
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-lg border"
              >
                🌍 Global
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}