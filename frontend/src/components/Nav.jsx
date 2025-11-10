"use client"

import { useEffect, useState } from "react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className="nav-content">
        <a href="#home" className={activeSection === "home" ? "active" : ""}>
          HOME
        </a>
        <a href="#about" className={activeSection === "about" ? "active" : ""}>
          ABOUT
        </a>
        <a href="#work" className={activeSection === "work" ? "active" : ""}>
          WORK
        </a>
        <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
          PROJECTS
        </a>
        <a href="#tech" className={activeSection === "tech" ? "active" : ""}>
          TECH
        </a>
        <a href="#cv" className={activeSection === "cv" ? "active" : ""}>
          CV
        </a>
      </div>
    </nav>
  );
};

export default Nav;
