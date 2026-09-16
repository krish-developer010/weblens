import { Copy, Check, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function LinksSection({ links }) {
  const [copiedUrl, setCopiedUrl] = useState(null)

  const handleCopyUrl = async (url) => {
    await navigator.clipboard.writeText(url)
    setCopiedUrl(url)
    setTimeout(() => setCopiedUrl(null), 2000)
  }

  const internalLinks = links.filter((l) => l.type === 'internal')
  const externalLinks = links.filter((l) => l.type === 'external')

  const renderTable = (tableLinks, title) => (
    <div className="mb-8">
      <h4 className="text-sm font-semibold text-dark-400 uppercase tracking-wide mb-4">{title}</h4>
      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 px-4 text-dark-400 font-semibold">Type</th>
              <th className="text-left py-3 px-4 text-dark-400 font-semibold">Text</th>
              <th className="text-left py-3 px-4 text-dark-400 font-semibold">URL</th>
              <th className="text-right py-3 px-4 text-dark-400 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableLinks.map((link, idx) => (
              <tr key={idx} className="border-b border-dark-700 hover:bg-dark-700/50 transition-colors">
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                      link.type === 'internal'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-purple-500/20 text-purple-300'
                    }`}
                  >
                    {link.type === 'internal' ? 'Internal' : 'External'}
                  </span>
                </td>
                <td className="py-3 px-4 text-dark-300">{link.text}</td>
                <td className="py-3 px-4">
                  <code className="text-xs text-dark-400 break-all font-mono">{link.url}</code>
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    onClick={() => handleCopyUrl(link.url)}
                    className="p-1.5 text-dark-400 hover:text-dark-100 transition-colors"
                    title="Copy URL"
                  >
                    {copiedUrl === link.url ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 md:p-8 mb-8">
      <h3 className="text-xl font-semibold text-dark-100 mb-6">Extracted Links</h3>
      {renderTable(internalLinks, 'Internal Links')}
      {renderTable(externalLinks, 'External Links')}
      <div className="text-sm text-dark-400">
        Found {internalLinks.length} internal and {externalLinks.length} external links.
      </div>
    </div>
  )
}
