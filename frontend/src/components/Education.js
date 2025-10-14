import React from 'react';
import UpcLogo from '../images/upc.jpg';
import OakHouseLogo from '../images/ohs.jpg';
import '../styles/main.scss';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-left">
              <div className="education-logo">
                <a href='https://www.upc.edu/en?set_language=en' target="_blank" rel="noopener noreferrer">
                  <img src={UpcLogo} alt="UPC Logo" />
                </a>
              </div>
              <div className="education-info">
                <h3>Universitat Politécnica de Catalunya</h3>
                <p className="education-degree">Bachelor's Degree in Computer Science</p>
              </div>
            </div>
            <div className="education-right">
              <span className="education-date">Sep. 2020 – June. 2024</span>
              <span className="education-location">Barcelona, Spain</span>
            </div>
          </div>

          <div className="education-item">
            <div className="education-left">
              <div className="education-logo">
                <a href='https://www.oakhouseschool.com/' target="_blank" rel="noopener noreferrer">
                  <img src={OakHouseLogo} alt="Oak House School Logo" />
                </a>
              </div>
              <div className="education-info">
                <h3>Oak House School</h3>
                <p className="education-degree">Secondary & Sixth Form Education</p>
              </div>
            </div>
            <div className="education-right">
              <span className="education-date">Sep. 2014 – June. 2020</span>
              <span className="education-location">Barcelona, Spain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;