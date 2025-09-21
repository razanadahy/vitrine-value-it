"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Rocket, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDemandeDevis } from "@/contexts/DemandeDevisContext"

export default function DemandeDevisModal() {
  const { isModalOpen, closeModal } = useDemandeDevis()
  const [formData, setFormData] = useState({
    nom: "",
    prenoms: "",
    email: "",
    siteWeb: "",
    entreprise: ""
  })
  const [accepteConditions, setAccepteConditions] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!accepteConditions) return

    setIsSubmitting(true)

    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Ici vous pouvez ajouter l'appel API
    console.log("Données du formulaire:", formData)

    setIsSubmitting(false)
    closeModal()

    // Reset form
    setFormData({
      nom: "",
      prenoms: "",
      email: "",
      siteWeb: "",
      entreprise: ""
    })
    setAccepteConditions(false)
  }

  const isFormValid = formData.nom && formData.prenoms && formData.email && formData.entreprise && accepteConditions

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-none lg:w-[60%] w-[98%] h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header avec dégradé */}
            <div className="relative bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-8 text-white flex-shrink-0">
              {/* Particules de fond */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute top-12 right-8 w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-12 right-4 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
              </div>

              {/* Bouton fermer */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Rocket className="w-4 h-4" />
                <span className="text-sm font-medium">DEMANDE DE DEVIS</span>
              </div>

              {/* Titre */}
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Parlons de votre <span className="text-white">projet</span>
              </h2>
              <p className="text-white/90 text-sm">
                Obtenez un devis personnalisé en moins de 24h
              </p>
            </div>

            {/* Formulaire */}
            <div className="flex-1 overflow-y-auto">
              <form onSubmit={handleSubmit} className="p-8 space-y-6 h-full flex flex-col">
                {/* Champs du formulaire */}
                <div className="flex-1 space-y-6">
                  {/* Site web */}
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
                          <span className="text-white text-xs">🌐</span>
                        </div>
                        <label className="text-sm font-medium text-gray-700">Site web (optionnel)</label>
                      </div>
                      <input
                        type="url"
                        name="siteWeb"
                        value={formData.siteWeb}
                        onChange={handleInputChange}
                        placeholder="https://votresite.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>

                    {/* Entreprise */}
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
                          <span className="text-white text-xs">🏢</span>
                        </div>
                        <label className="text-sm font-medium text-gray-700">Entreprise</label>
                      </div>
                      <input
                        type="text"
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleInputChange}
                        placeholder="Nom de votre entreprise"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>

                    {/* Nom et Prénoms */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
                            <span className="text-white text-xs">👤</span>
                          </div>
                          <label className="text-sm font-medium text-gray-700">Nom</label>
                        </div>
                        <input
                          type="text"
                          name="nom"
                          value={formData.nom}
                          onChange={handleInputChange}
                          placeholder="Votre nom"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
                            <span className="text-white text-xs">👤</span>
                          </div>
                          <label className="text-sm font-medium text-gray-700">Prénoms</label>
                        </div>
                        <input
                          type="text"
                          name="prenoms"
                          value={formData.prenoms}
                          onChange={handleInputChange}
                          placeholder="Vos prénoms"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
                          <span className="text-white text-xs">📧</span>
                        </div>
                        <label className="text-sm font-medium text-gray-700">Email</label>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre.email@exemple.com"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="accepteConditions"
                        checked={accepteConditions}
                        onChange={(e) => setAccepteConditions(e.target.checked)}
                        className="mt-1 w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                      />
                      <label htmlFor="accepteConditions" className="text-sm text-gray-600">
                        J'accepte que mes données soient utilisées pour me recontacter concernant ma demande *
                      </label>
                    </div>
                </div>

                {/* Boutons */}
                <div className="flex space-x-3 pt-6 pb-6 flex-shrink-0">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={closeModal}
                      className="flex-1 py-3 border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Annuler
                    </Button>
                    <Button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Envoi...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="w-4 h-4 mr-2" />
                          Envoyer ma demande
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}