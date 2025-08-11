"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, TrendingUp, Globe, BarChart3, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import MetricsCounter from "@/components/interactive/MetricsCounter"
// import { COMPANY_INFO } from "@/lib/constants"
import Link from "next/link"

export default function HeroSection() {
  const metrics = [
    {
      title: "Prices Analyzed Daily",
      value: 10000000,
      suffix: "+",
      description: "Real-time price monitoring",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Uptime Guarantee",
      value: 99.9,
      suffix: "%",
      description: "Always available",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Countries Covered",
      value: 15,
      suffix: "+",
      description: "Global reach",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Happy Clients",
      value: 200,
      suffix: "+",
      description: "Trusted by businesses",
      icon: <Users className="w-5 h-5" />
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                🚀 Trusted by 200+ businesses worldwide
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Competitive</span>{" "}
                <span className="text-gradient">Price Intelligence</span>{" "}
                <span className="text-gray-900">Made Simple</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Monitor competitors, optimize pricing strategies, and boost your margins with our 
                AI-powered platform. Analyzing <strong>10M+ prices daily</strong> across 15+ countries.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/demo">
                <Button size="lg" className="bg-gradient-brand hover:bg-gradient-brand-dark group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="group">
                  <Play className="mr-2 w-4 h-4" />
                  Watch Demo
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Enterprise Ready</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual/Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl">
              {/* Simulated Dashboard */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Price Intelligence Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                </div>
                
                {/* Mock Chart */}
                <div className="h-32 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-end justify-around p-4">
                  {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                      className="bg-gradient-brand w-8 rounded-t-md"
                    />
                  ))}
                </div>

                {/* Mock Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Avg. Price Drop</div>
                    <div className="text-xl font-bold text-green-600">-12.3%</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Monitored SKUs</div>
                    <div className="text-xl font-bold text-blue-600">2,847</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium">Live Data</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border"
              >
                <div className="text-xs text-gray-600">
                  <div className="font-medium">Price Alert</div>
                  <div className="text-green-600">Competitor dropped 15%</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by businesses worldwide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform processes millions of data points daily to give you the competitive edge you need
            </p>
          </div>
          <MetricsCounter metrics={metrics} />
        </motion.div>
      </div>
    </section>
  )
}