"use client"

import { useEffect, useState } from "react";

const Nav = () => {
    const [activeSection, setActiveSection] = useState("");

    return (
        <nav>
            <div className="nav-content">
                <a
                    href="#home"
                    className={activeSection === "home" ? "active" : ""}
                >
                    HOME
                </a>
                <a
                    href="#about"
                    className={activeSection === "about" ? "active" : ""}
                >
                    ABOUT
                </a>
                <a href="#work" className={activeSection === "work" ? "active" : ""}>
                    WORK
                </a>
                <a
                    href="#projects"
                    className={activeSection === "projects" ? "active" : ""}
                >
                    PROJECTS
                </a>
                <a
                    href="#tech"
                    className={activeSection === "tech" ? "active" : ""}
                >
                    TECH
                </a>
                <a href="#cv" className={activeSection === "cv" ? "active" : ""}>
                    CV
                </a>
            </div>
            <div className="nav-contact">
            </div>
        </nav>
    );
};

export default Nav;
