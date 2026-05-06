import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Certificates from './components/Certificates.jsx'
import Testimonials from './components/Testimonials.jsx'
import GitHubStats from './components/GitHubStats.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Certificates />
    <Testimonials /> 
    <GitHubStats /> 
    <Contact /> 
    <Footer />  
  </StrictMode>,
)
