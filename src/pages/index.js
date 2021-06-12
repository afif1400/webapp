import '../styles/swiper.css'
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

const IndexPage = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Qualifications />
        <Services />
        <Projects />
        <ProjectIdea />
      </main>
    </div>
  )
}

export default IndexPage