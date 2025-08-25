"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Lock, 
  Key, 
  Eye, 
  Server, 
  FileText,
  CheckCircle,
  AlertTriangle,
  Globe,
  Award
} from "lucide-react"

export default function SecurityFeatures() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Chiffrement de Niveau Bancaire",
      description: "Toutes vos données sont protégées par un chiffrement AES-256 bout-en-bout, en transit et au repos.",
      details: [
        "Chiffrement AES-256 bits",
        "TLS 1.3 pour les connexions",
        "Clés de chiffrement rotatives",
        "HSM (Hardware Security Module)"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Key,
      title: "Authentification Multi-Facteur",
      description: "Sécurisez l'accès avec 2FA obligatoire, SSO enterprise et gestion granulaire des permissions.",
      details: [
        "2FA/MFA obligatoire",
        "SSO avec SAML/OAuth",
        "Authentification biométrique",
        "Gestion des sessions avancée"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Eye,
      title: "Surveillance & Audit",
      description: "Monitoring 24/7 avec logs d'audit complets et détection d'anomalies automatisée.",
      details: [
        "Logs d'audit détaillés",
        "Monitoring temps réel",
        "Détection d'anomalies IA",
        "Alertes sécurité instantanées"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Server,
      title: "Infrastructure Sécurisée",
      description: "Hébergement dans des centres de données certifiés avec redondance et isolation réseau.",
      details: [
        "Centres de données ISO 27001",
        "Réseau privé isolé (VPC)",
        "Firewalls multi-niveaux",
        "DDoS protection"
      ],
      color: "from-purple-500 to-indigo-500"
    }
  ]

  const complianceItems = [
    {
      standard: "GDPR",
      description: "Conformité totale au Règlement Général sur la Protection des Données",
      icon: FileText,
      status: "Certifié",
      details: ["Droit à l'oubli", "Portabilité des données", "Consentement explicite", "DPO dédié"]
    },
    {
      standard: "ISO 27001",
      description: "Certification internationale pour la gestion de la sécurité de l'information",
      icon: Award,
      status: "Certifié",
      details: ["Audits annuels", "Politiques de sécurité", "Gestion des risques", "Formation du personnel"]
    },
    {
      standard: "SOC 2 Type II",
      description: "Audit de sécurité organisationnelle et contrôles opérationnels",
      icon: Shield,
      status: "En cours",
      details: ["Contrôles sécurité", "Disponibilité", "Intégrité des données", "Confidentialité"]
    },
    {
      standard: "PCI DSS",
      description: "Standard de sécurité pour le traitement des données de cartes bancaires",
      icon: Globe,
      status: "Planifié",
      details: ["Réseau sécurisé", "Protection des données", "Gestion des vulnérabilités", "Tests réguliers"]
    }
  ]

  const privacyFeatures = [
    "Anonymisation des données personnelles",
    "Chiffrement des communications",
    "Stockage géographique configurble",
    "Backup automatique sécurisé",
    "Destruction sécurisée des données",
    "Accès basé sur les rôles (RBAC)",
    "Audit trails complets",
    "Protection contre l'exfiltration"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-700">
            🔒 Sécurité & Conformité
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Votre sécurité est notre priorité
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Value-IT applique les plus hauts standards de sécurité pour protéger 
            vos données stratégiques et respecter toutes les réglementations.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </CardTitle>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Conformité & Certifications
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous respectons les standards internationaux les plus exigeants 
              pour garantir la protection de vos données sensibles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-gray-600" />
                    </div>
                    
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      {item.standard}
                    </h4>
                    
                    <div className="mb-3">
                      {item.status === 'Certifié' && (
                        <Badge className="bg-green-100 text-green-700 border-0">
                          ✓ {item.status}
                        </Badge>
                      )}
                      {item.status === 'En cours' && (
                        <Badge className="bg-yellow-100 text-yellow-700 border-0">
                          🔄 {item.status}
                        </Badge>
                      )}
                      {item.status === 'Planifié' && (
                        <Badge className="bg-blue-100 text-blue-700 border-0">
                          📋 {item.status}
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="space-y-1">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="text-xs text-gray-500">
                          • {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Shield className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Protection des Données Garantie
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Vos données stratégiques et celles de vos clients sont protégées 
                    par des mécanismes de sécurité multi-niveaux et des protocoles 
                    stricts de confidentialité.
                  </p>
                  
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <div>
                      <div className="font-semibold text-green-900">
                        99.99% de disponibilité garantie
                      </div>
                      <div className="text-sm text-green-700">
                        SLA avec compensation automatique
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Mesures de Protection Appliquées :
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {privacyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-900 mb-2">
                  Transparence Sécurité
                </h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Nous publions régulièrement des rapports de sécurité et maintenons 
                  une page de statut en temps réel. En cas d'incident de sécurité, 
                  nous nous engageons à vous notifier dans les 24h conformément au GDPR.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}