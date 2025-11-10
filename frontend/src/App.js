import ModelCanvas from "./components/ModelCanvas"
import TechStack from "./components/TechStack"
import About from "./components/About"
import Work from "./components/Work"
import Projects from "./components/Projects"
import CV from "./components/CV"

import {ReactLenis} from 'lenis/react';
import "./styles/global.css"

import React, { useEffect } from 'react'

export default function page() {
  return (
   <main className="page">
    <ReactLenis root/>
    <section id="home" className="section section-dark">
      <ModelCanvas/>
    </section>
    <section id="about" className="section section-gray">
      <About/>
    </section>
    <section id="work" className="section section-dark">
      <Work/>
    </section>
    <section id="projects" className="section section-gray">
      <Projects/>
    </section>
    <section id="tech" className="section section-gray">
      <TechStack/>
    </section>
    <section id="cv" className="section section-dark">
      <CV/>
    </section>
   </main>
  )
}
