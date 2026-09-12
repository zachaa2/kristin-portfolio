import ImagePlaceholder from '../components/ImagePlaceholder'

function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-neutral-900">About</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
        <ImagePlaceholder label="About Photo" className="h-80" />
        <div className="space-y-4 text-neutral-700">
          <p>
            Hello! My name is Kristin Zachariah, and I am a fourth year
            Mechanical Engineering and Design major at Northeastern
            University. I have always loved working with my hands and
            creating things. I believe my combined major has given me the
            opportunity to experience the best of both worlds, fueling my
            passion for creative thinking and ideation as well as 2D/3D
            modeling and component manufacturing.
          </p>
          <p>
            My enthusiasm for exploring the intersection of engineering and
            design has helped me become a fast learner, continuously
            improving my skill set for any task I might face.
          </p>
          <p className="text-sm font-medium text-accent-600">Boston, MA</p>
        </div>
      </div>
    </div>
  )
}

export default About
