import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import Hero3D from './Hero3D'

function Hero() {
  return (
    <section
      id="hero"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-36 pb-20 md:pt-44 md:pb-28"
    >
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-8">
        {/* Left: text */}
        <div className="text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-space-800/60 px-4 py-1.5 text-xs font-medium text-accent-300 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            <span className="text-ink">Hi, I'm </span>
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-ink-muted max-w-xl mx-auto md:mx-0"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <a
              href="/FUQUAN%20GAO.pdf"
              download
              className="btn-glow inline-flex items-center rounded-xl px-6 py-3 text-white font-medium"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-accent-400/30 bg-space-800/40 px-6 py-3 text-ink font-medium backdrop-blur hover:border-accent-400/60 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex items-center justify-center md:justify-start gap-5 text-ink-muted text-sm"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-300 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-space-600">/</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-300 transition-colors"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Right: rotating 3D object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-0 rounded-full bg-accent-600/20 blur-3xl" />
          <Hero3D />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
