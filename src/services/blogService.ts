import pool from '@/lib/db'

export interface BlogArticle {
  idHtml: number
  html: string
}

// Get all blog articles from database
export async function getAllArticles(): Promise<BlogArticle[]> {
  try {
    const connection = await pool.getConnection()
    
    try {
      const [rows] = await connection.execute(
        'SELECT idHtml, html FROM htmlContent ORDER BY idHtml DESC'
      )
      
      const articles: BlogArticle[] = []
      
      for (const row of rows as any[]) {
        articles.push({
          idHtml: row.idHtml,
          html: row.html
        })
      }
      
      return articles
    } finally {
      connection.release()
    }
  } catch (error) {
    console.error('Database error:', error)
    // Return mock data if database is not available
    return getMockArticles()
  }
}

// Get single article by ID
export async function getArticleById(id: number): Promise<BlogArticle | null> {
  try {
    const connection = await pool.getConnection()
    
    try {
      const [rows] = await connection.execute(
        'SELECT idHtml, html FROM htmlContent WHERE idHtml = ?',
        [id]
      )
      
      const articles = rows as any[]
      if (articles.length === 0) return null
      
      const row = articles[0]
      
      return {
        idHtml: row.idHtml,
        html: row.html
      }
    } finally {
      connection.release()
    }
  } catch (error) {
    console.error('Database error:', error)
    return null
  }
}

// Mock data for development/testing
function getMockArticles(): BlogArticle[] {
  const mockHTML = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Article de démonstration</title>
</head>
<body>
    <h1>Article de test - Base de données non connectée</h1>
    <p>Ceci est un article de démonstration affiché car la base de données n'est pas accessible.</p>
</body>
</html>`

  return [
    {
      idHtml: 1,
      html: mockHTML
    }
  ]
}