import { profile } from './data/profile'
import './App.css'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#project', label: 'Project' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <nav className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-slate-600 hover:text-slate-900 font-medium text-sm"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero */}
        <section className="section-hero min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg md:text-xl text-slate-600 max-w-xl">
            {profile.tagline}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <h2 className="section-title">About</h2>
          <div className="max-w-2xl space-y-4 text-slate-600 leading-relaxed">
            {profile.summary.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Project */}
        <section id="project" className="section section-alt">
          <h2 className="section-title">Projects</h2>
          <div className="space-y-8 max-w-2xl">
            {profile.projects.map((proj, i) => (
              <div key={i}>
                <h3 className="font-semibold text-slate-900">{proj.title}</h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  {proj.company} · {proj.period}
                </p>
                <p className="text-slate-600 mt-2">{proj.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-slate-200 text-slate-700 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-slate-600 text-sm list-disc list-inside">
                  {proj.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                {proj.link && (
                  <p className="mt-3 text-sm">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-medium underline hover:text-slate-900"
                    >
                      View project →
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          <div className="space-y-8 max-w-2xl">
            {profile.experience.map((job, i) => (
              <div key={i}>
                <h3 className="font-semibold text-slate-900">{job.role}</h3>
                <p className="text-sm text-slate-500">
                  {job.period} · {job.company}
                </p>
                <ul className="mt-2 space-y-1 text-slate-600 text-sm list-disc list-inside">
                  {job.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Certifications */}
        <section id="skills" className="section">
          <h2 className="section-title">Skills & Certifications</h2>
          <div className="max-w-2xl space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-2">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.languages.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-2">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.frameworks.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-2">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.cloudDevOps.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-2">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.databases.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-2">Certifications</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                {profile.certifications.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="section section-alt">
          <h2 className="section-title">Education</h2>
          <div className="space-y-6 max-w-2xl">
            {profile.education.map((edu, i) => (
              <div key={i} className="border-l-2 border-slate-300 pl-5">
                <h3 className="font-semibold text-slate-900">{edu.degree}</h3>
                <p className="text-sm text-slate-500 mt-0.5">{edu.period}</p>
                <p className="text-slate-700">{edu.school}</p>
                <p className="text-sm text-slate-600">Major: {edu.major}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section section-alt">
          <h2 className="section-title">Contact</h2>
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600">
            <a href={`mailto:${profile.email}`} className="hover:text-slate-900">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="hover:text-slate-900">
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-sm text-slate-500 border-t border-slate-200">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}

export default App
