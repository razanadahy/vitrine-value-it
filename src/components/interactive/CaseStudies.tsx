"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  Target, 
  Download, 
  ExternalLink, 
  ArrowRight,
  Building,
  Calendar,
  MapPin
} from "lucide-react"

const caseStudies = [
  {
    id: "techmart-success",
    title: "TechMart booste sa marge de 23% avec Value-IT",
    company: "TechMart",
    industry: "E-commerce Électronique",
    logo: "/case-studies/techmart-logo.png",
    image: "/case-studies/techmart-hero.jpg",
    location: "France",
    duration: "12 mois",
    team: "15-50 employés",
    challenge: "Concurrence féroce sur l'électronique grand public avec des marges qui s'érodent. Difficulté à suivre 5000+ références sur 8 marketplaces différentes.",
    solution: "Déploiement de Value-IT pour surveiller automatiquement tous les concurrents directs avec alertes en temps réel et optimisation pricing IA.",
    results: [
      { metric: "Marge brute", before: "12%", after: "23%", improvement: "+91%" },
      { metric: "CA mensuel", before: "850K€", after: "1.2M€", improvement: "+41%" },
      { metric: "Temps analyse", before: "20h/sem", after: "2h/sem", improvement: "-90%" },
      { metric: "Références optimisées", before: "200", after: "5000", improvement: "+2400%" }
    ],
    testimonial: {
      quote: "Value-IT a révolutionné notre approche pricing. Nous sommes passés d'une stratégie réactive à une stratégie prédictive qui nous donne un avantage concurrentiel décisif.",
      author: "Sarah Chen",
      role: "Directrice E-commerce"
    },
    timeline: [
      { phase: "Audit & Setup", duration: "2 semaines", description: "Analyse besoins et configuration initiale" },
      { phase: "Déploiement", duration: "1 mois", description: "Intégration API et formation équipes" },
      { phase: "Optimisation", duration: "3 mois", description: "Ajustements stratégie et automatisation" },
      { phase: "Scale-up", duration: "6 mois", description: "Extension à toutes les gammes produits" }
    ],
    keyFeatures: ["Monitoring 24/7", "Alertes intelligentes", "API Integration", "Dashboard temps réel"],
    downloadUrl: "/case-studies/techmart-success-story.pdf"
  },
  {
    id: "fashionforward-roi",
    title: "FashionForward optimise 12K références mode",
    company: "FashionForward", 
    industry: "Mode & Lifestyle",
    logo: "/case-studies/fashionforward-logo.png",
    image: "/case-studies/fashionforward-hero.jpg",
    location: "Belgique",
    duration: "18 mois",
    team: "50-200 employés",
    challenge: "Marché de la mode très volatil avec cycles courts. Besoin de réactivité maximum sur les prix pour écouler les stocks saisonniers.",
    solution: "Solution Value-IT personnalisée avec règles pricing dynamiques basées sur la saisonnalité, stocks et tendances concurrentielles.",
    results: [
      { metric: "Rotation stock", before: "4x/an", after: "7x/an", improvement: "+75%" },
      { metric: "Invendus fin saison", before: "35%", after: "8%", improvement: "-77%" },
      { metric: "Prix moyen panier", before: "68€", after: "89€", improvement: "+31%" },
      { metric: "ROI Value-IT", before: "-", after: "450%", improvement: "450%" }
    ],
    testimonial: {
      quote: "Avec Value-IT, nous anticipons les mouvements du marché et ajustons nos prix en temps réel. C'est un game-changer pour notre industrie.",
      author: "Emily Watson",
      role: "CEO"
    },
    timeline: [
      { phase: "Discovery", duration: "3 semaines", description: "Analyse spécificités mode et saisonnalité" },
      { phase: "Custom Development", duration: "6 semaines", description: "Développement règles métier spécifiques" },
      { phase: "Pilot", duration: "2 mois", description: "Test sur gamme pilote automne-hiver" },
      { phase: "Full Rollout", duration: "4 mois", description: "Déploiement sur toutes les collections" }
    ],
    keyFeatures: ["Pricing saisonnier", "Gestion stocks", "Prédiction tendances", "Multi-canal"],
    downloadUrl: "/case-studies/fashionforward-case-study.pdf"
  },
  {
    id: "globalretail-scale",
    title: "GlobalRetail unifie sa stratégie pricing internationale",
    company: "GlobalRetail",
    industry: "Retail Multi-Enseignes",
    logo: "/case-studies/globalretail-logo.png", 
    image: "/case-studies/globalretail-hero.jpg",
    location: "Multinational",
    duration: "24 mois",
    team: "500+ employés",
    challenge: "Harmoniser la stratégie pricing sur 15 pays avec des spécificités locales. Gestion complexe de 50K références sur 200+ magasins.",
    solution: "Plateforme Value-IT Enterprise avec modules géolocalisés, intégration ERP multi-pays et dashboards par market manager.",
    results: [
      { metric: "Cohérence pricing", before: "45%", after: "92%", improvement: "+104%" },
      { metric: "Marge globale", before: "18.5%", after: "24.8%", improvement: "+34%" },
      { metric: "Time-to-market", before: "3 semaines", after: "2 jours", improvement: "-91%" },
      { metric: "Économies opérationnelles", before: "-", after: "2.8M€/an", improvement: "2.8M€" }
    ],
    testimonial: {
      quote: "Value-IT nous a permis de passer d'une approche artisanale à une stratégie pricing industrialisée et data-driven à l'échelle internationale.",
      author: "Marcus Rodriguez",
      role: "Global Pricing Director"
    },
    timeline: [
      { phase: "Global Audit", duration: "2 mois", description: "Analyse multi-pays et définition architecture" },
      { phase: "Core Platform", duration: "4 mois", description: "Développement plateforme centralisée" },
      { phase: "Country Rollout", duration: "12 mois", description: "Déploiement progressif par pays" },
      { phase: "Optimization", duration: "6 mois", description: "Fine-tuning et automatisation avancée" }
    ],
    keyFeatures: ["Multi-pays", "Géolocalisation", "Intégration ERP", "Governance centralisée"],
    downloadUrl: "/case-studies/globalretail-international.pdf"
  }
]

