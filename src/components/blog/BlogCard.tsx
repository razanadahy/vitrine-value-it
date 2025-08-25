"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, TrendingUp, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BlogArticle } from "@/services/blogService"

interface BlogCardProps {
  article: BlogArticle
  index: number
}

export default function BlogCard({ article, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 group border-gray-200 hover:border-blue-300 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardContent className="p-6 relative">
          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Calendar className="w-4 h-4" />
            <time>{new Date(article.date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</time>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h3>

          {/* Summary */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.summary}
          </p>

          {/* Impact Badge */}
          <div className="mb-4">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              <TrendingUp className="w-3 h-3 mr-1" />
              Impact: {article.impact.split(',')[0]}
            </Badge>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <Link 
              href={`/blog/${article.id}`}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group/link"
            >
              Lire plus
              <span className="transition-transform group-hover/link:translate-x-1">→</span>
            </Link>
            
            {article.sourceUrl && article.sourceUrl !== '#' && (
              <a 
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}