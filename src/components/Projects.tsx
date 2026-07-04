import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/profile'

const filters = ['All', 'Web', 'Mobile'] as const
type Filter = (typeof filters)[number]

function Projects() {
  const [filter, setFilter] = useState<Filter>('All')

  const visible = profile.projects.filter(
    (p) => filter === 'All' || p.category === filter,
  )

  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <p className="text-accent-400 font-semibold tracking-widest uppercase text-xs">Projects</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink">
          Things I've <span className="text-gradient">built</span>
        </h2>
      </motion.div>

      {/* Filters */}
      <div className="mb-10 flex justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              filter === f
                ? 'btn-glow text-white'
                : 'border border-space-600 bg-space-800/50 text-ink-muted hover:border-accent-400/50 hover:text-ink'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((proj) => (
            <motion.article
              key={proj.company}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="glow-card flex flex-col p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-ink">{proj.title}</h3>
                  <p className="mt-0.5 text-sm text-accent-300">
                    {proj.company} · {proj.period}
                  </p>
                </div>
                <span className="flex-shrink-0 rounded-full border border-accent-400/30 bg-accent-600/10 px-2.5 py-1 text-xs font-medium text-accent-300">
                  {proj.category}
                </span>
              </div>

              <p className="mt-3 text-sm text-ink-muted">{proj.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {proj.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-space-700/60 px-2.5 py-1 text-xs text-ink-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-ink-muted list-disc list-inside marker:text-accent-500">
                {proj.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>

              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-300 hover:text-accent-400"
                >
                  View project →
                </a>
              )}
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
