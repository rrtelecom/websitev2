import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-16 items-start">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                <span className="text-white text-sm font-medium">
                  Maharashtra-wide coverage · On-site visits · Pune to Konkan
                </span>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Ready to Set Up Your Telecom & Security System?
            </h2>
            <p className="text-lg text-blue-100 mb-10 max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
              Tell us what you need — EPABX, CCTV, phones, or cabling — and we'll get back with a free,
              no-obligation quote for your home or office.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
              <a
                href="tel:+918452855328"
                className="bg-white text-blue-700 font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14.67 11.28v2a1.33 1.33 0 01-1.45 1.33A13.18 13.18 0 017.1 12.4a12.98 12.98 0 01-3.42-3.42A13.18 13.18 0 011.4 2.8 1.33 1.33 0 012.72 1.34h2A1.33 1.33 0 016.06 2.5c.085.64.243 1.27.47 1.87a1.33 1.33 0 01-.3 1.4l-.85.85a10.67 10.67 0 004 4l.85-.85a1.33 1.33 0 011.4-.3c.6.228 1.23.386 1.87.47a1.33 1.33 0 011.17 1.35z" stroke="#1D4ED8" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                84528 55328
              </a>
              <a
                href="tel:+919869774328"
                className="bg-white text-blue-700 font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14.67 11.28v2a1.33 1.33 0 01-1.45 1.33A13.18 13.18 0 017.1 12.4a12.98 12.98 0 01-3.42-3.42A13.18 13.18 0 011.4 2.8 1.33 1.33 0 012.72 1.34h2A1.33 1.33 0 016.06 2.5c.085.64.243 1.27.47 1.87a1.33 1.33 0 01-.3 1.4l-.85.85a10.67 10.67 0 004 4l.85-.85a1.33 1.33 0 011.4-.3c.6.228 1.23.386 1.87.47a1.33 1.33 0 011.17 1.35z" stroke="#1D4ED8" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                98697 74328
              </a>
              <a
                href="mailto:contact@rrtelecommunications.com"
                className="text-white font-semibold px-8 py-3.5 rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors"
              >
                contact@rrtelecommunications.com
              </a>
            </div>

            <div className="pt-6 border-t border-white/15 mt-8 max-w-xl mx-auto lg:mx-0 flex flex-col sm:flex-row sm:items-start gap-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5 text-blue-300">
                <path d="M8 1.5A4.5 4.5 0 013.5 6c0 3 4.5 8.5 4.5 8.5S12.5 9 12.5 6A4.5 4.5 0 008 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
              <div>
                <p className="text-white text-sm font-medium">4th Floor, 406, Raj Chamber,</p>
                <p className="text-blue-200 text-sm">Manchu Bhai Road, Malad East,</p>
                <p className="text-blue-200 text-sm">Mumbai Suburban, Maharashtra — 400097</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 max-w-xl mx-auto lg:mx-0 mt-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5 text-blue-300 mx-auto sm:mx-0">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M8 4.75v3.25l2.25 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-blue-100 text-sm text-center sm:text-left">
                <span className="text-white font-medium">Office hours</span>
                <span className="text-blue-200"> · 10:30 AM – 8:30 PM</span>
              </p>
            </div>
            <p className="text-blue-200 text-sm mt-4 max-w-xl mx-auto lg:mx-0">
              Serving Maharashtra since 2012 · GST Registered · 5★ on IndiaMART
            </p>
          </div>

          <div className="w-full min-w-0 lg:sticky lg:top-24">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
