import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const allSkills = [
  ...profile.skills.languages,
  ...profile.skills.frameworks,
  ...profile.skills.cloudDevOps,
  ...profile.skills.databases,
]

function CopyEmailCard() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <div className="glow-card flex flex-col justify-between p-6">
      <div>
        <p className="text-sm text-ink-muted">Get in touch</p>
        <p className="mt-2 text-lg font-semibold text-ink break-all">{profile.email}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="btn-glow mt-5 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white"
      >
        <motion.span
          key={copied ? 'copied' : 'copy'}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {copied ? 'Copied to clipboard' : 'Copy email address'}
        </motion.span>
      </button>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-accent-400 font-semibold tracking-widest uppercase text-xs">About Me</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink">
          A glimpse into <span className="text-gradient">who I am</span>
        </h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-3">
        {/* Summary - spans 2 cols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glow-card p-7 md:col-span-2"
        >
          <h3 className="text-lg font-semibold text-ink">My story</h3>
          <div className="mt-3 space-y-3 text-ink-muted leading-relaxed text-sm md:text-base">
            {profile.summary.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>

        {/* Copy email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <CopyEmailCard />
        </motion.div>

        {/* Location / status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glow-card p-7"
        >
          <h3 className="text-lg font-semibold text-ink">Based in</h3>
          <p className="mt-2 text-2xl font-bold text-gradient">Sydney & Melbourne, AU</p>
          <p className="mt-1 text-sm text-ink-muted">Open to remote & hybrid roles worldwide.</p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glow-card p-7 md:col-span-2"
        >
          <h3 className="text-lg font-semibold text-ink mb-4">Education</h3>
          <div className="space-y-4">
            {profile.education.map((edu, i) => (
              <div key={i} className="border-l-2 border-accent-500/40 pl-4">
                <p className="font-medium text-ink">{edu.degree}</p>
                <p className="text-sm text-accent-300">{edu.period}</p>
                <p className="text-sm text-ink-muted">{edu.school} · {edu.major}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glow-card mt-5 p-7"
      >
        <h3 className="text-lg font-semibold text-ink mb-4">Certifications</h3>
        <div className="flex flex-wrap gap-2">
          {profile.certifications.map((c, i) => (
            <span
              key={i}
              className="rounded-full border border-accent-400/20 bg-space-800/60 px-3 py-1.5 text-xs text-ink-muted"
            >
              {c}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Skills marquee */}
      <div className="mt-12">
        <p className="text-center text-xs uppercase tracking-widest text-ink-muted mb-5">
          Tech I work with
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-space-950 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-space-950 to-transparent z-10" />
          <div className="flex w-max animate-marquee gap-3">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-lg border border-space-600 bg-space-800/50 px-4 py-2 text-sm text-ink-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
