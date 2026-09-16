import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { getProject } from '../data/projects'

function ProjectLayout() {
    const { projectId } = useParams()
    const project = getProject(projectId)

    if (!project) {
        return (
            <div className="mx-auto max-w-6xl px-6 py-16">
                <p className="text-neutral-600">Project not found.</p>
                <Link
                    to="/projects"
                    className="text-accent-600 hover:underline"
                >
                    Back to projects
                </Link>
            </div>
        )
    }

    return (
        <div className="mx-auto max-w-6xl px-6 py-16">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
                <Link to="/projects" className="hover:text-accent-600">
                    Projects
                </Link>
                <ChevronRight size={14} />
                <span className="font-medium text-neutral-700">
                    {project.title}
                </span>
            </nav>

            <div className="grid gap-10 md:grid-cols-[220px_1fr]">
                {/* Persistent section nav */}
                <aside className="md:sticky md:top-24 md:self-start">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        {project.title}
                    </p>
                    <ul className="flex flex-row flex-wrap gap-2 md:flex-col md:gap-1">
                        <li>
                            <NavLink
                                to={`/projects/${project.slug}`}
                                end
                                className={({ isActive }) =>
                                    `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-accent-500 text-white'
                                            : 'text-neutral-700 hover:bg-accent-50'
                                    }`
                                }
                            >
                                Overview
                            </NavLink>
                        </li>
                        {project.sections.map((section) => (
                            <li key={section.slug}>
                                <NavLink
                                    to={`/projects/${project.slug}/${section.slug}`}
                                    className={({ isActive }) =>
                                        `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                            isActive
                                                ? 'bg-accent-500 text-white'
                                                : 'text-neutral-700 hover:bg-accent-50'
                                        }`
                                    }
                                >
                                    {section.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Section content */}
                <div>
                    <Outlet context={{ project }} />
                </div>
            </div>
        </div>
    )
}

export default ProjectLayout
