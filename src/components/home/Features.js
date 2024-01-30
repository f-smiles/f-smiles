import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import LandingTestimonials from "../svg/LandingTestimonials.js";
import { useInView } from "framer-motion";
import Logo from "../svg/Logo.js";
import Arc from "../svg/Arc";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import SplitText from "gsap-trial/SplitText";
import Circle from "../svg/Circle.jsx";
import { shuffle } from "lodash";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);
function Hero() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  useEffect(() => {
    gsap.set(div1Ref.current, { x: -100, y: -100 });
    gsap.set(div2Ref.current, { x: 100, y: -100 });
    gsap.set(div3Ref.current, { x: -100, y: 100 });
    gsap.set(div4Ref.current, { x: 100, y: 100 });
    gsap.to(div1Ref.current, {
      x: 0,
      y: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });

    gsap.to(div2Ref.current, {
      x: 0,
      y: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });

    gsap.to(div3Ref.current, {
      x: 0,
      y: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });
    gsap.to(div4Ref.current, {
      x: 0,
      y: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });
  }, []);

  const heroContentRef = useRef(null);
  const bookButtonRef = useRef(null);
  const sectionRef = useRef(null);
  const dotRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.5, 1], [10, 40]);
  function animateHeroContent() {
    if (!heroContentRef.current) return;
    const lines = heroContentRef.current.querySelectorAll(".hero-content-line");
    lines.forEach((line, index) => {
      gsap.fromTo(
        line,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: index * 0.2,
        }
      );
    });
  }

  function animateBookButton() {
    if (!bookButtonRef.current) return;

    gsap.fromTo(
      bookButtonRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }

  useLayoutEffect(() => {
    animateHeroContent();
    animateBookButton();
  }, []);

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
      const lines =
        heroContentRef.current.querySelectorAll(".hero-content-line");
      lines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { y: 64, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.2,
          }
        );
      });
    } else if (element === bookButtonRef.current) {
      const button = bookButtonRef.current.querySelector(".book-button");
      const arrowIcon = bookButtonRef.current.querySelector(".arrow-icon");

      gsap.fromTo(
        button,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        arrowIcon,
        { scale: 0 },
        { scale: 1, duration: 1, ease: "power3.out" }
      );
    }
  }

  return (
    <main className="relative">
      <div className="relative px-8 isolate  lg:px-8">
        <div className="grid max-w-screen-xl grid-cols-1  mx-auto sm:py-10  place-items-center lg:grid-cols-2">
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
                            <div className="hero-content-line font-HelveticaNowPro font-thin tracking-tight tracking-tighter">
                              Because Every Smile
                            </div>
                            <div className="font-HelveticaNowPro font-thin tracking-tight tracking-tighter hero-content-line">
                              Is Unique
                            </div>
                          </div>
                          <div className="btn-row" ref={bookButtonRef}>
                            <button className="text-3xl font-HelveticaNowPro font-thin tracking-tight tracking-tighter book-button inline-flex items-center justify-center">
                              <span>
                                {" "}
                                <Link
                                  to="/book-now"
                                  className="text-2xl rounded-lg  text-white p-4 mt-10 font-normal leading-6 transition-colors duration-300 ease-linear text-primary50 hover:text-primary30"
                                >
                                  Book Now <span aria-hidden="true"></span>
                                </Link>
                              </span>
                              <div className="arrow-icon ml-3 inline-flex items-center justify-center bg-violet-400 h-10 w-10 rounded-full cursor-pointer">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                  />
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
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
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              className="rounded-full max-w-md"
              src="../../images/mainsectionimage.jpg"
              alt="girl smiling"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-1/3">
          <div>Why Choose Us</div>
        </div>
        <div ref={containerRef} className="flex h-full">
          <div className="flex flex-col w-1/3 ml-40">
            <div
              ref={div1Ref}
              className="justify text-center border border-white py-20 mx-10 h-64 w-96"
            >
              50+ Years of Experience
            </div>
            <div
              ref={div3Ref}
              className="justify text-center border border-white py-20 mx-10 h-64 w-96"
            >
              5k+ Patients
            </div>
          </div>
          <div className="flex flex-col w-1/3 mr-20">
            <div
              ref={div2Ref}
              className="justify text-center border border-white py-20 mx-10 h-64 w-96"
            >
              20+ Years of Education
            </div>
            <div
              ref={div4Ref}
              className="justify text-center border border-white py-20 mx-10 h-64 w-96"
            >
              More Data
            </div>
          </div>
        </div>
      </div>

      <div>
        {" "}
        <Logo />
      </div>
      <LandingTestimonials />
    </main>
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
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
  };

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  const arcContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (arcContainerRef.current) {
      gsap.fromTo(
        arcContainerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: arcContainerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const [scrollY, setScrollY] = useState(0);

  const [startArcAnimation, setStartArcAnimation] = useState(false);
  const invisalignRef = useRef(null);
  const damonRef = useRef(null);
  const advancedTechRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    });

    if (damonRef.current) {
      observer.observe(damonRef.current);
    }

    return () => {
      if (damonRef.current) {
        observer.unobserve(damonRef.current);
      }
    };
  }, [damonRef]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    let tl = gsap.timeline();
    tl.from(invisalignRef.current, {});

    let shrinkTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: damonRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

    shrinkTimeline.to(invisalignRef.current, {
      scale: 0.5,
      ease: "none",
    });

    let damonTitle = new SplitText(".damon-title", {
      type: "lines, chars",
      linesClass: "line",
      charsClass: "char",
    });
    damonTitle.chars.forEach((char) => {
      gsap.from(char, {
        scrollTrigger: {
          trigger: damonRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
      });
    });

    // ScrollTrigger for pinning sections
    ScrollTrigger.create({
      trigger: invisalignRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: false,
    });

    [damonRef, advancedTechRef].forEach((ref) => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      trigger: damonRef.current,
      start: "top center",
      onEnter: () => setStartArcAnimation(true),
      onLeaveBack: () => setStartArcAnimation(false),
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const sectionHeight = window.innerHeight;

  const invisalignStyle = {
    position: "relative",
    zIndex: 1,
    top: 0,
  };

  const damonStartScroll = sectionHeight * 1.4;
  const advancedTechStartScroll = damonStartScroll + sectionHeight;

  const damonStyle = {
    position: "relative",
    zIndex: 2,
    top:
      scrollY >= damonStartScroll
        ? `${-(scrollY - damonStartScroll)}px`
        : `${sectionHeight}px`,
  };

  const advancedTechStyle = {
    position: "relative",
    zIndex: 3,
    top:
      scrollY >= advancedTechStartScroll
        ? `${-(scrollY - advancedTechStartScroll)}px`
        : `${sectionHeight}px`,
  };

  const [backgroundColor, setBackgroundColor] = useState("transparent");
  useEffect(() => {
    setBackgroundColor("rgb(164, 151, 173)");
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const transitionStart = 40;
      const transitionEnd =
        document.documentElement.scrollHeight - window.innerHeight;

      const colorTransitions = [
        {
          start: transitionStart,
          end: transitionEnd * 0.25,
          colorStart: [164, 151, 173],
          colorEnd: [227, 217, 225],
        },
        {
          start: transitionEnd * 0.25,
          end: transitionEnd * 0.5,
          colorStart: [227, 217, 225],
          colorEnd: [221, 220, 220],
        },
        {
          start: transitionEnd * 0.5,
          end: transitionEnd * 0.75,
          colorStart: [221, 220, 220],
          colorEnd: [175, 167, 181],
        },
        {
          start: transitionEnd * 0.75,
          end: transitionEnd,
          colorStart: [175, 167, 181],
          colorEnd: [209, 188, 204],
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

  const arcStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    height: "100%",
    border: "45px solid white",
    borderTop: "none",
    borderBottomLeftRadius: "175px",
    borderBottomRightRadius: "175px",
    transformOrigin: "50% 0",
    animation: "rotate-arc .4s linear forwards",
  };
  return (
    <>
      <div style={{ backgroundColor }}>
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
        <div ref={invisalignRef} className="section ">
          <div className="text-2xl w-screen h-screen relative">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="flex w-full">
                <div
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/blobpurple.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="min-h-screen w-1/2 flex flex-col justify-center items-center text-black text-center relative"
                >
                  {/* Gradient Blur Image */}

                  <div className="relative">
                    <img
                      src="../images/ellipse.svg"
                      alt="Ellipse"
                      className="md:h-40"
                      style={{
                        filter: "invert(100%)",
                        transform: "rotate(250deg)",
                        position: "relative",
                        zIndex: 1,
                      }}
                    />

                    <h1
                      className="text-violet-700 -mt-60 text-5xl font-thin mx-auto leading-tight"
                      style={{
                        width: "200px",
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      Top 1% of Invisalign providers.
                      <br />
                      Experience matters.
                    </h1>
                  </div>
                  {/* <img
          className="absolute  left-1/2 transform -translate-x-1/2 w-64 h-auto"
          src="../images/invisalign-tray.png"
          alt="clear aligner"
        /> */}
                </div>

                <div className="relative w-1/2 flex justify-center items-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div ref={damonRef} className="section bg-stone-100">
          <div
            class="w-screen  h-screen  "
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/pastel2.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
              <div className="w-1/2 flex flex-col justify-center items-center">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "rotate(90deg)" }}
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32 100.641C32 68.391 54.1651 41.3515 84 34.1102V1.28125C36.3772 8.98855 0 50.5392 0 100.641C0 150.742 36.3772 192.293 84 200V167.171C54.1651 159.93 32 132.89 32 100.641ZM200 100.641C200 150.742 163.623 192.293 116 200V167.171C145.835 159.93 168 132.89 168 100.641C168 68.391 145.835 41.3515 116 34.1102V1.28125C163.623 8.98855 200 50.5392 200 100.641Z"
                    fill="url(#paint0_linear_231_555)"
                  />{" "}
                  <defs>
                    {" "}
                    <linearGradient
                      id="paint0_linear_231_555"
                      x1="157.5"
                      y1="33.0763"
                      x2="44.7421"
                      y2="148.561"
                      gradientUnits="userSpaceOnUse"
                    >
                      {" "}
                      <stop offset="0.0509862" stop-color="#FFB6E1" />{" "}
                      <stop offset="1" stop-color="#FBE3EA" />{" "}
                    </linearGradient>{" "}
                  </defs>{" "}
                </svg>
                <div className="absolute inset-0 z-10 flex justify-center items-center">
                  <Arc triggerRef={damonRef} />
                </div>
                <div className="rounded-tl-full rounded-tr-full bg-white bg-opacity-10 shadow-lg p-4 "></div>
              </div>

              <figure className="flex flex-col items-center justify-center w-1/2 relative">
                <h1
                  className="text-3xl font-thin w-64 text-center mx-auto "
                  style={{}}
                >
                  Damon Bracket: less appointments faster treatment time
                  {/* Combining self-ligating braces with advanced archwires
                clinically proven to move teeth quickly and comfortably. */}
                </h1>

                <div className="playing">
                  <div className="mt-4 flex justify-center">
                    <Link
                      className={`flex items-center justify-center px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#7781d9] hover:bg-gray-800 hover:border-0 hover:text-white ${
                        isVisible ? "ball-animation" : ""
                      }`}
                      to="/braces"
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                      }}
                    >
                      Explore
                    </Link>
                  </div>
                </div>

                {/* <img
    src="../images/damontech.png"
    alt="damon braces"
    className="w-auto h-40 md:h-48 absolute"
    style={{
      zIndex: 2,
      top: "80%",
      left: "20%",
      transform: "translate(-50%, -50%)",
    }}
  /> */}
              </figure>
            </div>
          </div>
        </div>
        <div ref={advancedTechRef}>
          <div className="text-2xl  relative bg-violet-100">
            <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
              <div className="flex items-center justify-center relative w-1/2 flex-col">
                <figure className="flex items-center justify-center ">
                  {/* <img src="../images/circletdot.svg" alt="dot" /> */}
                  {/* <video controls
                  className="w-auto h-96 rounded-full">
                  <source src="../images/video-teeth-scanner.mp4" type="video/mp4" />
                
                </video> */}
                </figure>
              </div>

              <div className="flex items-center justify-center h-screen relative w-1/3 flex-col">
                <img
                  src="../images/dotcircle.png"
                  alt="invis"
                  className="relative w-96 h-auto"
                  style={{
                    zIndex: 1,
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <p className="text-3xl pb-4 absolute" style={{ zIndex: 2 }}>
                  We offer Invisalign without Impressions. Say goodbye to goopy
                  impressions with our iTero digital scanner.
                </p>

                <Link
                  className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#f2ab79] hover:bg-gray-800 hover:border-0 hover:border-secondary50 hover:text-white"
                  to="/invisalign"
                  style={{ zIndex: 1 }}
                >
                  Learn More
                </Link>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
