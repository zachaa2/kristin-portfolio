export interface ProjectSection {
  slug: string
  title: string
  summary: string
  content: string
}

export interface Project {
  slug: string
  title: string
  tagline: string
  summary: string
  role: string
  timeframe: string
  tools: string[]
  sections: ProjectSection[]
}

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    tagline: 'A short one-line summary of the project.',
    summary:
      'High-level description of Project One. Explain the problem, the goal, and the outcome in a couple of sentences. This is placeholder content to be replaced with real project details.',
    role: 'Lead Mechanical Engineer',
    timeframe: '2023',
    tools: ['SolidWorks', 'ANSYS', 'MATLAB'],
    sections: [
      {
        slug: 'design',
        title: 'Design',
        summary: 'CAD modeling and design decisions.',
        content:
          'Placeholder detail content for the Design phase of Project One. Describe design iterations, constraints, and rationale here.',
      },
      {
        slug: 'analysis',
        title: 'Analysis',
        summary: 'Simulation and structural analysis.',
        content:
          'Placeholder detail content for the Analysis phase of Project One. Describe FEA, load cases, and results here.',
      },
      {
        slug: 'manufacturing',
        title: 'Manufacturing',
        summary: 'Fabrication and assembly process.',
        content:
          'Placeholder detail content for the Manufacturing phase of Project One. Describe processes, materials, and tolerances here.',
      },
      {
        slug: 'testing',
        title: 'Testing',
        summary: 'Validation and test results.',
        content:
          'Placeholder detail content for the Testing phase of Project One. Describe test setup, data, and conclusions here.',
      },
    ],
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    tagline: 'A short one-line summary of the project.',
    summary:
      'High-level description of Project Two. Explain the problem, the goal, and the outcome in a couple of sentences. This is placeholder content to be replaced with real project details.',
    role: 'Design Engineer',
    timeframe: '2022',
    tools: ['Fusion 360', 'Abaqus'],
    sections: [
      {
        slug: 'design',
        title: 'Design',
        summary: 'CAD modeling and design decisions.',
        content:
          'Placeholder detail content for the Design phase of Project Two.',
      },
      {
        slug: 'results',
        title: 'Results',
        summary: 'Final outcomes and reflections.',
        content:
          'Placeholder detail content for the Results phase of Project Two.',
      },
    ],
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    tagline: 'A short one-line summary of the project.',
    summary:
      'High-level description of Project Three. Explain the problem, the goal, and the outcome in a couple of sentences. This is placeholder content to be replaced with real project details.',
    role: 'Mechanical Engineer',
    timeframe: '2021',
    tools: ['SolidWorks', 'KeyShot'],
    sections: [
      {
        slug: 'overview',
        title: 'Overview',
        summary: 'Project background and goals.',
        content:
          'Placeholder detail content for the Overview section of Project Three.',
      },
    ],
  },
]

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}
