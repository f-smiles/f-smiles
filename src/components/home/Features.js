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
    style={{ translateY: scrollY }}
    id="hero-section"
    className=""
  >
  
    <div className="relative px-8 isolate  lg:px-8">
      <div
        id="gradients"
        // className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
        aria-hidden="true"
      >
      </div>
      <div className="grid max-w-screen-xl grid-cols-1 py-32 mx-auto sm:py-48 lg:py-56 place-items-center lg:grid-cols-2">
<div className="relative mx-auto mt-32 lg:mt-0">
<div className="flex items-center justify-center flex-wrap">
  <div className="absolute w-full  -top-1/2 scale-110 -z-10">

  <svg width="500" height="500" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_221_10)"> <path d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z" fill="url(#paint0_linear_221_10)"/> </g> <defs> <linearGradient id="paint0_linear_221_10" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#e1e5fa"/> <stop offset="1" stop-color="#fceeff"/> </linearGradient> <clipPath id="clip0_221_10"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
    <DotPattern />
  </div>
<div className="font-HelveticaNowVar font-extralight text-white text-4xl" style={{ whiteSpace: 'nowrap', textAlign: 'center', lineHeight: '1' }}>
<span style={{ fontSize: '4rem' }}>Because <div className="italic" style={{ display: 'inline' }}>Every</div> Smile</span><br />
<span style={{ fontSize: '4rem' }}>Is Unique</span>
</div>
  
    <div className="-mt-18 flex items-center justify-start gap-x-6">
      <Link
        to="/our-team"
        className="text-2xl rounded-full  border border-primary50 p-4 mt-10 font-normal leading-6 transition-colors duration-300 ease-linear text-primary50 hover:text-primary30"
      >
        Our Team <span aria-hidden="true">→</span>
      </Link>
    </div>
  </div>

</div>
<motion.div>

<img
      className=" rounded-full absolute top-1 max-w-md -right-3"
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
        
        {/* <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 452% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        /> */}
      </div>
   
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
      transform: isInView ? 'translateY(-10)' : 'translateY(100px)',
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
    <div class="snap-y snap-mandatory bg-gradient-to-r from-stone-100 via-stone-100 to-purple-200 h-screen overflow-scroll">
    <div class="snap-start  w-screen h-screen flex items-center justify-center text-5xl">
    <Section >
          <Hero />
        </Section>
        </div>
    <div class="snap-start bg-[#EFEEF4] w-screen h-screen flex items-center justify-center text-5xl">
    <Section color="bg-D1CCe1"  >
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

