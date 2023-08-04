import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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

  return (
    <div className="w-full px-4 py-4 pt-16 bg-gradient-to-r from-neutral-50 to-teal-50 to-violet-100 to-violet-200">

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
      <div className="grid grid-cols-3 mt-4">
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
       </div>
      <div className="p-2 mx-auto">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center"></div>
        </div>
            <div>
      <div
        className="background"
        style={{
          background: '',
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }}
      />

<Parallax pages={5}>
  <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
    {/* Content for first parallax layer */}
  </ParallaxLayer>

  <ParallaxLayer style={{ ...alignCenter, justifyContent: 'flex-start', top: '20%' }}>
    <div
      className="card sticky"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.25rem',
        height: '10rem',
        width: '25%',
        textAlign: 'center',
        borderRadius: '10px',
        marginLeft: '15%',
        backgroundColor: '#ff6d6d',
      }}
    >
      <img
        src="../../images/your-image.jpg"
        alt="invisalign"
        className="mt-4 rounded-lg"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "400px",
        }}
      />
    </div>
  </ParallaxLayer>

  <ParallaxLayer style={{ ...alignCenter, justifyContent: 'flex-end', top: '45%' }}>
    <div
      className="card parallax purple"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.25rem',
        height: '10rem',
        width: '25%',
        textAlign: 'center',
        borderRadius: '10px',
        marginRight: '15%',
      }}
    >
      <p style={{ letterSpacing: ".2px" }} className="mt-7">
        We strive to attain finished results consistent with the{" "}
        <span style={{ letterSpacing: ".2px" }} className="text-2xl text-violet-500">
          American Board of Orthodontics (ABO){" "}
        </span>{" "}
        qualitative standards. Our dedicated doctors place great priority on the
        certification and recertification process, ensuring that all diagnostic
        records adhere to ABO standards. Currently, Dr. Gregg Frey is a certified
        orthodontist, and is preparing cases for recertification. Dr. Daniel Frey
        is in the final stages of obtaining his initial certification. 
      </p>
    </div>
  </ParallaxLayer>

  <ParallaxLayer style={{ ...alignCenter, justifyContent: 'flex-end', top: '60%' }}>
    <div
      className=""
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.25rem',
        height: '10rem',
        width: '25%',
        textAlign: 'center',
        borderRadius: '10px',
        marginRight: '15%',
        color: 'black',
      }}
    >
      <p>
        To complement our use of cutting-edge diagnostic technology, we uphold the
        highest standards for our records, ensuring accuracy and precision
        throughout the treatment process.
      </p>
    </div>
  </ParallaxLayer>
</Parallax>

    </div>
        <div className="py-10  bg-white flex flex-col md:flex-row items-center justify-center">
        <div style={{ zIndex: 2 }}>
  <img
    src="../../images/freysmilepatient.jpg"
    alt="invisalign"
    className="mt-4 rounded-full"
    style={{
      width: "40%",
      height: "auto",
    }}
  />
</div>

     
<div className="max-w-xl mx-auto text-center" style={{ marginLeft: "-900px" }}>
  <img
    src="../../images/babyblueblob.svg"
    alt="invisalign"
    className="mt-4"
    style={{
      width: "120%",
      height: "auto",
    }}
  />
</div>
<div className="text-center mx-auto mt-4">
    <p className="text-lg">Your text here</p>
  </div>

  <div className="max-w-xl mx-auto text-center">

  </div>
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
          className="w-1/2"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <img
              src="../../images/drfreyperfecting.jpg"
              alt="invisalign"
              className="mt-4 "
              style={{
                width: "120%",
                height: "auto",
              }}
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
        <div className="flex">
        <img
              src="../../images/smilescholarship.jpg"
              alt="invisalign"
              className="mt-4 rounded-lg "
              style={{
                width: "40%",
                height: "auto",
              }}
            />
          <p
            className="relative mt-40 mr-20 text-2xl text-center text-violet-800"
            style={{ zIndex: "20", flex: "1",     }}
       
          >
            FreySmiles believes in accessible orthodontic care for everyone and
            offers flexible payment options. They established a non-profit
            organization called{" "}
            <span>
              {" "}
              <a
                href="https://morethansmiles.org/"
                className="text-indigo-500 underline cursor-pointer hover:text-indigo-700"
              >
                <strong> More Than Smiles</strong>
              </a>{" "}
            </span>{" "}
            in 2011, providing orthodontic treatment to deserving young
            individuals who may not have access to world-class orthodontic care
            or cannot afford it. If you know someone that could benefit from
            this gift, please visit the website for details on how to nominate a
            deserving individual.
          </p>
        </div>
        <div className="px-4 py-2 mx-auto text-xl text-stone-800">
          <p className="relative mt-1" style={{ zIndex: "20" }}></p>
        </div>

<section className="bg-white">
        <table
          className="mx-auto"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <tbody>
            <tr>
              <td className="p-2"     style={{
                  borderBottom: "1px solid #B17CFF",
       
                  fontSize: "20px",
                }}></td>

              <td
                className="p-2 py-8 text-center bg-gradient-to-r from-rose-50 to-violet-200 text-violet-700"
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

                  fontSize: "20px",
                }}
              >
                Other Practitioners
              </td>
            </tr>
            <tr>
              <td
                className="p-2 py-8 text-lg text-center "
                style={{
                  borderTopLeftRadius: "40px",
                  borderBottom: "1px solid #B17CFF",
 
                
                }}
              >
                4 convenient locations
              </td>
              <td className="mb-2 bg-gradient-to-r from-rose-50 to-violet-200"
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
          
                borderBottom: "1px solid #B17CFF",
              
              }}>
                Leaders in the industry
              </td>
              <td className="mb-2 bg-gradient-to-r from-rose-50 to-violet-200"
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
       
                borderBottom: "1px solid #B17CFF",
              
              }}>
                Modern office settings
              </td>
              <td className="mb-2 bg-gradient-to-r from-rose-50 to-violet-200"
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
       
                  borderBottom: "1px solid #B17CFF",
                
                }}>
                Over 50+ years of experience
              </td>
              <td className="mb-2 bg-gradient-to-r from-rose-50 to-violet-200"   style={{
       
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
                className="p-2 py-8 text-lg text-center "
                style={{
                  borderBottomLeftRadius: "40px",
                  borderBottom: "1px solid #B17CFF",
                }}

              >
                Financial options
              </td>
              <td className="mb-2 bg-gradient-to-r from-rose-50 to-violet-200"
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
