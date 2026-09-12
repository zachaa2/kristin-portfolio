import ImagePlaceholder from '../components/ImagePlaceholder'

const projects = [
  { id: 1, title: 'Project One', description: 'A brief description of the project goes here.' },
  { id: 2, title: 'Project Two', description: 'A brief description of the project goes here.' },
  { id: 3, title: 'Project Three', description: 'A brief description of the project goes here.' },
]

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-neutral-900">Projects</h1>
      <p className="mt-2 text-neutral-600">
        A selection of engineering projects and case studies.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden rounded-xl border border-accent-100 bg-white shadow-sm"
          >
            <ImagePlaceholder label="Project Image" className="h-40 w-full rounded-none" />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-neutral-900">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
