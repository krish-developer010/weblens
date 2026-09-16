import { Search, Loader2 } from 'lucide-react'
import { useState } from 'react'

export default function UrlInput({ onExtract, isLoading }) {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')

  const isValidUrl = (string) => {
    try {
      new URL(string)
      return true
    } catch (_) {
      return false
    }
  }

  const handleExtract = () => {
    setError('')
    if (!url.trim()) {
      setError('Please enter a URL')
      return
    }
    if (!isValidUrl(url)) {
      setError('Please enter a valid URL')
      return
    }
    onExtract(url)
  }

  const handleExampleClick = () => {
    setUrl('https://example.com/article')
    setError('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleExtract()
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      {/* Input Container */}
      <div className="relative mb-6">
        <div className="flex gap-2 flex-col sm:flex-row">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-500" size={20} />
            <input
              type="url"
              placeholder="https://example.com/article"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value)
                if (error) setError('')
              }}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 transition-colors"
            />
          </div>
          <button
            onClick={handleExtract}
            disabled={isLoading}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Scanning...
              </>
            ) : (
              'Extract Data'
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-3 p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
            {error}
          </div>
        )}
      </div>

      {/* Example Link */}
      <div className="text-center">
        <span className="text-dark-400 text-sm">Try an example: </span>
        <button
          onClick={handleExampleClick}
          disabled={isLoading}
          className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors disabled:opacity-50"
        >
          https://example.com/article
        </button>
      </div>
    </div>
  )
}
