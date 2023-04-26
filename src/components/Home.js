import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import Map from "react-map-gl";
import DotPattern from "./DotPattern";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

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
      <main className="pt-16 bg-f7f5f2 overflow-hidden w-full">
        <div className="container max-w-screen-xl mx-auto">
        <section className="border-4 py-12 lg:px-4 xl:px-0">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="mt-24 md:mt-0 flex flex-col lg:ml-10 xl:ml-32 2xl:ml-40 lg:w-6/12 xl:w-5/12 md:w-6/12 px-4 lg:px-0 justify-center">
              <h1 className="text-4xl lg:text-6xl font-bold md:font-black leading-10 text-gray-700">Because every smile is unique</h1>
              <p className="text-lg text-gray-600 font-light leading-relaxed pt-8 xl:hidden block">Our goal is to make your smile look best on YOU. It's an art, it's a science, and it is something orthodontists Dr. Gregg Frey and Dr. Daniel Frey and the exceptional team at FreySmiles Orthodontics recognize and are very passionate about.</p>
              <p className="text-lg text-gray-600 font-light leading-relaxed pt-8 xl:block hidden w-4/5">
              Our goal is to make your smile look best on YOU. It's an art, it's a science, and it is something orthodontists Dr. Gregg Frey and Dr. Daniel Frey and the exceptional team at FreySmiles Orthodontics recognize and are very passionate about.
              </p>
                <div className="mt-12 flex flex-wrap">
                  <div className="mr-6 sm:mt-0 md:mt-5 lg:mt-0">
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-4 text-base md:text-xl">
                      <Link to="/book-now">Book Now</Link>
                    </button>
                  </div>
                  <div className="sm:mt-0 md:mt-5 lg:mt-0">
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-600 text-indigo-600 px-8 py-4 text-base md:text-xl">
                      <Link to="/our-team">Our Team</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:mt-0 md:w-1/2 relative lg:mt-0 pl-6 sm:pl-20 pt-10 flex justify-end sm:block mx-auto">
                <div className="ml-4 lg:ml-8 relative z-10 top-10 left-0 w-full h-full z-20">
                  <img className="h-96 md:h-auto" src="../../images/hero_clip.png" alt="girl smiling" role="img" />
                </div>
                {/* <div aria-hidden="true" className="absolute z-10 h-full w-full md:w-40 lg:w-full top-1/2 left-0 md:left-10 lg:left-10 flex flex-col items-start">
                  <img className="h-96 md:h-auto" src="../../images/blob_purple.png" alt="organic shape resembling a blob colorized by a purple shifting to indigo gradient" role="img" />
                </div> */}
                <div aria-hidden="true" className="absolute z-0 h-full w-full md:w-40 lg:w-full top-5 left-0 md:left-10 lg:left-10 flex flex-col items-start overflow-hidden">
                  {/* <img className="h-96 md:h-auto" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left_aligned_with_image_and_cta-SVG1.svg" alt="dot pattern" /> */}
                  <DotPattern />
                </div>
              </div>
          </div>
        </section>

      <section className="border-4 my-16 md:flex gap-8 justify-center py-10 text-center space-y-24 md:space-y-0">
        <div data-aos="fade-up" data-aos-duration="750" data-aos-easing="linear" className="bg-gradient-to-tr from-violet-100 to-teal-50 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-md md:max-w-xs max-h-full px-12 pb-12 pt-20 flex flex-col justify-start items-center">
          <img className="absolute -top-12 h-30 w-auto" src="../images/damon.png" alt="damon"/>
          <h3 className="uppercase mb-4">Damon Braces</h3>
          <p>Combining self-ligating braces with advanced archwires clinically proven to move teeth quickly and comfortably.</p>
        </div>
        <div data-aos="fade-down" className="bg-gradient-to-bl from-violet-100 to-teal-50 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md md:max-w-xs max-h-full px-12 pb-12 pt-20 flex flex-col justify-start items-center">
          <img className="absolute -top-12 h-30 w-auto" src="../images/invisalign.png" alt="invisalign" />
          <h3 className="uppercase mb-4">Invisalign</h3>
          <p>As part of the top 1% of Invisalign providers in the US, we have the experience to deliver the smile you deserve.</p>
        </div>
        <div data-aos="fade-right" data-aos-duration="750" className="bg-gradient-to-br bg-gradient-to-tr from-violet-100 to-teal-50 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-md md:max-w-xs max-h-full px-12 pb-12 pt-20 flex flex-col justify-start items-center">
         <img className="absolute -top-12 h-30 w-auto" src= "../images/technology.png" alt="technology" />
          <h3 className="uppercase mb-4">Advanced
          Technology</h3>
          <p>We offer Invisalign without Impressions. Say goodbye to goopy impressions with our iTero digital scanner.
          </p>
        </div>
      </section>
      {/* <img alt="doctors" src="../../images/Doctor-Photo-Homepage-1.jpg"></img> */}
      {/* TODO: Fix card size and overflow */}
      <section className="border-4 flex flex-col gap-8 justify-center px-4 py-8">
        <h3 className="text-3xl lg:text-5xl font-bold md:font-black leading-10 text-gray-700">Our Locations</h3>
        <div id="cards-container" className="md:grid md:grid-cols-2 lg:flex gap-8">
          <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center lg:w-1/4 h-96">
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
              <Link className="underline" to="https://goo.gl/maps/jeFprQaeMQwUzwPx8" target="_blank">Get Directions</Link>
            </figcaption>
            <button className="p-4 bg-stone-400 text-white hover:text-stone-700 w-full rounded-bl-3xl rounded-br-3xl ease-in-out duration-500" type="button">
              <Link to="/book-now">Book Now</Link>
            </button>
          </div>
          <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center lg:w-1/4 h-96">
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
              <Link className="underline" to="https://goo.gl/maps/QjaBN2q5nmC7Vvmp8" target="_blank">Get Directions</Link>
            </figcaption>
            <button className="p-4 bg-stone-400 text-white hover:text-stone-700 w-full rounded-bl-3xl rounded-br-3xl ease-in-out duration-500" type="button">
              <Link to="/book-now">Book Now</Link>
            </button>
          </div>
          <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center lg:w-1/4 h-96">
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
              <Link className="underline" to="https://goo.gl/maps/Z7C7Z7BPzHgcJmUr6" target="_blank">Get Directions</Link>
            </figcaption>
            <button className="p-4 bg-stone-400 text-white hover:text-stone-700 w-full rounded-bl-3xl rounded-br-3xl ease-in-out duration-500" type="button">
              <Link to="/book-now">Book Now</Link>
            </button>
          </div>
          <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center lg:w-1/4 h-96">
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
              <Link className="underline" to="https://goo.gl/maps/rcoLbjXmATgQn2t47" target="_blank">Get Directions</Link>
            </figcaption>
            <button className="p-4 bg-stone-400 text-white hover:text-stone-700 w-full rounded-bl-3xl rounded-br-3xl ease-in-out duration-500" type="button">
              <Link to="/book-now">Book Now</Link>
            </button>
          </div>
        </div>
      </section>
      </div>
      </main>
    </>
  );
};

export default Home;
