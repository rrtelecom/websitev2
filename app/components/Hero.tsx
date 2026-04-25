export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse inline-block" />
            <span className="text-blue-300 text-sm font-medium">
              Serving Homes & Businesses Across Maharashtra Since 2012
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Complete Telecom &{' '}
              <span className="text-blue-400">Security Solutions</span>
            </h1>
            <p className="text-lg text-slate-300 mb-4 max-w-lg leading-relaxed">
              Maharashtra's leading supplier and installer of EPABX systems, CCTV cameras, landline phones,
              and networking equipment — from Pune to the Konkan coast.
            </p>
            <p className="text-sm text-slate-400 mb-8">
              Authorised dealer for{' '}
              <span className="text-slate-200 font-medium">NEC · Panasonic · Hikvision · CP Plus · Beetel · D-Link</span>
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-blue-500 transition-colors"
              >
                Get a Free Quote
              </a>
              <a
                href="#solutions"
                className="flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              >
                Explore Solutions
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-white">13+</div>
                <div className="text-slate-400 text-sm mt-0.5">Years in Business</div>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div>
                <div className="text-3xl font-bold text-white">40+</div>
                <div className="text-slate-400 text-sm mt-0.5">Products</div>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">5</span>
                  <span className="text-yellow-400 text-lg">★</span>
                </div>
                <div className="text-slate-400 text-sm mt-0.5">Rated on IndiaMART</div>
              </div>
            </div>
          </div>

          {/* Right: System dashboard mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-blue-600/25 blur-3xl rounded-full scale-75 pointer-events-none" />

              {/* Device frame */}
              <div
                className="relative w-64 bg-slate-800 rounded-[2.5rem] border-4 border-slate-600 shadow-2xl overflow-hidden"
                style={{ height: '520px' }}
              >
                {/* Dynamic island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

                {/* Screen */}
                <div className="h-full bg-slate-900 pt-11 px-4 pb-4 overflow-hidden">
                  <div className="text-slate-400 text-xs">R.R. Telecom Dashboard</div>
                  <div className="text-white font-bold text-base mb-3">System Overview</div>

                  {/* EPABX status card */}
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-4 mb-3">
                    <div className="text-blue-200 text-xs mb-1">EPABX — NEC SL2100</div>
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <div className="text-white font-bold text-xl">24 / 32</div>
                        <div className="text-blue-200 text-xs">Extensions Active</div>
                      </div>
                      <div className="text-green-300 text-xs font-semibold">Online</div>
                    </div>
                    <div className="bg-blue-900/50 rounded-full h-1.5">
                      <div className="bg-white/80 rounded-full h-1.5 w-3/4" />
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-slate-800 rounded-xl p-3">
                      <div className="text-slate-400 text-xs mb-0.5">CCTV Cameras</div>
                      <div className="text-white text-sm font-semibold">8 Online</div>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-3">
                      <div className="text-slate-400 text-xs mb-0.5">Calls Today</div>
                      <div className="text-white text-sm font-semibold">147</div>
                    </div>
                  </div>

                  {/* Phones */}
                  <div className="bg-slate-800 rounded-xl p-3 mb-3">
                    <div className="text-slate-400 text-xs mb-2">Connected Phones</div>
                    <div className="flex justify-between">
                      <div>
                        <div className="text-white text-sm font-semibold">12 Wired</div>
                        <div className="text-slate-500 text-xs">Panasonic</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white text-sm font-semibold">8 Cordless</div>
                        <div className="text-slate-500 text-xs">Beetel</div>
                      </div>
                    </div>
                  </div>

                  {/* Last service */}
                  <div className="bg-emerald-900/30 border border-emerald-700/30 rounded-xl p-3">
                    <div className="flex justify-between">
                      <div className="text-slate-400 text-xs">Last Serviced</div>
                      <div className="text-emerald-400 text-xs">All Clear</div>
                    </div>
                    <div className="text-white font-semibold text-sm">Today, 10:30 AM</div>
                  </div>
                </div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -right-4 top-16 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">Installation Done</div>
                  <div className="text-xs text-gray-500">CCTV + EPABX</div>
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -left-10 bottom-24 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="2" y="4" width="10" height="7" rx="1.5" stroke="#2563EB" strokeWidth="1.3" />
                    <path d="M5 4V3a2 2 0 014 0v1" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">Hikvision</div>
                  <div className="text-xs text-blue-600 font-semibold">Authorised Dealer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
