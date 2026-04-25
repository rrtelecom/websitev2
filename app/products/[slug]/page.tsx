import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PRODUCTS } from '../data'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: `${product.name} — R.R. Telecommunication`,
    description: product.description,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) notFound()

  const related = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.slug !== product.slug
  ).slice(0, 4)

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-xs text-gray-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-blue-600 transition-colors">
                Products
              </Link>
              <span>/</span>
              <Link
                href={`/products?category=${product.categorySlug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-gray-600 font-medium truncate max-w-[200px]">
                {product.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Product detail */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            {/* Left: Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex items-center justify-center p-8 aspect-square lg:aspect-auto lg:min-h-[420px]">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[400px] max-w-full object-contain"
              />
            </div>

            {/* Right: Info */}
            <div className="flex flex-col">
              {/* Brand + category */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.brand}
                </span>
                <span className="text-gray-400 text-sm">{product.category}</span>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-2">
                {product.name}
              </h1>
              <p className="text-gray-400 text-sm mb-6">Model: {product.model}</p>

              <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

              {/* Specs table */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden mb-8">
                <div className="px-5 py-3 border-b border-gray-100 bg-gray-100">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Specifications
                  </span>
                </div>
                <div className="divide-y divide-gray-100">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between px-5 py-3">
                      <span className="text-sm text-gray-500">{spec.label}</span>
                      <span className="text-sm font-semibold text-gray-900 text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="flex-1 bg-blue-600 text-white font-bold text-center py-3.5 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Get a Quote
                </a>
                <a
                  href="tel:+918452855328"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14.67 11.28v2a1.33 1.33 0 01-1.45 1.33 13.18 13.18 0 01-5.11-1.82 12.98 12.98 0 01-3.42-3.42 13.18 13.18 0 01-1.82-5.13 1.33 1.33 0 011.32-1.32h2c.66 0 1.22.47 1.32 1.12.085.64.243 1.27.47 1.87a1.33 1.33 0 01-.3 1.4l-.85.85a10.67 10.67 0 004 4l.85-.85a1.33 1.33 0 011.4-.3c.6.228 1.23.386 1.87.47a1.33 1.33 0 011.17 1.35z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                  Call Us
                </a>
              </div>

              <p className="text-xs text-gray-400 mt-4">
                Price on request · Professional installation available across Maharashtra
              </p>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                More in {product.category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/products/${rel.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col"
                  >
                    <div className="aspect-square bg-gray-50 overflow-hidden">
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <span className="text-xs font-semibold text-blue-600">{rel.brand}</span>
                      <p className="text-xs font-medium text-gray-800 leading-snug mt-1 line-clamp-2">
                        {rel.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
