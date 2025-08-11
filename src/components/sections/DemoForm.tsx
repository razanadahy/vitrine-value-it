"use client"

import { useState } from "react"
import { trackBusinessEvents, trackLeadScoring } from "@/lib/analytics"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  Send, 
  CheckCircle,
  Building,
  Mail,
  User,
  Phone,
  MessageSquare,
  Clock
} from "lucide-react"

export default function DemoForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    industry: "",
    teamSize: "",
    currentSolution: "",
    challenges: "",
    timeline: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const industries = [
    "E-commerce", "Retail", "Distribution", "Mode & Luxe", 
    "Électronique", "Automobile", "Alimentation", "Autre"
  ]

  const teamSizes = [
    "1-10", "11-50", "51-200", "201-1000", "1000+"
  ]

  const timelines = [
    "Immédiatement", "Dans le mois", "Dans le trimestre", "Pas défini"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Track form submission attempt
    trackBusinessEvents.contactFormSubmitted('demo_request', 'high')
    
    // Calculate and track lead score
    const leadScore = trackLeadScoring({
      company: formData.company,
      industry: formData.industry,
      teamSize: formData.teamSize,
      timeline: formData.timeline,
      currentSolution: formData.currentSolution
    })
    
    // Track demo request with context
    trackBusinessEvents.demoRequested('demo_page', 'prospect')
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset après 3 secondes pour la démo
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "", lastName: "", email: "", phone: "", company: "",
        role: "", industry: "", teamSize: "", currentSolution: "",
        challenges: "", timeline: "", message: ""
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-200">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Merci pour votre demande !
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Nous avons bien reçu votre demande de démonstration. 
                Un expert Value-IT vous contactera dans les 24h pour planifier votre session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge className="bg-green-100 text-green-700 border-0">
                  ✉️ Email de confirmation envoyé
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 border-0">
                  📞 Contact sous 24h
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
            📝 Demande de démo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Planifiez votre démonstration personnalisée
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Remplissez ce formulaire et nos experts vous contacteront sous 24h 
            pour planifier une démo adaptée à vos besoins spécifiques.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                  Informations de contact
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom et Prénom */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline w-4 h-4 mr-1" />
                        Prénom *
                      </label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  {/* Email et Téléphone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline w-4 h-4 mr-1" />
                        Email professionnel *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john.doe@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline w-4 h-4 mr-1" />
                        Téléphone
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                  </div>

                  {/* Entreprise et Poste */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Building className="inline w-4 h-4 mr-1" />
                        Entreprise *
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Nom de votre entreprise"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Poste *
                      </label>
                      <Input
                        value={formData.role}
                        onChange={(e) => handleInputChange('role', e.target.value)}
                        placeholder="CEO, CMO, Pricing Manager..."
                        required
                      />
                    </div>
                  </div>

                  {/* Secteur et Taille */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Secteur d'activité
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Sélectionnez votre secteur</option>
                        {industries.map(industry => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Taille d'équipe
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => handleInputChange('teamSize', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Nombre d'employés</option>
                        {teamSizes.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Solution actuelle */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Solution actuelle de pricing/veille
                    </label>
                    <Input
                      value={formData.currentSolution}
                      onChange={(e) => handleInputChange('currentSolution', e.target.value)}
                      placeholder="Ex: Excel, Minderest, Price2Spy, développement interne..."
                    />
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline w-4 h-4 mr-1" />
                      Timeline de déploiement
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Quand souhaitez-vous déployer ?</option>
                      {timelines.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="inline w-4 h-4 mr-1" />
                      Défis actuels et objectifs
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Décrivez vos défis actuels en pricing et ce que vous aimeriez améliorer avec Value-IT..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-brand hover:bg-gradient-brand-dark"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2" />
                        Planifier ma démo
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info et processus */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Processus */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-brand text-white">
                <CardTitle>Comment ça se passe ?</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Pré-qualification</div>
                      <div className="text-sm text-gray-600">Nous analysons vos besoins pour préparer une démo personnalisée</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Planification</div>
                      <div className="text-sm text-gray-600">Nous vous contactons sous 24h pour fixer le créneau idéal</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">3</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Démonstration</div>
                      <div className="text-sm text-gray-600">Session de 30 minutes avec cas d'usage adapté à votre secteur</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">4</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Suivi personnalisé</div>
                      <div className="text-sm text-gray-600">Devis sur-mesure et accompagnement pour votre déploiement</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ rapide */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Questions fréquentes</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">La démo est-elle vraiment gratuite ?</div>
                    <div className="text-gray-600">Oui, absolument. Aucun frais, aucun engagement.</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Combien de temps dure la démo ?</div>
                    <div className="text-gray-600">30 minutes en moyenne, adaptable selon vos besoins.</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Puis-je inviter mes collègues ?</div>
                    <div className="text-gray-600">Bien sûr ! Plus vous êtes, mieux nous pouvons adapter la présentation.</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Aurai-je accès à un essai gratuit ?</div>
                    <div className="text-gray-600">Oui, nous proposons 14 jours d'essai complet après la démo.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}