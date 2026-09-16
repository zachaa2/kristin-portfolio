import { Mail, Link as LinkIcon } from 'lucide-react'

function Contact() {
    return (
        <div className="mx-auto max-w-6xl px-6 py-16">
            <h1 className="text-3xl font-bold text-neutral-900">Contact</h1>
            <p className="mt-2 text-neutral-600">
                Feel free to reach out for opportunities or collaborations.
            </p>

            <div className="mt-8 flex flex-col gap-4">
                <a
                    href="mailto:kristin.zachariah@gmail.com"
                    className="inline-flex w-fit items-center gap-2 text-neutral-700 hover:text-accent-600"
                >
                    <Mail size={20} />
                    kristin.zachariah@gmail.com
                </a>
                <a
                    href="https://linkedin.com/in/kristin-zachariah"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 text-neutral-700 hover:text-accent-600"
                >
                    <LinkIcon size={20} />
                    linkedin.com/in/kristin-zachariah
                </a>
            </div>
        </div>
    )
}

export default Contact
