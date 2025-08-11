"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageCircle, FileText } from "lucide-react"
import Link from "next/link"

export default function SolutionsCTA() {
  return (
    <section className="py-20 bg-gradient-brand relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-noise opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à optimiser votre stratégie pricing ?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Rejoignez plus de 200 entreprises qui font déjà confiance à Value-IT 
              pour surveiller leurs concurrents et optimiser leurs prix.
            </p>
          </motion.div>

          {/* CTA Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {/* Demo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Calendar className="w-10 h-10 text-white mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Demander une démo</h3>
              <p className="text-blue-100 text-sm mb-4">
                Découvrez Value-IT en 30 minutes avec un expert
              </p>
              <Link href="/demo">
                <Button variant="secondary" size="sm" className="w-full">
                  Planifier une démo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Trial */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/40 transform scale-105">
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold">✨</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Essai gratuit 14 jours</h3>
              <p className="text-blue-100 text-sm mb-4">
                Testez toutes les fonctionnalités sans engagement
              </p>
              <Link href="/pricing">
                <Button variant="secondary" size="sm" className="w-full bg-white text-blue-600 hover:bg-gray-50">
                  Commencer l'essai
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <MessageCircle className="w-10 h-10 text-white mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Parler à un expert</h3>
              <p className="text-blue-100 text-sm mb-4">
                Discutez de vos besoins avec notre équipe
              </p>
              <Link href="/demo">
                <Button variant="outline" size="sm" className="w-full border-white text-white hover:bg-white hover:text-blue-600">
                  Nous contacter
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100 text-sm"
          >
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              <span>Aucun engagement</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-300 rounded-full mr-2" />
              <span>Configuration en 24h</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-300 rounded-full mr-2" />
              <span>Support français</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}