import ImagePlaceholder from '../components/ImagePlaceholder'

function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-neutral-900">About</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
        <ImagePlaceholder label="About Photo" className="h-80" />
        <div className="space-y-4 text-neutral-700">
          <p>
            Placeholder bio text. Kristin is a mechanical engineer with
            experience in design, prototyping, and manufacturing.
          </p>
          <p>
            Add education, skills, and career highlights here once content is
            ready.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
