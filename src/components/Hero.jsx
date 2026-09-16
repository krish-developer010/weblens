import { Sparkles } from 'lucide-react'

export default function Hero({ onExampleClick }) {
  return (
    <div className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-700 bg-dark-800/50 mb-8">
          <Sparkles size={16} className="text-blue-400" />
          <span className="text-sm text-dark-300">Intelligent Web Data Extraction</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-dark-100">
          Turn Any Webpage Into{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Structured Data.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-dark-400 mb-12 max-w-2xl mx-auto">
          Extract titles, content, links, images, metadata and more from any public webpage — in seconds.
        </p>
      </div>
    </div>
  )
}
