"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail, Users } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

const offices = [
  {
    city: "Antananarivo",
    country: "Madagascar",
    flag: "🇲🇬",
    role: "Siège Social & R&D",
    timezone: "GMT+3",
    address: "Analakely, Antananarivo 101",
    phone: "+261 20 22 123 45",
    email: "madagascar@value-it.com",
    team: 28,
    specialties: ["Développement Core", "Data Engineering", "Customer Success"],
    description: "Notre siège historique abrite les équipes de développement principal et notre centre d'excellence en data science.",
    color: "red",
    established: "2018"
  },
  {
    city: "Paris", 
    country: "France",
    flag: "🇫🇷",
    role: "Bureau Europe",
    timezone: "GMT+1",
    address: "Station F, 5 Parvis Alan Turing, 75013 Paris",
    phone: "+33 1 23 45 67 89",
    email: "france@value-it.com",
    team: 12,
    specialties: ["Sales Europe", "Product Management", "Marketing"],
    description: "Notre antenne européenne coordonne les ventes et le marketing pour tous les marchés EMEA.",
    color: "blue",
    established: "2020"
  },
  {
    city: "Bangalore",
    country: "Inde", 
    flag: "🇮🇳",
    role: "Centre R&D Asie",
    timezone: "GMT+5:30",
    address: "Electronic City, Bangalore 560100",
    phone: "+91 80 1234 5678", 
    email: "india@value-it.com",
    team: 15,
    specialties: ["Machine Learning", "DevOps", "QA Automation"],
    description: "Notre hub technologique asiatique se concentre sur l'IA et les innovations algorithmiques avancées.",
    color: "green",
    established: "2021"
  },
  {
    city: "Mexico City",
    country: "Mexique",
    flag: "🇲🇽", 
    role: "Hub Amériques",
    timezone: "GMT-6",
    address: "Polanco, Miguel Hidalgo, CDMX",
    phone: "+52 55 1234 5678",
    email: "mexico@value-it.com",
    team: 8,
    specialties: ["Sales Americas", "Support Client", "Partnerships"],
    description: "Notre bureau des Amériques dessert les marchés nord et sud-américains avec expertise locale.",
    color: "orange",
    established: "2022"
  }
]

const getColorClasses = (color: string) => {
  const colors = {
    red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" }
  }
  return colors[color as keyof typeof colors] || colors.blue
}

export default function AboutOffices() {
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
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
            🌍 Nos Bureaux
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Présents sur 4 continents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre présence internationale nous permet d'offrir un support 24/7 
            et une expertise locale adaptée à chaque marché.
          </p>
        </motion.div>

        {/* World Coverage Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-sm text-gray-600">Bureaux internationaux</div>
          </div>
          <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
            <div className="text-3xl font-bold text-green-600 mb-2">52+</div>
            <div className="text-sm text-gray-600">Collaborateurs</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
            <div className="text-sm text-gray-600">Fuseaux horaires</div>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support continu</div>
          </div>
        </motion.div>

        {/* Offices Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {offices.map((office, index) => {
            const colors = getColorClasses(office.color)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    {/* Header with flag and city */}
                    <div className={`${colors.bg} p-6 ${colors.border} border-b`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{office.flag}</span>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {office.city}
                            </h3>
                            <p className="text-gray-600">{office.country}</p>
                          </div>
                        </div>
                        <Badge className={`${colors.bg} ${colors.text} border-0`}>
                          Depuis {office.established}
                        </Badge>
                      </div>
                      
                      <div className={`text-sm font-medium ${colors.text} mb-2`}>
                        {office.role}
                      </div>
                      
                      <p className="text-gray-700 text-sm">
                        {office.description}
                      </p>
                    </div>

                    <div className="p-6 space-y-4">
                      {/* Team size */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Users className={`w-4 h-4 ${colors.text}`} />
                          <span className="text-sm font-medium">Équipe</span>
                        </div>
                        <span className="text-sm text-gray-600">{office.team} personnes</span>
                      </div>

                      {/* Timezone */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Clock className={`w-4 h-4 ${colors.text}`} />
                          <span className="text-sm font-medium">Fuseau</span>
                        </div>
                        <span className="text-sm text-gray-600">{office.timezone}</span>
                      </div>

                      {/* Contact info */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className={`w-4 h-4 ${colors.text}`} />
                          <span className="text-sm text-gray-600">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className={`w-4 h-4 ${colors.text}`} />
                          <span className="text-sm text-gray-600">{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className={`w-4 h-4 ${colors.text}`} />
                          <a 
                            href={`mailto:${office.email}`}
                            className={`text-sm ${colors.text} hover:underline`}
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>

                      {/* Specialties */}
                      <div className="pt-4 border-t border-gray-200">
                        <div className="text-sm font-medium text-gray-900 mb-2">
                          Spécialités :
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {office.specialties.map((specialty, idx) => (
                            <Badge 
                              key={idx}
                              variant="secondary"
                              className={`text-xs ${colors.bg} ${colors.text} border-0`}
                            >
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Vous souhaitez nous rencontrer ?
            </h3>
            <p className="text-gray-600 mb-6">
              Nos équipes locales sont à votre disposition pour échanger sur vos projets 
              et vous accompagner dans votre région.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/demo"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-brand text-white rounded-lg font-semibold hover:bg-gradient-brand-dark transition-colors"
              >
                Planifier un rendez-vous
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Nous contacter par email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}