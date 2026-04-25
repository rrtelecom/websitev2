const testimonials = [
  {
    quote:
      "R.R. Telecommunication installed our NEC SL2100 EPABX with 20 extensions and the entire office was up and running the same day. Excellent service, clean wiring, and great after-sales support.",
    name: 'Rajesh Mehta',
    role: 'Office Manager, Andheri',
    initials: 'RM',
    color: 'bg-blue-600',
  },
  {
    quote:
      "We needed 8 Hikvision cameras installed across our warehouse. The team did a professional job — all cameras online with remote viewing set up within hours. Highly recommend.",
    name: 'Suresh Patil',
    role: 'Warehouse Owner, Kurla',
    initials: 'SP',
    color: 'bg-indigo-600',
  },
  {
    quote:
      "Bought Panasonic cordless phones for our home and the team helped us with the setup too. Very helpful and knowledgeable staff. Will come back for CCTV next month.",
    name: 'Priya Kulkarni',
    role: 'Homeowner, Bandra',
    initials: 'PK',
    color: 'bg-violet-600',
  },
  {
    quote:
      "They replaced our old telephone system with a Syntel EPABX and ran structured Cat 6 cabling throughout our three-floor office. On time, within budget, and everything works perfectly.",
    name: 'Amit Joshi',
    role: 'Business Owner, Malad',
    initials: 'AJ',
    color: 'bg-sky-600',
  },
  {
    quote:
      "Got CP Plus cameras for my shop. The pricing was very fair, the installation was neat, and they even showed me how to view the footage on my phone. Five stars without a doubt.",
    name: 'Dinesh Sawant',
    role: 'Retail Shop Owner, Borivali',
    initials: 'DS',
    color: 'bg-teal-600',
  },
  {
    quote:
      "R.R. Telecom has been our go-to vendor for all telecom needs for the past 4 years — from buying phones to maintaining our EPABX. They respond quickly and know their products well.",
    name: 'Kavita Shah',
    role: 'Admin Head, Corporate Office',
    initials: 'KS',
    color: 'bg-blue-700',
  },
]

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FBBF24">
          <path d="M7 1l1.65 3.35L12.5 4.85l-2.75 2.68.65 3.8L7 9.55l-3.4 1.78.65-3.8L1.5 4.85l3.85-.5L7 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Client Reviews
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Homes & Businesses Across Maharashtra
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            From single home phones to full office EPABX installations — here's what our clients say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 rounded-2xl p-6 flex flex-col">
              <StarRow />
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 ${t.color} rounded-full flex items-center justify-center shrink-0`}
                >
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <div className="text-gray-900 text-sm font-semibold">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
