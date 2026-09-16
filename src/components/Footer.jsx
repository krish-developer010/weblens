import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-dark-800 bg-dark-900 py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Section */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">W</span>
              </div>
              <span className="font-bold text-dark-100">WebLens</span>
            </div>
            <p className="text-dark-400 text-sm">Turn webpages into structured data.</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row gap-8 md:justify-end">
            <div>
              <h4 className="text-sm font-semibold text-dark-100 mb-3">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-dark-400 hover:text-dark-100 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-dark-400 hover:text-dark-100 transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-dark-100 mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-dark-400 hover:text-dark-100 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-dark-400 hover:text-dark-100 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-dark-100 mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-dark-400 hover:text-dark-100 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-dark-400 hover:text-dark-100 transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-400">© 2026 WebLens. All rights reserved.</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-400 hover:text-dark-100 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
