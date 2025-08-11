"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import ROICalculator from "@/components/interactive/ROICalculator"

export default function ROICalculatorSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
            🧮 Calculateur ROI
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Calculez votre retour sur investissement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez combien Value-IT peut vous faire économiser en optimisant 
            votre stratégie pricing grâce à la veille concurrentielle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ROICalculator />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Méthodologie de calcul
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <div className="font-medium text-gray-900 mb-2">1. Analyse concurrentielle</div>
                <p>Identification des écarts de prix avec vos concurrents directs</p>
              </div>
              <div>
                <div className="font-medium text-gray-900 mb-2">2. Optimisation pricing</div>
                <p>Calcul du potentiel d'amélioration de vos marges</p>
              </div>
              <div>
                <div className="font-medium text-gray-900 mb-2">3. ROI Value-IT</div>
                <p>Déduction du coût de la solution pour obtenir le gain net</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              * Estimations basées sur les performances moyennes de nos clients sur 12 mois. 
              Les résultats peuvent varier selon votre secteur d'activité et votre positionnement concurrentiel.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}