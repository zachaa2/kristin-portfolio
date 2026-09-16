export interface SectionImage {
  src: string
  caption?: string
}

export interface ProjectSection {
  slug: string
  title: string
  summary: string
  content: string
  images?: SectionImage[]
}

import originalPusherFaceDesign from '../assets/pie-pusher/original-pusher-face-design.png'
import firstIterationNewPusher from '../assets/pie-pusher/first-iteration-new-pusher.png'
import firstPrototype from '../assets/pie-pusher/first-prototype.png'
import finalPusherFaceDesigns from '../assets/pie-pusher/final-pusher-face-designs.png'

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
    slug: 'econocorp-coop',
    title: 'Econocorp Inc.',
    tagline: 'Mechanical Engineer Co-op — hands-on design, prototyping, and testing.',
    summary:
      'I worked at Econocorp from January to June 2025 as a Mechanical Engineer Co-op. My role encompassed CAD design, 3D-printed prototyping, hands-on assembly and testing, and close collaboration with floor technicians to solve real production problems. Explore a few of the projects I worked on below.',
    role: 'Mechanical Engineer Co-op',
    timeframe: 'Jan – Jun 2025',
    tools: ['SolidWorks', '3D Printing', 'Prototyping', 'GD&T'],
    sections: [
      {
        slug: 'pie-pusher-face',
        title: 'Pie Pusher Face',
        summary: 'Redesigning a machine part to fix pies sliding during packaging.',
        images: [
          { src: originalPusherFaceDesign, caption: 'Original Pusher Face Design' },
          { src: firstIterationNewPusher, caption: 'First Iteration of New Pie Pusher' },
          { src: firstPrototype, caption: 'First Pie Pusher Prototype' },
          { src: finalPusherFaceDesigns, caption: 'Final Pusher Face Designs' },
        ],
        content:
          "This is a smaller assignment I had that was really fun because it involved a lot of customization, prototyping, and communication with the floor technicians.\n\nThis project came to me quite last minute. It was a project that had belonged to another engineer but in these final testing stages it became a group effort. The original pusher face design was causing the pies to slide up and not be loaded correctly into its box.\n\nSince the machine was already in the testing phase, the workshop technicians had an idea of what they wanted the new pusher design to be. To have it 3D printed for prototyping, a digital 3D model was needed. That's where I came in!\n\nBased on the details described by the technicians, I took some measurements of the pie and created the first new prototype for the pie-pusher face. It was then 3D printed and installed on the machine to continue testing. During this testing, the technician noticed that due to natural inconsistencies with the pies (from food manufacturing) some of the pies would still lift by a very small amount. Which, while not visibly an issue, sometimes prevented the pies from fitting in the package. So, we came up with a solution to include a cover on top of the pusher face, dimensioning it so that the pusher face itself would not interfere with the pie entering the package either.\n\nAfter I added this additional feature to the design, the new design was 3D printed, underwent further testing, and was approved. The client actually had two different pie sizes. After the first design was successful, I modeled a second pusher face for a larger pie size, which included a cutout at the back of the profile since the pie was so large — it needed more space to fit comfortably in the pusher. The pusher could not just be made larger due to other dimensional restrictions of the rest of the machine and the package size.",
      },
      {
        slug: 'argoseal-pusher-faces',
        title: 'Argo Carton Sealer: Pusher Faces',
        summary: 'A change-parts order that uncovered an undocumented alignment issue.',
        content:
          "One of my first bigger projects at Econocorp actually started out as a simple change parts order.\n\nThe initial request from the client was for new pusher faces to install in their machine, that matched the profiles for the boxes of their products. The pusher face, as described by its name, is the feature on the machine that fits around the side of a box and guides (pushes) it through the machine to be glued and closed.\n\nWe received 4 different box types, but from the box dimensions, I decided only 3 pusher faces were needed as 2 of the boxes had the same height and width of opening. The three original prototypes were developed from a previously existing model. When I went to install the prototypes for testing, I realized that the dowel pin hole (middle hole) was misaligned with the hole on the machine.\n\nThrough further investigation, I realized that this was an issue that had been identified in a previous order, but the modifications were only made on the part itself with no drawing documentation to track it. I went ahead and did some quick models of different spacing for the dowel pin hole — the two options were a 1/32\" shift and a 1/16\" shift. Once a decision was made, I was able to document the necessary change in all my drawings.\n\nOnce that issue was sorted, the pusher face drawings were sent to the shop, and I received finalized parts for installation and use on the machine.",
      },
      {
        slug: 'argoseal-rail-redesign',
        title: 'Argo Carton Sealer: Rail Redesign',
        summary: 'A follow-on rail redesign to fix glue alignment across all box sizes.',
        content:
          "After completing the initial job request, I began final testing to make sure that as the boxes were being pushed through the Argoseal, the glue release alignment was correct. This testing made me aware of an issue with the dimensions of another feature on the machine. The rails on the machine that were meant to hold up the outer major flaps during glue application were too tall for one of the boxes. This meant that while the box was being pushed through the machine, the outer major flaps would either be crushed by the rails, or go under them and have glue applied on the outside.\n\nThe rails were an inventory part that would not need to be adjusted for new jobs. The original rail design had two rail options on either side, a taller set for bigger boxes and a shorter set for small boxes. However, one of the boxes provided by the client was too small even for the shorter option.\n\nI came up with a new rail design, with only one height option that was able to accommodate all the box sizes we needed it to. I modeled the new rails in SolidWorks, 3D printed them, and then installed the prints in the machine for testing. My new design maintained the symmetry of the original one, so one design could be used for both left and right rails, but also cut down on material usage since only one rail was needed.\n\nOnce the rails were tested with all the different box sizes they were sent to the shop for manufacturing. I installed the final parts and did some final adjustments for the glue sensors — the change in rail height meant the glue sensor position had to be readjusted to properly detect the box flap and release glue with the proper timing and position.",
      },
      {
        slug: 'hands-on-assembly',
        title: 'Hands-On Assembly & Testing',
        summary: 'Prototype assembly and sensor fixturing work on the shop floor.',
        content:
          "Beyond CAD and modeling, a lot of my work at Econocorp was hands-on. One of the engineers was working on a new prototype to revise a portion of an existing machine — she had already designed it and just needed it assembled for testing. I disassembled the previous prototype and assisted her in assembling the new one.\n\nAs part of the Argo Carton Sealer rail redesign, after designing the new rails I also had to adjust the sensors that detected the box flaps to tell the glue guns when to fire. I experimented with the extension of the sensor plate and the sensors themselves — the spacing had to be able to detect the box without getting in the way of the flaps.",
      },
      {
        slug: '3d-printer-guide',
        title: '3D Printer Guide',
        summary: 'A what-to-know guide for the team\u2019s first 3D printer.',
        content:
          "At around the time I joined Econocorp Inc., they were just about starting up their use of their first 3D printer — a Creality K1. They were looking to get all the engineers more familiar with 3D printing their own prototypes to optimize machine design. I was given the chance to explore the printer's settings and materials and come up with a quick what-to-know guide for my fellow employees.\n\nOne fun thing about this assignment was that I had actually never 3D printed before, so this was both a teaching and a learning experience for me. I printed several samples to go along with the guide, showcasing common infill patterns and support structures that one might be interested in using for a print.\n\nI felt it was necessary to include physical prints in this assignment because I believe giving the user a physical representation of their desired outcome is more effective than reading about it and looking at photos. For example, if you wanted to decide on what kind of support structure to use in your print, having already-printed examples of each gives you a sense of how easy it might be to remove the support structure afterward.",
      },
    ],
  },
  {
    slug: 'design-coursework',
    title: 'Design Coursework',
    tagline: 'Studio and studies exploring typography, composition, and UX.',
    summary:
      'A collection of design-focused coursework spanning typography, non-objective composition, and app UX — exploring the creative side of my Design major alongside my mechanical engineering work.',
    role: 'Design Student',
    timeframe: 'Fall 2023 – Fall 2024',
    tools: ['InDesign', 'Adobe XD', 'Painting'],
    sections: [
      {
        slug: 'type-specimen',
        title: 'Type Specimen',
        summary: 'A typeface study of "Le Monde Journal" for a Typography studio course.',
        content:
          'Type Specimen is a typeface study created in InDesign as part of my Fall 2024 Typography studio course. My study focuses on the "Le Monde Journal" typeface from Typofonderie, a French type foundry. The result of this study consists of three 5x7" postcards.',
      },
      {
        slug: 'non-objective-design',
        title: 'Non-objective Design',
        summary: 'Value studies exploring non-objective design.',
        content:
          'These pieces were part of a series studying different values and non-objective design from my Color and Composition class in Spring 2024. I sketched my own geometric design and recreated it using a custom black-white-gray value scale I sketched and printed, incorporating tones of black and white paint, solid color shades, and pointillism.',
      },
      {
        slug: 'transport-demo',
        title: 'TransporT Demo',
        summary: 'An app concept addressing unreliable Boston public bus timing.',
        content:
          "For my Design Processes and Practices class in Fall 2023, we were given the prompt to develop a demo for an app to address an issue of our choice. I chose to address the issue of unreliable timing of the public buses in Boston. The demo route is a real-life path I would take to volunteering weekly.\n\nMy app, TransporT, includes live bus tracking and real-time updates, along with a social component where users can share comments and updates about the status of a bus or station. This demo was created using Adobe XD and includes basic functionality such as limited search options and bus routes.",
      },
    ],
  },
  {
    slug: 'computer-case',
    title: 'Computer Case',
    tagline: 'A laser-cut laptop case for an SDG-focused engineering exhibit.',
    summary:
      "In my first-year Cornerstone of Engineering course, our final assignment was a team project to create an interactive and easily transportable exhibit to educate others on one of the UN's Sustainable Development Goals (SDGs). My team chose to focus on SDG 13: Climate Action, highlighting more sustainable and environmentally friendly farming practices.\n\nI sourced the wood and designed this laptop case to enhance the aesthetic appeal of our exhibit. After the case was laser cut in the First-Year Engineering Learning and Innovation Center, I assembled it. The laptop was used to showcase a build-your-own-farm game, so the design included button holes for the Arduino components and 3D-printed button caps.",
    role: 'Team Project — Cornerstone of Engineering',
    timeframe: 'First Year',
    tools: ['Laser Cutting', '3D Printing', 'Arduino'],
    sections: [],
  },
  {
    slug: 'crystal-structure-study',
    title: 'Crystal Structure Study',
    tagline: 'Modeling crystal structures and atomic parameters in SolidWorks.',
    summary:
      'During my Intro to Material Science class at Northeastern University in Spring 2024, I conducted a crystal structure modeling study using SolidWorks. This study also involved calculating the measurements and parameters of the atoms and the cells.',
    role: 'Student — Intro to Material Science',
    timeframe: 'Spring 2024',
    tools: ['SolidWorks'],
    sections: [],
  },
  {
    slug: 'photography',
    title: 'Photography',
    tagline: 'A newer creative outlet.',
    summary: 'Photography has become one of my newer creative outlets.',
    role: 'Personal Project',
    timeframe: 'Ongoing',
    tools: ['Photography'],
    sections: [],
  },
]

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}
