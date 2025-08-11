"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Calendar,
  ArrowRight
} from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

const contactMethods = [
  {
    title: "Planifier un appel",
    description: "Réservez un créneau de 30 minutes avec nos experts",
    icon: Calendar,
    action: "Choisir un créneau",
    href: "/demo",
    color: "blue",
    availability: "Disponible aujourd'hui"
  },
  {
    title: "Envoyer un email", 
    description: "Décrivez votre projet, nous vous répondons sous 4h",
    icon: Mail,
    action: "Envoyer un message",
    href: `mailto:${CONTACT_INFO.email}`,
    color: "green",
    availability: "Réponse < 4h"
  },
  {
    title: "Assistance immédiate",
    description: "Besoin d'aide ? Notre chat est ouvert 9h-18h",
    icon: MessageCircle,
    action: "Démarrer le chat",
    href: "#",
    color: "orange",
    availability: "En ligne maintenant"
  }
]

const offices = [
  {
    region: "Europe",
    city: "Paris, France",
    address: "Station F, 5 Parvis Alan Turing",
    phone: "+33 1 23 45 67 89",
    email: "europe@value-it.com",
    timezone: "GMT+1",
    hours: "9h-18h CET"
  },
  {
    region: "Afrique", 
    city: "Antananarivo, Madagascar",
    address: "Analakely, Antananarivo 101",
    phone: "+261 20 22 123 45", 
    email: "africa@value-it.com",
    timezone: "GMT+3",
    hours: "8h-17h EAT"
  },
  {
    region: "Asie",
    city: "Bangalore, Inde", 
    address: "Electronic City, Bangalore",
    phone: "+91 80 1234 5678",
    email: "asia@value-it.com", 
    timezone: "GMT+5:30",
    hours: "9h-18h IST"
  },
  {
    region: "Amériques",
    city: "Mexico City, Mexique",
    address: "Polanco, Miguel Hidalgo",
    phone: "+52 55 1234 5678",
    email: "americas@value-it.com",
    timezone: "GMT-6", 
    hours: "9h-18h CST"
  }
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" }
  }
  return colors[color as keyof typeof colors] || colors.blue
}

export default function ContactInfo() {
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
            📞 Nous Contacter
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Plusieurs façons de nous joindre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le moyen de contact qui vous convient le mieux. 
            Notre équipe internationale est à votre disposition.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => {
            const colors = getColorClasses(method.color)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${colors.bg} ${colors.border} border-2 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <method.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {method.description}
                    </p>
                    
                    <div className={`inline-block px-3 py-1 ${colors.bg} ${colors.text} text-xs font-medium rounded-full mb-6`}>
                      {method.availability}
                    </div>
                    
                    <a href={method.href}>
                      <Button 
                        className="w-full"
                        variant={method.color === 'blue' ? 'default' : 'outline'}
                      >
                        {method.action}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Global Offices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nos bureaux dans le monde
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Avec 4 bureaux répartis sur 4 continents, nous assurons un support 
              local et adapté à votre fuseau horaire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h4 className="font-bold text-gray-900 mb-1">
                        {office.region}
                      </h4>
                      <p className="text-sm text-gray-600">{office.city}</p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{office.address}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <a 
                          href={`tel:${office.phone}`}
                          className="text-blue-600 hover:underline"
                        >
                          {office.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <a 
                          href={`mailto:${office.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {office.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <div>
                          <div className="text-gray-600">{office.hours}</div>
                          <div className="text-xs text-gray-500">{office.timezone}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🚨 Support Urgent (Clients Existants)
              </h3>
              <p className="text-gray-600 mb-6">
                Pour les urgences techniques critiques de nos clients existants, 
                contactez notre hotline 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+33123456789"
                  className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +33 1 23 45 67 89
                </a>
                <a 
                  href="mailto:urgent@value-it.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border border-red-300 text-red-700 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  urgent@value-it.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}