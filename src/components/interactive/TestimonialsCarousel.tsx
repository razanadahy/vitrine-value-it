"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { TESTIMONIALS } from "@/lib/constants"

// Testimonials étendus pour la démo
const extendedTestimonials = [
  ...TESTIMONIALS,
  {
    name: "Alexandre Martin",
    role: "Directeur E-commerce",
    company: "SportLine",
    avatar: "/testimonials/alexandre.jpg",
    content: "Grâce à Value-IT, nous avons optimisé nos prix sur plus de 5000 références. L'impact sur notre marge a été immédiat : +18% en 6 mois.",
    rating: 5,
    metrics: [
      { label: "Amélioration marge", value: "+18%" },
      { label: "SKUs optimisés", value: "5000+" },
      { label: "ROI", value: "320%" }
    ],
    industry: "E-commerce",
    usage: "18 mois"
  },
  {
    name: "Camille Dubois",
    role: "Pricing Manager",
    company: "BeautyTech",
    avatar: "/testimonials/camille.jpg", 
    content: "L'équipe Value-IT comprend parfaitement nos enjeux beauté. Leur support est exceptionnel et les insights nous font gagner un temps précieux.",
    rating: 5,
    metrics: [
      { label: "Temps économisé", value: "-60%" },
      { label: "Précision pricing", value: "95%" },
      { label: "Satisfaction équipe", value: "9.8/10" }
    ],
    industry: "Beauté",
    usage: "2 ans"
  },
  {
    name: "Jean-Philippe Rousseau",
    role: "CEO",
    company: "FrenchTech Solutions",
    avatar: "/testimonials/jp.jpg",
    content: "Value-IT nous donne un avantage concurrentiel décisif. Nous prenons désormais nos décisions pricing en étant parfaitement informés du marché.",
    rating: 5,
    metrics: [
      { label: "CA additionnel", value: "+2.3M€" },
      { label: "Décisions/jour", value: "150+" },
      { label: "Précision prévisions", value: "92%" }
    ],
    industry: "Tech",
    usage: "1 an"
  }
]

interface TestimonialProps {
  testimonial: typeof extendedTestimonials[0]
  isActive: boolean
}

function TestimonialCard({ testimonial, isActive }: TestimonialProps) {
  return (
    <Card className={`border-0 shadow-lg h-full transition-all duration-300 ${
      isActive ? 'shadow-xl ring-2 ring-blue-200' : ''
    }`}>
      <CardContent className="p-8">
        {/* Quote Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center">
            <Quote className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Rating */}
        <div className="flex justify-center mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-gray-700 text-lg leading-relaxed text-center mb-8 italic">
          "{testimonial.content}"
        </blockquote>

        {/* Metrics (si disponibles) */}
        {(testimonial as any).metrics && (
          <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
            {(testimonial as any).metrics.map((metric: any, idx: number) => (
              <div key={idx} className="text-center">
                <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                <div className="text-xs text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Author */}
        <div className="text-center">
          {/* Avatar placeholder */}
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
            {testimonial.name.charAt(0)}
          </div>
          
          <div className="font-semibold text-gray-900 text-lg mb-1">
            {testimonial.name}
          </div>
          
          <div className="text-blue-600 font-medium mb-2">
            {testimonial.role}
          </div>
          
          <div className="text-gray-600 text-sm mb-3">
            {testimonial.company}
          </div>

          {/* Additional info */}
          {(testimonial as any).industry && (testimonial as any).usage && (
            <div className="flex justify-center space-x-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                {(testimonial as any).industry}
              </Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                Client depuis {(testimonial as any).usage}
              </Badge>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

interface TestimonialsCarouselProps {
  autoPlay?: boolean
  showControls?: boolean
  className?: string
}

export default function TestimonialsCarousel({ 
  autoPlay = true, 
  showControls = true,
  className = "" 
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % extendedTestimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? extendedTestimonials.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % extendedTestimonials.length)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main Testimonial */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <TestimonialCard 
              testimonial={extendedTestimonials[currentIndex]}
              isActive={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      {showControls && (
        <>
          {/* Arrow buttons */}
          <div className="flex justify-between items-center mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Précédent</span>
            </Button>

            {/* Pause/Play */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              className="flex items-center space-x-2"
            >
              <span>Suivant</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {extendedTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Testimonial Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-gray-500">
          {currentIndex + 1} sur {extendedTestimonials.length}
        </span>
      </div>

      {/* Industry Filter (Optional) */}
      <div className="flex justify-center space-x-2 mt-6">
        <Badge 
          variant="secondary" 
          className="bg-blue-100 text-blue-700 cursor-pointer hover:bg-blue-200"
          onClick={() => goToSlide(0)}
        >
          E-commerce
        </Badge>
        <Badge 
          variant="secondary" 
          className="bg-green-100 text-green-700 cursor-pointer hover:bg-green-200"
          onClick={() => goToSlide(3)}
        >
          Beauté
        </Badge>
        <Badge 
          variant="secondary" 
          className="bg-purple-100 text-purple-700 cursor-pointer hover:bg-purple-200"
          onClick={() => goToSlide(5)}
        >
          Tech
        </Badge>
      </div>
    </div>
  )
}