"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Monitoring temps réel",
    ecommerce: true,
    retail: true,
    api: true,
    custom: true
  },
  {
    feature: "Alertes automatisées",
    ecommerce: true,
    retail: true,
    api: true,
    custom: true
  },
  {
    feature: "Dashboard intuitif",
    ecommerce: true,
    retail: true,
    api: false,
    custom: true
  },
  {
    feature: "Intégration marketplace",
    ecommerce: true,
    retail: false,
    api: true,
    custom: true
  },
  {
    feature: "Géolocalisation magasins",
    ecommerce: false,
    retail: true,
    api: false,
    custom: true
  },
  {
    feature: "API REST complète",
    ecommerce: true,
    retail: false,
    api: true,
    custom: true
  },
  {
    feature: "Support 24/7",
    ecommerce: false,
    retail: false,
    api: false,
    custom: true
  },
  {
    feature: "Formation équipe",
    ecommerce: false,
    retail: true,
    api: false,
    custom: true
  },
  {
    feature: "SLA personnalisé",
    ecommerce: false,
    retail: false,
    api: true,
    custom: true
  }
]

const solutions = [
  { id: "ecommerce", name: "E-commerce", color: "blue", popular: true },
  { id: "retail", name: "Retail", color: "green", popular: false },
  { id: "api", name: "API", color: "purple", popular: false },
  { id: "custom", name: "Custom", color: "orange", popular: false }
]

export default function SolutionsComparison() {
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
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
            Comparaison
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trouvez la solution qui vous correspond
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comparez les fonctionnalités de nos 4 solutions pour identifier 
            celle qui répond le mieux à vos besoins spécifiques.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
        >
          {/* Header */}
          <div className="grid grid-cols-5 gap-4 p-6 bg-gray-50 border-b border-gray-200">
            <div className="font-semibold text-gray-900">
              Fonctionnalités
            </div>
            {solutions.map((solution) => (
              <div key={solution.id} className="text-center relative">
                {solution.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-brand text-white text-xs">
                    Populaire
                  </Badge>
                )}
                <div className="font-semibold text-gray-900 mt-2">
                  {solution.name}
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-gray-200">
            {comparisonData.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-gray-900 flex items-center">
                  {row.feature}
                </div>
                
                <div className="flex justify-center items-center">
                  {row.ecommerce ? (
                    <Check className="w-5 h-5 text-blue-600" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300" />
                  )}
                </div>
                
                <div className="flex justify-center items-center">
                  {row.retail ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300" />
                  )}
                </div>
                
                <div className="flex justify-center items-center">
                  {row.api ? (
                    <Check className="w-5 h-5 text-purple-600" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300" />
                  )}
                </div>
                
                <div className="flex justify-center items-center">
                  {row.custom ? (
                    <Check className="w-5 h-5 text-orange-600" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-600">
            <Check className="inline w-4 h-4 text-green-600 mr-1" />
            Inclus dans la solution
            <span className="mx-4">•</span>
            <X className="inline w-4 h-4 text-gray-300 mr-1" />
            Non disponible
          </p>
        </motion.div>
      </div>
    </section>
  )
}