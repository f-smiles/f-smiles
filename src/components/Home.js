import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid"; 
import { useEffect } from "react";
import * as THREE from 'three';

const Home = () => {
//Create a scene, camera, renderer
useEffect(()=>{
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
const material = new THREE.MeshPhongMaterial({ color: 999999 });
const ambientLight = new THREE.AmbientLight("violet", 2)
const directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
//  mesh with torus geometry and material
const torus = new THREE.Mesh(geometry, material);

scene.add(torus, directionalLight, ambientLight);

function animate() {
  requestAnimationFrame(animate);

  // rotate torus
  torus.rotation.x += 0.005;
  torus.rotation.y += 0.005;

  // render scene w/ camera 
  renderer.render(scene, camera);
}

animate();
}, [])
  return (
    <>
      <main>
       
          Orthodontists Dr. Gregg Frey and Dr. Daniel Frey and the exceptional team at FreySmiles Orthodontics recognize that every smile is unique. Our goal is to make your smile look best on YOU. It’s an art, it’s a science, and it is something we are very passionate about.
<li>
          40 years of experience 
          </li>
         <li> Board Certified Orthodontists </li>
          Cutting Edge Technology
          Options that work for everyone
          Traditional Brace
          Damon Braces
          Invisalign Aligners
   
  
      </main>
      <section className="flex gap-8 justify-center py-10">
        <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-slate-300 to-purple-100 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl width max-w-xs h-48 max-h-full p-12 flex justify-center items-center">
          <p>
            {" "}
            <strong>Damon Braces</strong>
            <p>
              {" "}
              Combining self-ligating braces with advanced archwires clinically proven to move teeth quickly and comfortably.
            </p>
          </p>
        </div>
        <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl width max-w-xs h-48 max-h-full p-12 flex justify-center items-center">
          <p>
            {" "}
            <strong>Invisalign</strong>
            <p>
              {" "}
              As part of the top 1% of Invisalign providers in the US, we have
              the experience to deliver the smile you deserve.
            </p>
          </p>
        </div>
        <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-slate-300 to-purple-100 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl width max-w-xs h-48 max-h-full p-12 flex justify-center items-center">
          <p>
            {" "}
            <strong>Advanced Technology</strong>
            <p>
              {" "}
              We offer Invisalign without Impressions. Say goodbye to goopy
              impressions with our iTero digital scanner.
            </p>
          </p>
        </div>
      </section>
      {/* <img alt="doctors" src="../../images/Doctor-Photo-Homepage-1.jpg"></img> */}
      <h1>
        {" "}
        <strong className="flex gap-8 justify-center">Our Locations</strong>
      </h1>

      <section className="flex gap-8 justify-center">
      <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl width h-48 max-h-full items-center">
          <h1> <strong className="ml-8">Allentown</strong></h1>
          <h4 className="px-2 text-sm">1251 S Cedar Crest Blvd Suite 210</h4>
          <h4 className="text-sm">Allentown, PA 18103</h4>
          <button className="bg-stone-400 p-2 text-white hover:text-black px-4 py-2 w-full rounded-bl-3xl rounded-br-3xl">Book Now</button>
        </div>
        <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl width h-48 max-h-full items-center">
          <h1><strong className="ml-8">Bethlehem</strong></h1>
          <h4 className="px-2 text-sm">2901 Emrick Boulevard</h4>
          <h4 className="px-3 text-sm">Bethlehem, PA 18020</h4>
          <button className="bg-stone-400 p-2 text-white hover:text-black px-4 py-2 w-full rounded-bl-3xl rounded-br-3xl">Book Now</button>
        </div>
        <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl width h-48 max-h-full items-center">
          <h1><strong className="ml-8">Schnecksville</strong></h1>
          <h4 className= "px-2 text-sm">4155 Independence Drive</h4>
          <h4 className= "px-3 text-sm">Schnecksville, PA 18078</h4>
          <button className="bg-stone-400 p-2 text-white hover:text-black px-4 py-2 w-full rounded-bl-3xl rounded-br-3xl glassmorphism">Book Now</button>
        </div>
        <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl width h-48 max-h-full items-center">
          <h1><strong className="ml-8">Lehighton</strong></h1>
          <h4 className="px-2 text-sm">1080 Blakeslee Blvd Dr E</h4>
          <h4 className="px-3 text-sm">Lehighton, PA 18235</h4>
          <button className="bg-stone-400 p-2 text-white hover:text-black px-4 py-2 w-full rounded-bl-3xl rounded-br-3xl">Book Now</button>
        </div>
      </section>
    </>
  );
};

export default Home;
