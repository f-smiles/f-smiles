import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";



const WhyChooseUs = () => {

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Invisalign", "Damon Braces", "Accelerated Orthodontic Treatment", "low-dose 3D Digital Radiographs"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  
  return (
    
    <div className="bg-indigo-50 py-4  w-full px-4 pt-16">
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
        <h1 className="mt-20 mb-20 text-white text-5xl relative">
            <span className="mr-4 justify-start -ml-80">Experts in</span>{" "}
            <span className="relative">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`transition-opacity duration-1000 ${
                    index === currentWordIndex ? "opacity-100 text-violet-700" : "opacity-0 text-violet-700"
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
        <div className="rounded-full relative bg-gradient-to-b from-stone-50 to-stone-50 overflow-hidden">
          <p className="mt-8 text-center px-12 py-8 mx-auto text-md text-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            FreySmiles Orthodontics is a family-owned practice providing
            unparalleled orthodontic experience to the Lehigh Valley community
            for over four decades.{" "}
            <span className="text-2xl">
              {" "}
              Our office holds the distinction of being the longest-standing,
              active board-certified orthodontic office in the area.{" "}
            </span>{" "}
            we strive to treat attain finished results consistent with the
            American Board of Orthodontics (ABO) qualitative standards. Our
            dedicated doctors place great priority on the certification and
            recertification process, ensuring that all diagnostic records adhere
            to the ABO standards. Currently, Dr. Gregg Frey, a certified
            orthodontist, is actively preparing cases for recertification. Dr.
            Daniel Frey is in the final stages of obtaining his initial
            certification. To complement our use of cutting-edge diagnostic
            technology, we uphold the highest standards for our records,
            ensuring accuracy and precision throughout the treatment process.
          </p>

          <p className="mb-10 ml-10 mr-10 text-center px-4 py-2 mx-auto text-md text-amber-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 whitespace-[60ch]">
            Our office is the #1 provider of Invisalign and Invisalign Teen in
            the region.{" "}
            <span className="text-2xl">
              As Diamond Plus Invisalign providers
            </span>{" "}
            Their care over the many years has contributed to the research and
            advancement of this specialized orthodontic treatment modality.
          </p>
        </div>
       
      <NavLink
          to="/virtual-consultation"
          className="-ml-20 mt-10 curspor-pointer px-5 py-5 cursor-pointer bg-teal-800 rounded-full px-8 py-2 hover:bg-teal-500 text-lg text-white tracking-normal text-white hover:text-white z-20 relative"
          style={{ zIndex: "20" }}
        >
          <button className="mt-20">Schedule a Consultation</button>
        </NavLink>
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
            className="opacity-90 mt-10"
            style={{
              width: "50%",
              height: "auto",
            }}
          />
        </div>
        <div className="px-4 py-2 mx-auto text-2xl text-stone-800">
      
      </div>
        <p className="mt-10 relative" style={{ zIndex: "20" }}>
          FreySmiles believes in accessible orthodontic care for everyone and
          offers flexible, zero-interest payment options with low down payments.
          They established a non-profit organization called{" "}
          <span>
            {" "}
            <a
              href="https://morethansmiles.org/"
              className="underline cursor-pointer text-indigo-500 hover:text-indigo-700"
            >
              More Than Smiles
            </a>{" "}
          </span>{" "}
          in 2011, providing orthodontic treatment to deserving young
          individuals who may not have access to world-class orthodontic care or
          cannot afford it. If you know someone that could benefit of this gift,
          please visit the website for the details on how to nominate a
          deserving individual. FreySmiles has four convenient locations in the
          Allentown, Bethlehem, Easton, Schnecksville, and Lehighton
          communities.
        </p>

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
                  borderLeft: "1px solid green",
                  borderRight: "1px solid green",
                  borderBottom: "1px solid green",
                }}
              >
                FreySmiles Orthodontics
              </td>
              <td
                className="p-2 py-8 text-violet-700 text-center"
                style={{
                  borderLeft: "1px solid green",
                  borderRight: "1px solid green",
                  borderBottom: "1px solid green",
                }}
              >
                Other Practitioners
              </td>
            </tr>
            <tr>
              <td
                className="p-2 py-8 text-green-700 text-center"
                style={{ border: "1px solid green" }}
              >
                4 convenient locations
              </td>
              <td className="mb-2" style={{ border: "1px solid green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="w-6 h-6 mx-auto z-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td className="mb-2" style={{ border: "1px solid green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto stroke-red-500 z-0"
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
                className="p-2 py-8 text-center"
                style={{ border: "1px solid green" }}
              >
                Leaders in the industry
              </td>
              <td className="mb-2" style={{ border: "1px solid green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="w-6 h-6 mx-auto z-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td className="mb-2" style={{ border: "1px solid green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto stroke-red-500 z-0"
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
                className="p-2 py-8 text-center"
                style={{ border: "1px solid green" }}
              >
                Modern office settings
              </td>
              <td className="mb-2" style={{ border: "1px solid green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="w-6 h-6 mx-auto z-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td className="mb-2" style={{ border: "1px solid green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto stroke-red-500 z-0"
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
                className="p-2 py-8 text-center"
                style={{ border: "1px solid green" }}
              >
                ABO certified
              </td>
              <td className="mb-2" style={{ border: "1px solid green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="w-6 h-6 mx-auto z-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td className="mb-2" style={{ border: "1px solid green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto stroke-red-500 z-0"
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
                className="p-2 py-8 text-center"
                style={{ border: "1px solid green" }}
              >
                Over 50+ years of experience
              </td>
              <td className="mb-2" style={{ border: "1px solid green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="w-6 h-6 mx-auto z-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td className="mb-2" style={{ border: "1px solid green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto stroke-red-500 z-0"
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
                className="p-2 py-8 text-center"
                style={{ border: "1px solid green" }}
              >
                Financial options
              </td>
              <td className="mb-2" style={{ border: "1px solid green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="w-6 h-6 mx-auto z-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
              <td className="mb-2" style={{ border: "1px solid green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#B17CFF"
                  className="w-6 h-6 mx-auto z-0"
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
