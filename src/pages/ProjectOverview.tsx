import { Link, useOutletContext } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import type { Project } from '../data/projects'

function ProjectOverview() {
    const { project } = useOutletContext<{ project: Project }>()

    return (
        <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
                {project.timeframe} &middot; {project.role}
            </p>
            <h1 className="mt-1 text-3xl font-bold text-neutral-900">
                {project.title}
            </h1>
            <p className="mt-3 text-lg text-neutral-600">{project.tagline}</p>

            <ImagePlaceholder
                label="Project Hero Image"
                className="mt-6 h-72 w-full"
            />

            <p className="mt-6 whitespace-pre-line text-neutral-700">
                {project.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                    <span
                        key={tool}
                        className="rounded-full bg-accent-50 px-3 py-1 text-xs font-medium text-accent-700"
                    >
                        {tool}
                    </span>
                ))}
            </div>

            {project.sections.length > 0 && (
                <>
                    <h2 className="mt-10 text-xl font-semibold text-neutral-900">
                        Explore this project
                    </h2>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {project.sections.map((section) => (
                            <Link
                                key={section.slug}
                                to={`/projects/${project.slug}/${section.slug}`}
                                className="group rounded-xl border border-accent-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <h3 className="font-semibold text-neutral-900 group-hover:text-accent-600">
                                    {section.title}
                                </h3>
                                <p className="mt-1 text-sm text-neutral-600">
                                    {section.summary}
                                </p>
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default ProjectOverview
