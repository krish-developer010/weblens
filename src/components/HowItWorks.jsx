export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Enter URL',
      description: 'Paste the URL of a public webpage.',
    },
    {
      number: '02',
      title: 'Extract',
      description: 'WebLens analyzes the webpage and identifies useful information.',
    },
    {
      number: '03',
      title: 'Explore',
      description: 'View, copy or export the extracted structured data.',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-100 mb-4">
            From URL to usable data.
          </h2>
          <p className="text-dark-400 text-lg">
            Three simple steps to extract valuable information.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-8 relative">
            {/* Timeline line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-dark-700 via-blue-500 to-dark-700 -z-10"></div>

            {steps.map((step, idx) => (
              <div key={step.number} className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-dark-800 border-2 border-blue-500 flex items-center justify-center relative z-10">
                    <span className="text-2xl font-bold text-blue-400">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-dark-100 mb-2">{step.title}</h3>
                <p className="text-dark-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-dark-800 border-2 border-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-blue-400">{step.number}</span>
                </div>
                <div className="w-0.5 h-12 bg-dark-700 mt-4"></div>
              </div>
              <div className="pb-4">
                <h3 className="text-lg font-semibold text-dark-100 mb-1">{step.title}</h3>
                <p className="text-dark-400 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
