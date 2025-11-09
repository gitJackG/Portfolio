"use client"
import ModelCanvas from "@/app/components/ModelCanvas"
import TechStack from "@/app/components/TechStack"
import About from "@/app/components/About"
import Work from "@/app/components/Work"
import Projects from "@/app/components/Projects"
import CV from "@/app/components/CV"
import Contact from "@/app/components/Contact"

import {ReactLenis} from 'lenis/react';

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
