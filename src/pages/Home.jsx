import { useState, useRef, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HeroVisual from '../components/HeroVisual'
import UrlInput from '../components/UrlInput'
import FeatureCards from '../components/FeatureCards'
import HowItWorks from '../components/HowItWorks'
import StatsCards from '../components/StatsCards'
import PageOverview from '../components/PageOverview'
import HeadingsSection from '../components/HeadingsSection'
import ContentSection from '../components/ContentSection'
import LinksSection from '../components/LinksSection'
import ImagesSection from '../components/ImagesSection'
import JsonViewer from '../components/JsonViewer'
import LoadingState from '../components/LoadingState'
import EmptyState from '../components/EmptyState'
import Footer from '../components/Footer'
import { extractData } from '../data/mockData'

export default function Home() {
  const [extractedData, setExtractedData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const resultsRef = useRef(null)

  const handleExtract = async (url) => {
    setIsLoading(true)
    try {
      const data = await extractData(url)
      setExtractedData(data)
      // Scroll to results after a short delay to see the loading state
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } catch (error) {
      console.error('Extraction failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
        <UrlInput onExtract={handleExtract} isLoading={isLoading} />
        <HeroVisual />
      </section>

      {/* Features Section */}
      <FeatureCards />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Results Section */}
      <section ref={resultsRef} className="border-t border-dark-800 py-16 px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <LoadingState />
        ) : extractedData ? (
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-100 mb-4">Extraction Results</h2>
              <p className="text-dark-400">
                Extracted from: <span className="font-mono text-blue-400">{extractedData.url}</span>
              </p>
            </div>

            {/* Stats Cards */}
            <StatsCards stats={extractedData.stats} />

            {/* Page Overview */}
            <PageOverview data={extractedData} />

            {/* Headings */}
            <HeadingsSection headings={extractedData.headings} />

            {/* Content */}
            <ContentSection paragraphs={extractedData.paragraphs} />

            {/* Links */}
            <LinksSection links={extractedData.links} />

            {/* Images */}
            <ImagesSection images={extractedData.images} />

            {/* JSON Viewer */}
            <JsonViewer data={extractedData} />
          </div>
        ) : (
          <EmptyState />
        )}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
