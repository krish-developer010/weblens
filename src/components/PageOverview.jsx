export default function PageOverview({ data }) {
  const fields = [
    { label: 'Title', value: data.title },
    { label: 'Description', value: data.description },
    { label: 'Author', value: data.author },
    { label: 'Published', value: data.publishedDate },
    { label: 'Page Type', value: data.pageType },
    { label: 'Language', value: data.language },
  ]

  return (
    <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 md:p-8 mb-8">
      <h3 className="text-xl font-semibold text-dark-100 mb-6">Page Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.label}>
            <label className="text-xs font-semibold text-dark-400 uppercase tracking-wide mb-2 block">
              {field.label}
            </label>
            <div className="text-dark-100 break-words">{field.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-dark-700">
        <label className="text-xs font-semibold text-dark-400 uppercase tracking-wide mb-2 block">
          URL
        </label>
        <div className="text-blue-400 break-all font-mono text-sm hover:text-blue-300 transition-colors">
          {data.url}
        </div>
      </div>
    </div>
  )
}
