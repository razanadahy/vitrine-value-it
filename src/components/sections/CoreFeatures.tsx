"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Search, 
  Bell, 
  BarChart3, 
  Target, 
  Zap, 
  RefreshCw,
  TrendingUp,
  AlertTriangle,
  Globe,
  CheckCircle
} from "lucide-react"

export default function CoreFeatures() {
  const coreFeatures = [
    {
      icon: Search,
      title: "Surveillance de Prix Avancée",
      description: "Surveillez automatiquement les prix de vos concurrents sur des milliers de produits en temps réel.",
      highlights: [
        "10M+ prix analysés quotidiennement",
        "150+ sources e-commerce",
        "Reconnaissance automatique de produits",
        "Historique complet des prix"
      ],
      badge: "Coeur de plateforme",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bell,
      title: "Alertes Intelligentes",
      description: "Recevez des notifications instantanées dès qu'un concurrent modifie ses prix ou lance une promotion.",
      highlights: [
        "Alertes en temps réel",
        "Seuils personnalisables",
        "Notifications multi-canaux",
        "Analyse d'impact automatique"
      ],
      badge: "Temps réel",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Tableaux de bord avancés et rapports détaillés pour analyser les tendances du marché.",
      highlights: [
        "Dashboards personnalisables",
        "Rapports automatisés",
        "Analyse de tendances",
        "Export vers Excel/PDF"
      ],
      badge: "Business Intelligence",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Optimisation Pricing",
      description: "Recommandations automatiques de prix basées sur l'intelligence artificielle et l'analyse marché.",
      highlights: [
        "IA prédictive avancée",
        "Recommandations personnalisées",
        "Simulation d'impact",
        "Optimisation de marge"
      ],
      badge: "IA Powered",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Automatisation Complète",
      description: "Automatisez vos processus de veille concurrentielle et de mise à jour des prix.",
      highlights: [
        "Workflows automatisés",
        "Intégrations API",
        "Synchronisation ERP",
        "Actions conditionnelles"
      ],
      badge: "Automation",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: RefreshCw,
      title: "Synchronisation Multi-Canal",
      description: "Gérez vos prix sur tous vos canaux de vente depuis une interface unique.",
      highlights: [
        "Marketplaces (Amazon, eBay...)",
        "Site e-commerce",
        "Points de vente physiques",
        "Catalogues distributeurs"
      ],
      badge: "Omni-canal",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
            🛠️ Fonctionnalités principales
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Une suite complète d'outils
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Value-IT combine toutes les fonctionnalités nécessaires pour dominer 
            votre marché grâce à une stratégie pricing data-driven.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                      {feature.badge}
                    </Badge>
                  </div>

                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Highlights List */}
                  <div className="space-y-3 mb-6">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-gray-50 transition-colors"
                  >
                    En savoir plus
                    <TrendingUp className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Disponible dans 150+ pays
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à transformer votre stratégie pricing ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Rejoignez des milliers d'entreprises qui font confiance à Value-IT 
              pour optimiser leur pricing et augmenter leurs marges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-brand hover:bg-gradient-brand-dark"
              >
                Démarrer l'essai gratuit
                <Zap className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                <AlertTriangle className="mr-2 w-4 h-4" />
                Demander une démo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}