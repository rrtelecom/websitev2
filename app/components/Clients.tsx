const clients = [
  { name: 'Indian Overseas Bank', src: '/clients/iob.jpeg' },
  { name: 'Mumbai Police', src: '/clients/mumbai-police.png' },
  { name: 'Waman Hari Pethe Jewels', src: '/clients/waman-hari-pethe.png' },
]

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2">
            Our Clients
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            Our Regular Clients Who Trusted Us
          </h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-10 py-6 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md transition-all"
            >
              <div className="h-24 flex items-center justify-center">
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-24 max-w-[200px] object-contain"
                />
              </div>
              <span className="text-gray-500 text-xs font-medium">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
