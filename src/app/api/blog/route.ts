import { NextResponse } from 'next/server'
import { getAllArticles } from '@/services/blogService'

export async function GET() {
  try {
    const articles = await getAllArticles()
    return NextResponse.json({ articles })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    )
  }
}