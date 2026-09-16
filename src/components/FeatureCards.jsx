import { FileText, Type, Image, Link2, Braces, Download } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Page Metadata',
    description: 'Extract title, description, author, publication date and other metadata.',
  },
  {
    icon: Type,
    title: 'Content Extraction',
    description: 'Extract headings, paragraphs and important textual content.',
  },
  {
    icon: Image,
    title: 'Media Detection',
    description: 'Identify images, image URLs and available media.',
  },
  {
    icon: Link2,
    title: 'Link Analysis',
    description: 'Extract internal and external links from the webpage.',
  },
  {
    icon: Braces,
    title: 'Structured JSON',
    description: 'Convert extracted information into clean structured JSON.',
  },
  {
    icon: Download,
    title: 'Export Data',
    description: 'Export extracted information as JSON or CSV.',
  },
]

export default function FeatureCards() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-100 mb-4">
            Everything you need to understand a webpage.
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Comprehensive data extraction and analysis tools built for developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 bg-dark-800 border border-dark-700 rounded-lg hover:border-dark-600 hover:bg-dark-800/80 transition-all duration-300 group"
              >
                <div className="mb-4 inline-flex p-3 bg-dark-700 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={24} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-dark-100 mb-2">{feature.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
