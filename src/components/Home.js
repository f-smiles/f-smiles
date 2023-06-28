import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Map from "react-map-gl";
import DotPattern from "./DotPattern";
import AOS from "aos";
import "aos/dist/aos.css";
import LogoSlider from "./logoslider";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Carousel } from "@material-tailwind/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
AOS.init();

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      author: "Taneesha N.",
      content: `Fantastic!! Absolutely recommend! The team at FreySmiles was extremely accommodating to my busy schedule and was able to get me an appointment the day after I called. The staff was so sweet and made me feel welcomed as soon as I walked into the office.  Dr. Frey has a wonderful practice. I have all the confidence in the world that I will love my smile once my treatment is done!`,
    },
    {
      author: "Alexandra W",
      content:
        "“My husband’s experience at FreySmiles Orthodontics has been absolutely amazing. He had an emergency that occurred on Friday and contacted the emergency contact number. Soon after, he was contacted by Dr. Gregg Frey who scheduled him an appointment right away. My husband was so happy to not have to go through the weekend in discomfort. Hands down, I have to say this is the best Orthodontist we have ever been to. The staff are always professional, polite and very eager to help!”",
    },
    {
      author: "Fei Z",
      content:
        "Our whole experience for the past 10 years of being under Dr. Gregg Frey’s care and his wonderful staff has been amazing. My son and my daughter have most beautiful smiles, and they received so many compliments on their teeth. It has made a dramatic and positive change in their lives. Dr. Frey is a perfectionist, and his treatment is second to none. I recommend Dr. Frey highly and without any reservation.",
    },
  ];

  const prevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransition, setIsTransition] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showTextPerson1, setShowTextPerson1] = useState(true);
  const [showTextPerson2, setShowTextPerson2] = useState(false);

  const handleToggleTextPerson1 = () => {
    setShowTextPerson1(!showTextPerson1);
  };

  const handleToggleTextPerson2 = () => {
    setShowTextPerson2(!showTextPerson2);
  };

  const threshold = 400;
  const InvisalignRef = useRef(null);
  const damonRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const windowHeight = window.innerHeight;

      const damonSection = damonRef.current;
      if (damonSection) {
        const damonSectionRect = damonSection.getBoundingClientRect();
        const damonSectionTop = damonSectionRect.top;
        const damonSectionHeight = damonSectionRect.height;
        const isDamonVisible =
          damonSectionTop <= windowHeight / 2 &&
          damonSectionTop + damonSectionHeight >= windowHeight / 2;
        setIsCardHovered(isDamonVisible);
      }

      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateOffset = (sectionNumber) => {
    return sectionNumber * scrollPosition * 0.5;
  };

  return (
    <>
      <main className="pt-16 bg-#fFFFDFD overflow-hidden w-full">
        <section id="hero-section" className="max-w-screen-lg mx-auto py-8">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="mt-24 md:mt-0 flex flex-col px-4 md:w-1/2 lg:px-0">
              <div className="p-8 lg:p-0">
                <h1 className="md:mt-40 text-4xl lg:text-6xl font-bold md:font-black leading-10 text-gray-700">
                  Because every smile is unique
                </h1>
                <p className="text-lg text-gray-600 font-light leading-relaxed pt-8 w-4/5">
                  Our goal is to make your smile look best on{" "}
                  <strong className="font-bold">YOU</strong>. It's an art, it's
                  a science, and it is something orthodontists Dr. Gregg Frey
                  and Dr. Daniel Frey and the exceptional team at FreySmiles
                  Orthodontics recognize and are very passionate about.
                </p>
                {/* <div className="absolute top-2/3 right-2/3 border border-black w-1/2">
                    <img
                      className="w-full h-full"
                      src="../../images/fadedblob.svg"
                      alt="blue blob"
                    />
                  </div> */}
                <div className="mt-12 flex flex-wrap z-100">
                  <div className="mr-6 sm:mt-0 md:mt-5 lg:mt-0">
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-B47EDE transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-4 text-base md:text-xl">
                      <Link to="/book-now">Book Now</Link>
                    </button>
                  </div>
                  <div className="sm:mt-0 md:mt-5 lg:mt-0">
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-600 text-indigo-600 px-8 py-4 text-base md:text-xl">
                      <Link to="/our-team">Our Team</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto relative flex justify-end pl-6 pt-10 md:mt-0 md:mb-16 md:w-1/2 lg:mt-0 sm:pl-20 sm:block">
              <div className="relative ml-4 top-10 left-0 w-full h-full z-10 lg:ml-8">
                <img
                  className="h-96 md:h-auto"
                  src="../../images/hero_clip.png"
                  alt="girl smiling"
                />
              </div>
              {/* <div aria-hidden="true" className="absolute z-10 h-full w-full md:w-40 lg:w-full top-1/2 left-0 md:left-10 lg:left-10 flex flex-col items-start">
                  <img className="h-96 md:h-auto" src="../../images/blob_purple.png" alt="organic shape resembling a blob colorized by a purple shifting to indigo gradient" role="img" />
                </div> */}
              <div
                aria-hidden="true"
                className="absolute z-0 h-full w-full md:w-40 lg:w-full top-5 left-0 md:left-10 lg:left-10 flex flex-col items-start overflow-hidden"
              >
                {/* <img className="h-96 md:h-auto" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left_aligned_with_image_and_cta-SVG1.svg" alt="dot pattern" /> */}
                <DotPattern />
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            // transform: `translateY(-${calculateOffset(1)}px)`,
            backgroundColor: isCardHovered ? "#dec0ae" : "#F8F6F1",
            transition: "background-color 0.7s ease",
          }}
          className="bg-F8F6F1"
        >
          <div className="z-40">
            <div className="flex">
              <div className="text-center flex flex-col gap-6 justify-center items-center w-1/3">
                <h3 className="text-4xl">Invisalign</h3>
                <p className="md:px-8">
                  As part of the top 1% of Invisalign providers in the US, we
                  have the experience to deliver the smile you deserve.
                </p>
              </div>
              <div className="text-center flex flex-col gap-6 justify-center items-center w-1/3">
                <img
                  className="rounded-lg self-center"
                  src="../images/aligner.png"
                  alt="invis"
                />
              </div>
              <div className="text-center flex flex-col gap-6 justify-center items-center w-1/3">
                <button className="rounded-full border border-black px-6 py-4 hover:bg-black hover:text-white">
                  <Link to="/invisalign">How Invisalign Works</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <img
              className="rounded-lg self-center mx-auto"
              src="../images/damonfull.png"
              alt="invis"
              style={{ width: "30%", height: "auto" }}
            />

            <div
              ref={damonRef}
              className="text-center flex flex-col gap-6 justify-center items-center w-1/2"
            >
              <img
                src="../images/damontech.png"
                style={{ width: "30%", height: "auto" }}
                alt="damon braces"
              />
              <h3 className="text-4xl">Damon Braces</h3>
              <p className="md:px-8">
                Combining self-ligating braces with advanced archwires
                clinically proven to move teeth quickly and comfortably.
              </p>
              <button className="rounded-full border border-black px-6 py-4 hover:bg-black hover:text-white">
                <Link to="/braces">Damon System </Link>
              </button>
            </div>
          </div>
          <div className="pt-48 flex">
            <div className="w-1/3">
              <img
                className="rounded-lg h-96 w-auto self-center mx-auto"
                src="../images/itero2.png"
                alt="invis"
              />
            </div>
            <div className="w-1/3">
              <div className="text-center flex flex-col gap-6 justify-center items-center">
                <h3 className="text-4xl">Advanced Technology</h3>
                <p className="md:px-8">
                  We offer Invisalign without Impressions. Say goodbye to goopy
                  impressions with our iTero digital scanner.
                </p>
                <img src="../images/technology.png" alt="itero" />

                <button className="rounded-full hover:bg-black hover:text-white border border-black px-6 py-4">
                  <Link to="/invisalign">Learn More</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <LogoSlider style={{ transform: "translate(-50%, -50%)" }} />
          </div>
        </section>

        <div className="relative h-max flex justify-center ml-60 mr-60">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute left-0 top-0 w-full h-full transition-opacity duration-500 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-x-0 bottom-0 p-4 text-black">
                <h1 className="text-xl text-teal-700">{slide.content}</h1>
              </div>
            </div>
          ))}
          <button
            className="absolute -left-20 top-1/2 transform -translate-y-20 px-4 py-2 rounded"
            onClick={prevSlide}
          >
            <div className="border border-black rounded-full inline-flex p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </div>
          </button>
          <button
            className="absolute -right-20 top-1/2 transform -translate-y-20 px-4 py-2 rounded"
            onClick={nextSlide}
          >
            <div className="border border-black rounded-full inline-flex p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </button>
        </div>

        <section>
          <div className="flex justify-center">
            <div className="flex justify-center">
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  <h1 className="text-teal-500 text-xl mb-2 cursor-pointer">
                    Taneesha N.
                  </h1>
                  <div className="bg-green-500 h-1 w-80"></div>
                </div>
                <div className="w-2"></div>
                <div className="flex flex-col items-center">
                  <h1 className="text-teal-500 text-xl mb-2 cursor-pointer">
                    Alexandra W
                  </h1>

                  <div className="bg-green-500 h-1 w-80"></div>
                </div>
                <div className="w-2"></div>
                <div className="flex flex-col items-center">
                  <h1 className="text-teal-500 text-xl mb-2">Fei Z</h1>
                  <div className="bg-green-500 h-1 w-80"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-screen-xl mx-auto flex flex-col gap-8 justify-center px-4 py-8 relative z-1">
          <div className="mt-36 flex flex-col md:flex-row space-y-16 md:gap-8">
            <div className="relative md:w-1/3 space-y-4">
              <h3 className="text-3xl lg:text-5xl font-bold md:font-black leading-10 text-gray-700 flex ">
                Our Locations
                <img
                  src="../../images/pin.svg"
                  alt="pin"
                  className="flex ml-2  inset-0 z-0 opacity-90 bounce-animation transform-gpu hover:animate-bounce transition-all duration-400"
                  style={{
                    width: "3%",
                    height: "auto",
                    left: "-30%",
                    transition: "transform 0.7s ease-out",
                  }}
                />
              </h3>
              <h2>
                We are blessed to now have 4 incredible offices for your
                ultimate convenience. Our orthodontists and FreySmiles Team are
                excited to serve families in the Allentown, Bethlehem | Easton,
                Schnecksville and Lehighton communities.{" "}
                <Link to="/book-now">Schedule an evaluation today.</Link>
              </h2>
            </div>

            <div
              id="cards-container"
              className="md:w-2/3 md:grid md:grid-cols-2 gap-8 space-y-16 md:space-y-0"
              // className="md:grid md:grid-cols-2 lg:flex gap-8 mt-16 "
            >
              <div
                className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center w-auto h-96"
                // className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center lg:w-1/4 h-96"
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
                  className="p-4 bg-stone-900 text-white hover:text-stone-900 hover:bg-stone-100 w-full rounded-bl-3xl rounded-br-3xl ease-in-out duration-500"
                  type="button"
                >
                  <Link to="/book-now">Book Now</Link>
                </button>
              </div>
              <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center w-auto h-96">
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
                  className="p-4 bg-stone-900 text-white hover:text-stone-900 hover:bg-stone-100 w-full rounded-bl-3xl rounded-br-3xl ease-in-out duration-500"
                  type="button"
                >
                  <Link to="/book-now">Book Now</Link>
                </button>
              </div>
              <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center w-auto h-96">
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
                  className="p-4 bg-stone-900 text-white hover:text-stone-900 hover:bg-stone-100 w-full rounded-bl-3xl rounded-br-3xl ease-in-out duration-500"
                  type="button"
                >
                  <Link to="/book-now">Book Now</Link>
                </button>
              </div>
              <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center w-auto h-96">
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
                  className="p-4 bg-stone-900 text-white hover:text-stone-900 hover:bg-stone-100 w-full rounded-bl-3xl rounded-br-3xl ease-in-out duration-500"
                  type="button"
                >
                  <Link to="/book-now">Book Now</Link>
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
