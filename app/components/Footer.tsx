const links = {
  Products: [
    'EPABX Systems',
    'CCTV Cameras',
    'Landline Phones',
    'Cordless Phones',
    'Digital Phone Systems',
    'Networking Cable',
  ],
  Services: [
    'EPABX Installation',
    'CCTV Installation',
    'Telephone Wiring',
    'Network Cabling',
    'Annual Maintenance (AMC)',
    'System Upgrades',
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9h4M11 9h4M9 3v4M9 11v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="9" cy="9" r="2" fill="white" />
                </svg>
              </div>
              <span className="font-bold text-base leading-tight">R.R. Telecommunication</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-2">
              Maharashtra's trusted wholesale supplier and professional installer of telecom and security
              equipment since 2012 — from Pune to the Konkan coast.
            </p>
            <p className="text-slate-500 text-xs mb-5">
              Mumbai, Maharashtra — 400097
            </p>

            {/* IndiaMART badge */}
            <a
              href="https://www.indiamart.com/rr-telecommunication/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 transition-colors rounded-lg px-3 py-2"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect width="14" height="14" rx="3" fill="#16A34A" />
                <path d="M3 7l2.5 2.5L11 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-slate-300 text-xs font-medium">5★ on IndiaMART</span>
            </a>
          </div>

          {/* Contact */}
          <div>
            <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </div>
            <ul className="space-y-3">
              <li>
                <a href="tel:+918452855328" className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M13 9.92v2.1a1.4 1.4 0 01-1.526 1.4A13.86 13.86 0 016.044 11.27 13.65 13.65 0 011.83 7.056 13.86 13.86 0 01.683 1.54 1.4 1.4 0 012.076.007h2.1A1.4 1.4 0 015.376 1.21c.09.672.253 1.332.49 1.967a1.4 1.4 0 01-.315 1.477L4.664 5.54A11.2 11.2 0 008.86 9.733l.887-.889a1.4 1.4 0 011.477-.315c.635.237 1.295.4 1.967.49A1.4 1.4 0 0113 9.92z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  84528 55328
                </a>
              </li>
              <li>
                <a href="tel:+919869774328" className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M13 9.92v2.1a1.4 1.4 0 01-1.526 1.4A13.86 13.86 0 016.044 11.27 13.65 13.65 0 011.83 7.056 13.86 13.86 0 01.683 1.54 1.4 1.4 0 012.076.007h2.1A1.4 1.4 0 015.376 1.21c.09.672.253 1.332.49 1.967a1.4 1.4 0 01-.315 1.477L4.664 5.54A11.2 11.2 0 008.86 9.733l.887-.889a1.4 1.4 0 011.477-.315c.635.237 1.295.4 1.967.49A1.4 1.4 0 0113 9.92z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  98697 74328
                </a>
              </li>
              <li>
                <a href="mailto:contact@rrtelecommunications.com" className="text-slate-400 text-sm hover:text-white transition-colors break-all">
                  contact@rrtelecommunications.com
                </a>
              </li>
            </ul>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
                {heading}
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm">
            © 2026 R.R. Telecommunication. All rights reserved. · GST No: 27AGXPD6985C1ZV
          </div>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Use'].map((item) => (
              <a key={item} href="#" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">
                {item}
              </a>
            ))}
            <span className="text-slate-600 text-sm">
              Developed by{' '}
              <a
                href="https://www.linkedin.com/in/ameypandit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Amey Pandit
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
