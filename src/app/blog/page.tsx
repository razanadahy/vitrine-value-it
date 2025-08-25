import type { Metadata } from "next"
import { getAllArticles } from "@/services/blogService"
import BlogHero from "@/components/blog/BlogHero"
import HTMLArticle from "@/components/blog/HTMLArticle"
import CtaSection from "@/components/sections/CtaSection"

export const metadata: Metadata = {
  title: "Blog - Intelligence Tarifaire & E-commerce",
  description: "Articles sur la tarification compétitive, l'intelligence économique et les tendances du marché e-commerce.",
}

export default async function BlogPage() {
  // Fetch articles server-side
  const articles = await getAllArticles()

  return (
    <div className="min-h-screen bg-white" style={{marginBottom: '4rem'}}>
      <BlogHero />

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length > 0 ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Articles récents</h2>
                <p className="text-gray-600">
                  Restez informé des dernières tendances en pricing intelligence
                </p>
              </div>
              
              <div className="space-y-12">
                {articles.map((article) => (
                  <div key={article.idHtml} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <HTMLArticle html={article.html} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">
                Aucun article disponible pour le moment.
              </p>
              <p className="text-gray-500">
                Revenez bientôt pour découvrir nos derniers articles !
              </p>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}