import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import DotPattern from "../svg/DotPattern";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.5, 1], [10, 40]);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rock1 = ref.current.querySelector('.rock-1');
      const rock2 = ref.current.querySelector('.rock-2');
      const rock3 = ref.current.querySelector('.rock-3');
      const rock4 = ref.current.querySelector('.rock-4');
      const rock5 = ref.current.querySelector('.rock-5');
      const rock6 = ref.current.querySelector('.rock-6');

      if (rock1 && rock2 && rock3 && rock4 && rock5 && rock6) {
        rock1.style.top = `${200 - scrolled * 0.2}px`;
        rock2.style.top = `${100 - scrolled * 0.2}px`;
        rock3.style.top = `${300 - scrolled * 0.2}px`;
        rock4.style.top = `${400 - scrolled * 0.3}px`;
        rock5.style.top = `${400 - scrolled * 0.5}px`;
        rock6.style.top = `${200 - scrolled * 0.1}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.section>
           <div className="container border border-black relative flex">
     
          <img
          className="rock-1 rocks absolute"
          src="/images/invisalign.svg"
          alt="rock"
          style={{
            width: '100px',
            height: '100px',
            left: '10%',
            top: '50%',
          }}
        />
        <img
          className="rock-2 rocks absolute"
          src="/images/invisalignleft.svg"
          alt="rock"
          style={{
            width: '120px',
            height: '120px',
            left: '20%',
            top: '30%',
          }}
        />
         <img
          className="rock-3 rocks absolute"
          src="/images/aligner4.png"
          alt="rock"
          style={{
       
            width: '200px',
            height: 'auto',
            left: '10%',
            bottom: '20%',
          }}
        />
           <img
          className="rock-4 rocks absolute"
          src="/images/invisalign-tray.png"
          alt="rock"
          style={{
            width: '140px',
            height: 'auto',
            bottom: '0%',
            left: '31%',
          }}
        />
                 <img
          className="rock-5 rocks absolute"
          src="/images/clearalign.png"
          alt="rock"
          style={{
            width: '140px',
            height: 'auto',
            bottom: '20%',
            left: '5%',
          }}
        />
                <img
          className="rock-6 rocks absolute"
          src="/images/alignersilver.png"
          alt="rock"
          style={{
            width: '180px',
            height: 'auto',
            bottom: '10%',
            left: '20%',
          }}
        />
        <div className="content w-1/2 p-10">
          <div className="text">
  <p className="w-full max-w-md">
                  As part of the top 1% of Invisalign providers in the US, we
                  have the experience to deliver the smile you deserve.
                </p>
          </div>
        </div>
      </div>
      <div className="relative px-8 isolate  lg:px-8">
        <div
          id="gradients"

          aria-hidden="true"
        ></div>
        <div className="grid max-w-screen-xl grid-cols-1 py-32 mx-auto sm:py-48 lg:py-56 place-items-center lg:grid-cols-2">
          <div
            className="relative mx-auto mt-32 lg:mt-0 text-container"
            style={{ zIndex: 2 }}
          >
            <div className="flex items-center justify-center flex-wrap">
              <div className="relative">
                <div className="absolute w-full top-1/2 transform -translate-y-1/2 -z-10"></div>
                <div className="relative mx-auto mt-32 lg:mt-0">
                  <div className="flex items-center justify-center flex-wrap">
                    <div className="relative">
                      <div className="relative mx-auto my-32 max-w-7xl">
                
                        <div className=" absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                          <motion.div
          ref={ref}
                            className="bg-no-repeat bg-contain bg-center -z-10 h-32 w-32 overflow-hidden rounded-full"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              zIndex: -1,
                              scale: isInView ? " ": scale,
                           

                              opacity: isInView ? 1 : 0,
                              transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                          >

                          </motion.div>
                        </div>
                        <section style={{ position: "relative", zIndex: 1 }}>
                          <h4>
                            <div>
                              <span
                                className="font-HelveticaNowPro font-thin tracking-tight tracking-tighter"
                                style={{ fontSize: "4rem", display: "block" }}
                              >
                                Because{" "}
                                <span className="italic inline">Every</span>{" "}
                                Smile
                              </span>
                              <span
                                className="font-HelveticaNowPro font-thin tracking-tight tracking-tighter"
                                style={{ fontSize: "4rem", display: "block" }}
                              >
                                Is Unique
                              </span>
                            </div>
                          </h4>
                        </section>
                      </div>

                      <div
                        className="font-HelveticaNowVar font-extralight text-white text-4xl"
                        style={{
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          lineHeight: "1",
                          zIndex: 1,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
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
        ></div>
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
        transform: isInView ? "translateY(-10)" : "translateY(100px)",
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
      <div className="h-screen overflow-scroll">
        <div class=" flex items-center justify-center text-5xl">
          <Section>
            <svg
              width="60"
              height="60"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z"
                fill="url(#paint0_linear_105_460)"
              />{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_105_460"
                  x1="27.5"
                  y1="59.5"
                  x2="69.9415"
                  y2="168.136"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stop-color="#FFD9A0" />{" "}
                  <stop offset="1" stop-color="#FFF5F1" />{" "}
                </linearGradient>{" "}
              </defs>{" "}
            </svg>
            <img
              src="/images/logo_icon.png"
              alt="logo"
              className="w-20 h-20 "
            />

            <Hero />
          </Section>
        </div>
        <div className=" bg-ddd9eb text-2xl">
          <div className="flex max-w-screen-xl mx-auto">
            <div className="flex items-center justify-center h-screen relative w-1/3">
              <figure className="absolute inset-0 -top-1/8">
                <img
                  className="object-contain w-full h-full"
                  src="../images/aligner.png"
                  alt="invisalign"
                />
              </figure>
              <DotPattern
                style={{
                  WebkitTransform: "scaleX(-1)",
                  transform: "scaleX(-1)",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-100%, -50%)",
                }}
              />
            </div>

            <div className="flex flex-col justify-center items-center w-1/3">
              <span className="text-9xl text-white transform -rotate-90">
                Invisalign
              </span>
            </div>

            <div className="flex flex-col justify-center w-1/3">
              <div className="text-black text-2xl text-center">
                <p className="w-full max-w-md">
                  As part of the top 1% of Invisalign providers in the US, we
                  have the experience to deliver the smile you deserve.
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
        <div class=" bg-[#E8E1FD] w-screen  h-screen  ">
          <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
            <div className="flex items-center justify-center h-screen relative w-1/3 flex-col">
              <p className="text-3xl pb-4 text-center">
                Combining self-ligating braces with advanced archwires
                clinically proven to move teeth quickly and comfortably.
              </p>

              <div className="mt-4">
                <Link
                  className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#7781d9] hover:bg-gray-800 hover:border-0 hover:text-white"
                  to="/braces"
                >
                  Damon System
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-9xl text-white transform -rotate-90">
                Damon
              </span>
              <span
                className="text-9xl text-white transform rotate-90"
                style={{ marginLeft: "-20rem" }}
              >
                Bracket
              </span>
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
        <div class="bg-[#E8E1FD]  w-screen h-screen flex items-center justify-center ">
          <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
            <div className="flex items-center justify-center h-screen relative w-1/2 flex-col">
              <figure className="flex items-center justify-center ">
                <img
                  className="w-auto h-96"
                  src="../images/itero2.png"
                  alt="itero"
                />
              </figure>
            </div>
            <div className="flex items-center">
              <span className="text-9xl text-white transform -rotate-90">
                Advanced
              </span>
              <span
                className="text-9xl text-white transform rotate-90"
                style={{ marginLeft: "-30rem" }}
              >
                Technology
              </span>
            </div>

            <div className="flex items-center justify-center h-screen relative w-1/3 flex-col">
              <p className="text-3xl pb-4">
                We offer Invisalign without Impressions. Say goodbye to goopy
                impressions with our iTero digital scanner.
              </p>

              <Link
                className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#f2ab79] hover:bg-gray-800 hover:border-0 hover:border-secondary50 hover:text-white"
                to="/invisalign"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
