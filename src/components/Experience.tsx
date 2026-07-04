import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const monthMap: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
}

// Convert a period like "Feb 2026 – Present" into a sortable number from its start date.
function startKey(period: string): number {
  const start = period.split('–')[0].trim()
  const [mon, year] = start.split(' ')
  return Number(year) * 100 + (monthMap[mon] ?? 0)
}

type TimelineItem = {
  role: string
  company: string
  period: string
  detail?: string
  stack?: readonly string[]
  highlights?: readonly string[]
  sortKey: number
}

const timeline: TimelineItem[] = [
  ...profile.projects.map((p) => ({
    role: p.title,
    company: p.company,
    period: p.period,
    detail: p.description,
    stack: p.stack,
    sortKey: startKey(p.period),
  })),
  ...profile.experience.map((e) => ({
    role: e.role,
    company: e.company,
    period: e.period,
    highlights: e.highlights,
    sortKey: startKey(e.period),
  })),
].sort((a, b) => b.sortKey - a.sortKey)

function Experience() {
  return (
    <section
      id="experience"
      className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-28 scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <p className="text-accent-400 font-semibold tracking-widest uppercase text-xs">Experience</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink">
          My professional <span className="text-gradient">journey</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/60 via-indigo-accent/30 to-transparent md:left-1/2" />

        <div className="space-y-10">
          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  isLeft ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                }`}
              >
                {/* Node dot */}
                <span
                  className={`absolute top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 shadow-[0_0_16px_4px_rgba(139,92,246,0.6)] left-[9px] md:left-auto ${
                    isLeft ? 'md:-right-2' : 'md:-left-2'
                  }`}
                />
                <div className="glow-card p-6">
                  <h3 className="font-semibold text-ink">{item.role}</h3>
                  <p className="mt-0.5 text-sm text-accent-300">{item.period}</p>
                  <p className="text-sm text-ink-muted">{item.company}</p>

                  {item.detail && (
                    <p className="mt-2 text-sm text-ink-muted">{item.detail}</p>
                  )}

                  {item.stack && (
                    <div
                      className={`mt-3 flex flex-wrap gap-2 ${
                        isLeft ? 'md:justify-end' : ''
                      }`}
                    >
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-space-700/60 px-2.5 py-1 text-xs text-ink-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.highlights && (
                    <ul
                      className={`mt-3 space-y-1.5 text-sm text-ink-muted ${
                        isLeft ? 'md:text-right' : ''
                      }`}
                    >
                      {item.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
