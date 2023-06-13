import React, { Fragment, useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const WhyChooseUs = () => {
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
    <div className="bg-gradient-to-r from-neutral-50 to-teal-50 to-violet-100 to-violet-200 py-4  w-full px-4 pt-16">
      <img
        src="../../images/pinkbanner.png"
        alt="invisalign"
        className="absolute inset-0 z-0 opacity-30"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          objectPosition: "right",
          filter: "hue-rotate(70deg)",
        }}
      />
      <div className=" relative rounded-lg px-4 pt-4 pb-2 space-y-4 text-gray-500 text-center relative z-10">
        <div>
          <h1 className="mt-20 mb-20 text-stone-100 text-5xl relative">
            <span className="mr-4 justify-start -ml-80">Experts in</span>{" "}
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
      <div className="col-span-1 text-purple-900 px-4 py-20 border border-purple-200 flex flex-col justify-center items-center">
      <span className="text-3xl">3D i-Cat Imaging</span>
        <img
             src="/images/x-ray.svg"
             alt="xray"
             className="w-20 h-20"
           />
           <p className="mt-2">
           The i-Cat imaging machine creates precise three-dimensional views of the oral-facial complex in as little as five seconds. Using these enhanced images, our Orthodontists plan complex procedures, identify disease, and visualize internal structures that would otherwise only be visible through surgery.
           </p>
         </div>
         <div className="col-span-1 text-purple-900 px-4 py-20 border-t border-b border-purple-200 flex flex-col justify-center items-center">
           <span className="text-3xl">Accelerated Treatment</span>
           <img
             src="/images/propel.png"
             alt="propels"
             className="w-12 h-12"
           />
           <p className="mt-2">FreySmiles Orthodontics is proud to offer Propel. Designed to turbo-charge your orthodontic treatment, Propel is non-invasive and works with both braces and Invisalign. It is a safe, well-tolerated option for many patients.
 It stimulates the bone around your teeth so that they move to their ideal positions in less time. How much your treatment time is reduced will depend upon several factors. Many patients see treatments completed in months instead of years. For increased patient comfort, health and satisfaction.</p>
         </div>
         <div className="col-span-1 text-purple-900 px-4 py-20 border border-purple-200">
           <span className="text-3xl">Laser Therapy</span>
           <img
             src="/images/Laser-Symbol.svg"
             alt="laser"
             className="w-20 h-20 transform rotate-270"
           />
           <p>Straight teeth are just one part of a beautiful smile. Like any work of art, your teeth need the right frame to truly shine. Thanks to advanced laser technology, we can sculpt your gum tissue to create symmetrical contours that highlight your new smile. Because Dr. Gregg Frey is certified by the Academy of Laser Dentistry, he is well-qualified to help you determine if this procedure is right for you.</p>
         </div>
       </div>
      <div className="mx-auto  p-2">
        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center"></div>
        </div>
        <div className="rounded-lg mb-10 flex relative bg-white bg-opacity-40 backdrop-filter backdrop-blur-xl absolute inset-0 overflow-hidden">
          <p className="mt-20 text-center px-12 py-8 mx-auto text-lg text-violet-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span className="py-2"     style={{ letterSpacing: '.2px' }} >
    FreySmiles Orthodontics is a family-owned practice providing unparalleled orthodontic experience to 
the Lehigh Valley community for over four decades. Our office holds the distinction of being the longest-standing,
 active board-certified orthodontic office in the area.{" "}
           </span>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <img
              src="../../images/drfreyperfecting.jpg"
              alt="invisalign"
              className="rounded-lg opacity-90 mt-4"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
<div className="py-10 bg-indigo-500">
<p style={{ letterSpacing: '.2px' }} className="mt-7">
              {" "}
              We strive to attain finished results consistent with the
              <span style={{ letterSpacing: '.2px' }} className="text-2xl text-violet-500">
                {" "}
                American Board of Orthodontics (ABO){" "}
              </span>{" "}
              qualitative standards. Our dedicated doctors place great priority
              on the certification and recertification process, ensuring that
              all diagnostic records adhere to ABO standards. Currently, Dr.
              Gregg Frey is a certified orthodontist, and is preparing cases for
              recertification. Dr. Daniel Frey is in the final stages of
              obtaining his initial certification. To complement our use of
              cutting-edge diagnostic technology, we uphold the highest
              standards for our records, ensuring accuracy and precision
              throughout the treatment process.
            </p>
          <p style={{ letterSpacing: '.2px' }} className="mb-16 ml-10 mr-10 text-center px-4 py-2 mx-auto text-md text-violet-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 whitespace-[60ch]">
            Our office is the #1 provider of Invisalign and Invisalign Teen in
            the region.{" "}
            <span className="text-violet-500 text-2xl">
              As Diamond Plus Invisalign providers,
            </span>{" "}
            our care over the many years has contributed to the research and
            advancement of this specialized orthodontic treatment modality.
          </p>
