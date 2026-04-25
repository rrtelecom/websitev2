'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Do you provide installation along with the products?',
    a: 'Yes — we handle everything from supply to installation. For EPABX systems, CCTV cameras, and structured cabling, our team visits your site, installs the equipment, configures it, and walks you through usage before we leave.',
  },
  {
    q: 'Which brands do you deal in?',
    a: 'We are authorised dealers for NEC, Panasonic, Beetel, Hikvision, CP Plus, D-Link, Syntel, and Crystal. All products come with manufacturer warranty and we provide after-sales support.',
  },
  {
    q: 'Do you serve both homes and businesses?',
    a: 'Absolutely. We supply and install products for individual homeowners (landline phones, CCTV cameras) as well as offices, shops, warehouses, and corporate setups (EPABX systems, telephone systems, network cabling, surveillance).',
  },
  {
    q: 'Can you upgrade or expand an existing EPABX system?',
    a: 'Yes. We assess your current setup and recommend expansion cards or a new system depending on your requirement. We work with NEC SL2100, Syntel, and Crystal EPABX systems and can source compatible modules.',
  },
  {
    q: 'Do you offer Annual Maintenance Contracts (AMC)?',
    a: 'Yes, we offer AMC plans for EPABX systems and CCTV installations. Regular preventive maintenance and priority on-call support ensure your systems stay operational with minimal downtime.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We are based in Mumbai and serve clients across Maharashtra — from Mumbai and Pune to the Konkan coast. Whether you are in Thane, Nashik, Raigad, Ratnagiri, or anywhere in the state, contact us to discuss your requirement and we will arrange an on-site visit.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">FAQ</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-500">
            Common questions about our products, services, and coverage.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
              >
                <span className="text-gray-900 font-medium text-sm">{faq.q}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M5 7.5l5 5 5-5"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
