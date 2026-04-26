'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { PRODUCTS, CATEGORIES } from '../products/data'

function ActivitySpinner() {
  return (
    <div className="spinner" aria-hidden>
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="spinner-blade" />
      ))}
    </div>
  )
}

export default function ProductsCatalog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [loading, setLoading] = useState(false)

  const handleCategoryChange = useCallback((slug: string) => {
    if (slug === activeCategory) return
    setLoading(true)
    setTimeout(() => {
      setActiveCategory(slug)
      setLoading(false)
    }, 180)
  }, [activeCategory])

  const filtered =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.categorySlug === activeCategory)

  return (
    <>
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => {
              const count =
                cat.slug === 'all'
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.categorySlug === cat.slug).length
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.slug
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeCategory === cat.slug
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {loading ? (
          <div
            className="flex justify-center items-center py-32"
            role="status"
            aria-live="polite"
          >
            <span className="sr-only">Updating products</span>
            <ActivitySpinner />
          </div>
        ) : (
          <>
            <p className="text-gray-400 text-sm mb-6">
              Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
                >
                  <div className="aspect-square bg-gray-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                        {product.brand}
                      </span>
                      <span className="text-xs text-gray-400">{product.model}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-1 line-clamp-2 flex-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-400 mb-3">{product.category}</p>
                    <div className="flex items-center gap-1 text-blue-600 text-xs font-semibold group-hover:gap-2 transition-all">
                      View Details
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
