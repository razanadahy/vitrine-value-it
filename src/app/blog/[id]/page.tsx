import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getArticleById, getAllArticles } from "@/services/blogService"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, TrendingUp, ExternalLink, ArrowLeft, Clock } from "lucide-react"

interface PageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticleById(parseInt(params.id))
  
  if (!article) {
    return {
      title: "Article non trouvé",
      description: "L'article demandé n'existe pas."
    }
  }

  return {
    title: article.title,
    description: article.summary,
  }
}

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({
    id: article.id.toString(),
  }))
}

export default async function BlogArticlePage({ params }: PageProps) {
  const article = await getArticleById(parseInt(params.id))
  
  if (!article) {
    notFound()
  }

  // Calculate reading time (approx 200 words per minute)
  const wordCount = article.summary.split(' ').length + (article.impact?.split(' ').length || 0)
  const readingTime = Math.ceil(wordCount / 200)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Retour au blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge className="bg-blue-100 text-blue-700">
              <TrendingUp className="w-3 h-3 mr-1" />
              Intelligence Tarifaire
            </Badge>
            
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <time>{new Date(article.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</time>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{readingTime} min de lecture</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Résumé</h2>
            <p className="text-gray-700 leading-relaxed">{article.summary}</p>
          </div>

          {/* Impact Section */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-100 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Impact sur le marché
            </h2>
            <p className="text-gray-700 leading-relaxed">{article.impact}</p>
          </div>

          {/* Additional Content Placeholder */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Analyse détaillée</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cette technologie représente une avancée majeure dans le domaine de l'intelligence artificielle et du pricing dynamique. 
              Les entreprises qui adoptent ces solutions voient en moyenne une amélioration de 15-25% de leurs marges.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Value-IT intègre déjà ces innovations dans sa plateforme pour offrir à ses clients les outils les plus performants du marché.
            </p>
          </div>

          {/* Source Link */}
          {article.sourceUrl && article.sourceUrl !== '#' && (
            <div className="flex justify-end mb-8">
              <a 
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-brand text-white rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Voir la source originale
              </a>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="border-t pt-8 mt-12">
          <div className="flex justify-between items-center">
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux articles
              </Button>
            </Link>
            
            <Link href="/demo">
              <Button className="bg-gradient-brand hover:shadow-lg">
                Découvrir Value-IT
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}