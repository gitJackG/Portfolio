"use client"

import React, { useEffect } from 'react'
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

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
          <img src='/cv.png'></img>
          <a href="/Jack_Resume_FullStack - Copy.pdf" target="_blank" rel="noopener noreferrer" className=""><i className="ph-bold ph-arrow-up-right"></i>OPEN CV</a>
        </div>
        <div className="cv-item">
          <img src='/eyref.png'></img>
          <a href="/Jack EY reference - Copy.pdf" target="_blank" rel="noopener noreferrer" className=""><i className="ph-bold ph-arrow-up-right"></i>OPEN EY REFERECE</a>
        </div>
        <div className="cv-item">
          <img src='/salbcnref.png'></img>
          <a href="/Jack SALBCN reference - Copy.pdf" target="_blank" rel="noopener noreferrer" className=""><i className="ph-bold ph-arrow-up-right"></i>OPEN SALBCN REFERENCE</a>
        </div>
      </div>
    </div>
  )
}
