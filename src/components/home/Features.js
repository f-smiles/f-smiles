import React, { useRef, useEffect, useState } from "react";

import { useInView } from "framer-motion";
import DotPattern from "../svg/DotPattern";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
function Hero() {
  const heroContentRef = useRef(null);
  const bookButtonRef = useRef(null);
  const sectionRef = useRef(null);
  const dotRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.5, 1], [10, 40]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateElement(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroContentRef.current) {
      observer.observe(heroContentRef.current);
    }

    if (bookButtonRef.current) {
      observer.observe(bookButtonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  function animateElement(element) {
    if (element === heroContentRef.current) {
      const lines = heroContentRef.current.querySelectorAll('.hero-content-line');
      lines.forEach((line, index) => {
        gsap.fromTo(line, 
          { y: 44, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: index * 0.2 }
        );
      });
    } else if (element === bookButtonRef.current) {
      const button = bookButtonRef.current.querySelector('.book-button');
      const arrowIcon = bookButtonRef.current.querySelector('.arrow-icon');
  
      gsap.fromTo(button, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
  
      gsap.fromTo(arrowIcon, 
        { scale: 0 }, 
        { scale: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }
  
  return (
    <motion.section className="relative">
      <div className="relative px-8 isolate  lg:px-8">
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
                        <div className=" absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
                        <div className="hero">

      <div className="hero-content" ref={heroContentRef}>
      <div className="hero-content-line font-HelveticaNowPro font-thin tracking-tight tracking-tighter">Because Every Smile</div>
  <div className="font-HelveticaNowPro font-thin tracking-tight tracking-tighter hero-content-line">Is Unique</div>

      </div>
      <div className="btn-row" ref={bookButtonRef}>
      <button className="text-3xl font-HelveticaNowPro font-thin tracking-tight tracking-tighter book-button inline-flex items-center justify-center">
  <span>       <Link
                  to="/book-now"
                  className="text-2xl rounded-lg  text-white p-4 mt-10 font-normal leading-6 transition-colors duration-300 ease-linear text-primary50 hover:text-primary30"
                >
                  Book Now <span aria-hidden="true"></span>
                </Link></span>
  <div className="arrow-icon ml-3 inline-flex items-center justify-center bg-violet-400 h-10 w-10 rounded-full cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  </div>
</button>

      </div>
    </div>
                        {/* <section
                          className="font-HelveticaNowPro font-thin tracking-tight tracking-tighter"
                          style={{ position: "relative", zIndex: 1 }}
                        >
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
                        </section> */}

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

        {/* <div
          id="gradients"
          className="absolute inset-x-0 top-[calc(100%-23rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
          aria-hidden="true"
        ></div> */}
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
        // backgroundColor: color,
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
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  useEffect(() => {
    setBackgroundColor("rgb(200, 192, 209)");
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const transitionStart = 40;
      const transitionEnd =
        document.documentElement.scrollHeight - window.innerHeight;

      const colorTransitions = [
        {
          start: transitionStart,
          end: transitionEnd * 0.25,
          colorStart: [200, 192, 209],
          colorEnd: [192, 177, 204],
        },
        {
          start: transitionEnd * 0.25,
          end: transitionEnd * 0.5,
          colorStart: [192, 177, 204],
          colorEnd: [150, 180, 200],
        },
        {
          start: transitionEnd * 0.5,
          end: transitionEnd * 0.75,
          colorStart: [150, 180, 200],
          colorEnd: [100, 130, 160],
        },
        {
          start: transitionEnd * 0.75,
          end: transitionEnd,
          colorStart: [100, 130, 160],
          colorEnd: [50, 80, 110],
        },
      ];

      const currentTransition = colorTransitions.find((transition) => {
        return (
          scrollPosition >= transition.start && scrollPosition < transition.end
        );
      });

      if (currentTransition) {
        const progress =
          (scrollPosition - currentTransition.start) /
          (currentTransition.end - currentTransition.start);
        const scrollPercentage = Math.min(1, Math.max(0, progress));

        const interpolatedColor = currentTransition.colorStart.map(
          (start, i) => {
            const end = currentTransition.colorEnd[i];
            return Math.round(start + (end - start) * scrollPercentage);
          }
        );

        setBackgroundColor(`rgb(${interpolatedColor.join(",")})`);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const invisRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rise");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    if (invisRef.current) {
      observer.observe(invisRef.current);
    }
  
    return () => {
      if (invisRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  

  const ref = useRef(null);
  const aligner1Ref = useRef(null);
  const aligner2Ref = useRef(null);
  const aligner3Ref = useRef(null);
  const aligner4Ref = useRef(null);
  const aligner5Ref = useRef(null);
  const aligner6Ref = useRef(null);

  useEffect(() => {
    const parallaxScroll = () => {
      const scrolled = window.scrollY;

      if (aligner1Ref.current) {
        aligner1Ref.current.style.top = `${400 - scrolled * 0.3}px`;
      }
      if (aligner2Ref.current) {
        aligner2Ref.current.style.top = `${600 - scrolled * 0.4}px`;
      }
      if (aligner3Ref.current) {
        aligner3Ref.current.style.top = `${500 - scrolled * 0.1}px`;
      }
      if (aligner4Ref.current) {
        aligner4Ref.current.style.top = `${600 - scrolled * 0.6}px`;
      }
      if (aligner5Ref.current) {
        aligner5Ref.current.style.top = `${600 - scrolled * 0.4}px`;
      }
      if (aligner6Ref.current) {
        aligner6Ref.current.style.top = `${400 - scrolled * 0.2}px`;
      }
    };

    window.addEventListener("scroll", parallaxScroll);

    return () => {
      window.removeEventListener("scroll", parallaxScroll);
    };
  }, []);

  return (
    <>
      <div style={{ minHeight: "200vh", backgroundColor }}>
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
        <div
  className="text-2xl w-screen h-screen relative"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/pastel2.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 flex justify-center items-center">
    <div
      className="bg-white/30 w-11/12 h-4/5 flex flex-col items-center justify-center rounded-lg shadow-xl"
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      }}
    >
      <div className="flex w-full">

        <div className="w-1/3 flex flex-col justify-center items-center text-black text-center">
          <div className="mt-20">
         
            <img
              className="md:h-40"
              src="../images/ellipse.svg"
              alt="ellipse"
              style={{ transform: "rotate(250deg)" }}
            />
                 
          </div>
          <h1
            className="-mt-60 text-5xl font-thin mx-auto leading-tight"
            style={{ width: "200px" }}
          >
            Top 1% of Invisalign providers.<br />Experience matters.
          </h1>
        </div>

        <div className="w-1/3 flex justify-center items-center">
          <span
            ref={invisRef}
            className="text-9xl transform -rotate-90 rise"
            style={{
              fontFamily: "Rubik, sans-serif",
              fontWeight: "600",
              WebkitTextStroke: "1px #666",
              color: "transparent",
              cursor: "pointer",
            }}
          >
            Invisalign
          </span>
        </div>




        <div className="relative w-1/3 flex justify-center items-center">
  <figure className="relative">
  <img src="../images/radial.svg" alt="dot"    style={{ width: '240px', height: '240px' }}  />
   
  </figure>
  <img
      className="absolute  left-1/2 transform -translate-x-1/2 w-64 h-auto"
      src="../images/clearalign.png"
      alt="clear aligner"
    />
</div>
      </div>
    </div>
  </div>
</div>


        <div class="w-screen  h-screen  ">
          <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
            <div className="flex items-center justify-center h-screen relative w-1/3 flex-col">
              <h1
                className="text-5xl font-thin w-64 text-center mx-auto leading-tight"
                style={{
                  marginTop: "-80px",
                }}
              >
                Damon Bracket: less appointments faster treatment time
                {/* Combining self-ligating braces with advanced archwires
                clinically proven to move teeth quickly and comfortably. */}
              </h1>

              <div className="mt-4">
                <Link
                  className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#7781d9] hover:bg-gray-800 hover:border-0 hover:text-white"
                  to="/braces"
                >
                  Damon Bracket
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

            <figure
              className="flex flex-col items-center justify-center w-1/2 relative"
              style={{ height: "400px" }}
            >
              <svg
                width="400"
                height="400"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", zIndex: 1 }}
              >
                {" "}
                <g clip-path="url(#clip0_105_699)">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M100 22.7143C100 10.564 90.1503 0.71428 78 0.71428H22C9.84974 0.71428 0 10.564 0 22.7143V78.7143C0 90.8645 9.84974 100.714 22 100.714H78C90.1503 100.714 100 110.564 100 122.714V177.286C100 189.436 109.85 199.286 122 199.286H178C190.15 199.286 200 189.436 200 177.286V121.286C200 109.135 190.15 99.2856 178 99.2856H122C109.85 99.2856 100 89.4359 100 77.2856V22.7143ZM177.286 100C189.436 100 199.286 90.1503 199.286 78V22C199.286 9.84974 189.436 2.97894e-06 177.286 2.44784e-06L121.286 0C109.135 -5.31105e-07 99.2857 9.84974 99.2857 22V78C99.2857 90.1503 89.436 100 77.2857 100L22.7143 100C10.564 100 0.714259 109.85 0.714259 122L0.714256 178C0.714256 190.15 10.564 200 22.7143 200L78.7143 200C90.8645 200 100.714 190.15 100.714 178V122C100.714 109.85 110.564 100 122.714 100L177.286 100Z"
                    fill="url(#paint0_linear_105_699)"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_105_699"
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stop-color="#B8DBFC" />{" "}
                    <stop offset="1" stop-color="#F8FBFE" />{" "}
                  </linearGradient>{" "}
                  <clipPath id="clip0_105_699">
                    {" "}
                    <rect width="200" height="200" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>

              <img
                src="../images/archwire.png"
                alt="invis"
                className="w-auto h-32 md:h-40 absolute"
                style={{
                  zIndex: 2,
                  top: "30%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <img
                src="../images/damontech.png"
                alt="damon braces"
                className="w-auto h-40 md:h-48 absolute"
                style={{
                  zIndex: 2,
                  top: "80%",
                  left: "20%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </figure>
          </div>
        </div>
      <div
  className="text-2xl w-screen h-screen relative"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/pastel2.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
          <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
            <div className="flex items-center justify-center h-screen relative w-1/2 flex-col">
              <figure className="flex items-center justify-center ">
                <img src="../images/circletdot.svg" alt="dot" />
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
