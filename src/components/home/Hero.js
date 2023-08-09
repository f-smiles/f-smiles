import React, { useRef } from "react";
import { Link } from "react-router-dom";
import DotPattern from "./DotPattern";
import { m, useScroll, useTransform } from "framer-motion";

export default function Hero() {

  let heroRef = useRef();
  let { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <m.section
      ref={heroRef}
      style={{ y }}
      id="hero-section"
      className="z-20"
    >
      <div className="relative z-0 px-8 isolate pt-14 lg:px-8">
        <div
          id="gradients"
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 452% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="grid max-w-screen-xl grid-cols-1 py-32 mx-auto sm:py-48 lg:py-56 place-items-center lg:grid-cols-2">
          <m.div
            className="text-left"
            initial={{ opacity: 0, translateY: '60px', scale: 0.95 }}
            animate={{
              opacity: 1,
              translateY: 0,
              scale: 1,
            }}
            transition={{
              opacity: { duration: 1 },
              translateY: { duration: 1.5, ease: [0.22, 0.86, 0.4, 1] },
              scale: { duration: 1.5, ease: [0.22, 0.86, 0.4, 1] },
            }}
          >
            <h1 className="text-4xl font-nexa-text-light text-primary50 lg:text-6xl">
              Because every <br></br>smile is unique
            </h1>
            <p className="max-w-xl mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
              Our goal is to make your smile look best on{" "}
              <span className="font-bold text-indigo-700 uppercase ">you</span>.
              It's an art, it's a science, and it is something orthodontists Dr.
              Gregg Frey, Dr. Daniel Frey, and the exceptional team at
              FreySmiles Orthodontics recognize and are very passionate about.
            </p>
            <div className="flex items-center justify-start mt-10 gap-x-6">
              <Link
                to="/book-now"
                className="transition-colors ease-linear duration-300 rounded-md bg-primary50 px-3.5 py-2.5 text-lg lg:text-xl lg:px-5 lg:py-3 font-normal text-white shadow-sm hover:bg-primary30 hover:text-primary90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary30"
              >
                Book Now
              </Link>
              <Link
                to="/our-team"
                className="text-lg font-normal leading-6 transition-colors duration-300 ease-linear text-primary50 hover:text-primary30"
              >
                Our Team <span aria-hidden="true">→</span>
              </Link>
            </div>
          </m.div>
          <div className="relative mx-auto mt-32 lg:mt-0">
            <img
              className="absolute top-0 max-w-lg left-8"
              src="../../images/hero_clip.png"
              alt="girl smiling"
            />
            <div className="relative w-full scale-110 -z-10">
              <DotPattern />
            </div>
          </div>
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
      </div>
    </m.section>
  );
}
