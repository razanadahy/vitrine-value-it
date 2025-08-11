"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, BarChart3, TrendingDown, Bell, Target } from "lucide-react"

export default function DemoPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700">
            👀 Aperçu de la démo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Voici ce que vous découvrirez
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un aperçu des fonctionnalités que nous vous présenterons lors de votre 
            démonstration personnalisée de Value-IT.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Demo Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-6"
                  >
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto cursor-pointer backdrop-blur-sm border border-white/30">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Démo Interactive Value-IT</h3>
                  <p className="text-blue-100 text-sm">
                    3 minutes pour comprendre comment ça marche
                  </p>
                </div>
              </div>

              {/* Overlay UI elements */}
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="flex items-center justify-between text-white text-xs">
                    <span>Dashboard Value-IT</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Live</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded p-2 border border-white/20">
                    <div className="text-green-400 text-xs font-medium">-15.2%</div>
                    <div className="text-white text-xs">Concurrent A</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded p-2 border border-white/20">
                    <div className="text-red-400 text-xs font-medium">+8.1%</div>
                    <div className="text-white text-xs">Concurrent B</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded p-2 border border-white/20">
                    <div className="text-blue-400 text-xs font-medium">2,847</div>
                    <div className="text-white text-xs">SKUs suivis</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-6">
              <Button className="bg-gradient-brand hover:bg-gradient-brand-dark">
                <Play className="w-4 h-4 mr-2" />
                Voir la démo complète
              </Button>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-200">
                      <BarChart3 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Dashboard Temps Réel
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Visualisez tous vos prix et ceux de vos concurrents dans une interface 
                        intuitive mise à jour en permanence.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center border border-green-200">
                      <TrendingDown className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Analyse Concurrentielle
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Identifiez instantanément les mouvements de prix de vos concurrents 
                        et leurs stratégies promotionnelles.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center border border-orange-200">
                      <Bell className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Alertes Intelligentes
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Recevez des notifications instantanées quand vos seuils de prix 
                        sont atteints ou dépassés.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center border border-purple-200">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Optimisation Pricing
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Recommandations IA pour optimiser vos prix et maximiser vos marges 
                        tout en restant compétitif.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-4">
                Résultats clients moyens après 3 mois :
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">+12%</div>
                  <div className="text-xs text-gray-600">Marge brute</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">-25%</div>
                  <div className="text-xs text-gray-600">Temps d'analyse</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">98%</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}