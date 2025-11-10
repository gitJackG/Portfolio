"use client"

import React, { useEffect } from 'react'
import gsap from "gsap"
import { InertiaPlugin } from "gsap/InertiaPlugin"

// 🖼️ Importing all images
import jsImg from "../images/3djs.png"
import tsImg from "../images/3dts.png"
import cppImg from "../images/3dcc.png"
import cImg from "../images/3dc.png"
import javaImg from "../images/3djava.png"
import mongoImg from "../images/3dmongo.png"
import sqlImg from "../images/3dsql.png"
import linuxImg from "../images/3dlinux.png"
import dockerImg from "../images/3ddocker.png"
import htmlImg from "../images/3dhtml.png"
import cssImg from "../images/3dcss.png"
import gitImg from "../images/3dgit.png"
import reactImg from "../images/3dreact.png"
import pythonImg from "../images/3dpython.png"
import nodeImg from "../images/3dnodejs.png"

export default function Page() {
  useEffect(() => {
    gsap.registerPlugin(InertiaPlugin)

    let oldX = 0, 
        oldY = 0, 
        deltaX = 0,
        deltaY = 0
    
    const root = document.querySelector('.grid1')
    root.addEventListener("mousemove", (e) => {
        deltaX = e.clientX - oldX
        deltaY = e.clientY - oldY
        oldX = e.clientX
        oldY = e.clientY
    })

    root.querySelectorAll('.media').forEach(el => {
        el.addEventListener('mouseenter', () => {
            const tl = gsap.timeline({ 
                onComplete: () => tl.kill()
            })
            tl.timeScale(1.2)
            
            const image = el.querySelector('img')
            tl.to(image, {
               inertia: {
                    x: { velocity: deltaX * 30, end: 0 },
                    y: { velocity: deltaY * 30, end: 0 },
                },
            })
            tl.fromTo(image, {
                rotate: 0
            }, {
                duration: 0.4,
                rotate: (Math.random() - 0.5) * 30,
                yoyo: true, 
                repeat: 1,
                ease: 'power1.inOut'
            }, '<')
        })
    })
  }, [])

  return (
    <div className="section-container">
      <h1 className="section-header">TECH STACK</h1>
      <section className="grid1">
        <div className="medias">
          <div className="media"><a href="https://www.javascript.com/" target="_blank"><img src={jsImg} alt="JavaScript" /></a></div>
          <div className="media"><a href="https://www.typescriptlang.org/" target="_blank"><img src={tsImg} alt="TypeScript" /></a></div>
          <div className="media"><a href="https://cplusplus.com/" target="_blank"><img src={cppImg} alt="C++" /></a></div>
          <div className="media"><a href="https://www.c-language.org/" target="_blank"><img src={cImg} alt="C Language" /></a></div>
          <div className="media"><a href="https://www.java.com/en/" target="_blank"><img src={javaImg} alt="Java" /></a></div>
          <div className="media"><a href="https://www.mongodb.com/" target="_blank"><img src={mongoImg} alt="MongoDB" /></a></div>
          <div className="media"><a href="https://www.mysql.com/" target="_blank"><img src={sqlImg} alt="MySQL" /></a></div>
          <div className="media"><a href="https://www.linux.org/" target="_blank"><img src={linuxImg} alt="Linux" /></a></div>
          <div className="media"><a href="https://www.docker.com/" target="_blank"><img src={dockerImg} alt="Docker" /></a></div>
          <div className="media"><a href="https://html.spec.whatwg.org/multipage/" target="_blank"><img src={htmlImg} alt="HTML" /></a></div>
          <div className="media"><a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank"><img src={cssImg} alt="CSS" /></a></div>
          <div className="media"><a href="https://git-scm.com/" target="_blank"><img src={gitImg} alt="Git" /></a></div>
          <div className="media"><a href="https://react.dev/" target="_blank"><img src={reactImg} alt="React" /></a></div>
          <div className="media"><a href="https://www.python.org/" target="_blank"><img src={pythonImg} alt="Python" /></a></div>
          <div className="media"><a href="https://nodejs.org/en" target="_blank"><img src={nodeImg} alt="Node.js" /></a></div>
        </div>
      </section>
    </div>
  )
}
