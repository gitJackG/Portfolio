import React, { useEffect } from 'react';
import cs2analyzerImage from '../images/cs2analyzer.png';
import thesisImage from '../images/thesis.png';
import '../styles/main.scss';

const Projects = () => {
  useEffect(() => {
    const cs2Card = document.querySelector('.project-card-cs2');
    const loraCard = document.querySelector('.project-card-lora');
    
    const expandBoth = (e) => {
      if (e.target.closest('.project-link')) {
        return;
      }
      const bothExpanded = cs2Card.classList.contains('expanded') && loraCard.classList.contains('expanded');
      
      if (bothExpanded) {
        cs2Card.classList.remove('expanded');
        loraCard.classList.remove('expanded');
      } else {
        cs2Card.classList.add('expanded');
        loraCard.classList.add('expanded');
      }
    };
    
    if (cs2Card) {
      cs2Card.addEventListener('click', expandBoth);
    }
    
    if (loraCard) {
      loraCard.addEventListener('click', expandBoth);
    }

    return () => {
      if (cs2Card) {
        cs2Card.removeEventListener('click', expandBoth);
      }
      if (loraCard) {
        loraCard.removeEventListener('click', expandBoth);
      }
    };
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects & Publications</h2>
        
        <div className="projects-grid">
          <div className="project-card project-card-cs2" data-project="cs2analyzer">
            <div className="project-preview">
              <img 
                src={cs2analyzerImage}
                alt="CS2 Analyzer Website Preview" 
                className="project-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400/1a1a1a/1abc9c?text=CS2+Analyzer+Project';
                }}
              />
              <div className="project-overlay">
                <a 
                  href="https://cs2analyzer.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  Visit Website ›
                </a>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <h3>cs2analyzer.com</h3>
                <span className="project-date">July 2025 - Present</span>
              </div>
              
              <p className="project-brief">
                A full-stack web application for analyzing video game skin patterns.
              </p>
              
              <div className="project-tech-stack">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">NGINX</span>
                <span className="tech-tag">Oracle Cloud</span>
                <span className="tech-tag">CDN</span>
              </div>

              <div className="project-details">
                <h4>Project Details</h4>
                <ul className="project-description">
                  <li>Developed a full-stack web application from scratch to analyse CS2 skin patterns using React.js for the front end and Express.js for the back end</li>
                  <li>Deployed on an Oracle Cloud VPS using NGINX for reverse proxy and static file handling</li>
                  <li>Set up a CDN for optimized image serving and improved global performance</li>
                  <li>Created a responsive design that works seamlessly across desktop and mobile devices</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-card project-card-lora" data-project="lora-mesh">
            <div className="project-preview">
              <img 
                src={thesisImage}
                alt="LoRa Mesh Network Research Paper" 
                className="project-image"
              />
              <div className="project-overlay">
                <a 
                  href="https://upcommons.upc.edu/entities/publication/381e9bb4-8871-4969-ba90-ecca44a707d8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  View Paper ›
                </a>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <h3>Exploring Cross-network Applications For A LoRa Mesh Network</h3>
                <span className="project-date">Feb. 2024 – June 2024</span>
              </div>
              
              <p className="project-brief">
                Bachelor's thesis research on IoT systems, developing a full-stack solution for real-time 
                monitoring and querying of LoRa mesh networks with containerized deployment.
              </p>
              
              <div className="project-tech-stack">
                <span className="tech-tag">C++</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Grafana</span>
                <span className="tech-tag">InfluxDB</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">IoT</span>
              </div>

              <div className="project-details">
                <h4>Research & Development</h4>
                <ul className="project-description">
                  <li>Programmed node firmware in C++</li>
                  <li>Built a React.js web interface for user interaction, providing real-time visualization of network topology and node status</li>
                  <li>Implemented a comprehensive monitoring stack using Grafana for dashboards and InfluxDB for time-series data storage</li>
                  <li>Containerized the entire application stack with Docker for streamlined deployment and scalability</li>
                  <li>Research was accepted for publication and presented at <a href="https://saia-2025.my.canva.site/" target="_blank" rel="noopener noreferrer">SAIA-2025 during IEEE ISCC 2025</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;