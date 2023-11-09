import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import DotPattern from "../svg/DotPattern";
import { motion, useScroll, useTransform } from "framer-motion";
function Hero() {
  const charStyle = {
    position: "absolute",
    animation: "move 1500ms alternate forwards",
    transformOrigin: "center bottom",
  };
  const waveStyle = {
    fontFamily: "Inconsolata, monospace",
    fontSize: "1.8rem",
    textTransform: "uppercase",
    color: "purple",
  };

  let heroRef = useRef();
  let { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  let scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.section
    ref={heroRef}
    style={{ scrollY }}
    id="hero-section"
    className="z-20"
  >
    <div className="relative z-0 px-8 isolate pt-14 lg:px-8">
      <div
        id="gradients"
        // className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          // className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          // style={{
          //   clipPath:
          //     "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 452% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          // }}
        />
      </div>
      <div className="grid max-w-screen-xl grid-cols-1 py-32 mx-auto sm:py-48 lg:py-56 place-items-center lg:grid-cols-2">
<div className="relative mx-auto mt-32 lg:mt-0">
<div className="min-h-screen flex items-center justify-center flex-wrap">
  <div className="relative w-full scale-110 -z-10">
    <DotPattern />
  </div>
<div className="font-HelveticaNowVar font-extralight text-4xl" style={{ whiteSpace: 'nowrap', textAlign: 'center', lineHeight: '1' }}>
<span style={{ fontSize: '4rem' }}>Because <div className="italic" style={{ display: 'inline' }}>Every</div> Smile</span><br />
<span style={{ fontSize: '4rem' }}>Is Unique</span>
</div>
    <p className="max-w-xl mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
      Our goal is to make your smile look best on{' '}
      <span className="font-bold text-indigo-700 uppercase">you</span>. It's
      an art, it's a science, and it is something orthodontists Dr. Gregg
      Frey, Dr. Daniel Frey, and the exceptional team at FreySmiles Orthodontics
      recognize and are very passionate about.
    </p>
    <div className="-mt-18 flex items-center justify-start gap-x-6">
      <Link
        to="/our-team"
        className="text-lg font-normal leading-6 transition-colors duration-300 ease-linear text-primary50 hover:text-primary30"
      >
        Our Team <span aria-hidden="true">→</span>
      </Link>
    </div>
  </div>

</div>
<motion.div>

<img
      className="mt-40 absolute top-0 max-w-lg -right-2"
      src="../../images/mainsectionimage.jpg"
      alt="girl smiling"
    />

</motion.div>
</div>


      <div
        id="gradients"
        className="absolute inset-x-0 top-[calc(100%-23rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
        aria-hidden="true"
      >
        
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 452% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      {/* <svg
version="1.1"
id="curved-border"
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
className="absolute bottom-0 w-full"
viewBox="0 0 1600 116.19"
xmlSpace="preserve"
>
<path
  className="wave"
  d="M0.1,119.43V67.45c0,0,99.87,71.51,322.45,8.12c5.56-1.66,92.01-26.52,125.74-35.72
  c77.28-21.08,219.28-41.4,311.28-38.34c233,7.77,323.98,82.1,469.23,96.61c149.64,14.94,288.45-12.46,371.26-36.99v55.34L0.1,119.43z"
  style={{ fill: '#F1FFE0' }} 
/>
</svg> */}
    </div>
    
  </motion.section>
  );
}

function Section({ children, color, zIndex, position }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.1,
  });
  

  return (

    <div
    ref={ref}
    className="relative flex flex-col items-center justify-center min-h-screen text-primary95"
    style={{
      backgroundColor: color,
      transform: `translateY(${isInView ? 0 : 100}px)`,
      transition: "transform 0.5s ease-in-out",
      zIndex: zIndex,
      position: position,
    }}
  >
    {children}
  </div>

  );
}


export default function Features() {
  
  return (
    <>
    <div class="snap-y snap-mandatory h-screen overflow-scroll">
    <div class="snap-start bg-[#EFEEF4] w-screen h-screen flex items-center justify-center text-5xl">
    <Section >
          <Hero />
        </Section>
        </div>
    <div class="snap-start bg-[#EFEEF4] w-screen h-screen flex items-center justify-center text-5xl">
    <Section color="bg-D1CCe1" zIndex={2} position="relative">
<h3 className="text-black absolute top-0 left-1/2 transform -translate-x-1/2 mt-10 text-6xl font-gilroy-light w-1/2 text-center">Invisalign</h3>
  <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
 
    <div className="bg-white gap-6 space-y-4 text-gray-700 md:w-1/3">
      <p className="text-xl pb-4">
        As part of the top 1% of Invisalign providers in the US, we have the experience to deliver the smile you deserve.
      </p>
      <Link className="mb-10 inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#e67fb4] hover:bg-gray-800 hover:border-0 hover:text-white" to="/invisalign">How Invisalign Works</Link>
    </div>
    <figure className="w-1/2">
      <img
        className="object-contain aspect-video"
        src="../images/aligner.png"
        alt="invisalign"
      />
    </figure>
  </div>

</Section>
</div>


<div class="snap-start bg-[#E8E1FD] w-screen  h-screen flex items-center justify-center text-5xl">

        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
          <div className="gap-6 space-y-4 text-gray-700 md:w-1/3">
            <h3 className="text-4xl ">Damon Braces</h3>
            <p className="pb-4">
              Combining self-ligating braces with advanced archwires clinically proven to move teeth quickly and comfortably.
            </p>
            <Link className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#7781d9] hover:bg-gray-800 hover:border-0 hover:text-white" to="/braces">Damon System</Link>
          </div>
          <figure className="flex flex-col items-center justify-center w-1/2">
            <img
              className="w-auto h-32 md:h-40"
              src="../images/damonfull.png"
              alt="invis"
            />
            <img
              className="w-auto h-40 md:h-48"
              src="../images/damontech.png"
              alt="damon braces"
            />
          </figure>
        </div>

      </div>
      <div class="snap-start  w-screen h-screen flex items-center justify-center text-5xl">
  
        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
          <div className="gap-6 space-y-4 text-gray-700 md:w-1/3">
            <h3 className="text-4xl text-[#f2ab79]">Advanced Technology</h3>
            <p className="pb-4">
              We offer Invisalign without Impressions. Say goodbye to goopy
              impressions with our iTero digital scanner.
            </p>
            <Link className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#f2ab79] hover:bg-gray-800 hover:border-0 hover:border-secondary50 hover:text-white" to="/invisalign">Learn More</Link>
          </div>
          <figure className="flex items-center justify-center w-1/2">
            <img className="w-auto h-96" src="../images/itero2.png" alt="itero" />
          </figure>
        </div>
    
      </div>

      </div>
      </>
  );
}

