export default function StatsCards({ stats }) {
  const cards = [
    { label: 'Words', value: stats.words, icon: '📄' },
    { label: 'Links', value: stats.links, icon: '🔗' },
    { label: 'Images', value: stats.images, icon: '🖼️' },
    { label: 'Headings', value: stats.headings, icon: '📑' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {cards.map((card) => (
        <div
          key={card.label}
          className="p-4 bg-dark-800 border border-dark-700 rounded-lg hover:border-dark-600 transition-colors"
        >
          <div className="text-2xl mb-2">{card.icon}</div>
          <div className="text-3xl font-bold text-dark-100 mb-1">{card.value}</div>
          <div className="text-xs text-dark-400">{card.label}</div>
        </div>
      ))}
    </div>
  )
}
