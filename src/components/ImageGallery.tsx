import { useState } from 'react'
import { X } from 'lucide-react'
import type { SectionImage } from '../data/projects'

/** Grid of photos with captions; click a photo to open a lightbox view. */
function ImageGallery({
  images,
  className = '',
}: {
  images: SectionImage[]
  className?: string
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  if (images.length === 0) return null

  const active = activeIndex !== null ? images[activeIndex] : null

  return (
    <>
      <div className={`grid grid-cols-2 gap-4 sm:grid-cols-4 ${className}`}>
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group flex flex-col overflow-hidden rounded-xl border border-accent-200 bg-accent-50 text-left"
          >
            <img
              src={image.src}
              alt={image.caption ?? ''}
              className="h-32 w-full object-cover transition-transform duration-200 group-hover:scale-105 sm:h-28"
            />
            {image.caption && (
              <span className="px-2 py-1.5 text-xs font-medium text-neutral-600">
                {image.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X size={20} />
          </button>
          <figure className="max-h-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.src}
              alt={active.caption ?? ''}
              className="max-h-[80vh] w-full rounded-lg object-contain"
            />
            {active.caption && (
              <figcaption className="mt-2 text-center text-sm text-neutral-200">
                {active.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  )
}

export default ImageGallery
