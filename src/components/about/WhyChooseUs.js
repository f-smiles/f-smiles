import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import SvgClipOne from "../svg/SvgClipOne";

export default function WhyChooseUs() {

  const alignCenter = { display: 'flex', alignItems: 'center' }
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = [
    "Invisalign",
    "Damon Braces",
    "Accelerated Orthodontic Treatment",
    "low-dose 3D Digital Radiographs",
  ];

  const [open, setOpen] = useState(1);
  const [alwaysOpen, setAlwaysOpen] = useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger)
  //   let panels = gsap.utils.toArray(".panel")

  //   const ctx = gsap.context(() => {
  //     gsap.to(panels, {
  //       yPercent: 0,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".wrapper",
  //         pin: true,
  //         scrub: true,
  //         snap: 1 / (panels.length - 1),
  //         start: "top top",
  //         end: "bottom bottom",
  //       }
  //     })
  //   }, panelsRef)
  //   return () => ctx.revert()
  // }, [])
  return (
    <div className=" w-full px-4 py-4 pt-16">

      <div className="relative z-10 px-4 pt-4 pb-2 space-y-4 text-center text-gray-500 rounded-lg ">
        <div>
          <h1 className="relative mt-20 mb-20 text-5xl text-stone-100">
            <span className="justify-start mr-4 text-black -ml-80">Experts in</span>{" "}
            <span className="relative">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`transition-opacity duration-1000 ${
                    index === currentWordIndex
                      ? "opacity-100 text-violet-700"
                      : "opacity-0 text-violet-700"
                  }`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    whiteSpace: "nowrap",
                    display: "inline-block",
                    animation: `morphAnimation ${words.length * 3}s infinite`,
                    animationDelay: `${index * 2}s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
        </div>
      </div>
   
      <div className="p-2 mx-auto">
        <div className="relative">
          <div className="flex items-center justify-center"></div>
        </div>

            <div>
      <div
        // className="background"
        // style={{
        //   background: '',
        //   position: 'absolute',
        //   top: 0,
        //   bottom: 0,
        //   right: 0,
        //   left: 0,
        //   width: '100vw',
        //   height: '100vh',
        // }}
      />
<Parallax pages={5}>
  <div className="snap-y snap-mandatory h-screen overflow-scroll">
  <ParallaxLayer style={{ ...alignCenter, justifyContent: 'flex-end', top:"2%", transform: 'translateY(-50%)', scrollSnapAlign: 'start' }}>
      <div
        className="card parallax purple"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          height: '10rem',
          width: '25%',
          textAlign: 'center',
          borderRadius: '10px',
          marginRight: '15%',
        }}
      >
        <p style={{ letterSpacing: ".2px" }} className="">
          <h1 className="block mb-4 text-5xl text-violet-800">Uncompromising quality</h1>
          We strive to attain finished results consistent with the{" "}
          <span style={{ letterSpacing: ".2px" }} className="text-2xl text-violet-800">
            American Board of Orthodontics (ABO){" "}
          </span>{" "}
          qualitative standards. Our doctors place great priority on the
          certification and recertification process, ensuring that all diagnostic
          records adhere to ABO standards.
        </p>
      </div>
    </ParallaxLayer>

    <ParallaxLayer style={{ ...alignCenter, justifyContent: 'flex-end', top: '20%', transform: 'translateY(-50%)', scrollSnapAlign: 'start' }}>
      <div
        className="relative"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          height: '10rem',
          width: '25%',
          textAlign: 'center',
          borderRadius: '10px',
          marginRight: '15%',
          color: 'black',
        }}
      >
        <div style={{ position: 'relative', zIndex: '1' }}>
          <p>
            Currently, Dr. Gregg Frey is a certified orthodontist and is preparing cases for recertification. Dr. Daniel Frey is in the final stages of obtaining his initial certification.
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            left: '0',
            right: '0',
            height: '2px',
            background: '#333',
            borderRadius: '10px 10px 0 0',
            zIndex: '0',
          }}
        ></div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer style={{ ...alignCenter, justifyContent: 'flex-end', top: '50%', transform: 'translateY(-50%)', scrollSnapAlign: 'start' }}>
      <div
        className="relative"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          height: '10rem',
          width: '25%',
          textAlign: 'center',
          borderRadius: '10px',
          marginRight: '15%',
          color: 'black',
        }}
      >
        <div style={{ position: 'relative', zIndex: '1' }}>
          <p>
            To complement our use of cutting-edge diagnostic technology, we uphold the highest standards for our records, ensuring accuracy and precision throughout the treatment process.
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            left: '0',
            right: '0',
            height: '2px',
            background: '#333',
            borderRadius: '10px 10px 0 0',
            zIndex: '0',
          }}
        ></div>
      </div>
    </ParallaxLayer>
  </div>
</Parallax>


    </div>

        <div className=" ml-20 flex flex-col items-center justify-center py-10 md:flex-row">
        <div style={{ position: 'relative', width: '80%' }}>
  <img
    src="../../images/freysmilepatient.jpg"
    alt="invisalign"
    className=""
    style={{
      width: '50%',
      height: 'auto',
      position: 'relative',
      zIndex: 1
    }}
  />
  <img
    src="../../images/bluetriangle.png"
    alt="blue"
    style={{
      position: 'absolute',
      width: '40%',
      height: 'auto',
      top: 60,
      left: 40,
      zIndex: 2,
      transform: 'rotate(180deg)',
      opacity: 0.5 // Adjust for desired transparency
    }}
  />
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backdropFilter: 'blur(1px)',
      zIndex: 3
    }}
  />
</div>


</div>

<div className="max-w-xl mx-auto mt-20 text-center" style={{ marginLeft: "-800px" }}>
  
<svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_104_171)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 77.6142 122.386 100 150 100C122.386 100 100 122.386 100 150C100 122.386 77.6142 100 50 100ZM50 100C22.3858 100 0 122.386 0 150C0 177.614 22.3858 200 50 200C77.6142 200 100 177.614 100 150C100 177.614 122.386 200 150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C177.614 100 200 77.6142 200 50C200 22.3858 177.614 0 150 0C122.386 0 100 22.3858 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="url(#paint0_linear_104_171)"/> </g> <defs> <linearGradient id="paint0_linear_104_171" x1="14" y1="26" x2="179" y2="179.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#E9B8FF"/> <stop offset="1" stop-color="#F9ECFF"/> </linearGradient> <clipPath id="clip0_104_171"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
</div>


  <div className="max-w-xl mx-auto text-center">

  </div>


        <div className="absolute relative inset-0 flex py-20 mb-20 overflow-hidden rounded-lg bg-opacity-60 backdrop-filter backdrop-blur-xl">
          <div className="w-1/2">
          <p className="px-12 py-8 mx-auto mt-20 text-lg text-center text-violet-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span className="text-4xl">
            Our office holds the distinction of being the longest-standing,
 active board-certified orthodontic office in the area.{" "}
            </span>
          <span className="py-2"     style={{ letterSpacing: '.2px' }} >
   With four offices in the Lehigh Valley, we have been providing unparalleled orthondtic care for over four decades.
           </span>
          </p>
          </div>
          <div
          className="relative w-1/2"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <SvgClipOne className="absolute inset-0 m-auto" />
            <img
              src="../../images/drfreyperfecting.jpg"
              alt="invisalign"
              // style={{
              //   width: "120%",
              //   height: "auto",
              // }}
            />
          </div>
          <div
            style={{
              display: "flex",

              alignItems: "flex-end",
            }}
          >

          </div>
        </div>


        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="mt-10 -ml-10 text-violet-800"
          >
            <Fragment>
              <Accordion open={open === 1}>
                <h1>


                </h1>

              </Accordion>

              <Accordion open={open === 2}>

              </Accordion>
            </Fragment>
          </div>

        </div>
        <div className="relative flex py-10 bg-white">

  <div className="relative w-1/3 p-8">
    <div className="absolute z-10 px-2 py-2 mt-40 mb-10 ml-20 text-5xl bg-white ">Giving Back</div>
  </div>


  <div className="flex items-center justify-center w-1/3">
    
    <img
      src="../../images/smilescholarship.jpg"
      alt="invisalign"
      className="w-full h-auto -ml-80"
      style={{
        maxWidth: "100%",
      }}
    />
  </div>


  <div className="w-1/3 p-8 text-xl text-center text-violet-800">
    <img
      src="../../images/purpleblog.png"
      alt="invisalign"
      className="absolute -bottom-20 right-0 w-20% h-auto opacity-40"
      style={{ zIndex: "-1" }}
    />
    Frey Smiles believes in providing accessible orthodontic care for everyone. In 2011, they established a non-profit organization called More Than Smiles, which offers orthodontic treatment to deserving individuals who may not have access to world-class orthodontic care or cannot afford it. If you know someone who could benefit from this gift, please visit the website for details on how to nominate a candidate.
    <div className="flex items-center mt-4">
      <a href="https://morethansmiles.org/" className="mr-2 text-indigo-500 hover:text-indigo-700">
        Learn More
      </a>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </div>
  </div>
</div>


        <div className="px-4 py-2 mx-auto text-xl text-stone-800">
          <p className="relative mt-1" style={{ zIndex: "20" }}></p>
        </div>

<section className="bg-white">
        <table
          className="mx-auto font-HelveticaNowVar font-thin"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <tbody>
            <tr>
              <td className="p-2"     style={{
                  borderBottom: "1px solid #B17CFF",

                  fontSize: "20px",
                }}></td>

              <td
                className="rounded-tl-full rounded-tr-full p-2 py-8 text-center bg-violet-50 text-violet-700"
                style={{
                  borderBottom: "1px solid #B17CFF",

                  fontSize: "20px",
                }}
              >
            <div style={{ maxWidth: "200px", margin: "0 auto" }}>
  <img
    src="/images/logo_full.png"
    alt="xray"
    style={{ width: "100%", height: "auto" }}
  />
</div>

              </td>
              <td
                className="p-2 py-8 text-center "
                style={{
                  borderTopRightRadius: "40px",
                  borderBottom: "1px solid #B17CFF",
                  letterSpacing: "1.2px",
                  fontSize: "20px",
                }}
              >
                Other Offices
              </td>
            </tr>
            <tr>
              <td
                className="p-2 py-8 text-lg text-center "
                style={{
                  borderTopLeftRadius: "40px",
                  borderBottom: "1px solid #B17CFF",
                  letterSpacing: "1px",


                }}
              >
                4 convenient locations
              </td>
              <td className="mb-2 bg-violet-50"
               style={{

                borderBottom: "1px solid #B17CFF",

              }}
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="z-0 w-8 h-8 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td className="mb-2"
               style={{

                borderBottom: "1px solid #B17CFF",

              }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="z-0 w-8 h-8 mx-auto stroke-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-8 text-lg text-center"
               style={{
                letterSpacing: "1px",
                borderBottom: "1px solid #B17CFF",

              }}>
                Leaders in the industry
              </td>
              <td className="mb-2 bg-violet-50"
               style={{

                borderBottom: "1px solid #B17CFF",

              }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="z-0 w-8 h-8 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td className="mb-2 " style={{

                  borderBottom: "1px solid #B17CFF",

                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="z-0 w-8 h-8 mx-auto stroke-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="p-2 py-8 text-lg text-center"
               style={{
                letterSpacing: "1px",
                borderBottom: "1px solid #B17CFF",

              }}>
                Modern office settings
              </td>
              <td className="mb-2 bg-violet-50"
                 style={{

                  borderBottom: "1px solid #B17CFF",

                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="z-0 w-8 h-8 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td className="mb-2"    style={{

       borderBottom: "1px solid #B17CFF",

     }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="z-0 w-8 h-8 mx-auto stroke-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td className="p-2 py-8 text-lg text-center "
                 style={{
                  letterSpacing: "1px",
                  borderBottom: "1px solid #B17CFF",

                }}>
                Over 50+ years of experience
              </td>
              <td className="mb-2 bg-violet-50"   style={{

       borderBottom: "1px solid #B17CFF",

     }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="z-0 w-8 h-8 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td className="mb-2 "    style={{

       borderBottom: "1px solid #B17CFF",

     }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="z-0 w-8 h-8 mx-auto stroke-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td
                className=" p-2 py-8 text-lg text-center "
                style={{         letterSpacing: "1px",
                  borderBottomLeftRadius: "40px",
                  borderBottom: "1px solid #B17CFF",
                }}

              >
                Financial options
              </td>
              <td className="rounded-bl-full rounded-br-full mb-2 bg-violet-50"
                 style={{

                  borderBottom: "1px solid #B17CFF",

                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="z-0 w-8 h-8 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td
                className="mb-2 "
                style={{
                  borderBottomRightRadius: "40px",
                  borderBottom: "1px solid #B17CFF",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="z-0 w-8 h-8 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
        </section>
      </div>
    </div>
  );
};

   {/* <div className="grid grid-cols-3 mt-4">
      <div className="flex flex-col items-center justify-center col-span-1 px-4 py-20 text-purple-900 border border-purple-400">
      <span className="text-3xl">3D i-Cat Imaging</span>
        <img
             src="/images/x-ray.svg"
             alt="xray"
             className="w-20 h-20"
           />
           <p className="mt-2">
           The i-Cat imaging machine creates precise three-dimensional views of the oral-facial structures in as little as five seconds. Using these enhanced images, our orthodontists monitor facial growth and estimate your best treatment timing and plan.
           </p>
         </div>
         <div className="flex flex-col items-center justify-center col-span-1 px-4 py-20 text-purple-900 border-t border-b border-purple-400">
           <span className="text-3xl">Optimized Treatment</span>
           <img
             src="/images/propeltransparent.png"
             alt="propels"
             className="w-12 h-12"
           />
           <p className="mt-2"> Our team prioritizes your treatment optimization. We currently offer the most efficient adjuncts to accelerate your treatment.
 Currently we utilize light and vibrational therapy to stimulate the supporting tissues around the teeth so that they move to their ideal positions in less time. We always strive to reduce office visits is a priority of ours.  </p>
         </div>
         <div className="flex flex-col items-center justify-center col-span-1 px-4 py-20 text-purple-900 border border-purple-400">
           <span className="text-3xl">Laser Therapy</span>
           <img
             src="/images/Laser-Symbol.svg"
             alt="laser"
             className="w-20 h-20 transform rotate-270"
           />
           <p>Straight teeth are just one part of a beautiful smile. Like any work of art, your teeth need the right frame to truly shine. Thanks to advanced laser technology, we can sculpt your gum tissue to create symmetrical contours that highlight your new smile.</p>
         </div>
       </div> */}