const testimonials = [
  {
    id: 'arvind-syntel-authorized',
    quote:
      'M/s R. R. Telecommunication, Mumbai is an Authorized Channel Partner of Arvind Limited — Telecom Division for the sale, service and maintenance of all Syntel & NEC EPABX products. Syntel is the national distributor for NEC’s PNS range of solutions.',
    name: 'Arvind Limited — Telecom Division',
    role: 'SYNTEL Authorized Channel Partner',
    initials: 'AL',
    color: 'bg-blue-800',
  },
  {
    id: 'mumbai-police-west-2024',
    quote:
      'The Additional Commissioner of Police, West Regional Division, Mumbai, recognizes Mr. Rohidas Dalvi (Intercom Service) for commendable performance — the office intercom system was installed excellently, within the prescribed time and without delay.',
    name: 'Paramjit Singh Dahiya, IPS',
    role: 'Additional Commissioner of Police, West Region, Mumbai · January 2024',
    initials: 'PS',
    color: 'bg-slate-700',
  },
  {
    id: 'mumbai-police-north-2022',
    quote:
      'Mr. Rohidas Dalvi (Intercom Service) is commended for completing the installation of the office intercom system without delay, within the prescribed time, and in an excellent manner.',
    name: 'Virendra Mishra',
    role: 'Additional Commissioner of Police, North Regional Division, Mumbai · September 2022',
    initials: 'VM',
    color: 'bg-slate-700',
  },
]

function OfficialBadge() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="inline-flex items-center justify-center rounded-lg bg-blue-100 text-blue-800 p-1.5">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M4 2.5h8l1 3v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-7l1-3z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <path d="M4 6.5h8M6 9h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">Official recognition</span>
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
            Recognition and commendations from industry partners and public institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 rounded-2xl p-6 flex flex-col">
              <OfficialBadge />
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
