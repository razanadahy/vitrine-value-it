"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Globe, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useDemandeDevis } from "@/contexts/DemandeDevisContext"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Responsable E-commerce",
    company: "TechMart",
    quote: "Augmentation des marges de 15% en seulement 3 mois",
    avatar: "SC",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Gestionnaire de Prix",
    company: "GlobalRetail",
    quote: "Le ROI était visible dès la première semaine",
    avatar: "MR",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "PDG",
    company: "FashionForward",
    quote: "Support exceptionnel et plateforme évolutive",
    avatar: "EW",
    rating: 5
  }
]

const guarantees = [
  { icon: <CheckCircle className="w-5 h-5" />, text: "Essai gratuit de 30 jours" },
  { icon: <CheckCircle className="w-5 h-5" />, text: "Aucun frais d'installation" },
  { icon: <CheckCircle className="w-5 h-5" />, text: "Annulation à tout moment" },
  { icon: <CheckCircle className="w-5 h-5" />, text: "Intégration avec expert" }
]

const socialProof = [
  { icon: <Users className="w-6 h-6" />, value: "200+", label: "Clients actifs" },
  { icon: <Globe className="w-6 h-6" />, value: "15+", label: "Pays" },
  { icon: <TrendingUp className="w-6 h-6" />, value: "10M+", label: "Prix par jour" },
  { icon: <Zap className="w-6 h-6" />, value: "99.9%", label: "Disponibilité" }
]

interface TestimonialCardProps {
  testimonial: typeof testimonials[0]
  index: number
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center space-x-1 mb-3">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 font-medium mb-4 italic">"{testimonial.quote}"</p>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {testimonial.avatar}
            </div>
            <div>
              <div className="font-semibold text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function PowerfulCTASection() {
  const { openModal } = useDemandeDevis()

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/15 to-teal-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-6 bg-green-100 text-green-700 px-4 py-2 text-sm font-medium">
            Prêt à Commencer ?
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transformez votre stratégie de prix{" "}
            <span className="text-gradient">dès aujourd'hui</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Rejoignez plus de 200 entreprises qui utilisent déjà Value-IT pour optimiser leurs prix et garder une longueur d'avance.
            Commencez votre essai gratuit et voyez les résultats en quelques heures.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-gradient-brand hover:bg-gradient-brand-dark group text-lg px-8 py-4" onClick={openModal}>
                Commencer l'Essai Gratuit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <Link href="/demo">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="group text-lg px-8 py-4 border-2 hover:bg-gray-50">
                  <Play className="mr-2 w-5 h-5" />
                  Voir la Démo
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-600"
          >
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <div className="text-green-500">{guarantee.icon}</div>
                <span className="font-medium">{guarantee.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Social Proof Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {socialProof.map((proof, index) => (
            <motion.div
              key={proof.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.6 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {proof.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{proof.value}</div>
              <div className="text-gray-600 font-medium">{proof.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Fait confiance par les leaders de l'industrie
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que nos clients disent de leur succès avec Value-IT
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-8 lg:p-16 text-white text-center relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="space-y-6"
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ne laissez pas vos concurrents prendre de l'avance
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-8">
                Commencez à surveiller les prix de vos concurrents aujourd'hui et débloquez des stratégies de prix qui stimulent la croissance.
                Votre essai gratuit de 30 jours n'est qu'à un clic.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 font-semibold text-lg px-12 py-4 shadow-xl" onClick={openModal}>
                  Commencer Gratuitement
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              <div className="text-blue-200 text-sm font-medium pt-4">
                Aucune carte de crédit requise • Configuration en 5 minutes • Annulation à tout moment
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}