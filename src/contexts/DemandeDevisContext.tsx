"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface DemandeDevisContextType {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const DemandeDevisContext = createContext<DemandeDevisContextType | undefined>(undefined)

export function DemandeDevisProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <DemandeDevisContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </DemandeDevisContext.Provider>
  )
}

export function useDemandeDevis() {
  const context = useContext(DemandeDevisContext)
  if (context === undefined) {
    throw new Error("useDemandeDevis must be used within a DemandeDevisProvider")
  }
  return context
}