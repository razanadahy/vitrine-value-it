"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export default function PricingHero() {
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
            💰 Tarifs transparents
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Des prix</span>{" "}
            <span className="text-gradient">justes</span>{" "}
            <span className="text-gray-900">pour tous</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choisissez le plan qui correspond à vos besoins. Tous nos plans incluent 
            un essai gratuit de 14 jours, sans engagement ni frais cachés.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-600 mr-2" />
              <span>14 jours d'essai gratuit</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-600 mr-2" />
              <span>Aucun engagement</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-600 mr-2" />
              <span>Annulation à tout moment</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}