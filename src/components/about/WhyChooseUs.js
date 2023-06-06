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
          filter: "hue-rotate(290deg)",
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
      <div className="mx-auto w-full max-w-screen-lg rounded-2xl p-2">
        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center"></div>
        </div>
        <div className="rounded-full relative bg-gradient-to-r from-rose-50 to-neutral-50 to-violet-50 to-teal-50 overflow-hidden">
          <p className="mt-16 text-center px-12 py-8 mx-auto text-md text-violet-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            FreySmiles Orthodontics is a family-owned practice providing
            unparalleled orthodontic experience to the Lehigh Valley community
            for over four decades.{" "}
            <span className="text-2xl">
              {" "}
              Our office holds the distinction of being the longest-standing,
              active board-certified orthodontic office in the area.{" "}
            </span>{" "}
            <p className="mt-7">
              {" "}
              We strive to attain finished results consistent with the
              <span className="text-2xl">
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
          </p>

          <p className="mb-14 ml-10 mr-10 text-center px-4 py-2 mx-auto text-md text-violet-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 whitespace-[60ch]">
            Our office is the #1 provider of Invisalign and Invisalign Teen in
            the region.{" "}
            <span className="text-2xl">
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
  <div style={{ display: "flex", flexDirection: "column" }} className="mt-10 -ml-10 text-violet-800">

    <Fragment>
 
      <Accordion open={open === 1}>

        <h1>
        <img
        src="../../images/glasses.png"
        alt="invisalign"
        className="absolute inset-0 z-0 opacity-90"
        style={{
          width: "20%",
          height: "auto",
          left: "-30%",

        }}
      />
        <AccordionHeader onClick={() => handleOpen(1)} className="text-3xl border-b-0">
        <span style={{ whiteSpace: "nowrap" }}>+ Meet Our Doctors</span> 
        </AccordionHeader>
        </h1>
        <AccordionBody>
          
        <ul>
    <li>
      <a className="text-lg underline cursor-pointer text-indigo-500 hover:text-indigo-700" href="/our-team">Dr. Gregg Frey</a>
    </li>
    <li>
      <a className="text-lg underline cursor-pointer text-indigo-500 hover:text-indigo-700" href="/our-team">Dr. Daniel Frey</a>
    </li>
  </ul>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2}>
        <h1>
        <img
        src="../../images/pin.png"
        alt="pin"
        className="ml-2 absolute inset-0 z-0 opacity-90 bounce-animation transform-gpu transition-transform hover:animate-bounce transition-all duration-400"
        style={{
          width: "12%",
          height: "auto",
          left: "-30%",
          transition: "transform 0.7s ease-out",
        }}
      />
    

        <AccordionHeader onClick={() => handleOpen(2)} className="text-3xl border-b-0">
        <span style={{ whiteSpace: "nowrap" }}>+ 4 Locations</span> 
        </AccordionHeader>
        </h1>
        <AccordionBody>
        <ul>
    <li>
      <a className="text-lg underline cursor-pointer text-indigo-500 hover:text-indigo-700" href="/locations">Allentown</a>
    </li>
    <li>
      <a className="text-lg underline cursor-pointer text-indigo-500 hover:text-indigo-700" href="/locations">Bethlehem</a>
    </li>
    <li>
      <a className="text-lg underline cursor-pointer text-indigo-500 hover:text-indigo-700" href="/locations">Lehigton</a>
    </li>
    <li>
      <a className="text-lg underline cursor-pointer text-indigo-500 hover:text-indigo-700" href="/locations">Schnecksville</a>
    </li>
  </ul>
        </AccordionBody>
      </Accordion>
    </Fragment>
  </div>
  <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
    <img
      src="../../images/drfreyperfecting.jpg"
      alt="invisalign"
      className="opacity-90 mt-4"
      style={{
        width: "50%",
        height: "auto",
      }}
    />
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
          style={{ zIndex: "20", flex: "1" }}
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
          individuals who may not have access to world-class orthodontic care or
          cannot afford it. If you know someone that could benefit from this
          gift, please visit the website for details on how to nominate a
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
                className="p-2 py-8 text-violet-700 text-center"
                style={{
                  borderLeft: "1px solid purple",
                  borderRight: "1px solid purple",
                  borderBottom: "1px solid purple",
                  fontSize: "20px" ,
                }}
              >
                FreySmiles Orthodontics
              </td>
              <td
                className="p-2 py-8 text-violet-700 text-center"
                style={{
                  borderLeft: "1px solid purple",
                  borderRight: "1px solid purple",
                  borderBottom: "1px solid purple",
                  fontSize: "20px" ,
                }}
              >
                Other Practitioners
              </td>
            </tr>
            <tr>
              <td
                className="text-lg p-2 py-8 text-center"
                style={{ border: "1px solid purple" }}
              >
                4 convenient locations
              </td>
              <td className="mb-2" style={{ border: "1px solid purple" }}>
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
              <td className="mb-2" style={{ border: "1px solid purple" }}>
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
                className="text-lg p-2 py-8 text-center"
                style={{ border: "1px solid purple" }}
              >
                Leaders in the industry
              </td>
              <td className="mb-2" style={{ border: "1px solid purple" }}>
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
              <td className="mb-2" style={{ border: "1px solid purple" }}>
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
                className="text-lg p-2 py-8 text-center"
                style={{ border: "1px solid purple" }}
              >
                Modern office settings
              </td>
              <td className="mb-2" style={{ border: "1px solid purple" }}>
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
              <td className="mb-2" style={{ border: "1px solid purple" }}>
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
                className="text-lg p-2 py-8 text-center"
                style={{ border: "1px solid purple" }}
              >
                ABO certified
              </td>
              <td className="mb-2" style={{ border: "1px solid purple" }}>
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
              <td className="mb-2" style={{ border: "1px solid purple" }}>
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
                className="text-lg p-2 py-8 text-center"
                style={{ border: "1px solid purple" }}
              >
                Over 50+ years of experience
              </td>
              <td className="mb-2" style={{ border: "1px solid purple" }}>
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
              <td className="mb-2" style={{ border: "1px solid purple" }}>
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
                className="text-lg p-2 py-8 text-center"
                style={{ border: "1px solid purple" }}
              >
                Financial options
              </td>
              <td className="mb-2" style={{ border: "1px solid purple" }}>
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
              <td className="mb-2" style={{ border: "1px solid purple" }}>
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
