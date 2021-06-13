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
  const indexRef = React.useRef()


  // React.useEffect(() => {
  //   if (indexRef.current) {
  //     const sections = document.querySelectorAll('section[id]')
  //     const scrollActive = () => {
  //       const scrollY = window.pageXOffset;

  //       sections.forEach(current => {
  //         const sectionHeight = current.offsetHeight
  //         const sectionTop = current.offsetTop = 50
  //         sectionId = current.getAttribute('id')
  //       })
  //     }

  //     window.addEventListener('scroll', scrollActive)
  //   }
  // })

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
        <Footer />
      </main>
    </div>
  )
}

export default IndexPage