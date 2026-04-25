const categories = [
  {
    heading: 'Office Telephony',
    description: 'Complete communication infrastructure for your office — from the main EPABX unit to every desk phone.',
    items: [
      'NEC SL2100 EPABX System',
      'Syntel Neos EPABX System',
      'Crystal EPABX System',
      'NEC SL2100 Digital Phones',
      'Panasonic KX-TS500 / TS520 Desk Phones',
      'Panasonic KX-TG Series Cordless Phones',
      'Beetel Corded Landline Phones',
      'Professional Wiring & Installation',
    ],
    cta: 'Get Office Quote',
    highlight: false,
    label: 'Most Requested',
  },
  {
    heading: 'Security & Surveillance',
    description: 'End-to-end CCTV solutions for homes, shops, and offices — supply, installation, and configuration included.',
    items: [
      'Hikvision 5MP Outdoor Dual-Light Camera',
      'Hikvision 2MP Dome Camera',
      'CP Plus 5MP IR Bullet Camera',
      'CP Plus Weatherproof Outdoor Camera',
      'DVR / NVR Recording Units',
      'Remote Viewing Setup',
      'Cable Laying & Camera Mounting',
      'Annual Maintenance Contracts',
    ],
    cta: 'Get CCTV Quote',
    highlight: true,
    label: 'Popular Choice',
  },
  {
    heading: 'Home Connectivity',
    description: 'Reliable landline and cordless phones for homes — trusted brands, easy setup, clear audio.',
    items: [
      'Beetel M56 Caller ID Phone',
      'Beetel B11 / B26 Corded Phones',
      'Beetel X73 Cordless Phone',
      'Panasonic KX-TG3411 Cordless',
      'Panasonic KX-TG3821 Cordless',
      'D-Link Cat 6 Networking Cable',
      'Telephone Point Installation',
      'Home Wiring & Setup',
    ],
    cta: 'Get Home Quote',
    highlight: false,
    label: 'For Households',
  },
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx="8" cy="8" r="8" fill="#DBEAFE" />
      <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Product Categories
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need, All in One Place
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            We supply, install, and maintain — so you don't have to manage multiple vendors. Prices vary by requirement; contact us for a tailored quote.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.heading}
              className={`relative bg-white rounded-2xl p-8 ${
                cat.highlight ? 'ring-2 ring-blue-600 shadow-xl' : 'shadow-sm'
              }`}
            >
              {cat.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {cat.label}
                  </span>
                </div>
              )}
              {!cat.highlight && (
                <div className="inline-block bg-gray-100 text-gray-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {cat.label}
                </div>
              )}
              {cat.highlight && <div className="h-8" />}

              <h3 className="text-gray-900 font-bold text-xl mb-2">{cat.heading}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{cat.description}</p>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-full font-semibold text-sm transition-colors mb-7 ${
                  cat.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {cat.cta}
              </a>

              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-sm text-gray-700 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
