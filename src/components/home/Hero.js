import React, { useRef } from "react";
import { Link } from "react-router-dom";
import DotPattern from "../svg/DotPattern";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {


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
      <motion.h2
        className="font-semibold text-4xl uppercase relative w-64 h-24"
        data-splitting
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }} 
      >

      </motion.h2>

      <motion.h2
        className="font-semibold ml-20 text-4xl uppercase relative w-64 h-24"
        data-splitting
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: .5, delay: 0.25 }} 
      >
   
      </motion.h2>

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
  <div className="relative w-full scale-110 ml-10 -z-10">
      <DotPattern />
    </div>
  <img
        className="mt-40 absolute top-0 max-w-lg left-18"
        src="../../images/hero_clip.png"
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
        <svg
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
</svg>
      </div>
      
    </motion.section>
  );
}
