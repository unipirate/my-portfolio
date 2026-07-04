import { profile } from '../data/profile'

function Footer() {
  return (
    <footer className="relative border-t border-space-700/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Three.js & Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-accent-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
