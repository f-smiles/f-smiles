import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Map from "react-map-gl";
import DotPattern from "./DotPattern";
import AOS from "aos";
import "aos/dist/aos.css";
import LogoSlider from "./logoslider";

AOS.init();

const Home = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransition, setIsTransition] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const threshold = 400;
  const InvisalignRef = useRef(null);
  const damonRef = useRef(null)
  const techRef = useRef(null)
  const [isDamonVisible, setIsDamonVisible]=useState(false)
const [isTechVisible, setIsTechVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(InvisalignRef.current);
    const damonObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsDamonVisible(true);
          }
        });
      },
      { threshold: .3 }
    );
  
    damonObserver.observe(damonRef.current);

    observer.observe(InvisalignRef.current);

    const techObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTechVisible(true);
          }
        });
      },
      { threshold: .1 }
    );
  
    techObserver.observe(techRef.current);
    return () => {
      observer.disconnect();
      damonObserver.disconnect();
      techObserver.disconnect();
    };
  }, []);

  
  const techStyle = {
    opacity: isTechVisible ? "1" : "0",
    transform: isTechVisible ? "translateX(0)" : "translateX(-100%)",
    transition: "opacity 0.8s ease-in-out, transform 1.2s ease-in-out",
  };
  const damonStyle = {
    opacity: isDamonVisible ? "1" : "0",
    transform: isDamonVisible ? "translateX(0)" : "translateX(100%)",
    transition: "opacity 0.8s ease-in-out, transform 1.2s ease-in-out",
  };

  const cardStyle = {
    opacity: isVisible ? '1' : '0',
    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'opacity 0.8s ease-in-out, transform 1.2s ease-in-out', 
  };
  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        const position = document.documentElement.scrollTop;
        setScrollPosition(position);
        const windowHeight = window.innerHeight;
        if (position + windowHeight > threshold) {
          setIsVisible(true);
          setIsTransition(true);
        } else {
          setIsVisible(false);
          setIsTransition(false);
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <main className="pt-16 bg-#fFFFDFD overflow-hidden w-full">
        <div className=" max-w-screen-xl mx-auto">
          <section className="py-12 lg:px-4 xl:px-0">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="mt-24 md:mt-0 flex flex-col lg:ml-10 xl:ml-32 2xl:ml-40 lg:w-6/12 xl:w-5/12 md:w-6/12 px-4 lg:px-0 justify-center">
                <div className="relative">
                  <h1 className="mt-40 text-4xl lg:text-6xl font-bold md:font-black leading-10 text-gray-700 absolute top-0 left-0 right-0">
                    Because every smile is unique
                  </h1>
                  <p className="text-lg text-gray-600 font-light leading-relaxed pt-8 xl:hidden block absolute top-0 left-0 right-0">
                    Our goal is to make your smile look best on YOU. It's an
                    art, it's a science, and it is something orthodontists Dr.
                    Gregg Frey and Dr. Daniel Frey and the exceptional team at
                    FreySmiles Orthodontics recognize and are very passionate
                    about.
                  </p>
                  <p className="mt-60 text-center text-lg text-gray-600 font-light leading-relaxed pt-8 xl:block hidden w-4/5 absolute top-0 left-0 right-0">
                    Our goal is to make your smile look best on{" "}
                    <strong className="font-bold">YOU</strong>. It's an art,
                    it's a science, and it is something orthodontists Dr. Gregg
                    Frey and Dr. Daniel Frey and the exceptional team at
                    FreySmiles Orthodontics recognize and are very passionate
                    about.
                  </p>
                  <div className="relative">
                    <img
                      className="md:w-auto h-120 md:h-full  transform -translate-x-60 -translate-y-10"
                      src="../../images/fadedblob.svg"
                      alt="blue blob"
                    />
                  </div>
                  <div className="mt-12 flex flex-wrap">
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

              <div className="md:mt-0 md:w-1/2 relative lg:mt-0 pl-6 sm:pl-20 pt-10 flex justify-end sm:block mx-auto">
                <div className="ml-4 lg:ml-8 relative z-10 top-10 left-0 w-full h-full z-20">
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
         <div>
<section className="bg-indigo-50">
          <section 
          // className="w-full bg-gradient-to-bl from-violet-100 to-teal-50"
          >
      <div
        id="invisalign-section"
        className={`mr-auto relative rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl md:max-w-lg max-h-full h-[500px] px-12 md:px-14 pb-12 pt-20 flex flex-col justify-start items-center`}
        // data-aos="fade-up"
        // data-aos-duration="1750"
        // data-aos-easing="linear"
        data-aos-anchor="#invisalign-section"
        style={cardStyle}
        ref={InvisalignRef}
      >
        <div className="relative" style={{ zIndex: '-1' }}>
          <img
            className="h-100 w-full"
            src="../images/girlwithinvisalign.jpg"
            alt="invis"
          />
          <div className="absolute top-0 transform translate-x-full -right-40">
            <div className="rounded-full flex flex-col justify-center items-center p-4">
              <img
                className="h-60 w-80 object-contain -mb-10"
                src="../images/invisalign.png"
                alt="invisalign"
              />
              <h3 className="text-2xl mb-4">Invisalign</h3>
              <p className="text-center mb-10">
                As part of the top 1% of Invisalign providers in the US, we have the experience to deliver
                the smile you deserve.
              </p>
              <button className="rounded border border: bg-white border:  px-6 py-4"> <Link to="/invisalign">How Invisalign Works</Link></button>
            </div>
          </div>
        </div>
      </div>
    </section>
          <section 
          // className=" bg-gradient-to-bl from-violet-100 to-teal-50"
          >
  <div
    id="damon-section"
    className={`mr-auto relative rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl md:max-w-lg max-h-full h-[500px] px-12 md:px-14 pb-12 pt-20 flex flex-col justify-start items-center`}
    style={damonStyle}
    ref={damonRef}
    data-aos="fade-up"
    data-aos-duration="1750"
    data-aos-easing="linear"
    data-aos-anchor="#damon-section"
  >
    <div className="flex flex-row items-start justify-end w-full">
      <div className="flex flex-col items-center">
      <div className="absolute top-0 transform translate-x-full -right-40">
                  <div className="rounded-full flex flex-col justify-center items-center p-4">
                  <img
          className="mt-10 h-96 w-auto object-contain"
          src="../images/monse.jpg"
          alt="monse"
        />
                  </div>
                </div>
        <div className="flex flex-col items-center">
        <img
                      className="h-60 w-80 object-contain -mb-10"
                      src="../images/damon.png"
                      alt="damon"
                    />
          <h3 className="text-2xl mb-4">Damon Braces</h3>
          <p className="text-center mb-10">
            Combining self-ligating braces with advanced archwires clinically proven to move teeth quickly and comfortably.
          </p>
          <button className="rounded border border: bg-white border:  px-6 py-4"> <Link to="/braces">How Damon Braces Works</Link></button>
        </div>
      </div>
    </div>
 
  </div>
     <div className="relative top-0 ">
      </div>
</section>
          <section>
            <div
              id="technology-section"
           
              className=" relative  md:max-w-lg  px-12 md:px-14 pb-12 pt-20  items-center"
              style={techStyle}
              ref={techRef}
            >
              <div className="relative" style={{ zIndex: "-1" }}>
                <img
                  className="h-100 w-auto"
                  src="../images/boytero.jpg"
                  alt="iter"
                />
                <div className="absolute top-0 transform translate-x-full -right-40">
                  <div className="rounded-full flex flex-col justify-center items-center p-4">
                    <img
                      className="h-60 w-80 object-contain -mb-10"
                      src="../images/technology.png"
                      alt="tero"
                    />
                    <h3 className="text-2xl mb-4"
                     style={{ letterSpacing: '.5px' }} >Advanced Technology</h3>
                    <p className="text-center mb-10">
                      We offer Invisalign without Impressions. Say goodbye to
                      goopy impressions with our iTero digital scanner.
                    </p>
                    <button className="rounded border border: bg-white border:  px-6 py-4"> <Link to="/invisalign">Learn More</Link></button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          </section>
          </div>   
          <div className="mt-10 mb-60">
            <LogoSlider style={{ transform: "translate(-50%, -50%)" }} />
          </div>

          <div className="relative">
            <div className=" absolute -top-60 right-0 z-10">
              <img
                className="mt-20 opacity-20"
                style={{ height: "280px", width: "auto" }}
                src="../images/chat.png"
                alt="technology"
              />
            </div>
            <p
              className=" text-teal-500 text-center absolute -bottom-3  md:right-12 z-10"
              style={{
                maxWidth: "300px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              I have never been to a doctor's office that is anything like Dr.
              Frey's. Dr. Frey goes above and beyond to create the best smiles
              and has by far the nicest staff around.
            </p>

            <h1 className="text-teal-500 text-xl text-right absolute -bottom-40 md:right-60 z-10">
              Rebecca M.
            </h1>
          </div>

          <section className="flex flex-col gap-8 justify-center px-4 py-8 relative z-1">
            <div className="mt-36">
              <div className="relative">
                <h3 className="text-3xl lg:text-5xl font-bold md:font-black leading-10 text-gray-700 flex ">
                  Our Locations
                  <img
                    src="../../images/pin.svg"
                    alt="pin"
                    className="flex ml-2  inset-0 z-0 opacity-90 bounce-animation transform-gpu transition-transform hover:animate-bounce transition-all duration-400"
                    style={{
                      width: "3%",
                      height: "auto",
                      left: "-30%",
                      transition: "transform 0.7s ease-out",
                    }}
                  />
                </h3>
              </div>

              <div
                id="cards-container"
                className="md:grid md:grid-cols-2 lg:flex gap-8 mt-16 "
              >
                <div
                  className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center lg:w-1/4 h-96"
                  onMouseEnter={() => setIsCardHovered(true)}
                  onMouseLeave={() => setIsCardHovered(false)}
                >
                  <Map
                    initialViewState={{
                      longitude: -75.517846,
                      latitude: 40.566356,
                      zoom: isCardHovered ? 14 : 12,
                    }}
                    className="w-full h-full"
                    mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_ALLENTOWN}`}
                  />
                  <figcaption className="p-4 text-center">
                    <h3 className="uppercase"  style={{ letterSpacing: '1px' }}>Allentown</h3>
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
                <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center lg:w-1/4 h-96">
                  <Map
                    initialViewState={{
                      longitude: -75.296074,
                      latitude: 40.660953,
                      zoom: 14,
                    }}
                    className="w-full h-full"
                    mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_BETHLEHEM}`}
                  />
                  <figcaption className="p-4 text-center">
                    <h3 className="uppercase"
                     style={{ letterSpacing: '1px' }}>Bethlehem</h3>
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
                <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center lg:w-1/4 h-96">
                  <Map
                    initialViewState={{
                      longitude: -75.597906,
                      latitude: 40.659477,
                      zoom: 14,
                    }}
                    className="w-full h-full"
                    mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_SCHNECKSVILLE}`}
                  />
                  <figcaption className="p-4 text-center">
                    <h3 className="uppercase" style={{ letterSpacing: '1px' }}>Schnecksville</h3>
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
                <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl items-center lg:w-1/4 h-96">
                  <Map
                    initialViewState={{
                      longitude: -75.73046,
                      latitude: 40.8161,
                      zoom: 14,
                    }}
                    className="w-full h-full"
                    mapStyle={`${process.env.REACT_APP_MAPBOX_STYLE_LEHIGHTON}`}
                  />
                  <figcaption className="p-4 text-center">
                    <h3 className="uppercase" style={{ letterSpacing: '1px' }}>Lehighton</h3>
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
          </div>
      </main>
    </>
  );
};

export default Home;
