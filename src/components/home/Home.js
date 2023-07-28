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
  const [isCardHovered, setIsCardHovered] = useState(false);
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
  return (
    <>
      <main className="w-full overflow-hidden bg-white">
        <section id="hero-section" className="z-0">
          <Hero />
        </section>
        {/* <section id='features-section' className='py-24 bg-F8F6F1'
          style={{
            backgroundColor: isCardHovered ? "#dec0ae" : "#F8F6F1",
            transition: "background-color 0.7s ease",
            transform: `translateY(-${calculateOffset(1)}px)`,
            overflow: "scroll"
          }}
        > */}
        <section id="features" className="z-40">
          <Features />
        </section>
        {/* </section> */}

        <section id="featured-reviews" className="min-h-screen">
          <FeaturedReviews />
        </section>

        <section id="logo-slider" className="bg-dec0ae">
          <LogoSlider />
        </section>

        {/* <section>
          <div className="flex justify-center">
            <div className="flex justify-center">
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  <h1 className="mb-2 text-xl text-teal-500 cursor-pointer">
                    Taneesha N.
                  </h1>
                  <div className="h-1 bg-green-500 w-80"></div>
                </div>
                <div className="w-2"></div>
                <div className="flex flex-col items-center">
                  <h1 className="mb-2 text-xl text-teal-500 cursor-pointer">
                    Alexandra W
                  </h1>

                  <div className="h-1 bg-green-500 w-80"></div>
                </div>
                <div className="w-2"></div>
                <div className="flex flex-col items-center">
                  <h1 className="mb-2 text-xl text-teal-500">Fei Z</h1>
                  <div className="h-1 bg-green-500 w-80"></div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="relative flex flex-col justify-center max-w-screen-xl gap-8 px-4 py-8 mx-auto z-1">
          <div className="flex flex-col space-y-16 mt-36 md:flex-row md:gap-8">
            <div className="relative space-y-4 md:w-1/3">
              <h3 className="flex text-3xl font-bold leading-10 text-gray-700 lg:text-5xl md:font-black ">
                Our Locations
                <img
                  src="../../images/pin.svg"
                  alt="pin"
                  className="inset-0 z-0 flex ml-2 transition-all opacity-90 bounce-animation transform-gpu hover:animate-bounce duration-400"
                  style={{
                    width: "3%",
                    height: "auto",
                    left: "-30%",
                    transition: "transform 0.7s ease-out",
                  }}
                />
              </h3>
              <p>
                We have 4 incredible offices for your
                ultimate convenience. Our orthodontists and FreySmiles Team are
                excited to serve families in the Allentown, Bethlehem, Easton,
                Schnecksville and Lehighton communities.{" "}
                <Link to="/book-now">Schedule an evaluation today.</Link>
              </p>
            </div>

            <div
              id="cards-container"
              className="gap-8 space-y-16 md:w-2/3 md:grid md:grid-cols-2 md:space-y-0"
              // className="gap-8 mt-16 md:grid md:grid-cols-2 lg:flex "
            >
              <div
                className="flex flex-col items-center justify-between w-auto bg-f7f5f2 rounded-bl-3xl rounded-br-3xl h-96"
                // className="flex flex-col items-center justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl lg:w-1/4 h-96"
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
              >
                <Map
                  initialViewState={{
                    longitude: -75.517846,
                    latitude: 40.566356,
                    zoom: isCardHovered ? 14 : 12,
                  }}
                  // className="w-full h-full"
                  mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_ALLENTOWN}`}
                />
                <figcaption className="p-4 text-center">
                  <h3 className="uppercase" style={{ letterSpacing: "1px" }}>
                    Allentown
                  </h3>
                  <p className="px-2 text-sm">
                    1251 S Cedar Crest Blvd Suite 210
                  </p>
                  <p className="text-sm">Allentown, PA 18103</p>
                  <Link
                    className="underline"
                    to="https://goo.gl/maps/jeFprQaeMQwUzwPx8"
                    target="_blank"
                  >
                    Get Directions
                  </Link>
                </figcaption>
                <button
                  className="w-full p-4 text-white duration-500 ease-in-out bg-stone-900 hover:text-stone-900 hover:bg-stone-100 rounded-bl-3xl rounded-br-3xl"
                  type="button"
                >
                  <Link to="/allentown">Book Now</Link>
                </button>
              </div>
              <div className="flex flex-col items-center justify-between w-auto bg-f7f5f2 rounded-bl-3xl rounded-br-3xl h-96">
                <Map
                  initialViewState={{
                    longitude: -75.296074,
                    latitude: 40.660953,
                    zoom: 14,
                  }}
                  // className="w-full h-96"
                  mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_BETHLEHEM}`}
                />
                <figcaption className="p-4 text-center">
                  <h3 className="uppercase" style={{ letterSpacing: "1px" }}>
                    Bethlehem
                  </h3>
                  <p className="text-sm">2901 Emrick Boulevard</p>
                  <p className="text-sm">Bethlehem, PA 18020</p>
                  <Link
                    className="underline"
                    to="https://goo.gl/maps/QjaBN2q5nmC7Vvmp8"
                    target="_blank"
                  >
                    Get Directions
                  </Link>
                </figcaption>
                <button
                  className="w-full p-4 text-white duration-500 ease-in-out bg-stone-900 hover:text-stone-900 hover:bg-stone-100 rounded-bl-3xl rounded-br-3xl"
                  type="button"
                >
                  <Link to="/bethlehem">Book Now</Link>
                </button>
              </div>
              <div className="flex flex-col items-center justify-between w-auto bg-f7f5f2 rounded-bl-3xl rounded-br-3xl h-96">
                <Map
                  initialViewState={{
                    longitude: -75.597906,
                    latitude: 40.659477,
                    zoom: 14,
                  }}
                  // className="w-full h-full"
                  mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_SCHNECKSVILLE}`}
                />
                <figcaption className="p-4 text-center">
                  <h3 className="uppercase" style={{ letterSpacing: "1px" }}>
                    Schnecksville
                  </h3>
                  <p className="text-sm">4155 Independence Drive</p>
                  <p className="text-sm">Schnecksville, PA 18078</p>
                  <Link
                    className="underline"
                    to="https://goo.gl/maps/Z7C7Z7BPzHgcJmUr6"
                    target="_blank"
                  >
                    Get Directions
                  </Link>
                </figcaption>
                <button
                  className="w-full p-4 text-white duration-500 ease-in-out bg-stone-900 hover:text-stone-900 hover:bg-stone-100 rounded-bl-3xl rounded-br-3xl"
                  type="button"
                >
                  <Link to="/schnecksville">Book Now</Link>
                </button>
              </div>
              <div className="flex flex-col items-center justify-between w-auto bg-f7f5f2 rounded-bl-3xl rounded-br-3xl h-96">
                <Map
                  initialViewState={{
                    longitude: -75.73046,
                    latitude: 40.8161,
                    zoom: 14,
                  }}
                  // className="w-full h-full"
                  mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_LEHIGHTON}`}
                />
                <figcaption className="p-4 text-center">
                  <h3 className="uppercase" style={{ letterSpacing: "1px" }}>
                    Lehighton
                  </h3>
                  <p className="text-sm">1080 Blakeslee Blvd Dr E</p>
                  <p className="text-sm">Lehighton, PA 18235</p>
                  <Link
                    className="underline"
                    to="https://goo.gl/maps/rcoLbjXmATgQn2t47"
                    target="_blank"
                  >
                    Get Directions
                  </Link>
                </figcaption>
                <button
                  className="w-full p-4 text-white duration-500 ease-in-out bg-stone-900 hover:text-stone-900 hover:bg-stone-100 rounded-bl-3xl rounded-br-3xl"
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
