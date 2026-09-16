import { Copy, Check, Download } from 'lucide-react'
import { useState } from 'react'

export default function JsonViewer({ data }) {
  const [copied, setCopied] = useState(false)
  const jsonString = JSON.stringify(data, null, 2)

  const handleCopyJson = async () => {
    await navigator.clipboard.writeText(jsonString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadJson = () => {
    const element = document.createElement('a')
    element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(jsonString))
    element.setAttribute('download', 'extracted-data.json')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 md:p-8 mb-8">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h3 className="text-xl font-semibold text-dark-100">Structured Data</h3>
        <div className="flex gap-2">
          <button
            onClick={handleCopyJson}
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
                Copy JSON
              </>
            )}
          </button>
          <button
            onClick={handleDownloadJson}
            className="flex items-center gap-2 px-3 py-2 text-sm text-dark-300 hover:text-dark-100 border border-dark-600 rounded hover:bg-dark-700 transition-colors"
          >
            <Download size={16} />
            Download
          </button>
        </div>
      </div>
      <div className="bg-dark-900 rounded border border-dark-700 p-4 font-mono text-xs text-dark-300 overflow-x-auto scrollbar-hide max-h-96 overflow-y-auto">
        <pre className="whitespace-pre-wrap break-words">
          <code className="text-green-400">{jsonString}</code>
        </pre>
      </div>
    </div>
  )
}
