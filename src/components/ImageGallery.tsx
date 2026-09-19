import { useRef, useState, type TouchEvent } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { SectionImage } from '../data/projects'


function ImageGallery({
    images,
    className = '',
    variant = 'grid',
}: {
    images: SectionImage[]
    className?: string
    variant?: 'grid' | 'carousel'
}) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    if (images.length === 0) return null

    const active = activeIndex !== null ? images[activeIndex] : null

    return (
        <>
            {variant === 'carousel' ? (
                <Carousel
                    images={images}
                    className={className}
                    onExpand={setActiveIndex}
                />
            ) : (
                <div
                    className={`grid grid-cols-2 gap-4 sm:grid-cols-4 ${className}`}
                >
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
            )}

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
                    <figure
                        className="max-h-full max-w-3xl"
                        onClick={(e) => e.stopPropagation()}
                    >
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

/** One-at-a-time photo viewer with swipe, arrow, and dot navigation. */
function Carousel({
    images,
    className = '',
    onExpand,
}: {
    images: SectionImage[]
    className?: string
    onExpand: (index: number) => void
}) {
    const [index, setIndex] = useState(0)
    const touchStartX = useRef<number | null>(null)

    const goTo = (next: number) => {
        setIndex((next + images.length) % images.length)
    }

    const handleTouchStart = (e: TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
        if (touchStartX.current === null) return
        const deltaX = e.changedTouches[0].clientX - touchStartX.current
        const swipeThreshold = 40
        if (deltaX > swipeThreshold) goTo(index - 1)
        else if (deltaX < -swipeThreshold) goTo(index + 1)
        touchStartX.current = null
    }

    const image = images[index]

    return (
        <div className={className}>
            <div
                className="group relative overflow-hidden rounded-xl border border-accent-200 bg-accent-50"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <button
                    type="button"
                    onClick={() => onExpand(index)}
                    className="block w-full"
                >
                    <img
                        src={image.src}
                        alt={image.caption ?? ''}
                        className="h-64 w-full object-cover sm:h-96"
                    />
                </button>

                {images.length > 1 && (
                    <>
                        <button
                            type="button"
                            aria-label="Previous photo"
                            onClick={() => goTo(index - 1)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-1.5 text-neutral-800 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            type="button"
                            aria-label="Next photo"
                            onClick={() => goTo(index + 1)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-1.5 text-neutral-800 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </>
                )}
            </div>

            <div className="mt-2 flex items-center justify-between gap-4">
                {image.caption ? (
                    <span className="text-xs font-medium text-neutral-600">
                        {image.caption}
                    </span>
                ) : (
                    <span />
                )}
                {images.length > 1 && (
                    <div className="flex shrink-0 gap-1.5">
                        {images.map((img, i) => (
                            <button
                                key={img.src}
                                type="button"
                                aria-label={`Go to photo ${i + 1}`}
                                onClick={() => goTo(i)}
                                className={`h-2 w-2 rounded-full transition-colors ${
                                    i === index
                                        ? 'bg-accent-500'
                                        : 'bg-accent-200'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ImageGallery
