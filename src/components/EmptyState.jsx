import { Database } from 'lucide-react'

export default function EmptyState() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="bg-dark-800 border border-dark-700 rounded-lg p-12 text-center">
        <div className="flex justify-center mb-4">
          <Database size={48} className="text-dark-500" />
        </div>
        <p className="text-dark-400 text-lg">Your extracted data will appear here.</p>
      </div>
    </div>
  )
}
