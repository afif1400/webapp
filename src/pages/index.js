import "../styles/index.css"
import * as React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Qualifications from "../components/Qualifications"
import Services from "../components/Services"

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
      </main>
    </div>
  )
}

export default IndexPage