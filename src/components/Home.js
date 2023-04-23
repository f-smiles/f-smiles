import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import Map from "react-map-gl";

const Home = () => {
  //Create a scene, camera, renderer
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
    const material = new THREE.MeshPhongMaterial({ color: 999999 });
    const ambientLight = new THREE.AmbientLight("violet", 2);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
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
  }, []);
  return (
    <>
      <main className="mt-32">
        <section className="max-w-screen-sm mx-auto px-8">
          <h2>Orthodontists Dr. Gregg Frey and Dr. Daniel Frey and the exceptional team at FreySmiles Orthodontics recognize that every smile is unique.</h2>
          <h2>Our goal is to make your smile look best on YOU. It's an art, it's a science, and it is something we are very passionate about.</h2>
          <ul>
            <li>40 years of experience</li>
            <li> Board Certified Orthodontists </li>
            <li>Cutting Edge Technology Options that work for everyone</li>
            <li>Traditional Brace</li>
            <li>Damon Braces</li>
            <li>Invisalign Aligners</li>
          </ul>
        </section>

      <section className="flex gap-8 justify-center py-10 text-center">
        <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-slate-300 to-purple-100 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-md max-w-xs max-h-full p-12 flex flex-col justify-center items-center">
          <h3 className="uppercase mb-4">Damon Braces</h3>
          <p>Combining self-ligating braces with advanced archwires clinically proven to move teeth quickly and comfortably.</p>
        </div>
        <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md max-w-xs max-h-full p-12 flex flex-col justify-center items-center">
          <h3 className="uppercase mb-4">Invisalign</h3>
          <p>As part of the top 1% of Invisalign providers in the US, we have the experience to deliver the smile you deserve.</p>
        </div>
        <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-slate-300 to-purple-100 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-md max-w-xs max-h-full p-12 flex flex-col justify-center items-center">
          <h3 className="uppercase mb-4">Advanced 
          Technology</h3>
          <p>We offer Invisalign without Impressions. Say goodbye to goopy impressions with our iTero digital scanner.
          </p>
        </div>
      </section>
      {/* <img alt="doctors" src="../../images/Doctor-Photo-Homepage-1.jpg"></img> */}

      <section className="flex gap-8 justify-center">
        <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center w-1/4 h-96">
          <Map
            initialViewState={{
              longitude: -75.517846,
              latitude: 40.566356,
              zoom: 14,
            }}
            className="w-full h-full"
            mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_ALLENTOWN}`}
          />
          <figcaption className="p-4 text-center">
            <h3 className="uppercase">Allentown</h3>
            <p className="px-2 text-sm">1251 S Cedar Crest Blvd Suite 210</p>
            <p className="text-sm">Allentown, PA 18103</p>
          </figcaption>
          <button className="p-4 bg-stone-400 text-white hover:text-stone-700 w-full rounded-bl-3xl rounded-br-3xl ease-in-out duration-500" type="button">
            <Link to="/book-now">Book Now</Link>
          </button>
        </div>
        <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center w-1/4 h-96">
          <Map
            initialViewState={{
              longitude: -75.296074, 
              latitude: 40.660953,
              zoom: 14,
            }}
            className="w-full h-full"
            mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_BETHLEHEM}`}
          />
          <figcaption className="p-4 text-center">
            <h3 className="uppercase">Bethlehem</h3>
            <p className="text-sm">2901 Emrick Boulevard</p>
            <p className="text-sm">Bethlehem, PA 18020</p>
          </figcaption>
          <button className="p-4 bg-stone-400 text-white hover:text-stone-700 w-full rounded-bl-3xl rounded-br-3xl ease-in-out duration-500" type="button">
            <Link to="/book-now">Book Now</Link>
          </button>
        </div>
        <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center w-1/4 h-96">
          <Map
            initialViewState={{
              longitude: -75.597906, 
              latitude: 40.659477,
              zoom: 14,
            }}
            className="w-full h-full"
            mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_SCHNECKSVILLE}`}
          />
          <figcaption className="p-4 text-center">
            <h3 className="uppercase">Schnecksville</h3>
            <p className="text-sm">4155 Independence Drive</p>
            <p className="text-sm">Schnecksville, PA 18078</p>
          </figcaption>
          <button className="p-4 bg-stone-400 text-white hover:text-stone-700 w-full rounded-bl-3xl rounded-br-3xl ease-in-out duration-500" type="button">
            <Link to="/book-now">Book Now</Link>
          </button>
        </div>
        <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center w-1/4 h-96">
          <Map
            initialViewState={{
              longitude: -75.730460,
              latitude: 40.816100,
              zoom: 14,
            }}
            className="w-full h-full"
            mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_LEHIGHTON}`}
          />
          <figcaption className="p-4 text-center">
            <h3 className="uppercase">Lehighton</h3>
            <p className="text-sm">1080 Blakeslee Blvd Dr E</p>
            <p className="text-sm">Lehighton, PA 18235</p>
          </figcaption>
          <button className="p-4 bg-stone-400 text-white hover:text-stone-700 w-full rounded-bl-3xl rounded-br-3xl ease-in-out duration-500" type="button">
            <Link to="/book-now">Book Now</Link>
          </button>
        </div>
      </section>
      </main>
    </>
  );
};

export default Home;
