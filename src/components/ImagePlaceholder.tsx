/** Simple stand-in for real images until final assets are ready. */
function ImagePlaceholder({
  label = 'Image',
  className = '',
}: {
  label?: string
  className?: string
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-dashed border-accent-200 bg-accent-50 text-sm font-medium text-accent-600 ${className}`}
    >
      {label}
    </div>
  )
}

export default ImagePlaceholder
