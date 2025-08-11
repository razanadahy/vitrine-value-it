"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Comment fonctionne l'essai gratuit de 14 jours ?",
    answer: "L'essai gratuit vous donne accès à toutes les fonctionnalités de votre plan choisi pendant 14 jours, sans engagement. Aucune carte bancaire n'est requise pour démarrer. Vous pouvez annuler à tout moment avant la fin de la période d'essai."
  },
  {
    question: "Puis-je changer de plan à tout moment ?",
    answer: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment depuis votre espace client. Les changements prennent effet immédiatement et nous ajustons automatiquement votre prochaine facture au prorata."
  },
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer: "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), les virements SEPA et les paiements par virement bancaire pour les entreprises. Toutes les transactions sont sécurisées et cryptées."
  },
  {
    question: "Y a-t-il des frais de configuration ou cachés ?",
    answer: "Non, aucun frais caché. Le prix affiché est le prix final HT. La configuration de base est incluse dans tous nos plans. Seuls les développements sur-mesure (plan Enterprise) peuvent faire l'objet d'un devis séparé."
  },
  {
    question: "Quelle est votre politique de remboursement ?",
    answer: "Si vous n'êtes pas satisfait, nous offrons un remboursement intégral dans les 30 premiers jours suivant votre premier paiement. Pour les abonnements annuels, nous remboursons la partie non utilisée en cas d'annulation."
  },
  {
    question: "Comment sont facturés les dépassements ?",
    answer: "Les plans Starter et Professional incluent des limites sur le nombre de produits surveillés. En cas de dépassement, nous vous proposerons automatiquement un upgrade vers le plan supérieur plutôt que de facturer des frais supplémentaires."
  },
  {
    question: "Le support technique est-il inclus ?",
    answer: "Oui, tous nos plans incluent le support technique. Le plan Starter bénéficie du support par email, le Professional du support téléphonique, et l'Enterprise d'un support 24/7 avec account manager dédié."
  },
  {
    question: "Proposez-vous des réductions pour les associations ou ONG ?",
    answer: "Oui, nous offrons des tarifs préférentiels pour les associations, ONG et établissements d'enseignement. Contactez notre équipe commerciale avec vos justificatifs pour obtenir un devis personnalisé."
  }
]

export default function PricingFAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-gray-100 text-gray-700">
            ❓ Questions fréquentes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vous avez des questions ?
          </h2>
          <p className="text-xl text-gray-600">
            Trouvez rapidement les réponses aux questions les plus courantes 
            sur nos tarifs et conditions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </h3>
            <p className="text-gray-600 mb-6">
              Notre équipe support est là pour vous aider. Contactez-nous et nous vous 
              répondrons dans les plus brefs délais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@value-it.com"
                className="inline-flex items-center justify-center px-6 py-2 bg-white border border-blue-300 rounded-lg text-blue-700 hover:bg-blue-50 transition-colors font-medium"
              >
                Nous envoyer un email
              </a>
              <a 
                href="/demo"
                className="inline-flex items-center justify-center px-6 py-2 bg-gradient-brand text-white rounded-lg hover:bg-gradient-brand-dark transition-colors font-medium"
              >
                Planifier un appel
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}