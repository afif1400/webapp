import * as React from "react"
import "../styles/index.css"
import Header from "../components/Header"
import Hero from "../components/Hero"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Hero />
      </main>
    </div>
  )
}

export default IndexPage