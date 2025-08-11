"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Target, Globe, Users, Award, TrendingUp } from "lucide-react"

const timeline = [
  {
    year: "2018",
    title: "Les débuts à Madagascar",
    description: "Création de Value-IT à Antananarivo avec une vision : démocratiser l'accès à l'intelligence concurrentielle pour toutes les entreprises.",
    icon: Rocket,
    color: "blue"
  },
  {
    year: "2019", 
    title: "Premiers clients internationaux",
    description: "Expansion vers l'Europe avec nos premiers clients français. Développement de notre expertise en e-commerce.",
    icon: Target,
    color: "green"
  },
  {
    year: "2020",
    title: "Croissance accélérée",
    description: "Ouverture du bureau en France et développement de l'API. L'équipe passe de 5 à 25 collaborateurs.",
    icon: TrendingUp,
    color: "purple"
  },
  {
    year: "2021",
    title: "Expansion asiatique",
    description: "Création du centre R&D en Inde pour renforcer nos capacités techniques et couvrir les fuseaux horaires asiatiques.",
    icon: Globe,
    color: "orange"
  },
  {
    year: "2022",
    title: "Hub Amériques",
    description: "Ouverture du bureau au Mexique pour servir le marché nord-américain et sud-américain.",
    icon: Users,
    color: "red"
  },
  {
    year: "2024",
    title: "Leadership reconnu",
    description: "Plus de 200 clients, 10M+ de prix analysés quotidiennement. Value-IT devient la référence en veille concurrentielle.",
    icon: Award,
    color: "cyan"
  }
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
    red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200" }
  }
  return colors[color as keyof typeof colors] || colors.blue
}

export default function AboutStory() {
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
            📖 Notre Histoire
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            6 ans d'innovation et de croissance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De startup malgache à leader international de la veille concurrentielle, 
            découvrez les étapes clés de notre développement.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-brand hidden lg:block"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const colors = getColorClasses(item.color)
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot (desktop) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block z-10">
                    <div className={`w-12 h-12 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center shadow-lg`}>
                      <item.icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 lg:hidden mb-4">
                          <div className={`w-10 h-10 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center flex-shrink-0`}>
                            <item.icon className={`w-4 h-4 ${colors.text}`} />
                          </div>
                          <div className={`text-2xl font-bold ${colors.text}`}>
                            {item.year}
                          </div>
                        </div>
                        
                        <div className={`hidden lg:block text-2xl font-bold ${colors.text} mb-2 ${
                          isEven ? 'text-right' : 'text-left'
                        }`}>
                          {item.year}
                        </div>
                        
                        <h3 className={`text-xl font-semibold text-gray-900 mb-3 ${
                          isEven ? 'lg:text-right' : 'lg:text-left'
                        }`}>
                          {item.title}
                        </h3>
                        
                        <p className={`text-gray-600 leading-relaxed ${
                          isEven ? 'lg:text-right' : 'lg:text-left'
                        }`}>
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden lg:block w-2/12"></div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="bg-gradient-brand rounded-3xl p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Notre Mission
            </h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              "Démocratiser l'accès à l'intelligence concurrentielle en combinant 
              l'expertise technique malgache, la vision stratégique européenne, 
              l'innovation asiatique et l'ambition américaine pour créer la solution 
              de veille pricing la plus performante au monde."
            </p>
            <div className="mt-8 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}