import { Menu, X, Github } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-dark-700 bg-dark-900/80 backdrop-blur-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-bold text-lg text-dark-100 hidden sm:inline">WebLens</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-dark-300 hover:text-dark-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-300 hover:text-dark-100 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <button className="hidden sm:inline px-4 py-2 text-sm font-medium text-dark-100 border border-dark-600 rounded hover:bg-dark-800 transition-colors">
              Try WebLens
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-dark-300 hover:text-dark-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-dark-700 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-dark-300 hover:text-dark-100 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full px-4 py-2 text-sm font-medium text-dark-100 border border-dark-600 rounded hover:bg-dark-800 transition-colors">
              Try WebLens
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
