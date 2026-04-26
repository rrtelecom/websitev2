'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On non-home pages always show white navbar
  const transparent = isHome && !scrolled

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <rect width="100" height="100" rx="22" fill="#2563EB"/>
              <g transform="translate(12,27) scale(3.2)" stroke="white" strokeWidth="0.82" strokeLinecap="round" fill="none">
                <path d="M13 9.92v2.1a1.4 1.4 0 01-1.526 1.4A13.86 13.86 0 016.044 11.27 13.65 13.65 0 011.83 7.056 13.86 13.86 0 01.683 1.54 1.4 1.4 0 012.076.007h2.1A1.4 1.4 0 015.376 1.21c.09.672.253 1.332.49 1.967a1.4 1.4 0 01-.315 1.477L4.664 5.54A11.2 11.2 0 008.86 9.733l.887-.889a1.4 1.4 0 011.477-.315c.635.237 1.295.4 1.967.49A1.4 1.4 0 0113 9.92z"/>
              </g>
              <path d="M62 39 A10 10 0 0 1 62 59" stroke="white" strokeWidth="5.5" strokeLinecap="round" opacity="0.4"/>
              <path d="M62 32 A17 17 0 0 1 62 66" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.65"/>
              <path d="M62 25 A24 24 0 0 1 62 73" stroke="white" strokeWidth="4.5" strokeLinecap="round" opacity="0.9"/>
            </svg>
            <span
              className={`text-base font-bold transition-colors leading-tight ${
                transparent ? 'text-white' : 'text-gray-900'
              }`}
            >
              R.R. Telecommunication
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  transparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+918452855328"
              className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
                transparent ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 9.92v2.1a1.4 1.4 0 01-1.526 1.4A13.86 13.86 0 016.044 11.27 13.65 13.65 0 011.83 7.056 13.86 13.86 0 01.683 1.54 1.4 1.4 0 012.076.007h2.1A1.4 1.4 0 015.376 1.21c.09.672.253 1.332.49 1.967a1.4 1.4 0 01-.315 1.477L4.664 5.54A11.2 11.2 0 008.86 9.733l.887-.889a1.4 1.4 0 011.477-.315c.635.237 1.295.4 1.967.49A1.4 1.4 0 0113 9.92z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              Call Us
            </a>
            <Link
              href="/#contact"
              className="bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg ${transparent ? 'text-white' : 'text-gray-700'}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h14M3 10h14M3 14h14" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white rounded-xl shadow-lg mt-2 p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-gray-700 hover:text-blue-600 py-2 px-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <a href="tel:+918452855328" className="text-sm font-medium text-gray-700 text-center py-2">
                Call Us
              </a>
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-600 text-white text-sm font-semibold text-center py-2.5 rounded-full"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
