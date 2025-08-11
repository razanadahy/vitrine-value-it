"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ShoppingCart, 
  Store, 
  Code, 
  Settings, 
  TrendingUp, 
  Clock, 
  Shield,
  Users,
  ArrowRight,
  Check
} from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    id: "ecommerce",
    title: "E-commerce Intelligence",
    subtitle: "Pour les pure players digitaux",
    description: "Surveillez vos concurrents sur toutes les marketplaces et optimisez votre stratégie pricing en temps réel.",
    icon: ShoppingCart,
    color: "blue",
    features: [
      "Monitoring Amazon, eBay, Fnac, Cdiscount",
      "Alertes prix en temps réel",
      "Analyse des promotions concurrentes", 
      "Optimisation automatique des prix",
      "Dashboard e-commerce dédié",
      "Intégration API avec votre CMS"
    ],
    metrics: [
      { label: "Marketplaces", value: "15+" },
      { label: "Produits suivis", value: "100K+" },
      { label: "MAJ par jour", value: "24h/24" }
    ],
    cta: "Essayer gratuitement",
    popular: true
  },
  {
    id: "retail",
    title: "Retail Pricing",
    subtitle: "Pour les enseignes physiques",
    description: "Adaptez vos prix magasins à la concurrence locale et online pour maximiser vos marges en point de vente.",
    icon: Store,
    color: "green", 
    features: [
      "Veille concurrence locale et web",
      "Gestion multi-magasins",
      "Synchronisation prix online/offline",
      "Analyse de la concurrence géolocalisée",
      "Rapports par zone de chalandise",
      "Formation équipes terrain"
    ],
    metrics: [
      { label: "Magasins", value: "500+" },
      { label: "Zones suivies", value: "50+" },
      { label: "Précision GPS", value: "100m" }
    ],
    cta: "Demander une démo",
    popular: false
  },
  {
    id: "api",
    title: "API & Intégration",
    subtitle: "Pour les développeurs",
    description: "Intégrez directement nos données de pricing dans vos systèmes avec notre API REST haute performance.",
    icon: Code,
    color: "purple",
    features: [
      "API REST documentée",
      "Webhooks en temps réel",
      "SDKs Python, Node.js, PHP",
      "Rate limiting généreux",
      "Support technique dédié",
      "SLA 99.9% garanti"
    ],
    metrics: [
      { label: "Requêtes/min", value: "1000+" },
      { label: "Latence avg", value: "<50ms" },
      { label: "Uptime SLA", value: "99.9%" }
    ],
    cta: "Voir la documentation",
    popular: false
  },
  {
    id: "custom",
    title: "Solutions Sur-Mesure",
    subtitle: "Pour les besoins spécifiques",
    description: "Développement de solutions personnalisées pour vos cas d'usage particuliers et intégrations complexes.",
    icon: Settings,
    color: "orange",
    features: [
      "Analyse de vos besoins",
      "Développement sur-mesure",
      "Intégrations ERP/CRM/PIM",
      "Formation équipes dédiée",
      "Support 24/7 prioritaire",
      "Évolutions continues"
    ],
    metrics: [
      { label: "Projets réalisés", value: "50+" },
      { label: "Taux satisfaction", value: "98%" },
      { label: "Délai moyen", value: "4 sem" }
    ],
    cta: "Nous contacter",
    popular: false
  }
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" }
  }
  return colors[color as keyof typeof colors] || colors.blue
}

export default function SolutionsGrid() {
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
          <Badge variant="secondary" className="mb-4 bg-gray-100 text-gray-700">
            Nos Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Une solution pour chaque métier
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos 4 solutions principales couvrent tous les besoins de veille concurrentielle, 
            du e-commerce aux développements sur-mesure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const colors = getColorClasses(solution.color)
            
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {solution.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-brand text-white">
                        Plus populaire
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className={`${colors.bg} ${colors.border} border-b-2 pb-6`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl ${colors.bg} ring-2 ring-white shadow-sm`}>
                          <solution.icon className={`w-8 h-8 ${colors.text}`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-900 mb-1">
                            {solution.title}
                          </CardTitle>
                          <p className="text-sm text-gray-600">{solution.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mt-4">
                      {solution.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {solution.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`text-lg font-bold ${colors.text}`}>
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-600">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Check className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link href="/demo" className="block">
                      <Button 
                        className={`w-full ${solution.popular ? 'bg-gradient-brand hover:bg-gradient-brand-dark' : ''}`}
                        variant={solution.popular ? "default" : "outline"}
                      >
                        {solution.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}