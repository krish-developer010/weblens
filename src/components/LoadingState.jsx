import { Loader2 } from 'lucide-react'
import { useState, useEffect } from 'react'

const messages = [
  'Fetching webpage...',
  'Analyzing page structure...',
  'Extracting content...',
  'Building structured data...',
]

export default function LoadingState() {
  const [message, setMessage] = useState(messages[0])
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length)
      setMessage(messages[(messageIndex + 1) % messages.length])
    }, 600)

    return () => clearInterval(interval)
  }, [messageIndex])

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-dark-800 border border-dark-700 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <Loader2 className="animate-spin text-blue-400" size={40} />
        </div>
        <p className="text-dark-300 text-lg mb-2 min-h-6">{message}</p>
        <div className="flex gap-1 justify-center mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
              style={{
                animationDelay: `${i * 200}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
