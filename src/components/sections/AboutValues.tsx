"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Heart, 
  Target, 
  Users, 
  Lightbulb, 
  Shield, 
  Zap,
  Globe,
  Award
} from "lucide-react"

const values = [
  {
    title: "Excellence Technique",
    description: "Nous visons l'excellence dans chaque ligne de code, chaque algorithme, chaque fonctionnalité. La qualité technique est notre marque de fabrique.",
    icon: Award,
    color: "blue",
    examples: ["Code reviews obligatoires", "Tests automatisés", "Architecture scalable", "Performance monitoring"]
  },
  {
    title: "Impact Client",
    description: "Chaque décision est prise avec l'impact client en tête. Nous mesurons notre succès par celui de nos clients.",
    icon: Heart,
    color: "red",
    examples: ["NPS score 85+", "Support réactif", "Fonctionnalités co-créées", "ROI client prouvé"]
  },
  {
    title: "Innovation Continue",
    description: "Nous repoussons constamment les limites du possible en veille concurrentielle. L'innovation est dans notre ADN.",
    icon: Lightbulb,
    color: "yellow",
    examples: ["R&D 25% du temps", "IA et ML avancés", "Brevets déposés", "Prototypes mensuels"]
  },
  {
    title: "Diversité Culturelle",
    description: "Notre force vient de la richesse de nos cultures. 4 continents, une vision commune, des perspectives uniques.",
    icon: Globe,
    color: "green",
    examples: ["15+ nationalités", "Remote-first", "Échanges interculturels", "Équipes mixtes"]
  },
  {
    title: "Transparence",
    description: "Communication ouverte, processus transparents, pas de politique interne. Nous créons un environnement de confiance.",
    icon: Shield,
    color: "purple",
    examples: ["Open salary grid", "Décisions partagées", "Feedback 360°", "Réunions all-hands"]
  },
  {
    title: "Agilité",
    description: "Nous nous adaptons rapidement aux changements du marché. Flexibilité et réactivité sont nos atouts concurrentiels.",
    icon: Zap,
    color: "orange",
    examples: ["Sprints 2 semaines", "Pivot rapide", "Expérimentation", "Fail fast, learn faster"]
  }
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-500 to-blue-600" },
    red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", gradient: "from-red-500 to-red-600" },
    yellow: { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-200", gradient: "from-yellow-500 to-yellow-600" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", gradient: "from-green-500 to-green-600" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-500 to-purple-600" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", gradient: "from-orange-500 to-orange-600" }
  }
  return colors[color as keyof typeof colors] || colors.blue
}

const achievements = [
  { metric: "98%", label: "Satisfaction client", icon: Heart },
  { metric: "25%", label: "Temps dédié R&D", icon: Lightbulb },
  { metric: "99.9%", label: "Uptime SLA", icon: Shield },
  { metric: "15+", label: "Nationalités", icon: Globe }
]

export default function AboutValues() {
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
          <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700">
            💎 Nos Valeurs
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ce qui nous guide au quotidien
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos valeurs ne sont pas que des mots affichés au mur. Elles guident 
            chacune de nos décisions et façonnent la culture unique de Value-IT.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const colors = getColorClasses(value.color)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-4`}>
                      <value.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {value.description}
                    </p>

                    {/* Examples */}
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-gray-700 mb-2">
                        En pratique :
                      </div>
                      {value.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')}`}></div>
                          <span className="text-xs text-gray-600">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Nos valeurs en chiffres
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-3">
                    <achievement.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {achievement.metric}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Culture CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white">
            <Users className="w-12 h-12 mx-auto mb-6 text-blue-100" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Vous partagez nos valeurs ?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Nous recherchons des talents qui, comme nous, veulent révolutionner 
              l'industrie du pricing avec passion, excellence et impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:careers@value-it.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Rejoindre l'équipe
              </a>
              <a 
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Découvrir nos solutions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}