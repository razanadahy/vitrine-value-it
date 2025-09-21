"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ShoppingCart,
  Store,
  Code,
  Settings,
  ArrowRight,
  Check
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const targetAudiences = [
  {
    id: "ecommerce",
    title: "E-commerce Intelligence",
    subtitle: "Pour les pure players digitaux",
    description: "Surveillez vos concurrents sur toutes les marketplaces et optimisez votre stratégie pricing en temps réel.",
    icon: ShoppingCart,
    features: [
      "Monitoring Amazon, eBay, Fnac, Cdiscount",
      "Alertes prix en temps réel",
      "Analyse des promotions concurrentes",
      "Dashboard e-commerce dédié"
    ],
    metrics: {
      marketplaces: "15+",
      products: "100K+",
      updates: "24h/24"
    }
  },
  {
    id: "retail",
    title: "Retail Pricing",
    subtitle: "Pour les enseignes physiques",
    description: "Adaptez vos prix magasins à la concurrence locale et online pour maximiser vos marges.",
    icon: Store,
    features: [
      "Veille concurrence locale et web",
      "Gestion multi-magasins",
      "Synchronisation prix online/offline",
      "Rapports par zone de chalandise"
    ],
    metrics: {
      stores: "500+",
      zones: "50+",
      precision: "100m GPS"
    }
  },
  {
    id: "api",
    title: "API & Intégration",
    subtitle: "Pour les développeurs",
    description: "Intégrez directement nos données de pricing dans vos systèmes avec notre API REST.",
    icon: Code,
    features: [
      "API REST documentée",
      "Webhooks en temps réel",
      "SDKs Python, Node.js, PHP",
      "SLA 99.9% garanti"
    ],
    metrics: {
      requests: "1000+/min",
      latency: "<50ms",
      uptime: "99.9%"
    }
  },
  {
    id: "custom",
    title: "Solutions Sur-Mesure",
    subtitle: "Pour les besoins spécifiques",
    description: "Développement de solutions personnalisées pour vos cas d'usage particuliers.",
    icon: Settings,
    features: [
      "Analyse de vos besoins",
      "Développement sur-mesure",
      "Intégrations ERP/CRM/PIM",
      "Support 24/7 prioritaire"
    ],
    metrics: {
      projects: "50+",
      satisfaction: "98%",
      delivery: "4 sem"
    }
  }
]

export default function TargetAudience() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-gradient-brand text-white">
            Pour qui ?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Value-IT s'adapte à vos besoins
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Que vous soyez e-commerçant, retailer ou développeur, notre plateforme
            offre des solutions adaptées à chaque métier
          </p>
        </motion.div>

        {/* Alternating Cards */}
        <div className="space-y-20">
          {targetAudiences.map((audience, index) => (
            <motion.div
              key={audience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Section */}
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                    <audience.icon className="w-32 h-32 text-blue-500 opacity-20" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <audience.icon className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{audience.title}</h3>
                      <p className="text-gray-600">{audience.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 w-full">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {audience.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {audience.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {audience.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
                    {Object.entries(audience.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {value}
                        </div>
                        <div className="text-xs text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href="/demo">
                    <Button className="bg-gradient-brand hover:bg-gradient-brand-dark text-white">
                      Découvrir la solution
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 p-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Vous ne trouvez pas votre cas d'usage ?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nos experts sont là pour analyser vos besoins spécifiques et vous proposer
            une solution adaptée à votre métier
          </p>
          <Link href="/demo">
            <Button size="lg" className="bg-gradient-brand hover:bg-gradient-brand-dark text-white">
              Parler à un expert
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}