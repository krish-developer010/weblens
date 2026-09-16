export default function HeroVisual() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Webpage Card */}
        <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 hover:border-dark-600 transition-colors">
          <div className="text-xs font-semibold text-dark-400 mb-3">WEBPAGE</div>
          <div className="space-y-3">
            <div className="h-2 bg-dark-700 rounded w-3/4"></div>
            <div className="h-2 bg-dark-700 rounded w-full"></div>
            <div className="h-2 bg-dark-700 rounded w-5/6"></div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center text-dark-500">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="hidden md:block">
            <path d="M20 5v30m10-10l-10 10-10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="md:hidden">
            <path d="M5 20h30M25 10l10 10-10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Structured Data Card */}
        <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors font-mono text-xs">
          <div className="text-blue-400 mb-2">{'{'}</div>
          <div className="ml-2 space-y-1 text-dark-300">
            <div><span className="text-purple-400">"title"</span><span className="text-dark-400">:</span> <span className="text-green-400">"..."</span></div>
            <div><span className="text-purple-400">"author"</span><span className="text-dark-400">:</span> <span className="text-green-400">"..."</span></div>
            <div><span className="text-purple-400">"topics"</span><span className="text-dark-400">:</span> <span className="text-green-400">"..."</span></div>
          </div>
          <div className="text-blue-400">{'}'}</div>
        </div>
      </div>
    </div>
  )
}
