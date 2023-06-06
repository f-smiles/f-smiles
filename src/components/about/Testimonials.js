import React from "react";
// import * as THREE from "three";

const Testimonials = () => {
  return (
    <div className="relative">

       <h1 className="mt-20 text-4xl text-indigo-900">
      What Our Patients Are Saying
      </h1>
 
     
      <img
      src="../../images/wavybg.jpg"
      alt="invisalign"
      className="opacity-100 mt-4"
      style={{
        width: "80%",
        height: "auto",
        filter: "hue-rotate(190deg)",
        
      }}
    />
   
      </div>
   )};

export default Testimonials;

// useEffect(() => {
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );
//   camera.position.z = 5;
//   const renderer = new THREE.WebGLRenderer();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
//   const material = new THREE.MeshPhongMaterial({ color: 999999 });
//   const ambientLight = new THREE.AmbientLight("violet", 2);
//   const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
//   //  mesh with torus geometry and material
//   const torus = new THREE.Mesh(geometry, material);

//   scene.add(torus, directionalLight, ambientLight);

//   function animate() {
//     requestAnimationFrame(animate);

//     // rotate torus
//     torus.rotation.x += 0.005;
//     torus.rotation.y += 0.005;

//     // render scene w/ camera
//     renderer.render(scene, camera);
//   }

//   animate();
// }, []);