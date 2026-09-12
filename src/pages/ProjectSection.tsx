import { Link, useOutletContext, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ImagePlaceholder from '../components/ImagePlaceholder'
import type { Project } from '../data/projects'

function ProjectSection() {
  const { project } = useOutletContext<{ project: Project }>()
  const { sectionId } = useParams()

  const index = project.sections.findIndex((s) => s.slug === sectionId)
  const section = project.sections[index]

  if (!section) {
    return <p className="text-neutral-600">Section not found.</p>
  }

  const prev = project.sections[index - 1]
  const next = project.sections[index + 1]

  return (
    <div>
      <h1 className="text-2xl font-bold text-neutral-900">{section.title}</h1>
      <p className="mt-2 text-neutral-600">{section.summary}</p>

      <ImagePlaceholder
        label={`${section.title} Image`}
        className="mt-6 h-64 w-full"
      />

      <p className="mt-6 text-neutral-700">{section.content}</p>

      <div className="mt-10 flex items-center justify-between border-t border-accent-100 pt-6">
        {prev ? (
          <Link
            to={`/projects/${project.slug}/${prev.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 hover:underline"
          >
            <ArrowLeft size={16} />
            {prev.title}
          </Link>
        ) : (
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 hover:underline"
          >
            <ArrowLeft size={16} />
            Overview
          </Link>
        )}

        {next && (
          <Link
            to={`/projects/${project.slug}/${next.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 hover:underline"
          >
            {next.title}
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProjectSection
