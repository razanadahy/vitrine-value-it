"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CaseStudies from "@/components/interactive/CaseStudies"
import { FileText, TrendingUp, Users, Target } from "lucide-react"

export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-700">
            📊 Études de Cas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Découvrez leurs <span className="text-gradient">success stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plongez dans les détails des transformations réussies de nos clients. 
            Métriques réelles, défis surmontés, ROI mesurable.
          </p>
        </motion.div>

        {/* Success Metrics Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
            <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-green-600 mb-1">+23%</div>
            <div className="text-sm text-gray-600">Marge moyenne</div>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
            <Target className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-600 mb-1">-85%</div>
            <div className="text-sm text-gray-600">Temps d'analyse</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
            <Users className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-purple-600 mb-1">200+</div>
            <div className="text-sm text-gray-600">Clients satisfaits</div>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-100">
            <FileText className="w-10 h-10 text-orange-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-orange-600 mb-1">50+</div>
            <div className="text-sm text-gray-600">Études détaillées</div>
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CaseStudies />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Votre success story commence ici
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Rejoignez ces entreprises qui ont transformé leur stratégie pricing 
              et obtenu des résultats mesurables avec Value-IT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-brand hover:bg-gradient-brand-dark">
                Planifier ma transformation
              </Button>
              <Button variant="outline">
                Télécharger toutes les études
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}