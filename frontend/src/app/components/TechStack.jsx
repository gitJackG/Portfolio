"use client"

import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import { InertiaPlugin } from "gsap/InertiaPlugin";

export default function page() {
  useEffect(()=>{
    gsap.registerPlugin(InertiaPlugin)

    let oldX = 0, 
        oldY = 0, 
        deltaX = 0,
        deltaY = 0
    
    const root = document.querySelector('.grid1')
    root.addEventListener("mousemove", (e) => {
        // Calculate horizontal movement since the last mouse position
        deltaX = e.clientX - oldX;

        // Calculate vertical movement since the last mouse position
        deltaY = e.clientY - oldY;

        // Update old coordinates with the current mouse position
        oldX = e.clientX;
        oldY = e.clientY;
    })

    root.querySelectorAll('.media').forEach(el => {

        // Add an event listener for when the mouse enters each media
        el.addEventListener('mouseenter', () => {
            
            const tl = gsap.timeline({ 
                onComplete: () => {
                    tl.kill()
                }
            })
            tl.timeScale(1.2) // Animation will play 20% faster than normal
            
            const image = el.querySelector('img')
            tl.to(image, {
               inertia: {
                    x: {
                        velocity: deltaX * 30, // Higher number = movement amplified
                        end: 0 // Go back to the initial position
                    },
                    y: {
                        velocity: deltaY * 30, // Higher number = movement amplified
                        end: 0 // Go back to the initial position
                    },
                },
            })
            tl.fromTo(image, {
                rotate: 0
            }, {
                duration: 0.4,
                rotate:(Math.random() - 0.5) * 30, // Returns a value between -15 & 15
                yoyo: true, 
                repeat: 1,
                ease: 'power1.inOut' // Will slow at the begin and the end
            }, '<') // The animation starts at the same time as the previous tween
        })
    })
  },[])
  return (
    <>
        <div className="section-container">
            <h1 className="section-header">TECH STACK</h1>
            <section className="grid1">
                <div className="medias">
                    <div className="media"><a href="https://www.javascript.com/" target="_blank"><img src="/3djs.png" alt=""/></a></div>
                    <div className="media"><a href="https://www.typescriptlang.org/" target="_blank"><img src="/3dts.png" alt=""/></a></div>
                    <div className="media"><a href="https://cplusplus.com/" target="_blank"><img src="/3dcc.png" alt=""/></a></div>
                    <div className="media"><a href="https://www.c-language.org/" target="_blank"><img src="/3dc.png" alt=""/></a></div>
                    <div className="media"><a href="https://www.java.com/en/" target="_blank"><img src="/3djava.png" alt=""/></a></div>
                    <div className="media"><a href="https://www.mongodb.com/" target="_blank"><img src="/3dmongo.png" alt=""/></a></div>
                    <div className="media"><a href="https://www.mysql.com/" target="_blank"><img src="/3dsql.png" alt=""/></a></div>
                    <div className="media"><a href="https://www.linux.org/" target="_blank"><img src="/3dlinux.png" alt=""/></a></div>
                    <div className="media"><a href="https://www.docker.com/" target="_blank"><img src="/3ddocker.png" alt=""/></a></div>
                    <div className="media"><a href="https://html.spec.whatwg.org/multipage/" target="_blank"><img src="/3dhtml.png" alt=""/></a></div>
                    <div className="media"><a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank"><img src="/3dcss.png" alt=""/></a></div>
                    <div className="media"><a href="https://git-scm.com/" target="_blank"><img src="/3dgit.png" alt=""/></a></div>
                    <div className="media"><a href="https://react.dev/" target="_blank"><img src="/3dreact.png" alt=""/></a></div>
                    <div className="media"><a href="https://www.python.org/" target="_blank"><img src="/3dpython.png" alt=""/></a></div>
                    <div className="media"><a href="https://nodejs.org/en" target="_blank"><img src="/3dnodejs.png" alt=""/></a></div>
                </div>
            </section>
        </div>
    </>
  )
}
