"use client"

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import me from "../images/me.jpg"

export default function page() {
  const aboutRef = useRef(null);
  const circlesRef = useRef([]);
  const coords = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const circles = circlesRef.current;

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, i) => {
        if (!circle) return;

        // Initialize circle position if not set
        circle.x = circle.x || x;
        circle.y = circle.y || y;

        // Lerp to follow the previous circle (or cursor for first circle)
        circle.x += (x - circle.x) * 0.4;
        circle.y += (y - circle.y) * 0.4;

        // Position the circle
        circle.style.left = circle.x - 18 + "px";
        circle.style.top = circle.y - 18 + "px";
        
        // Scale: largest at the front (index 0), smallest at the back
        circle.style.scale = (circles.length - i) / circles.length;

        // Update x, y for next circle to follow
        x = circle.x;
        y = circle.y;
      });

      animationFrameRef.current = requestAnimationFrame(animateCircles);
    };

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    const showCursor = () => {
      circles.forEach((c) => {
        if (c) c.style.display = "block";
      });
      document.addEventListener("mousemove", handleMouseMove);
      animateCircles();
    };

    const hideCursor = () => {
      circles.forEach((c) => {
        if (c) c.style.display = "none";
      });
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    const aboutSection = aboutRef.current;
    if (aboutSection) {
      aboutSection.addEventListener("mouseenter", showCursor);
      aboutSection.addEventListener("mouseleave", hideCursor);
    }

    return () => {
      if (aboutSection) {
        aboutSection.removeEventListener("mouseenter", showCursor);
        aboutSection.removeEventListener("mouseleave", hideCursor);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={aboutRef} style={{ position: "relative" }}>
      <div className="cursor-wrapper">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (circlesRef.current[i] = el)}
            className="cursor-follower"
            style={{ display: "none" }}
          ></div>
        ))}
      </div>
      <div className="section-container">
        <h1 className="section-header">ABOUT ME</h1>
        <div className="about-content">
          <div className="about-text"
          onMouseEnter={()=>{ circlesRef.current.forEach((circle)=>{gsap.to(circle,{ scale:2, duration:0.3, })})}} 
          onMouseLeave={()=>{ circlesRef.current.forEach((circle)=>{gsap.to(circle,{ scale:1, duration:0.3, })})}} >
            <p>
              I'm a Computer Science graduate with a multicultural background, 
              having grown up in the city of Barcelona. My journey in technology 
              began at Oak House School, where I developed a strong foundation in both 
              technical and interpersonal skills across English, Spanish, and Catalan environments.
            </p>
            
            <p>
              My academic path led me to Universitat Politècnica de Catalunya. During my studies, I had the opportunity 
              to intern at Ernst & Young Spain, where I gained hands-on experience with 
              enterprise-level SAP systems and learned to thrive in a professional, 
              fast-paced environment.
            </p>

            <p>
              What truly excites me is bringing ideas to life through code. From developing 
              personal projects to learn and use new technologies, to my Bachelor's 
              thesis on LoRa mesh networks that was published in <a href="https://saia-2025.my.canva.site/" target="_blank" rel="noopener noreferrer">SAIA-2025 during IEEE ISCC 2025</a>, I love 
              tackling challenging problems and creating innovative solutions.
            </p>

            <p>
              When I’m not coding, you’ll find me on the football pitch, pushing myself to improve my technique and teamwork. 
              I love the strategy and fast pace of the game, it’s my favourite way to unwind and stay active.
              On weekends, I often hop on my bike to explore new routes, whether it’s a quiet countryside trail or a challenging hill climb. 
              And when I’m at home, I enjoy experimenting in the kitchen, trying out new recipes and flavours, 
              it’s a creative outlet that balances the logic of coding with a bit of spontaneity.
            </p>

            <p>
              Currently based in Brighton, I'm excited to bring my unique blend of technical 
              expertise, multicultural adaptability, and creative problem-solving to new 
              challenges in the tech industry.
            </p>
          </div>
          <div className="about-img-container">
            <img src={me} alt="" className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
