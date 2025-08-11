"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, Settings, X } from "lucide-react"
import { trackConsentStatus } from "@/lib/analytics"

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('analytics_consent')
    if (!consent) {
      // Delay showing banner for better UX
      setTimeout(() => setShowBanner(true), 2000)
    } else {
      // Apply stored consent
      trackConsentStatus(consent === 'granted')
    }
  }, [])

  const handleConsent = (granted: boolean) => {
    localStorage.setItem('analytics_consent', granted ? 'granted' : 'denied')
    trackConsentStatus(granted)
    setShowBanner(false)
    setShowDetails(false)
  }

  const handleCustomize = () => {
    setShowDetails(!showDetails)
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 left-4 right-4 z-50 flex justify-center"
      >
        <Card className="border-0 shadow-2xl max-w-4xl w-full bg-white/95 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Cookie className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">
                  🍪 Nous utilisons des cookies pour améliorer votre expérience
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  Nous utilisons Google Analytics et Hotjar pour comprendre comment vous utilisez notre site 
                  et l'améliorer. Ces outils nous aident à optimiser votre expérience utilisateur.
                </p>

                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-50 rounded-lg p-4 mb-4 space-y-3"
                  >
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Cookies essentiels</h4>
                      <p className="text-xs text-gray-600">
                        Nécessaires au fonctionnement du site (navigation, préférences utilisateur). 
                        Toujours activés.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Cookies analytiques</h4>
                      <p className="text-xs text-gray-600">
                        Google Analytics pour mesurer l'audience et améliorer le site. 
                        Données anonymisées, conservation 26 mois.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Cookies d'expérience</h4>
                      <p className="text-xs text-gray-600">
                        Hotjar pour analyser le comportement utilisateur et optimiser l'UX. 
                        Enregistrements anonymes, conservation 365 jours.
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => handleConsent(true)}
                    className="bg-gradient-brand hover:bg-gradient-brand-dark"
                    size="sm"
                  >
                    Accepter tous les cookies
                  </Button>
                  
                  <Button
                    onClick={() => handleConsent(false)}
                    variant="outline"
                    size="sm"
                  >
                    Refuser les cookies optionnels
                  </Button>
                  
                  <Button
                    onClick={handleCustomize}
                    variant="ghost"
                    size="sm"
                    className="flex items-center"
                  >
                    <Settings className="w-4 h-4 mr-1" />
                    {showDetails ? 'Masquer' : 'Personnaliser'}
                  </Button>
                </div>
              </div>

              <button 
                onClick={() => setShowBanner(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  )
}