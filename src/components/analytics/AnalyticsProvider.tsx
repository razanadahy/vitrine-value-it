"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { initGA, initHotjar, trackPageView } from "@/lib/analytics"

export default function AnalyticsProvider() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize analytics on first load
    initGA()
    initHotjar()
  }, [])

  useEffect(() => {
    // Track page views on route changes
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? '?' + searchParams.toString() : '')
      trackPageView(url)
    }
  }, [pathname, searchParams])

  return null // This component doesn't render anything
}