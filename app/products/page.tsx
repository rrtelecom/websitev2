import Navbar from '../components/Navbar'
import ProductsCatalog from '../components/ProductsCatalog'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Product Catalogue
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Browse our full range of telecom and security products sourced from top brands — all
            available for purchase and professional installation across Maharashtra.
          </p>
        </div>
      </section>

      <main className="bg-gray-50 min-h-screen">
        <ProductsCatalog />
      </main>

      <ContactSection />
      <Footer />
    </>
  )
}
