import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Map from "react-map-gl";
import { gsap } from 'gsap';

// import DotPattern from "./DotPattern";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./Hero";
import LogoSlider from "./logoslider";
import Features from "./Features";
import FeaturedReviews from "./FeaturedReviews";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";
// import { Carousel } from "@material-tailwind/react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

AOS.init();

const Home = () => {
  // const [activeSlide, setActiveSlide] = useState(0);

  // const prevSlide = () => {
  //   setActiveSlide((prevSlide) =>
  //     prevSlide === 0 ? slides.length - 1 : prevSlide - 1
  //   );
  // };

  // const nextSlide = () => {
  //   setActiveSlide((prevSlide) =>
  //     prevSlide === slides.length - 1 ? 0 : prevSlide + 1
  //   );
  // };
  // const [isCardHovered, setIsCardHovered] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
  // const [isTransition, setIsTransition] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [showTextPerson1, setShowTextPerson1] = useState(true);
  // const [showTextPerson2, setShowTextPerson2] = useState(false);

  // const handleToggleTextPerson1 = () => {
  //   setShowTextPerson1(!showTextPerson1);
  // };

  // const handleToggleTextPerson2 = () => {
  //   setShowTextPerson2(!showTextPerson2);
  // };

  // const threshold = 400;
  // const InvisalignRef = useRef(null);
  // const damonRef = useRef(null);
  // const techRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = window.pageYOffset;
  //     const windowHeight = window.innerHeight;

  //     const damonSection = damonRef.current;
  //     if (damonSection) {
  //       const damonSectionRect = damonSection.getBoundingClientRect();
  //       const damonSectionTop = damonSectionRect.top;
  //       const damonSectionHeight = damonSectionRect.height;
  //       const isDamonVisible =
  //         damonSectionTop <= windowHeight / 2 &&
  //         damonSectionTop + damonSectionHeight >= windowHeight / 2;
  //       setIsCardHovered(isDamonVisible);
  //     }

  //     setScrollPosition(position);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const calculateOffset = (sectionNumber) => {
  //   return sectionNumber * scrollPosition * 0.5;
  // };
  
  const handleMouseEnter = (event) => {
    const target = event.target;
    const text = target.innerText;
    const chars = text.split('');

    target.innerHTML = '';

    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.innerText = char;
      span.style.animation = `typewriter-anim 0.5s forwards ${index * 0.05}s`;
      target.appendChild(span);
    });
  };

  const handleMouseLeave = (event) => {
    const target = event.target;
    const spans = Array.from(target.querySelectorAll('span'));

    spans.forEach((span, index) => {
      span.style.animation = `typewriter-reverse-anim 0.5s reverse ${index * 0.05}s`;
    });

    setTimeout(() => {
      target.innerHTML = target.innerText;
    }, spans.length * 50);
  };

  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      setLogoVisible(true);
    });
  }, []);
  const [showText, setShowText] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateOpacity = (scrollY, threshold) => {
    if (scrollY < threshold) {
      return 1;
    } else {
      return 1 - Math.min((scrollY - threshold) / (threshold * 0.5), 1);
    }
  };

  const showH = scrollPosition > 100

  return (
    <>
      <main className="w-full overflow-hidden bg-white">
      <div className="flex items-center justify-center h-screen">
      <div>
      <video
        className="w-full h-auto object-cover fixed top-0 left-0 z-0"
        src="../../images/moving.mp4"
        autoPlay
        muted
        loop
      />
      <div className="relative z-10">
        <img
          className="max-w-lg"
          src="../../images/logo_full.png"
          alt="girl smiling"
          style={{ opacity: calculateOpacity(scrollPosition, 100) }}
        />
        <div
          className="absolute top-0 left-0 max-w-lg"
          style={{
            opacity: 1 - calculateOpacity(scrollPosition, 100),
            transition: 'opacity 0.5s',
            position: 'fixed',
            zIndex: 1,
          }}
        >
          H
        </div>
      </div>
    </div>
</div>



        <section id="hero-section" className=" z-20">

          <Hero />
        </section>

        <section id="features" className="z-40">
          <Features />
        </section>

        <section id="logo-slider" className="bg-primary70">
          <LogoSlider />
        </section>

        <section id="our-locations" className="py-24">
          <span id="locations-heading" className="flex items-baseline mb-6">
            <h2 className="text-3xl font-medium uppercase lg:text-4xl text-secondary50">
              Our Locations
            </h2>
            <img
              src="../../images/pin.svg"
                alt="pin"
                className="ml-2 w-[3%] h-auto transition-all duration-300 hover:animate-bounce rotate-45"
            />
          </span>
          <div className="flex justify-between gap-4">
            <div className="w-1/5">
              <p>
                We have 4 incredible offices for your ultimate convenience. Our orthodontists and FreySmiles Team are excited to serve families in the Allentown, Bethlehem, Easton, Schnecksville and Lehighton communities.
                <br />
                <Link
                  className="underline underline-offset-8 text-neutral60"
                  to="/book-now"
                >
                  Schedule an evaluation today.
                </Link>
              </p>
            </div>
            <div id="cards-container" className="flex w-4/5 gap-4">
                <div className="flex flex-col items-center justify-between w-96 bg-f7f5f2 rounded-bl-3xl rounded-br-3xl">
                  <div className="w-full h-80">
                    <Map
                      initialViewState={{
                        longitude: -75.517846,
                        latitude: 40.566256,
                        zoom: 14,
                        scrollZoom: false,
                      }}
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                      mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_ALLENTOWN}`}
                    />
                  </div>

                  <figcaption className="w-full py-8 text-center  ">
                    <h3 className="uppercase" style={{ letterSpacing: "1px" }}>
                      Allentown
                    </h3>

                    <p className="py-2 text-sm">
                      1251 S Cedar Crest Blvd Suite 210
                      <br />
                      Allentown, PA 18103
                    </p>

                    <Link
                      className="underline transition-colors ease-linear text-neutral60 hover:text-neutral50"
                      to="https://goo.gl/maps/jeFprQaeMQwUzwPx8"
                      target="_blank"
                    >
                      Get Directions
                    </Link>
                  </figcaption>

                  <button
                    className="w-full py-6 uppercase duration-500 ease-in-out rounded-bl-3xl rounded-br-3xl hover:bg-neutral50"
                    type="button"
                  >
                    <Link to="/allentown">Book Now</Link>
                  </button>
                </div>

                <div className="flex flex-col items-center justify-between w-96 bg-f7f5f2 rounded-bl-3xl rounded-br-3xl">
                  <div className="w-full h-80">
                    <Map
                      initialViewState={{
                        longitude: -75.296074,
                        latitude: 40.662953,
                        zoom: 14,
                        scrollZoom: false,
                      }}
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                      mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_BETHLEHEM}`}
                    />
                  </div>

                  <figcaption className="w-full py-8 text-center text-secondary50 bg-secondary99">
                    <h3 className="uppercase" style={{ letterSpacing: "1px" }}>
                      Bethlehem
                    </h3>

                    <p className="py-2 text-sm">
                      2901 Emrick Boulevard
                      <br />
                      Bethlehem, PA 18020
                    </p>

                    <Link
                      className="underline transition-colors ease-linear text-neutral60 hover:text-neutral40"
                      to="https://goo.gl/maps/QjaBN2q5nmC7Vvmp8"
                      target="_blank"
                    >
                      Get Directions
                    </Link>
                  </figcaption>

                  <button
                    className="w-full py-6 uppercase duration-500 ease-in-out bg-primary30 rounded-bl-3xl rounded-br-3xl text-primary95 hover:bg-neutral50"
                    type="button"
                  >
                    <Link to="/bethlehem">Book Now</Link>
                  </button>
                </div>

                <div className="flex flex-col items-center justify-between w-96 bg-f7f5f2 rounded-bl-3xl rounded-br-3xl">
                  <div className="w-full h-80">
                    <Map
                      initialViewState={{
                        longitude: -75.598906,
                        latitude: 40.660677,
                        zoom: 14,
                        scrollZoom: false,
                      }}
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                      mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_SCHNECKSVILLE}`}
                    />
                  </div>

                  <figcaption className="w-full py-8 text-center bg-secondary99 text-secondary50">
                    <h3 className="uppercase" style={{ letterSpacing: "1px" }}>
                      Schnecksville
                    </h3>

                    <p className="py-2 text-sm">
                      4155 Independence Drive
                      <br />
                      Schnecksville, PA 18078
                    </p>

                    <Link
                      className="underline transition-colors ease-linear text-neutral60 hover:text-neutral40"
                      to="https://goo.gl/maps/Z7C7Z7BPzHgcJmUr6"
                      target="_blank"
                    >
                      Get Directions
                    </Link>
                  </figcaption>

                  <button
                    className="w-full py-6 uppercase duration-500 ease-in-out text-primary95 bg-primary30 rounded-bl-3xl rounded-br-3xl hover:bg-neutral50"
                    type="button"
                  >
                    <Link to="/schnecksville">Book Now</Link>
                  </button>
                </div>

                <div className="flex flex-col items-center justify-between w-96 bg-f7f5f2 rounded-bl-3xl rounded-br-3xl">
                  <div className="w-full h-80">
                    <Map
                      initialViewState={{
                        longitude: -75.73046,
                        latitude: 40.8171,
                        zoom: 14,
                        scrollZoom: false,
                        // scrollZoom: {around:'center'},
                      }}
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                      mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_LEHIGHTON}`}
                    />
                  </div>

                  <figcaption className="w-full py-8 text-center text-secondary50 bg-secondary99">
                    <h3 className="uppercase" style={{ letterSpacing: "1px" }}>
                      Lehighton
                    </h3>

                    <p className="py-2 text-sm">
                      1080 Blakeslee Blvd Dr E<br />
                      Lehighton, PA 18235
                    </p>

                    <Link
                      className="underline transition-colors ease-linear text-neutral60 hover:text-neutral40"
                      to="https://goo.gl/maps/rcoLbjXmATgQn2t47"
                      target="_blank"
                    >
                      Get Directions
                    </Link>
                  </figcaption>

                  <button
                    className="w-full py-6 uppercase duration-500 ease-in-out text-primary95 bg-primary30 rounded-bl-3xl rounded-br-3xl hover:bg-neutral50"
                    type="button"
                  >
                    <Link to="/lehighton">Book Now</Link>
                  </button>
                </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

              // className="gap-8 space-y-16 md:w-2/3 md:grid md:grid-cols-2 md:space-y-0"
              // className="gap-8 mt-16 md:grid md:grid-cols-2 lg:flex "

// className="flex flex-col items-center justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl lg:w-1/4 h-96"
                // onMouseEnter={() => setIsCardHovered(true)}
                // onMouseLeave={() => setIsCardHovered(false)}