"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Network, 
  Lock,
  Monitor,
  Smartphone,
  CheckCircle2
} from "lucide-react"

export default function TechnicalFeatures() {
  const technicalSpecs = [
    {
      category: "Infrastructure",
      icon: Cloud,
      items: [
        { label: "Architecture cloud-native", detail: "AWS/Azure multi-régions" },
        { label: "Scalabilité automatique", detail: "Auto-scaling basé sur la charge" },
        { label: "Redondance géographique", detail: "4 centres de données" },
        { label: "SLA 99.9%", detail: "Disponibilité garantie" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "API & Intégrations",
      icon: Code,
      items: [
        { label: "API REST complète", detail: "Documentation OpenAPI 3.0" },
        { label: "Webhooks temps réel", detail: "Notifications instantanées" },
        { label: "SDK multi-langages", detail: "Python, PHP, Node.js, Java" },
        { label: "Rate limiting intelligent", detail: "10,000 req/min par défaut" }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Performance",
      icon: Cpu,
      items: [
        { label: "Traitement distribué", detail: "Cluster Kubernetes" },
        { label: "Cache intelligent", detail: "Redis & CDN mondial" },
        { label: "Temps de réponse", detail: "< 100ms en moyenne" },
        { label: "Parallélisation", detail: "1000+ requêtes simultanées" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Base de Données",
      icon: Database,
      items: [
        { label: "Big Data ready", detail: "MongoDB Atlas + PostgreSQL" },
        { label: "Historique illimité", detail: "Archivage automatique" },
        { label: "Backup temps réel", detail: "Sauvegarde continue" },
        { label: "Analytics avancés", detail: "ClickHouse pour l'OLAP" }
      ],
      color: "from-orange-500 to-red-500"
    }
  ]

  const platformFeatures = [
    {
      icon: Monitor,
      title: "Interface Web Avancée",
      description: "Dashboard moderne avec visualisations interactives et rapports personnalisables.",
      specs: ["React.js moderne", "Graphiques D3.js", "Temps réel", "Mobile-first"]
    },
    {
      icon: Smartphone,
      title: "Applications Mobiles",
      description: "Apps natives iOS et Android pour gérer vos alertes et consulter vos données partout.",
      specs: ["iOS & Android", "Notifications push", "Mode offline", "Synchronisation"]
    },
    {
      icon: Network,
      title: "Web Scraping Avancé",
      description: "Technologie propriétaire de scraping avec contournement anti-bot et reconnaissance d'images.",
      specs: ["Anti-détection", "Captcha solving", "Proxy rotatifs", "ML recognition"]
    },
    {
      icon: Lock,
      title: "Sécurité Enterprise",
      description: "Sécurité de niveau bancaire avec chiffrement bout-en-bout et conformité GDPR.",
      specs: ["Chiffrement AES-256", "2FA obligatoire", "Audit logs", "ISO 27001"]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700">
            ⚡ Spécifications techniques
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Une technologie de pointe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre infrastructure développée à Madagascar combine performance, 
            sécurité et scalabilité pour traiter des milliards de données quotidiennement.
          </p>
        </motion.div>

        {/* Technical Specs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technicalSpecs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${spec.color} flex items-center justify-center mb-4`}>
                    <spec.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {spec.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {spec.items.map((item, idx) => (
                      <div key={idx} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 text-sm">{item.label}</div>
                            <div className="text-xs text-gray-500 mt-1">{item.detail}</div>
                          </div>
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Platform Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.specs.map((spec, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className="bg-indigo-50 text-indigo-700 border-0"
                          >
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600">Uptime garanti</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  10B+
                </div>
                <div className="text-gray-600">Requêtes/mois</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  &lt; 100ms
                </div>
                <div className="text-gray-600">Temps de réponse</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  ISO 27001
                </div>
                <div className="text-gray-600">Certifié sécurité</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}