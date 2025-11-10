"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import eyRefImg from "../images/eyref.png"
import salbcnImg from "../images/salbcnref.png"
import eyLink from "../images/Jack EY reference - Copy.pdf";
import salbcnLink from "../images/Jack SALBCN reference - Copy.pdf";

const workData = [
  {
    itemName: "Ernst & Young",
    shortName: "Ernst & Young",
    itemCategory: "SAP Basis Consultant Intern",
    itemLink: "#",
    itemCopy: "Test text",
    itemDate: "11/2023-06/2024",
    itemLocation: "Barcelona, Spain",
    itemReference: eyRefImg,
    itemLink: eyLink,
    itemDescription: "Performed daily system health checks, applied updates, and troubleshooted issues across more than 20 SAP client environments.\n\nAssisted in system upgrades, transport management, and user administration, while collaborating closely with a global team of over 15 consultants.\n\nContributed to improving operational efficiency and system reliability, consistently delivering well-documented and precise solutions praised by senior staff."
  },
  {
    itemName: "SALBCN",
    shortName: "SALBCN",
    itemCategory: "International Football Tournament Coordinator",
    itemLink: "#",
    itemCopy: "Test text",
    itemDate: "10/2022-06/2025",
    itemLocation: "Barcelona, Spain",
    itemReference: salbcnImg,
    itemLink: salbcnLink,
    itemDescription: "Managed the logistics of over 100 international youth football matches, coordinating schedules, pitch readiness, and referee assignments.\n\nOversaw up to 20 teams per tournament day, ensuring seamless communication between coaches, referees, and organizing staff.\n\nRecognized for leadership, problem-solving under pressure, and maintaining high operational standards throughout complex events."
  },
  {
    itemName: "Oak House School",
    shortName: "Oak House School",
    itemCategory: "Children's Summer School Monitor",
    itemLink: "#",
    itemCopy: "Test text",
    itemDate: "06/2021-08/2021",
    itemLocation: "Barcelona, Spain",
    itemReference: null,
    itemDescription: "Supervised and guided daily activities for more than 20 children aged 2–5, ensuring a safe and engaging educational environment.\n\nDeveloped structured activity plans, fostered positive relationships with students, and addressed behavioral or safety concerns proactively.\n\nPraised for enthusiasm, responsibility, and the ability to create a supportive and interactive learning atmosphere."
  },
  {
    itemName: "Universitat Politècnica de Catalunya",
    shortName: "UPC",
    itemCategory: "Bachelor's Degree in Computer Science",
    itemLink: "#",
    itemCopy: "Test text",
    itemDate: "09/2020-06/2024",
    itemLocation: "Barcelona, Spain",
    itemReference: null,
    itemDescription: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and systems architecture.\n\nDeveloped strong analytical and problem-solving skills through hands-on projects and theoretical coursework.\n\nGraduated with a solid foundation in modern computing technologies and best practices."
  },
  {
    itemName: "Oak House School",
    shortName: "Oak House School",
    itemCategory: "Secondary & Sixth Form Education",
    itemLink: "#",
    itemCopy: "Test text",
    itemDate: "09/2014-06/2020",
    itemLocation: "Barcelona, Spain",
    itemReference: null,
    itemDescription: "Completed comprehensive secondary education with focus on sciences and mathematics.\n\nDeveloped strong foundation in critical thinking, communication, and collaborative work.\n\nAchieved excellent academic results while participating in various extracurricular activities."
  },
];

export default function Page() {
  useEffect(() => {
    const overlay = document.querySelector(".work-overlay");
    const closeBtn = document.querySelector(".work-close-btn");

    if (!overlay || !closeBtn) return;

    const tl = gsap.timeline({ paused: true, overwrite: "auto" });
    
    tl.to(overlay, {
      duration: 0.5,
      bottom: "0px",
      opacity: 1,
      rotation: 0,
      transformOrigin: "bottom center",
      ease: "power3.inOut",
    });

    const items = document.querySelectorAll(".work-item");
    items.forEach((item, index) => {
      item.addEventListener("click", () => {
        updateOverlay(workData[index]);
        tl.restart();
      });
    });

    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tl.reverse();
    });

    document.addEventListener("click", (e) => {
      if (!overlay.contains(e.target) && !isItem(e.target)) {
        if (tl.progress() > 0) {
          tl.reverse();
        }
      }
    });

    function updateOverlay(dataItem) {
      const itemName = overlay.querySelector(".work-item-name");
      const itemCategory = overlay.querySelector(".work-item-category");
      const itemLocation = overlay.querySelector(".work-item-loc");
      const itemDate = overlay.querySelector(".work-item-date");
      const itemDescription = overlay.querySelector(".work-item-description");
      const itemReference = overlay.querySelector(".work-item-reference");
      const itemLink = overlay.querySelector(".work-item-link");
      const overlayContent = overlay.querySelector(".work-overlay-content");

      if (itemName) itemName.textContent = dataItem.shortName;
      if (itemCategory) itemCategory.textContent = dataItem.itemCategory;
      if (itemLocation) itemLocation.textContent = dataItem.itemLocation;
      if (itemDate) itemDate.textContent = dataItem.itemDate;
      if (itemDescription) itemDescription.textContent = dataItem.itemDescription;
      if (itemReference) {
        if (dataItem.itemReference) {
          itemReference.src = dataItem.itemReference;
          itemLink.href = dataItem.itemLink;
          itemReference.style.display = "block";
          overlayContent.classList.remove("no-ref");
        } else {
          itemReference.style.display = "none";
          overlayContent.classList.add("no-ref");
        }
      }
    }


    function isItem(target) {
      return target.closest(".work-item");
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="section-container">
      <h1 className="section-header">WORK & EDUCATION</h1>
      
        <div className="work-container">
          <h2>WORK</h2>
          <div className="work-items">
            {workData.slice(0,3).map((item, i) => (
              <div className="work-item" key={i}>
                <div className="work-item-index">{String(i + 1).padStart(2, "0")}</div>
                <div className="work-item-name">{item.itemName}</div>
                <div className="work-item-loc">{item.itemLocation}</div>
                <div className="work-item-year">{item.itemDate}</div>
              </div>
            ))}
          </div>
        
        <h2>EDUCATION</h2>
        <div className="work-items">
          {workData.slice(-2).map((item, i) => (
            <div className="work-item" key={i + 3}>
              <div className="work-item-index">{String(i + 1).padStart(2, "0")}</div>
              <div className="work-item-name">{item.itemName}</div>
              <div className="work-item-loc">{item.itemLocation}</div>
              <div className="work-item-year">{item.itemDate}</div>
            </div>
          ))}
        </div>
        <h2 className="section-header" style={{ fontSize: '1rem', marginTop: '1rem' }}>(Click an item to show more information)</h2>

        <div className="work-overlay">
          <div className="work-overlay-inner">
            <div className="work-overlay-content">
              <div className="work-overlay-left">
                <div className="work-overlay-header">
                  <h1 className="work-item-name">Item Name</h1>
                  <p className="work-item-category">Item Category</p>
                  <div className="work-item-details">
                    <p className="work-item-loc"></p>
                    <p className="work-item-date"></p>
                  </div>
                </div>

                <div className="work-description-container">
                  <p className="work-item-description">
                    Job description text goes here
                  </p>
                </div>
              </div>

              <div className="work-overlay-right">
                <a href={null} target="_blank" rel="noopener noreferrer" className="work-item-link"><img className="work-item-reference" src={null} alt="Reference" /></a>
              </div>

              <div className="work-close-btn">✕</div>
            </div>
          </div>
        </div>

        </div>
    </div>
  );
}