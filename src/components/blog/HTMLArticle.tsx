"use client"

import { useState, useEffect } from "react"

interface HTMLArticleProps {
  html: string
}

export default function HTMLArticle({ html }: HTMLArticleProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="animate-pulse bg-gray-100 h-96 rounded-lg" />
  }

  return (
    <div className="w-full">
      <iframe
        srcDoc={html}
        className="w-full min-h-screen border-0 rounded-lg shadow-lg"
        style={{ height: "100vh" }}
        title="Article Content"
        sandbox="allow-same-origin allow-scripts"
      />
    </div>
  )
}