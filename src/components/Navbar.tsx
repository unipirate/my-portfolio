import { useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(92%,56rem)]"
    >
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-space-900/70 px-5 py-2.5 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(124,58,237,0.4)]">
        <a href="#hero" className="text-sm font-bold tracking-tight text-ink">
          FG<span className="text-accent-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-ink-muted hover:text-ink transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex btn-glow rounded-full px-4 py-1.5 text-sm font-medium text-white"
        >
          Let's talk
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-ink"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-space-900/90 p-2 backdrop-blur-xl">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-ink-muted hover:bg-white/5 hover:text-ink"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  )
}

export default Navbar
