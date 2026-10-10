/** Large, non-clickable banner image for a project overview page. */
function HeroImage({
    src,
    alt = '',
    className = '',
}: {
    src: string
    alt?: string
    className?: string
}) {
    return (
        <img
            src={src}
            alt={alt}
            className={`h-72 w-full rounded-xl border border-accent-200 object-cover ${className}`}
        />
    )
}

export default HeroImage
