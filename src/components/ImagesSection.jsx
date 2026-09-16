export default function ImagesSection({ images }) {
  return (
    <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 md:p-8 mb-8">
      <h3 className="text-xl font-semibold text-dark-100 mb-6">Extracted Images</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, idx) => (
          <div key={idx} className="bg-dark-700 rounded-lg overflow-hidden border border-dark-600 hover:border-dark-500 transition-colors">
            <div className="aspect-video bg-dark-600 flex items-center justify-center overflow-hidden">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23202020%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23606060%22 font-size=%2216%22%3EImage not available%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>
            <div className="p-3">
              <p className="text-xs font-semibold text-dark-400 uppercase tracking-wide mb-2">Alt Text</p>
              <p className="text-sm text-dark-300 mb-3 line-clamp-2">{image.alt}</p>
              <p className="text-xs font-semibold text-dark-400 uppercase tracking-wide mb-2">URL</p>
              <a
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 break-all font-mono line-clamp-2 transition-colors"
              >
                {image.url}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
