function Footer() {
    return (
        <footer className="border-t border-accent-100 bg-accent-50/40 py-6">
            <div className="mx-auto max-w-6xl px-6 text-center text-sm text-neutral-600">
                &copy; {new Date().getFullYear()} Kristin — Mechanical Engineer.
                All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
