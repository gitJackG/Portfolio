"use client"

import React, { useEffect } from 'react'
import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"
import gsap from "gsap"
import modelRef from "../images/macbook_pro.glb";

export default function page() {


  useEffect(() => {
    const config = {
      canvasBg: "#0A1929",
      modelPath: modelRef,
      metalness: 0.55,
      roughness: 0.75,
      baseZoom: 0.35,
      modelScale: 0.3,
      baseCamPosX: window.innerWidth < 1000 ? 0 : -1,
      baseCamPosY: 9,
      baseCamPosZ: 0,
      baseRotationX: 0,
      baseRotationY: .7,
      baseRotationZ: 0,
      ambientIntensity: 0.25,
      keyIntensity: 0.5,
      keyPosX: 2.5,
      keyPosY: 10,
      keyPosZ: 10,
      fillIntensity: 1.5,
      fillPosX: -5,
      fillPosY: 2.5,
      fillPosZ: -2.5,
      rimIntensity: 2.5,
      rimPosX: -7.5,
      rimPosY: 5,
      rimPosZ: -10,
      topIntensity: 0.5,
      topPosX: 0,
      topPosY: 15,
      topPosZ: 0,
      cursorLightEnabled: true,
      cursorLightIntensity: 1.0,
      cursorLightColor: "#ffffff",
      cursorLightDistance: 7.5,
      cursorLightDecay: 2,
      cursorLightPosZ: 1,
      cursorLightSmoothness: 0.5,
      cursorLightScale: 1,
      parallaxSensitivityX: 0.25,
      parallaxSensitivityY: 0.05,
    };

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(config.canvasBg);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const canvas = document.querySelector("canvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    const ambientLight = new THREE.AmbientLight(
      "#ffffff",
      config.ambientIntensity,
    );
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight("#ffffff", config.keyIntensity);
    keyLight.position.set(config.keyPosX, config.keyPosY, config.keyPosZ);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 4096;
    keyLight.shadow.mapSize.height = 4096;
    keyLight.shadow.camera.near = 0.1;
    keyLight.shadow.camera.far = 100;
    keyLight.shadow.bias = -0.00005;
    keyLight.shadow.normalBias = 0.05;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight("#ffffff", config.fillIntensity);
    fillLight.position.set(config.fillPosX, config.fillPosY, config.fillPosZ);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight("#ffffff", config.rimIntensity);
    rimLight.position.set(config.rimPosX, config.rimPosY, config.rimPosZ);
    scene.add(rimLight);
  
    const topLight = new THREE.DirectionalLight("#ffffff", config.topIntensity);
    topLight.position.set(config.topPosX, config.topPosY, config.topPosZ);
    scene.add(topLight);


    const loader = new GLTFLoader();
    let model;
    let modelCenter = new THREE.Vector3();

    loader.load(config.modelPath, (gltf) => {
      model = gltf.scene;

      model.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;

          if (node.material) {
            node.material.metalness = config.metalness;
            node.material.roughness = config.roughness;
            node.material.needsUpdate = true;
          }
        }
      });

      const box = new THREE.Box3().setFromObject(model);
      modelCenter = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      model.position.set(
        -modelCenter.x + config.baseCamPosX,
        -modelCenter.y + config.baseCamPosY,
        -modelCenter.z + config.baseCamPosZ,
      );

      model.rotation.set(
        config.baseRotationX,
        config.baseRotationY,
        config.baseRotationZ
      );

      model.scale.set(config.modelScale, config.modelScale, config.modelScale);

      const maxDim = Math.max(size.x, size.y, size.z);
      camera.position.z = maxDim * config.baseZoom;
      camera.lookAt(0,0,0);

      scene.add(model);
    });

    const tl = gsap.timeline({
      onComplete: setupHoverAnimations, // <-- Wait until fade-in done
    });

    tl.to(".home-item h1, .home-item p", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 1,
      ease: "power2.out",
    });

    function setupHoverAnimations() {
      const menuItems = document.querySelectorAll(".home-item h1");
      menuItems.forEach((item) => {
        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(item, {
          backgroundSize: "100% 100%",
          backgroundPosition: "left",
          duration: 0.5,
          ease: "power2.out",
        });

        item.addEventListener("mouseenter", () => hoverTl.play());
        item.addEventListener("mouseleave", () => {
          hoverTl.reverse().eventCallback("onReverseComplete", () => {
            gsap.set(item, {
              backgroundSize: "0% 100%",
              backgroundPosition: "left",
              backgroundImage: "linear-gradient(#E8F1F8, #E8F1F8), #1E3A5F",
            });
          });
        });

      });
    }

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      config.baseCamPosX = window.innerWidth < 1000 ? 0 : -0.75;
      if (model) {
        model.position.set(
          -modelCenter.x + config.baseCamPosX,
          -modelCenter.y + config.baseCamPosY,
          -modelCenter.z + config.baseCamPosZ,
        )
      }
    });

    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0; 
    let targetRotationY = 0;
    let currentRotationX = 0; 
    let currentRotationY = 0; 

    document.addEventListener("mousemove", (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    const cursorLight = new THREE.PointLight(
      config.cursorLightColor,
      config.cursorLightIntensity,
      config.cursorLightDistance,
      config.cursorLightDecay
    );
    cursorLight.position.set(0,0,config.cursorLightPosZ);
    cursorLight.visible = config.cursorLightEnabled;
    scene.add(cursorLight);

    let cursorLightTargetX = 0;
    let cursorLightTargetY = 0;

    document.addEventListener("mousemove", (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      cursorLightTargetX = mouseX * config.cursorLightScale;
      cursorLightTargetY = mouseY * config.cursorLightScale;
    });

    function animate(){
      requestAnimationFrame(animate);
      if (model) {
        targetRotationY = mouseX * config.parallaxSensitivityX;
        targetRotationX = -mouseY * config.parallaxSensitivityY;

        currentRotationX += (targetRotationX - currentRotationX) * 0.05;
        currentRotationY += (targetRotationY - currentRotationY) * 0.05;

        model.rotation.x = config.baseRotationX + currentRotationX;
        model.rotation.y = config.baseRotationY + currentRotationY;
        model.rotation.z = config.baseRotationZ;
      }

      cursorLight.position.x += (cursorLightTargetX - cursorLight.position.x) * config.cursorLightSmoothness;
      cursorLight.position.y += (cursorLightTargetY - cursorLight.position.y) * config.cursorLightSmoothness;

      renderer.render(scene, camera);
    }
    animate();

  }, []);

  return (
   <section id='home'>
      <div className='home-container'>
        <canvas></canvas>
        <div className="home-links">
          <div className="home-item">
            <h1>JACK</h1>
          </div>
          <div className="home-item">
            <h1>GRIFFITHS</h1>
          </div>
          <div className="home-item">
            <h1>RICO</h1>
          </div>
          <div className="home-item">
            <p>COMPUTER SCIENCE GRADUATE</p>
          </div>
          <div className="home-item">
            <p>EY INTERN</p>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com/in/jack-griffiths-rico" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a href="https://github.com/gitJackG" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
   </section>
  )
}