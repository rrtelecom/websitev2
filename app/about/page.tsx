import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import About from '../components/About'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'About Us — R.R. Telecommunication',
  description:
    'Established in 2012 — wholesale trader and installer of EPABX, CCTV, landline phones, and networking equipment across Maharashtra.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
      <ContactSection />
      <Footer />
    </>
  )
}
