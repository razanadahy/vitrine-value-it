import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"
import { COMPANY_INFO, CONTACT_INFO } from "@/lib/constants"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "E-commerce Intelligence", href: "/solutions/ecommerce" },
        { name: "Retail Pricing", href: "/solutions/retail" },
        { name: "API Integration", href: "/solutions/api" },
        { name: "Custom Solutions", href: "/solutions/custom" },
      ]
    },
    {
      title: "Features",
      links: [
        { name: "Web Scraping", href: "/features/scraping" },
        { name: "Real-time Dashboards", href: "/features/dashboards" },
        { name: "Price Alerts", href: "/features/alerts" },
        { name: "Analytics", href: "/features/analytics" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Security", href: "/security" },
      ]
    }
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-xl text-gray-900">
                Value<span className="text-gradient">IT</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm">
              {COMPANY_INFO.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Antananarivo, Madagascar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <Link
                href={CONTACT_INFO.social.linkedin}
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href={CONTACT_INFO.social.twitter}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href={CONTACT_INFO.social.github}
                className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}