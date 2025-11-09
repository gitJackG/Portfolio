"use client"

import React, {useRef} from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function page() {
  const cards = [
    {
      index: "01",
      title: "CS2ANALYZER.COM",
      image: "/cs2analyzer.png",
      link: "https://cs2analyzer.com/",
      description: `
Developed a full-stack web application from scratch to analyze CS2 skin patterns using React.js for the front end and Express.js for the back end.  
Deployed on an Oracle Cloud VPS with NGINX for reverse proxy and static file handling.  
Set up a CDN for optimized image serving and improved global performance.  
Created a responsive design that works seamlessly across desktop and mobile devices.`,
    },
    {
      index: "02",
      title: "IoT Thesis",
      image: "/thesis.png",
      link: "https://upcommons.upc.edu/entities/publication/381e9bb4-8871-4969-ba90-ecca44a707d8",
      description: `
Programmed node firmware in C++ for distributed IoT sensor nodes.  
Built a React.js web interface for user interaction, providing real-time visualization of network topology and node status.  
Implemented a comprehensive monitoring stack using Grafana for dashboards and InfluxDB for time-series data storage.  
Containerized the entire application stack with Docker for streamlined deployment and scalability.  
Research was accepted for publication and presented at SAIA-2025 during IEEE ISCC 2025.`,
    },
    {
      index: "03",
      title: "Portfolio",
      image: "/portfolio.png",
      link: "/",
      description: `
A dynamic and animated developer portfolio built with Next.js, GSAP, and Tailwind CSS.  
Features smooth scroll-driven animations, reusable components, and responsive design.  
Showcases modern frontend techniques including React hooks and custom GSAP timelines.`,
    },
  ];
  const projectContainer = useRef(null);

  useGSAP(() => {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card,index) =>{
      if(index < projectCards.length - 1){
        ScrollTrigger.create({
          trigger: card,
          start: "top-=" + 50 + " top",
          endTrigger: projectCards[projectCards.length -1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        })
      }
      if(index < projectCards.length - 1){
        ScrollTrigger.create({
          trigger: projectCards[index + 1],
          start: "top, bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * 0.25;
            const rotation = (index % 2 === 0 ? 5 : -5) * progress;
            const afterOpacity = progress;

            gsap.set(card, {
              scale: scale,
              rotation: rotation,
              "--after-opacity": afterOpacity,
            })
          }
        })
      }
    })
  }, {scope: projectContainer});


  return (
    <>
      <div className="project-container">
        <section className="project-intro">
          <h1>MY PROJECTS</h1>
        </section>
        <div ref={projectContainer} className="project-cards">
          {
            cards.map((data, i) => (
              <div className='project-card' key={i}>
                <div className="project-card-index">
                  <h1>{data.index}</h1>
                </div>
                <div className="project-card-content">
                  <div className="project-card-content-wrapper">
                    <h1 className="project-card-header">{data.title}</h1>
                    <div className="project-card-img">
                      <a href={data.link} target="_blank" rel="noopener noreferrer">
                        <img src={data.image} alt={data.title} />
                      </a>
                    </div>
                    <div className="project-card-copy">
                      <div className="project-card-copy-title">
                        <p>(ABOUT THE PROJECT)</p>
                      </div>
                      <div className="project-card-copy-description">
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
