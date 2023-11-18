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
<div className="absolute w-full -top-1/2 scale-110 -z-10">
  <svg width="500" height="500" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
    <g>
      <path d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z" fill="url(#paint0_linear_221_10)" />
    </g>
    <defs>
      <linearGradient id="paint0_linear_221_10" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
        <stop stop-color="#e1e5fa" />
        <stop offset="1" stop-color="#fceeff" />
      </linearGradient>
      <clipPath id="clip0_221_10">
        <rect width="200" height="200" fill="white" />
      </clipPath>
    </defs>
  </svg>

</div>

<div className="font-HelveticaNowVar font-extralight text-white text-4xl" style={{ whiteSpace: 'nowrap', textAlign: 'center', lineHeight: '1' }}>
<span style={{ fontSize: '4rem' }}>Because <div className="italic" style={{ display: 'inline' }}>Every</div> Smile</span><br />
<span style={{ fontSize: '4rem' }}>Is Unique</span>
</div>
  
    <div className="-mt-18 flex items-center justify-start gap-x-6">
      <Link
        to="/our-team"
        className="text-xl rounded-lg  border border-primary50 p-4 mt-10 font-normal leading-6 transition-colors duration-300 ease-linear text-primary50 hover:text-primary30"
      >
        Our Team <span aria-hidden="true"></span>
      </Link>
      <Link
        to="/book-now"
        className="text-xl rounded-lg  border border-primary50 bg-primary50 text-white p-4 mt-10 font-normal leading-6 transition-colors duration-300 ease-linear text-primary50 hover:text-primary30"
      >
       Book Now <span aria-hidden="true"></span>
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
 
    <div class="snap-start flex items-center justify-center text-5xl">
    <Section >
    <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="url(#paint0_linear_105_460)"/> <defs> <linearGradient id="paint0_linear_105_460" x1="27.5" y1="59.5" x2="69.9415" y2="168.136" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD9A0"/> <stop offset="1" stop-color="#FFF5F1"/> </linearGradient> </defs> </svg>
    <img
  src="/images/logo_icon.png"
  alt="logo"
  className="w-20 h-20 "
/>

          <Hero />
        </Section>
        </div>
        <div className="snap-start bg-ddd9eb text-2xl">
  <div className="flex max-w-screen-xl mx-auto">
    <div className="flex items-center justify-center h-screen relative">
      <figure className="absolute inset-0 -top-1/8">
        <img
          className="object-contain w-full h-full"
          src="../images/aligner.png"
          alt="invisalign"
        />
      </figure>
      <DotPattern style={{ WebkitTransform: 'scaleX(-1)', transform: 'scaleX(-1)' }} />
    </div>

    <div className="flex flex-col justify-center max-w-screen-xl flex-1 px-20">
      <span className="text-8xl text-white inline-block transform rotate-90 origin-left-bottom">INVISALIGN</span>
    </div>

    <div className="flex flex-col justify-center max-w-screen-xl flex-1 px-20">
      <div className="text-black text-2xl text-center">
        <p className="  w-full max-w-md text-black text-2xl">
          As part of the top 1% of Invisalign providers in the US, we have the experience to deliver the smile you deserve.
        </p>
        <div className="text-lg mt-4">
          <Link
            className="justify-center justify-content text-black px-6 py-2 ease-linear border rounded-full border-[#e67fb4] hover:bg-gray-800 hover:border-0 hover:text-white"
            to="/invisalign"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>



<div class="snap-start bg-[#E8E1FD] w-screen  h-screen flex items-center justify-center ">

        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
          <div className="gap-6 space-y-4 text-gray-700 md:w-1/3">
            <h3 className="text-4xl ">Damon Braces</h3>
            <p className="text-3xl pb-4">
              Combining self-ligating braces with advanced archwires clinically proven to move teeth quickly and comfortably.
            </p>
            <div className="mt-4">            <Link className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#7781d9] hover:bg-gray-800 hover:border-0 hover:text-white" to="/braces">Damon System</Link></div>

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
      <div class="snap-start  w-screen h-screen flex items-center justify-center ">
  
        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
          <div className="gap-6 space-y-4 text-gray-700 md:w-1/3">
          <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_119_246)"> <path d="M99.9937 200V184.439C49.0583 184.439 0 150.932 0 100H15.5495C15.5495 49.0678 49.0583 0 99.9937 0V15.5612C150.929 15.5612 200 49.0678 200 100H184.451C184.451 150.932 150.929 200 99.9937 200Z" fill="url(#paint0_linear_119_246)"/> </g> <defs> <linearGradient id="paint0_linear_119_246" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stop-color="#FFB6E1"/> <stop offset="1" stop-color="#FBE3EA"/> </linearGradient> <clipPath id="clip0_119_246"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
            <h3 className="text-3xl text-[#f2ab79]">Advanced Technology</h3>
           
            <Link className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#f2ab79] hover:bg-gray-800 hover:border-0 hover:border-secondary50 hover:text-white" to="/invisalign">Learn More</Link>
          </div>
          <p className="pb-4">
              We offer Invisalign without Impressions. Say goodbye to goopy
              impressions with our iTero digital scanner.
            </p>
          <figure className="flex items-center justify-center w-1/2">
            <img className="w-auto h-96" src="../images/itero2.png" alt="itero" />
          </figure>
        </div>
    
      </div>

      </div>
      </>
  );
}

