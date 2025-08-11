"use client"

import { motion } from "framer-motion"
import { 
  Globe, 
  BarChart3, 
  Bell, 
  TrendingUp, 
  Zap, 
  Shield,
  Clock,
  Target
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FEATURES } from "@/lib/constants"

const featureIcons = {
  globe: Globe,
  dashboard: BarChart3,
  trending: TrendingUp,
  analytics: BarChart3,
  api: Zap,
  world: Globe
}

const additionalFeatures = [
  {
    title: "Real-time Alerts",
    description: "Get instant notifications when competitor prices change or drop below your thresholds",
    icon: Bell,
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade security with SOC 2 Type II compliance and end-to-end encryption",
    icon: Shield,
    color: "text-green-500", 
    bgColor: "bg-green-50"
  },
  {
    title: "24/7 Monitoring",
    description: "Continuous price tracking with 99.9% uptime guarantee and automated failover",
    icon: Clock,
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    title: "Smart Targeting",
    description: "AI-powered competitor identification and strategic price positioning recommendations",
    icon: Target,
    color: "text-red-500",
    bgColor: "bg-red-50"
  }
]

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color?: string
  bgColor?: string
  delay?: number
}

function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  color = "text-blue-500", 
  bgColor = "bg-blue-50",
  delay = 0 
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6 space-y-4">
          <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const allFeatures = [
    ...FEATURES.map((feature) => ({
      ...feature,
      icon: featureIcons[feature.icon as keyof typeof featureIcons] || Globe,
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    })),
    ...additionalFeatures
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Everything you need for{" "}
            <span className="text-gradient">competitive intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with intuitive design 
            to deliver actionable insights that drive real business results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              bgColor={feature.bgColor}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-brand rounded-3xl p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to transform your pricing strategy?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join 200+ businesses already using Value-IT to optimize their pricing 
            and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}