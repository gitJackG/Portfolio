import React, { useState } from 'react';
import '../styles/main.scss';
import cvPdf from '../images/Jack_Resume.pdf';
import EYref from '../images/EYref.pdf';
import SALBCNref from '../images/SALBCNref.pdf';

const CV = () => {
  const [mainPdf, setMainPdf] = useState({
    src: cvPdf,
    title: "Curriculum Vitae",
    type: "CV"
  });

  const documents = [
    {
      src: cvPdf,
      title: "Curriculum Vitae",
      type: "CV",
      description: "My complete professional background and experience"
    },
    {
      src: EYref,
      title: "Professional Reference",
      type: "Ernst & Young",
      description: "Reference letter from Ernst & Young"
    },
    {
      src: SALBCNref,
      title: "Professional Reference", 
      type: "SALBCN",
      description: "Reference letter from SALBCN"
    }
  ];

  const handlePdfClick = (doc) => {
    setMainPdf(doc);
  };

  const sideDocuments = documents.filter(doc => doc.src !== mainPdf.src);

  return (
    <section id="cv" className="section">
      <div className="container">
        <div className="cv-content">
          <h2>Curriculum Vitae & References</h2>
          
          <div className="cv-layout">
            {/* Main PDF Viewer */}
            <div className="cv-main">
              <div className="cv-card">
                <div className="cv-header">
                  <h3>{mainPdf.title}</h3>
                  <span className="document-type">{mainPdf.type}</span>
                </div>
                <div className="cv-preview">
                  <div className="pdf-viewer main">
                    <iframe 
                      src={`${mainPdf.src}#view=FitH&toolbar=0&navpanes=0`}
                      title={mainPdf.title}
                      className="pdf-iframe main"
                    />
                  </div>
                </div>
                <div className="cv-actions">
                  <a href={mainPdf.src} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Open in New Tab
                  </a>
                  <a href={mainPdf.src} download className="btn btn-secondary">
                    Download
                  </a>
                </div>
              </div>
            </div>

            {/* Side Documents */}
            <div className="cv-sidebar">
              <div className="documents-section">
                <h3>Other Documents</h3>
                <p className="documents-description">
                  Click to view in main viewer
                </p>
                
                <div className="documents-grid">
                  {sideDocuments.map((doc, index) => (
                    <div 
                      key={index}
                      className="document-card"
                      onClick={() => handlePdfClick(doc)}
                    >
                      <div className="document-preview">
                        <div className="pdf-viewer side">
                          <iframe 
                            src={`${doc.src}#view=FitH&toolbar=0&navpanes=0`}
                            title={doc.title}
                            className="pdf-iframe side"
                          />
                        </div>
                      </div>
                      <div className="document-info">
                        <h4>{doc.title}</h4>
                        <span className="document-type">{doc.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;