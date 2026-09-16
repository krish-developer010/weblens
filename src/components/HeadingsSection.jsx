export default function HeadingsSection({ headings }) {
  const getIndentation = (level) => {
    return (level - 1) * 20
  }

  return (
    <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 md:p-8 mb-8">
      <h3 className="text-xl font-semibold text-dark-100 mb-6">Page Structure</h3>
      <div className="space-y-2 font-mono text-sm">
        {headings.map((heading, idx) => (
          <div
            key={idx}
            style={{ marginLeft: `${getIndentation(heading.level)}px` }}
            className="text-dark-300 py-2 px-3 rounded hover:bg-dark-700 transition-colors"
          >
            <span className="text-blue-400 font-semibold">H{heading.level}</span>
            <span className="ml-3 text-dark-100">{heading.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
