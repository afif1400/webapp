import '../assets/swiper.css'
import "../styles/index.css"
import * as React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Qualifications from "../components/Qualifications"
import Services from "../components/Services"
import Projects from "../components/Projects"
import ProjectIdea from '../components/ProjectIdea'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const IndexPage = () => {
  const indexRef = React.useRef(null)


  React.useEffect(() => {
    if (window && indexRef.current) {
      const sections = document.querySelectorAll('section[id]')
      const scrollActive = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
          const sectionHeight = current.offsetHeight
          const sectionTop = current.offsetTop - 50
          let sectionId = current.getAttribute('id')

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
          } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
          }
        })
      }
      window.addEventListener('scroll', scrollActive)
    }
  })

  return (
    <div ref={indexRef}>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Qualifications />
        <Services />
        <Projects />
        <ProjectIdea />
        <Contact />
      </main>
      <Footer />
      <a href="#home" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </div>
  )
}

export default IndexPage