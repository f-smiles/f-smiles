import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BubbleGumScene = () => {
  const canvasRef = useRef();

  useEffect(() => {

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(0, -0.5, 25);
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true }); 
    renderer.setClearColor(0x000000, 0); 
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);


    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    
    const fragmentShader = `
      precision highp float;
      varying vec2 vUv;
      uniform vec3 u_c1;
      uniform vec3 u_c2;
      uniform float u_time;
      void main() {
        vec3 pX = vec3(vUv.x);
        vec3 pY = vec3(vUv.y);
        vec3 c1 = u_c1;
        vec3 c2 = u_c2;
        vec3 c3 = vec3(0.0, 1.0, 1.0); // aqua
        vec3 cmix1 = mix(c1, c2, pX + pY/2. + cos(u_time));
        vec3 cmix2 = mix(c2, c3, (pY - sin(u_time))*0.5);
        vec3 color = mix(cmix1, cmix2, pX * cos(u_time+2.));
        gl_FragColor = vec4(color, 1.0);
      }
    `;


    const uniforms = {
      u_c1: { type: "v3", value: new THREE.Vector3(0.90, 0.8, 0.30) },
      u_c2: { type: "v3", value: new THREE.Vector3(1.0, 0.54, 0.40) },
      u_time: { type: "f", value: 0 },
    };
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });


    const gumGeometry = new THREE.SphereGeometry(5, 64, 64);
    const gum = new THREE.Mesh(gumGeometry, shaderMaterial);
    scene.add(gum);

    const bgGeometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
    const bgMesh = new THREE.Mesh(bgGeometry, shaderMaterial);
    scene.add(bgMesh);

    // const gumGeometry = new THREE.SphereGeometry(5, 64, 64);
    // const gum = new THREE.Mesh(gumGeometry, shaderMaterial);
    // scene.add(gum);
    const clock = new THREE.Clock();
    const animate = () => {
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();


    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
      canvasRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={canvasRef} className="w-32 h-32"></div>;

};

export default BubbleGumScene;