</div>
        <NavLink
          to="/virtual-consultation"
          className="-ml-20 mt-10 curspor-pointer px-5 py-5 cursor-pointer bg-teal-800 rounded-full px-8 py-2 hover:bg-emerald-700 text-lg text-white tracking-normal text-white hover:text-white z-20 relative"
          style={{ zIndex: "20" }}
        >
          <button className="mt-20">Schedule a Consultation</button>
        </NavLink>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="mt-10 -ml-10 text-violet-800"
          >
            <Fragment>
              <Accordion open={open === 1}>
                <h1>
                 
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="text-3xl border-b-0"
                  >
                    <span style={{ whiteSpace: "nowrap" }}>
                      + Meet Our Doctors
                    </span>
                  </AccordionHeader>
                </h1>
                <AccordionBody>
                  <ul>
                    <li className="mb-5">
                      <a
                        className=" text-xl  cursor-pointer text-emerald-700 hover:text-indigo-700"
                        href="/our-team"
                      >
                        Dr. Gregg Frey
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-xl text-center cursor-pointer text-emerald-700 hover:text-indigo-700"
                        href="/our-team"
                      >
                        Dr. Daniel Frey
                      </a>
                    </li>
                  </ul>
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 2}>
                <h1>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="text-3xl border-b-0"
                  >
                    <span style={{ whiteSpace: "nowrap" }}>+ 4 Locations</span>
                  </AccordionHeader>
                </h1>
                <AccordionBody>
                  <ul>
                    <li>
                      <a
                        className="text-lg underline cursor-pointer text-indigo-500 hover:text-indigo-700"
                        href="/locations"
                      >
                        Allentown
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg underline cursor-pointer text-indigo-500 hover:text-indigo-700"
                        href="/locations"
                      >
                        Bethlehem
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg underline cursor-pointer text-indigo-500 hover:text-indigo-700"
                        href="/locations"
                      >
                        Lehigton
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg underline cursor-pointer text-indigo-500 hover:text-indigo-700"
                        href="/locations"
                      >
                        Schnecksville
                      </a>
                    </li>
                  </ul>
                </AccordionBody>
              </Accordion>
            </Fragment>
          </div>
       
        </div>
        <div className="flex">
          <img
            src="../../images/rainbow.svg"
            alt="invisalign"
            className="opacity-90 mt-4"
            style={{
              width: "20%",
              height: "auto",
            }}
          />
          <p
            className="text-violet-800  text-lg mt-10 mr-20 relative text-center"
            style={{ zIndex: "20", flex: "1",     }}
       
          >
            FreySmiles believes in accessible orthodontic care for everyone and
            offers flexible payment options. They established a non-profit
            organization called{" "}
            <span>
              {" "}
              <a
                href="https://morethansmiles.org/"
                className="underline cursor-pointer text-indigo-500 hover:text-indigo-700"
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
          <p className="mt-1 relative" style={{ zIndex: "20" }}></p>
        </div>

        <table
          className="mx-auto"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <tbody>
            <tr>
              <td className="p-2"></td>

              <td
                className="bg-gradient-to-r from-rose-50 to-violet-200 p-2 py-8 text-violet-700 text-center"
                style={{
                  borderTopLeftRadius: "40px",
                  borderBottomLeftRadius: "40px",
                  fontSize: "20px",
                }}
              >
                FreySmiles Orthodontics
              </td>
              <td
                className="bg-gradient-to-r from-violet-200 to-violet-300 p-2 py-8 text-violet-700 text-center"
                style={{
                  borderTopRightRadius: "40px",

                  fontSize: "20px",
                }}
              >
                Other Practitioners
              </td>
            </tr>
            <tr>
              <td
                className="bg-gradient-to-r from-stone-50 to-rose-50 text-lg text-neutral-500 p-2 py-8 text-center"
                style={{
                  borderTopLeftRadius: "40px",
                
                }}
              >
                4 convenient locations
              </td>
              <td className="mb-2 bg-gradient-to-r from-rose-50 to-violet-200"
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="w-8 h-8 mx-auto z-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td className="mb-2 bg-gradient-to-r from-violet-200 to-violet-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mx-auto stroke-red-500 z-0"
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
              <td className="bg-gradient-to-r from-stone-50 to-rose-50 text-neutral-500 text-lg p-2 py-8 text-center">
                Leaders in the industry
              </td>
              <td className="mb-2 bg-gradient-to-r from-rose-50 to-violet-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="w-8 h-8 mx-auto z-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td className="mb-2 bg-gradient-to-r from-violet-200 to-violet-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mx-auto stroke-red-500 z-0"
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
              <td className="bg-gradient-to-r from-stone-50 to-rose-50 text-neutral-500 text-lg p-2 py-8 text-center">
                Modern office settings
              </td>
              <td className="mb-2 bg-gradient-to-r from-rose-50 to-violet-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="w-8 h-8 mx-auto z-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td className="mb-2 bg-gradient-to-r from-violet-200 to-violet-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mx-auto stroke-red-500 z-0"
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
              <td className="text-lg p-2 py-8 text-center bg-gradient-to-r from-stone-50 to-rose-50 text-neutral-500">
                Over 50+ years of experience
              </td>
              <td className="mb-2 bg-gradient-to-r from-rose-50 to-violet-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="w-8 h-8 mx-auto z-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td className="mb-2 bg-gradient-to-r from-violet-200 to-violet-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mx-auto stroke-red-500 z-0"
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
                className="text-lg p-2 py-8 text-center bg-gradient-to-r from-stone-50 to-rose-50 text-neutral-500"
                style={{
                  borderBottomLeftRadius: "40px",
                }}
              >
                Financial options
              </td>
              <td className="mb-2 bg-gradient-to-r from-rose-50 to-violet-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="w-8 h-8 mx-auto z-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td
                className="mb-2 bg-gradient-to-r from-violet-200 to-violet-300"
                style={{
                  borderBottomRightRadius: "40px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="w-8 h-8 mx-auto z-0"
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
      </div>
    </div>
  );
};

export default WhyChooseUs;
