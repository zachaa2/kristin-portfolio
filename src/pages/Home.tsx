import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'

function Home() {
    return (
        <div className="mx-auto max-w-6xl px-6 py-16">
            <section className="grid gap-10 md:grid-cols-2 md:items-center">
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent-600">
                        Mechanical Engineering &amp; Design
                    </p>
                    <h1 className="text-4xl font-bold text-neutral-900 sm:text-5xl">
                        Hi, I&apos;m Kristin Zachariah.
                    </h1>
                    <p className="mt-4 text-lg text-neutral-600">
                        I&apos;m a fourth-year Mechanical Engineering and Design
                        major at Northeastern University, passionate about
                        creative ideation as well as 2D/3D modeling and
                        component manufacturing. Take a look at my projects and
                        background below.
                    </p>
                    <Link
                        to="/projects"
                        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-3 font-medium text-white transition-colors hover:bg-accent-600"
                    >
                        View Projects
                        <ArrowRight size={18} />
                    </Link>
                </div>
                <ImagePlaceholder
                    label="Portrait / Hero Image"
                    className="h-80"
                />
            </section>
        </div>
    )
}

export default Home
