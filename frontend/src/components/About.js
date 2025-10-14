import React from 'react';
import me_picture from '../images/me.jpg';
import UpcLogo from '../images/upc.jpg';
import OakHouseLogo from '../images/ohs.jpg';
import '../styles/main.scss';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <h2>About Me</h2>
          <div className="about-layout">
            <div className="about-text">
              <div className="about-story">
                <p>
                  I'm a Computer Science graduate with a multicultural background, 
                  having grown up in the city of Barcelona. My journey in technology 
                  began at Oak House School, where I developed a strong foundation in both 
                  technical and interpersonal skills across English, Spanish, and Catalan environments.
                </p>
                
                <p>
                  My academic path led me to Universitat Politécnica de Catalunya. During my studies, I had the opportunity 
                  to intern at Ernst & Young Spain, where I gained hands-on experience with 
                  enterprise-level SAP systems and learned to thrive in a professional, 
                  fast-paced environment.
                </p>

                <p>
                  What truly excites me is bringing ideas to life through code. From developing 
                  personal projects to learn and use new technologies, to my bachelor's 
                  thesis on LoRa mesh networks that got published in <a href="https://saia-2025.my.canva.site/" target="_blank" rel="noopener noreferrer">SAIA-2025 during IEEE ISCC 2025</a>, I love 
                  tackling challenging problems and creating innovative solutions.
                </p>

                <p>
                  When I'm not coding, you'll find me on the football pitch, cycling through new routes, or experimenting in the kitchen.
                </p>

                <p>
                  Currently based in Brighton, I'm excited to bring my unique blend of technical 
                  expertise, multicultural adaptability, and creative problem-solving to new 
                  challenges in the tech industry.
                </p>
              </div>
              
              {/* Education Section */}
              <div className="education-section">
                <h3>Education</h3>
                <div className="education-cards">
                  <div className="education-card">
                    <div className="education-header">
                      <div className="education-logo">
                        <a href='https://www.upc.edu/en?set_language=en' target="_blank" rel="noopener noreferrer">
                          <img src={UpcLogo} alt="UPC Logo" />
                        </a>
                      </div>
                      <h4 className="education-school">Universitat Politécnica de Catalunya</h4>
                    </div>
                    <p className="education-degree">Bachelor's Degree in Computer Science</p>
                    <div className="education-details">
                      <span className="education-date">Sep. 2020 – June. 2024</span>
                      <span className="education-location">Barcelona, Spain</span>
                    </div>
                  </div>

                  <div className="education-card">
                    <div className="education-header">
                      <div className="education-logo">
                        <a href='https://www.oakhouseschool.com/' target="_blank" rel="noopener noreferrer">
                          <img src={OakHouseLogo} alt="Oak House School Logo" />
                        </a>
                      </div>
                      <h4 className="education-school">Oak House School</h4>
                    </div>
                    <p className="education-degree">Secondary & Sixth Form Education</p>
                    <div className="education-details">
                      <span className="education-date">Sep. 2014 – June. 2020</span>
                      <span className="education-location">Barcelona, Spain</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-sidebar">
              <div className="about-image">
                <img src={me_picture} alt="Jack Griffiths Rico" />
              </div>
              <div className="quick-facts">
                <div className="facts-grid">
                  <div className="fact-item">
                    <span className="fact-label">Based in</span>
                    <span className="fact-value">Brighton, UK</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">From</span>
                    <span className="fact-value">Barcelona, Spain</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">Education</span>
                    <span className="fact-value">Computer Science BSc</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">Languages</span>
                    <span className="fact-value">English, Spanish, Catalan</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-label">Interests</span>
                    <span className="fact-value">Coding, Football, Cycling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;