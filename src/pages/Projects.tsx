import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { projects } from '../data/projects'

function Projects() {
    return (
        <div className="mx-auto max-w-6xl px-6 py-16">
            <h1 className="text-3xl font-bold text-neutral-900">Projects</h1>
            <p className="mt-2 text-neutral-600">
                A selection of engineering projects and case studies.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        to={`/projects/${project.slug}`}
                        className="group overflow-hidden rounded-xl border border-accent-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                    >
                        <ImagePlaceholder
                            label="Project Image"
                            className="h-40 w-full rounded-none"
                        />
                        <div className="p-5">
                            <h2 className="text-lg font-semibold text-neutral-900 group-hover:text-accent-600">
                                {project.title}
                            </h2>
                            <p className="mt-2 text-sm text-neutral-600">
                                {project.tagline}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Projects
