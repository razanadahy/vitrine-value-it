"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Rasoanirina",
    role: "CEO & Co-fondatrice",
    location: "Antananarivo, Madagascar",
    bio: "Diplômée HEC Paris, ex-consultante McKinsey. Passion pour l'entrepreneuriat tech africain et l'innovation en pricing.",
    avatar: "/team/sarah.jpg",
    linkedin: "#"
  },
  {
    name: "Thomas Dubois", 
    role: "CTO & Co-fondateur",
    location: "Paris, France",
    bio: "Ingénieur Polytechnique, ex-lead developer chez Criteo. Expert en web scraping et architectures distribuées.",
    avatar: "/team/thomas.jpg",
    linkedin: "#"
  },
  {
    name: "Raj Patel",
    role: "Head of Engineering",
    location: "Bangalore, Inde",
    bio: "15 ans d'expérience en développement SaaS. Ancien de Microsoft et Flipkart. Spécialiste IA et machine learning.",
    avatar: "/team/raj.jpg",
    linkedin: "#"
  },
  {
    name: "Maria González",
    role: "VP Sales Americas", 
    location: "Mexico City, Mexique",
    bio: "10 ans dans la vente de solutions B2B tech. Parle 4 langues. Expertise marché latino-américain et nord-américain.",
    avatar: "/team/maria.jpg",
    linkedin: "#"
  },
  {
    name: "David Chen",
    role: "Head of Product",
    location: "Remote (France/Inde)",
    bio: "Product Manager senior, ex-Amazon. Spécialiste UX/UI et développement produit agile. Obsédé par l'expérience client.",
    avatar: "/team/david.jpg",
    linkedin: "#"
  },
  {
    name: "Aicha Diallo",
    role: "Head of Customer Success",
    location: "Antananarivo, Madagascar", 
    bio: "Master en Relations Internationales. 8 ans dans le service client B2B. Garantit la satisfaction de nos 200+ clients.",
    avatar: "/team/aicha.jpg",
    linkedin: "#"
  }
]

const departments = [
  {
    name: "Engineering",
    count: 22,
    description: "Développeurs, DevOps, QA",
    color: "blue"
  },
  {
    name: "Product & Design",
    count: 8,
    description: "PM, UX/UI, Data analysts",
    color: "purple"
  },
  {
    name: "Sales & Marketing",
    count: 12,
    description: "Account managers, Marketing",
    color: "green"
  },
  {
    name: "Customer Success",
    count: 6,
    description: "Support, Formation, CSM",
    color: "orange"
  },
  {
    name: "Operations",
    count: 4,
    description: "Finance, RH, Legal",
    color: "gray"
  }
]

export default function AboutTeam() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
            👥 Notre Équipe
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            L'équipe qui révolutionne le pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe multiculturelle et passionnée, répartie sur 4 continents, 
            unie par la même vision : rendre l'intelligence concurrentielle accessible à tous.
          </p>
        </motion.div>

        {/* Leadership Team */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Équipe dirigeante
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    {/* Avatar placeholder */}
                    <div className="w-20 h-20 bg-gradient-brand rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h4>
                    
                    <p className="text-blue-600 font-medium mb-2">
                      {member.role}
                    </p>
                    
                    <p className="text-sm text-gray-500 mb-3">
                      📍 {member.location}
                    </p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    
                    <div className="flex justify-center space-x-3">
                      <a 
                        href={member.linkedin}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@value-it.com`}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Departments Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nos départements
          </h3>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {dept.count}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {dept.name}
                </div>
                <div className="text-sm text-gray-600">
                  {dept.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Culture & Values Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Rejoignez une équipe d'exception
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Nous recherchons constamment des talents passionnés pour renforcer notre équipe. 
            Remote-first, international, avec un impact réel sur l'industrie du pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:careers@value-it.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Voir nos offres d'emploi
            </a>
            <a 
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              En savoir plus sur notre culture
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}