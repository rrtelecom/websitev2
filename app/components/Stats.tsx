const stats = [
  { value: '2012', label: 'Est. in Maharashtra', sub: 'Over 13 years of expertise' },
  { value: '40+', label: 'Products', sub: 'Across 8 categories' },
  { value: '6', label: 'Top Brands', sub: 'NEC, Panasonic, Hikvision & more' },
  { value: '5★', label: 'IndiaMART Rating', sub: 'Trusted by hundreds of clients' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-blue-100 font-semibold text-sm mb-0.5">{stat.label}</div>
              <div className="text-blue-200 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
