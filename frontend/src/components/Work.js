import React, { useEffect } from 'react';
import EYLogo from '../images/ey.jpg';
import SALBCNLogo from '../images/salbcn.jpg';
import OHSLogo from '../images/ohs.jpg';
import '../styles/main.scss';

const Work = () => {
  useEffect(() => {
    $(document).ready(function() {
      $('.work-main').on('click', function(e) {
        e.preventDefault();
        
        const workItem = $(this).closest('.work-item');
        const details = workItem.find('.work-details');
        $('.work-item').not(workItem).each(function() {
          const otherDetails = $(this).find('.work-details');
          if (otherDetails.css('max-height') !== '0px') {
            otherDetails.css({
              'max-height': '0',
              'opacity': '0',
              'padding-top': '0',
              'padding-bottom': '0'
            });
          }
        });
        
        if (details.css('max-height') === '0px') {
          const contentHeight = details.prop('scrollHeight');
          details.css({
            'max-height': contentHeight + 40 + 'px',
            'opacity': '1',
            'padding-top': '1.5rem',
            'padding-bottom': '2rem'
          });
        } else {
          details.css({
            'max-height': '0',
            'opacity': '0',
            'padding-top': '0',
            'padding-bottom': '0'
          });
        }
      });
    });
    return () => {
      $('.work-main').off('click');
    };
  }, []);

  return (
    <section id="work" className="section">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="work-timeline">
          <div className="work-item">
            <div className="work-main">
              <div className="work-left">
                <div className="work-logo">
                  <a href='https://www.ey.com/en_gl' target="_blank" rel="noopener noreferrer">
                    <img src={EYLogo} alt="EY Logo" />
                  </a>
                </div>
                <div className="work-info">
                  <h3>Ernst & Young Spain</h3>
                  <p className="work-position">SAP Basis Intern</p>
                </div>
              </div>
              <div className="work-right">
                <span className="work-date">Nov. 2023 - June. 2024</span>
                <span className="work-location">Barcelona, Spain</span>
              </div>
            </div>
            <div className="work-details">
              <ul className="work-responsibilities">
                <li>Carried out daily system checks, updates, and troubleshooting for client SAP environments</li>
                <li>Managed job scheduling and database log/backups management</li>
                <li>Collaborated with cross-functional teams in a fast-paced environment</li>
                <li>Gained experience in structured workflows, client communication, and enterprise-grade system operations</li>
              </ul>
              <a href='#cv' className="work-reference">Supporting reference letter available</a>
            </div>
          </div>

          <div className="work-item">
            <div className="work-main">
              <div className="work-left">
                <div className="work-logo">
                  <a href='https://salbcn.com/' target="_blank" rel="noopener noreferrer">
                    <img src={SALBCNLogo} alt="SALBCN Logo" />
                  </a>
                </div>
                <div className="work-info">
                  <h3>SALBCN</h3>
                  <p className="work-position">International Football Tournament Coordinator</p>
                </div>
              </div>
              <div className="work-right">
                <span className="work-date">Oct. 2022 - June. 2025</span>
                <span className="work-location">Barcelona, Spain</span>
              </div>
            </div>
            <div className="work-details">
              <ul className="work-responsibilities">
                <li>Responsible for ensuring games ran smoothly by managing pitch-side logistics</li>
                <li>Checked schedules, coordinated with referees, and ensured teams were ready</li>
                <li>Managed field setup and game operations</li>
              </ul>
              <a href='#cv' className="work-reference">Supporting reference letter available</a>
            </div>
          </div>

          <div className="work-item">
            <div className="work-main">
              <div className="work-left">
                <div className="work-logo">
                  <a href='https://www.oakhouseschool.com/' target="_blank" rel="noopener noreferrer">
                    <img src={OHSLogo} alt="Oak House School Logo" />
                  </a>
                </div>
                <div className="work-info">
                  <h3>Oak House School</h3>
                  <p className="work-position">Children's Summer School Monitor</p>
                </div>
              </div>
              <div className="work-right">
                <span className="work-date">June. 2021 - Aug. 2021</span>
                <span className="work-location">Barcelona, Spain</span>
              </div>
            </div>
            <div className="work-details">
              <ul className="work-responsibilities">
                <li>Supervised and assisted students during activities</li>
                <li>Ensured safety and engagement in an educational summer programme</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;