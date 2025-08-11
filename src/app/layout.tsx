import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnalyticsProvider from "@/components/analytics/AnalyticsProvider";
import ConsentBanner from "@/components/analytics/ConsentBanner";
import { COMPANY_INFO } from "@/lib/constants";
import { Suspense } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://value-it.com"),
  title: {
    default: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: COMPANY_INFO.description,
  keywords: [
    "competitive pricing",
    "price intelligence",
    "e-commerce analytics",
    "price monitoring",
    "SaaS platform",
    "Madagascar",
    "web scraping",
    "market intelligence"
  ],
  authors: [{ name: "Value-IT Team" }],
  creator: "Value-IT",
  publisher: "Value-IT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://value-it.com",
    title: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    images: ["/og-image.png"],
    creator: "@valueit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}
