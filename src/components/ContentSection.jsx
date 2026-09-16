import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function ContentSection({ paragraphs }) {
  const [copied, setCopied] = useState(false)
  const content = paragraphs.join('\n\n')

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 md:p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-dark-100">Extracted Content</h3>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-2 text-sm text-dark-300 hover:text-dark-100 border border-dark-600 rounded hover:bg-dark-700 transition-colors"
        >
          {copied ? (
            <>
              <Check size={16} />
              Copied
            </>
          ) : (
            <>
              <Copy size={16} />
              Copy Content
            </>
          )}
        </button>
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-hide">
        {paragraphs.map((para, idx) => (
          <p key={idx} className="text-dark-300 text-sm leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </div>
  )
}
