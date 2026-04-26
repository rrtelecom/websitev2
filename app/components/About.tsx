const details = [
  { label: 'CEO', value: 'Rohidas Dalvi' },
  { label: 'Nature of Business', value: 'Wholesale Trader & Service Provider' },
  { label: 'Year of Establishment', value: '2012' },
  { label: 'Legal Status', value: 'Individual – Proprietor' },
  { label: 'Total Employees', value: 'More than 10 People' },
  { label: 'Annual Turnover', value: '₹2.5 – 3 Crore' },
  { label: 'GST Number', value: '27AGXPD6985C1ZV' },
]

export default function About() {
  return (
    <section className="pt-28 pb-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div>
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
              About Us
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Maharashtra's Trusted Telecom Partner Since 2012
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Established in 2012, R.R. Telecommunication is the leading wholesale trader and service provider of Landline Phones, Cordless Phones, CCTV Cameras, EPABX Systems, and many more telecom and security products.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We serve housing societies, homeowners, and businesses across Maharashtra — from Mumbai and Pune to the Konkan coast — supplying equipment from top brands like NEC, Panasonic, Hikvision, CP Plus, Beetel, and D-Link, backed by professional installation and after-sales support.
            </p>

            {/* Quick trust signals */}
            <div className="flex flex-wrap gap-3">
              {['GST Registered', 'IndiaMART Verified', '5★ Rated', 'Since 2012'].map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Business details card */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-gray-900 font-bold text-base mb-6">Company Details</div>
            <div className="space-y-0 divide-y divide-gray-100">
              {details.map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-3.5">
                  <span className="text-gray-500 text-sm">{label}</span>
                  <span className="text-gray-900 text-sm font-semibold text-right max-w-[55%]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
