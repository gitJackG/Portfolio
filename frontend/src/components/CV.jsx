"use client"

import React, { useEffect } from 'react'
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import cvImg from "../images/cv.png";
import cvRef from "../images/Jack_Resume_FullStack - Copy.pdf";

import eyImg from "../images/eyref.png";
import eyRef from "../images/Jack EY reference - Copy.pdf";

import salbcnImg from "../images/salbcnref.png";
import salbcnRef from "../images/Jack SALBCN reference - Copy.pdf";

gsap.registerPlugin(Draggable) 

export default function page() {
  useEffect(() => {
    Draggable.create(".cv-item", {
      bounds: ".cv-container",
      inertia: true,
      zIndexBoost: false,
    });
  }, []);
  return (
    <div className="section-container">
      <h1 className="section-header">CV</h1>
      <div className="cv-container">
        <div className="cv-item">
          <img src={cvImg}></img>
          <a href={cvRef} target="_blank" rel="noopener noreferrer" className=""><i className="ph-bold ph-arrow-up-right"></i>OPEN CV</a>
        </div>
        <div className="cv-item">
          <img src={eyImg}></img>
          <a href={eyRef} target="_blank" rel="noopener noreferrer" className=""><i className="ph-bold ph-arrow-up-right"></i>OPEN EY REFERECE</a>
        </div>
        <div className="cv-item">
          <img src={salbcnImg}></img>
          <a href={salbcnRef} target="_blank" rel="noopener noreferrer" className=""><i className="ph-bold ph-arrow-up-right"></i>OPEN SALBCN REFERENCE</a>
        </div>
      </div>
    </div>
  )
}
