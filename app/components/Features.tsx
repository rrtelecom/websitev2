const solutions = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="6" width="20" height="14" rx="2" stroke="#2563EB" strokeWidth="2" />
        <path d="M8 6V4a2 2 0 014 0v2M6 12h2M10 12h8M6 15.5h6" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'EPABX Systems',
    description:
      'Streamline your office communication with NEC SL2100, Syntel Neos, and Crystal EPABX systems. Scalable solutions for small offices to large enterprises.',
    brands: 'NEC · Syntel · Crystal',
    badge: 'Office Communication',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="10" r="4" stroke="#2563EB" strokeWidth="2" />
        <path d="M5 20a7 7 0 0114 0" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="10" r="1.5" fill="#2563EB" />
      </svg>
    ),
    title: 'CCTV Installation',
    description:
      'End-to-end CCTV setup for housing societies, shops, and offices. We supply, mount, wire, and configure HD cameras from Hikvision and CP Plus with remote viewing.',
    brands: 'Hikvision · CP Plus',
    badge: 'Security & Surveillance',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#2563EB" strokeWidth="2" />
        <path d="M3 9h18M9 21V9" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'IP Configuration',
    description:
      'Professional IP address planning, device configuration, and network setup for EPABX, CCTV NVRs, VDP systems, and office equipment — done right the first time.',
    brands: 'NEC · Hikvision · D-Link',
    badge: 'Network Setup',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Networking',
    description:
      'Structured cabling, Cat 6 installation, switch configuration, and full LAN setup for offices of any size. Clean, organised, and tested to standard.',
    brands: 'D-Link',
    badge: 'Network Infrastructure',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="#2563EB" strokeWidth="2" />
        <circle cx="12" cy="8" r="2.5" stroke="#2563EB" strokeWidth="1.8" />
        <path d="M8 15h8M8 18h5" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'VDP Installation',
    description:
      'Video Door Phone systems for homes, apartments, and offices. We supply and install VDP units with clear video, two-way audio, and door-release integration.',
    brands: 'Multiple Brands',
    badge: 'Video Door Phone',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.04 1.23 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Telephone Systems',
    description:
      'Wide range of corded landlines, cordless phones, and digital systems for home and office. Trusted brands with clear audio and long-term reliability.',
    brands: 'Panasonic · Beetel · NEC',
    badge: 'Home & Office Phones',
  },
]

export default function Features() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
            What We Offer
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            End-to-End Telecom & Security Solutions
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Supply, installation, IP configuration, and after-sales support — everything under one roof for housing societies, offices, and businesses across Maharashtra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group bg-gray-50 hover:bg-blue-50 rounded-2xl p-7 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center mb-5 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm mb-4">{s.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">{s.brands}</span>
                <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {s.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
