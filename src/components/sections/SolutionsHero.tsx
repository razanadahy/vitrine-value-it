"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart, Store, Code, Settings } from "lucide-react"
import Link from "next/link"

export default function SolutionsHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700">
              🎯 Solutions sur-mesure
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900">Des solutions</span>{" "}
              <span className="text-gradient">adaptées</span>{" "}
              <span className="text-gray-900">à votre secteur</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Que vous soyez un pure player e-commerce, un retailer traditionnel ou un développeur, 
              Value-IT s'adapte à vos besoins spécifiques avec des solutions pensées pour votre industrie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button size="lg" className="bg-gradient-brand hover:bg-gradient-brand-dark">
                  Découvrir nos solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline">
                  Voir les tarifs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Solutions Preview Icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: ShoppingCart, label: "E-commerce", color: "text-blue-600" },
            { icon: Store, label: "Retail", color: "text-green-600" },
            { icon: Code, label: "API", color: "text-purple-600" },
            { icon: Settings, label: "Custom", color: "text-orange-600" }
          ].map((solution, index) => (
            <motion.div
              key={solution.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
            >
              <solution.icon className={`w-12 h-12 ${solution.color} mb-3`} />
              <span className="font-semibold text-gray-900">{solution.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}