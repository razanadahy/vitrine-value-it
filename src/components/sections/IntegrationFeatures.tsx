"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Plug, 
  ShoppingCart, 
  Database, 
  Mail, 
  MessageSquare, 
  BarChart,
  Zap,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from "lucide-react"

export default function IntegrationFeatures() {
  const integrationCategories = [
    {
      title: "E-commerce & Marketplaces",
      icon: ShoppingCart,
      description: "Connectez directement vos boutiques et canaux de vente",
      color: "from-green-500 to-emerald-500",
      integrations: [
        { name: "Shopify", type: "Native", status: "active" },
        { name: "Amazon Seller Central", type: "API", status: "active" },
        { name: "eBay", type: "API", status: "active" },
        { name: "WooCommerce", type: "Plugin", status: "active" },
        { name: "Magento", type: "Extension", status: "active" },
        { name: "PrestaShop", type: "Module", status: "active" },
        { name: "BigCommerce", type: "App", status: "active" },
        { name: "Cdiscount", type: "API", status: "beta" }
      ]
    },
    {
      title: "ERP & Systèmes de Gestion",
      icon: Database,
      description: "Synchronisez avec vos outils de gestion existants",
      color: "from-blue-500 to-cyan-500",
      integrations: [
        { name: "SAP", type: "Connector", status: "active" },
        { name: "Oracle", type: "ODBC", status: "active" },
        { name: "Microsoft Dynamics", type: "API", status: "active" },
        { name: "Sage", type: "Connector", status: "active" },
        { name: "Odoo", type: "Module", status: "active" },
        { name: "Cegid", type: "API", status: "active" },
        { name: "NetSuite", type: "SuiteApp", status: "beta" },
        { name: "QuickBooks", type: "API", status: "coming" }
      ]
    },
    {
      title: "Communication & Alerts",
      icon: Mail,
      description: "Recevez vos alertes par vos canaux préférés",
      color: "from-purple-500 to-pink-500",
      integrations: [
        { name: "Slack", type: "Bot", status: "active" },
        { name: "Microsoft Teams", type: "App", status: "active" },
        { name: "Discord", type: "Webhook", status: "active" },
        { name: "Email (SMTP)", type: "Native", status: "active" },
        { name: "SMS", type: "API", status: "active" },
        { name: "Webhook", type: "Native", status: "active" },
        { name: "WhatsApp Business", type: "API", status: "beta" },
        { name: "Telegram", type: "Bot", status: "coming" }
      ]
    },
    {
      title: "Analytics & BI",
      icon: BarChart,
      description: "Exportez vos données vers vos outils d'analyse",
      color: "from-orange-500 to-red-500",
      integrations: [
        { name: "Google Analytics", type: "API", status: "active" },
        { name: "Power BI", type: "Connector", status: "active" },
        { name: "Tableau", type: "Connector", status: "active" },
        { name: "Google Sheets", type: "API", status: "active" },
        { name: "Excel Online", type: "API", status: "active" },
        { name: "Looker", type: "API", status: "beta" },
        { name: "Qlik Sense", type: "API", status: "beta" },
        { name: "Grafana", type: "Plugin", status: "coming" }
      ]
    }
  ]

  const apiFeatures = [
    {
      title: "API REST Complète",
      description: "Accédez à toutes nos données via une API moderne et bien documentée",
      features: ["Documentation OpenAPI 3.0", "Authentification OAuth 2.0", "Rate limiting intelligent", "Webhooks temps réel"]
    },
    {
      title: "SDK Multi-langages",
      description: "Bibliothèques officielles pour intégrer rapidement Value-IT",
      features: ["Python SDK", "PHP SDK", "Node.js SDK", "Java SDK"]
    },
    {
      title: "Connecteurs No-Code",
      description: "Intégrations visuelles sans programmation avec Zapier et Make",
      features: ["1000+ apps supportées", "Workflows automatisés", "Interface glisser-déposer", "Templates prêts à l'emploi"]
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-700 border-0 text-xs">Actif</Badge>
      case 'beta':
        return <Badge className="bg-yellow-100 text-yellow-700 border-0 text-xs">Bêta</Badge>
      case 'coming':
        return <Badge className="bg-gray-100 text-gray-600 border-0 text-xs">Bientôt</Badge>
      default:
        return null
    }
  }

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
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-700">
            🔗 Intégrations & API
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            S'intègre avec vos outils existants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Value-IT se connecte facilement à votre écosystème technologique 
            pour une expérience unifiée et des workflows automatisés.
          </p>
        </motion.div>

        {/* Integration Categories */}
        <div className="space-y-12 mb-16">
          {integrationCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {category.title}
                      </CardTitle>
                      <p className="text-gray-600 mt-1">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.integrations.map((integration, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 text-sm">
                            {integration.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {integration.type}
                          </div>
                        </div>
                        {getStatusBadge(integration.status)}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* API Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
              🚀 API & Développeurs
            </Badge>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Construisez sur Value-IT
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre API robuste et nos outils de développement vous permettent 
              de créer des intégrations sur-mesure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {apiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                      <Plug className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 mr-2" />
              <span className="text-sm font-medium opacity-90">
                Intégration rapide
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Besoin d'une intégration personnalisée ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Notre équipe technique peut développer des connecteurs sur-mesure 
              pour vos besoins spécifiques. Parlons-en !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Documentation API
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Contacter l'équipe technique
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}