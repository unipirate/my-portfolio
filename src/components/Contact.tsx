import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Zero-config: open the visitor's mail client with a prefilled email.
    // To send silently instead, wire this up to EmailJS:
    //   1. npm i @emailjs/browser
    //   2. emailjs.send(SERVICE_ID, TEMPLATE_ID, { name, email, subject, message }, PUBLIC_KEY)
    const body = `From: ${name} (${email})\n\n${message}`
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  const inputClass =
    'w-full rounded-lg border border-space-600 bg-space-900/60 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/70 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 transition-colors'

  return (
    <section id="contact" className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="glow-card relative overflow-hidden p-8 md:p-12"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-600/25 blur-3xl" />

        <div className="relative text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
            Ready to take your digital presence
            <br className="hidden sm:block" /> to the <span className="text-gradient">next level?</span>
          </h2>
          <p className="mt-4 text-ink-muted max-w-xl mx-auto">
            Reach out and let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="relative grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Details */}
          <div className="space-y-4">
            {[
              { label: profile.email, href: `mailto:${profile.email}`, icon: '@' },
              { label: profile.phone, href: `tel:${profile.phone}`, icon: '☎' },
              { label: 'LinkedIn', href: profile.linkedin, icon: 'in', ext: true },
              { label: 'GitHub', href: profile.github, icon: 'GH', ext: true },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-3 text-ink-muted hover:text-accent-300 transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent-400/20 bg-space-800/60 text-sm font-semibold text-accent-300">
                  {item.icon}
                </span>
                <span className="break-all">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
            <input
              type="text"
              required
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputClass}
            />
            <textarea
              required
              rows={5}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="btn-glow w-full rounded-lg px-6 py-3 text-white font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