interface CaseStudyCardProps {
  study: typeof caseStudies[0]
  onClick: () => void
}

function CaseStudyCard({ study, onClick }: CaseStudyCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={onClick}>
      <CardContent className="p-0">
        {/* Image header */}
        <div className="relative h-48 bg-gradient-to-br from-blue-500 to-cyan-500 overflow-hidden rounded-t-lg">
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Building className="w-12 h-12 mx-auto mb-2 opacity-80" />
              <div className="text-lg font-bold">{study.company}</div>
              <div className="text-sm opacity-90">{study.industry}</div>
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/20 text-white border-0">
              {study.location}
            </Badge>
          </div>
        </div>

        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {study.title}
          </h3>

          {/* Meta info */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              {study.duration}
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
              <Building className="w-3 h-3 mr-1" />
              {study.team}
            </Badge>
          </div>

          {/* Key results preview */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {study.results.slice(0, 2).map((result, idx) => (
              <div key={idx} className="text-center p-2 bg-gray-50 rounded">
                <div className="text-lg font-bold text-green-600">{result.improvement}</div>
                <div className="text-xs text-gray-600">{result.metric}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Lire l'étude complète</span>
            <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface CaseStudyDetailProps {
  study: typeof caseStudies[0]
  onClose: () => void
}

function CaseStudyDetail({ study, onClose }: CaseStudyDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-gradient-brand text-white p-8 rounded-t-2xl">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
              <div className="flex items-center space-x-4 text-blue-100">
                <span className="flex items-center">
                  <Building className="w-4 h-4 mr-1" />
                  {study.company}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {study.location}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {study.duration}
                </span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-8">
          {/* Challenge */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Le Défi</h3>
            <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Notre Solution</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{study.solution}</p>
            <div className="flex flex-wrap gap-2">
              {study.keyFeatures.map((feature, idx) => (
                <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-700">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Résultats Obtenus</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {study.results.map((result, idx) => (
                <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{result.metric}</span>
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="text-sm text-gray-600">Avant</div>
                      <div className="font-semibold text-gray-800">{result.before}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-600">Après</div>
                      <div className="font-semibold text-green-700">{result.after}</div>
                    </div>
                    <div className="ml-auto">
                      <div className="text-xl font-bold text-green-600">{result.improvement}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Timeline du Projet</h3>
            <div className="space-y-4">
              {study.timeline.map((phase, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-blue-600">{idx + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                        {phase.duration}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-8">
            <div className="text-blue-900 italic text-lg leading-relaxed mb-4">
              "{study.testimonial.quote}"
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-brand rounded-full flex items-center justify-center text-white font-semibold">
                {study.testimonial.author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                <div className="text-gray-600 text-sm">{study.testimonial.role}, {study.company}</div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-brand hover:bg-gradient-brand-dark flex-1">
              <Download className="w-4 h-4 mr-2" />
              Télécharger l'étude PDF
            </Button>
            <Button variant="outline" className="flex-1">
              <Target className="w-4 h-4 mr-2" />
              Demander une démo similaire
            </Button>
            <Button variant="ghost" className="flex-1">
              <ExternalLink className="w-4 h-4 mr-2" />
              Voir plus d'études
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null)

  return (
    <div>
      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <CaseStudyCard 
              study={study} 
              onClick={() => setSelectedStudy(study)}
            />
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <CaseStudyDetail 
            study={selectedStudy}
            onClose={() => setSelectedStudy(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}