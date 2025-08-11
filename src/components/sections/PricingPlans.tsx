"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, ArrowRight } from "lucide-react"
import { PRICING_PLANS } from "@/lib/constants"
import Link from "next/link"

export default function PricingPlans() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choisissez votre plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la PME à l'entreprise, nous avons le plan qui correspond à vos besoins 
            et à votre budget. Commencez gratuitement dès aujourd'hui.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'transform scale-105' : ''}`}
            >
              <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-blue-500 shadow-blue-200' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-brand text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Plus populaire
                    </Badge>
                  </div>
                )}

                <CardHeader className={`text-center pb-8 ${
                  plan.popular ? 'bg-gradient-to-br from-blue-50 to-cyan-50' : 'bg-gray-50'
                }`}>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {plan.description}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    {plan.price ? (
                      <div>
                        <span className="text-4xl font-bold text-gray-900">
                          {plan.price}€
                        </span>
                        <span className="text-gray-600 ml-2">
                          /{plan.period}
                        </span>
                        <div className="text-sm text-gray-500 mt-1">
                          HT, facturé annuellement
                        </div>
                      </div>
                    ) : (
                      <div>
                        <span className="text-4xl font-bold text-gray-900">
                          Sur mesure
                        </span>
                        <div className="text-sm text-gray-500 mt-1">
                          Devis personnalisé
                        </div>
                      </div>
                    )}
                  </div>

                  <Link href="/demo" className="block">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-brand hover:bg-gradient-brand-dark' 
                          : ''
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="font-medium text-gray-900 mb-3">
                      Fonctionnalités incluses :
                    </div>
                    
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Plan-specific benefits */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="text-sm font-medium text-gray-900 mb-2">
                      Inclus également :
                    </div>
                    <div className="space-y-2 text-xs text-gray-600">
                      {index === 0 && (
                        <>
                          <div>• Configuration assistée</div>
                          <div>• Documentation complète</div>
                          <div>• Support par email</div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <div>• Formation personnalisée</div>
                          <div>• Support téléphonique</div>
                          <div>• Rapports personnalisés</div>
                          <div>• Intégrations avancées</div>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <div>• Account manager dédié</div>
                          <div>• SLA garanti 99.9%</div>
                          <div>• Développements sur-mesure</div>
                          <div>• Support 24/7</div>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Besoin d'aide pour choisir ?
            </h3>
            <p className="text-gray-600 mb-6">
              Nos experts sont là pour vous aider à trouver le plan qui correspond 
              parfaitement à vos besoins et votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button variant="outline">
                  Parler à un expert
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="ghost">
                  Comparer les solutions
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}