import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SpaceBackground = lazy(() => import('./components/SpaceBackground'))

function App() {
  return (
    <>
      <Suspense fallback={<div className="fixed inset-0 -z-10 bg-space-950" />}>
        <SpaceBackground />
      </Suspense>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
