"use client"

import { useState, useEffect } from "react"
import { trackBusinessEvents } from "@/lib/analytics"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Calculator,
  ArrowRight,
  Download
} from "lucide-react"

interface ROIData {
  revenue: number
  margin: number
  competitors: number
  products: number
}

interface Results {
  currentProfit: number
  potentialSavings: number
  newProfit: number
  roiPercentage: number
  monthlyGain: number
  yearlyGain: number
}

export default function ROICalculator() {
  const [data, setData] = useState<ROIData>({
    revenue: 1000000,
    margin: 15,
    competitors: 5,
    products: 500
  })

  const [results, setResults] = useState<Results>({
    currentProfit: 0,
    potentialSavings: 0,
    newProfit: 0,
    roiPercentage: 0,
    monthlyGain: 0,
    yearlyGain: 0
  })

  const [isCalculating, setIsCalculating] = useState(false)

  // Simulation du calcul ROI
  useEffect(() => {
    setIsCalculating(true)
    const timer = setTimeout(() => {
      const currentProfit = data.revenue * (data.margin / 100)
      
      // Formule simplifiée : plus de concurrents = plus de potentiel d'optimisation
      const optimizationFactor = Math.min((data.competitors * 0.02) + 0.05, 0.15)
      const productsFactor = Math.min(data.products / 10000, 0.5)
      
      const potentialSavings = currentProfit * (optimizationFactor + productsFactor)
      const newProfit = currentProfit + potentialSavings
      const roiPercentage = ((potentialSavings / currentProfit) * 100)
      
      // Coût Value-IT estimé (2% du CA avec min 3000€/an)
      const valueItCost = Math.max(data.revenue * 0.02, 36000)
      const monthlyGain = (potentialSavings - valueItCost) / 12
      const yearlyGain = potentialSavings - valueItCost

      setResults({
        currentProfit,
        potentialSavings,
        newProfit,
        roiPercentage,
        monthlyGain,
        yearlyGain
      })
      setIsCalculating(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [data])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const handleInputChange = (field: keyof ROIData, value: string) => {
    const numValue = parseFloat(value) || 0
    setData(prev => ({ ...prev, [field]: numValue }))
    
    // Track ROI calculator usage when significant values are entered
    if (field === 'revenue' && numValue > 100000) {
      const industry = numValue > 5000000 ? 'Enterprise' : numValue > 1000000 ? 'Growth' : 'SMB'
      trackBusinessEvents.roiCalculatorUsed(numValue, industry)
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Formulaire */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardTitle className="flex items-center">
              <Calculator className="w-5 h-5 text-blue-600 mr-2" />
              Calculez votre ROI avec Value-IT
            </CardTitle>
            <p className="text-gray-600 text-sm">
              Renseignez vos données pour découvrir vos économies potentielles
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Chiffre d'affaires */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chiffre d'affaires annuel (€)
              </label>
              <Input
                type="number"
                value={data.revenue}
                onChange={(e) => handleInputChange('revenue', e.target.value)}
                className="text-lg"
                placeholder="1 000 000"
              />
              <p className="text-xs text-gray-500 mt-1">
                Votre CA total sur les produits à surveiller
              </p>
            </div>

            {/* Marge actuelle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Marge brute moyenne (%)
              </label>
              <Input
                type="number"
                value={data.margin}
                onChange={(e) => handleInputChange('margin', e.target.value)}
                className="text-lg"
                placeholder="15"
                min="0"
                max="100"
              />
              <p className="text-xs text-gray-500 mt-1">
                Votre marge moyenne actuelle
              </p>
            </div>

            {/* Concurrents */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de concurrents principaux
              </label>
              <Input
                type="number"
                value={data.competitors}
                onChange={(e) => handleInputChange('competitors', e.target.value)}
                className="text-lg"
                placeholder="5"
                min="1"
              />
              <p className="text-xs text-gray-500 mt-1">
                Concurrents directs à surveiller
              </p>
            </div>

            {/* Produits */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de produits/SKUs
              </label>
              <Input
                type="number"
                value={data.products}
                onChange={(e) => handleInputChange('products', e.target.value)}
                className="text-lg"
                placeholder="500"
                min="1"
              />
              <p className="text-xs text-gray-500 mt-1">
                Références à analyser régulièrement
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Résultats */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card className="border-0 shadow-lg h-full">
          <CardHeader className="bg-gradient-brand text-white">
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Votre potentiel avec Value-IT
            </CardTitle>
            <Badge className="bg-white/20 text-white w-fit">
              Calcul en temps réel
            </Badge>
          </CardHeader>
          <CardContent className="p-6">
            {isCalculating ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Métriques principales */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="text-sm text-green-600 font-medium">
                      Gain potentiel annuel
                    </div>
                    <div className="text-2xl font-bold text-green-700">
                      {formatCurrency(results.potentialSavings)}
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="text-sm text-blue-600 font-medium">
                      ROI amélioration
                    </div>
                    <div className="text-2xl font-bold text-blue-700">
                      +{results.roiPercentage.toFixed(1)}%
                    </div>
                  </div>
                </div>

                {/* Comparaison avant/après */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Comparaison profit
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Profit actuel</span>
                      <span className="font-medium">
                        {formatCurrency(results.currentProfit)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-600">Nouveau profit</span>
                      <span className="font-bold text-green-600">
                        {formatCurrency(results.newProfit)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Détail gains */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                    <div className="flex items-center">
                      <Target className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium">Gain mensuel net</span>
                    </div>
                    <span className="font-bold text-blue-700">
                      {formatCurrency(results.monthlyGain)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium">Gain annuel net</span>
                    </div>
                    <span className="font-bold text-green-700">
                      {formatCurrency(results.yearlyGain)}
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <Button className="w-full bg-gradient-brand hover:bg-gradient-brand-dark">
                    Commencer l'essai gratuit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 w-4 h-4" />
                    Télécharger le rapport PDF
                  </Button>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-gray-500 text-center">
                  * Estimation basée sur nos données clients moyennes. 
                  Résultats réels variables selon votre secteur.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}