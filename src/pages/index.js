import "../styles/index.css"
import * as React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  )
}

export default IndexPage