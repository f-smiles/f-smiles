import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import Sphere from "./navbar/sketch";
import CartContext from "../app/CartContext";
import Bag from "./stripe/Bag";
export default function DesktopNavbar() {
  
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { cartCount } = useContext(CartContext);
  const [show, setShow] = useState(null);
  const [about, setAbout] = useState(false);
  const [patient, setPatient] = useState(false);
  const [treatments, setTreatments] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const handleToggleBag = () => {
    setIsBagOpen(!isBagOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const threshold = 5;

      if (scrollTop > threshold) {
        setNavbarTransparent(false);
      } else {
        setNavbarTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseClick = () => {
    setTreatments(true);
  };

  const handleMouseClickPatient = () => {
    setPatient(true);
    setTreatments(false);
  };

  const handleMouseClickAbout = () => {
    setAbout((prevAbout) => !prevAbout);
  };


  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  const about_us_links = [
    { name: "Our Team", href: "/our-team", image: "../../images/doctors.jpg" },
    { name: "Why Choose Us", href: "/why-choose-us", image: "" },
    { name: "Testimonials", href: "/testimonials", image: "../../images/ronl.png" },
  ];

  const patient_links = [
    { name: "Your Care", href: "/your-care" },
    { name: "Financing Treatment", href: "/financing-treatment" },
    { name: "Virtual Consultation", href: "/virtual-consultation" },
    { name: "Caring For Your Braces", href: "/caring-for-your-braces" },
  ];

  const treatments_links = [
    { name: "Invisalign", href: "/invisalign" },
    { name: "Braces", href: "/braces" },
    { name: "Early Orthodontics", href: "/early-orthodontics" },
    { name: "Adult Orthodontics", href: "/adult-orthodontics" },
  ];


  return (
    <>
      {/* Desktop Navbar */}
      {/* TODO: add focus to dropdown for accessibility */}
      <nav
  id="desktop-nav"
  className={` h-max fixed top-0 left-0 right-0 xl:block hidden z-40 ${
    navbarTransparent ? "bg-#f4eae4" : "bg-gradient-to-r from-stone-200 via-stone-400 to-stone-200 bg-opacity-90"
  } `}
>

  <ul className="w-full p-2 flex justify-center items-center">
    <ul className="xl:flex hidden gap-8  items-center">
       
          {!about && (
  <li
    className="hover:underline ml-6 h-full cursor-pointer hover:text-indigo-900 transition duration-150 ease-in-out items-center text-sm text-stone-900 tracking-normal relative hover:text-indigo-700 gap-2"
    onClick={handleMouseClickAbout}
    style={{ letterSpacing: '1.5px' }} 
  >
    ABOUT
  </li>
)}

<div
className={
  about
    ? "fixed top-0 left-0 flex flex-row h-screen overflow-hidden transition-all delay-300 duration-500 ease-out"
    : "hidden"
}
>
  <div className="flex h-screen w-screen backdrop-blur-sm bg-white/30">
    <div className="bg-stone-200 w-1/3 ">
      <div className="overflow-y-auto">
        <ul className="p-8">
          {about_us_links &&
            about_us_links.map((link) => {
              return (
              
                <li
                  className="py-4 cursor-pointer text-indigo text-xl hover:text-violet-400 text-sm p-2"
                  key={link.href}
                  style={{ letterSpacing: '.75px' }}
                >
                  <NavLink
                    to={link.href}
                    className="block hover:translate-x-6 transition duration-500"
                    onClick={handleMouseClickAbout}
                  >
                    {link.name}
                  </NavLink>
                </li>
                
              );
            })}
        </ul>
      </div>
    </div>
    <button
        onClick={() => setAbout(false)}
        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
        aria-label="Toggle sidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    <div className="absolute top-4 right-4 z-10">
   
    </div>
    <div className="absolute bottom-60 left-20">
      <Sphere style={{ transform: "translate(-50%, -50%)", zIndex: -1 }} />
    </div>
  </div>
</div>

{!patient && (
  <li
    className={`hover:underline cursor-pointer hover:text-indigo-700 transition duration-150 ease-in-out items-center text-sm tracking-normal relative text-stone-900 hover:text-indigo-700 gap-2 mr-4 ${about ? 'hidden' : ''}`}
    onClick={() => handleMouseClickPatient(true)}
    style={{ letterSpacing: '1.5px' }} 
  >
    PATIENT
  </li>
)}
              <div
              className={
                patient
                  ? "block absolute top-0 left-0 flex flex-row h-screen overflow-hidden translate-x-0 transition-all delay-300 duration-500 ease-out"
                  : "absolute top-0 left-0 flex flex-row h-screen overflow-hidden translate-x-[-100%] transition-all delay-0 duration-500 ease-out"
              }
            >
              <div className="flex h-screen w-screen backdrop-blur-sm bg-white/30">
                <div className="bg-stone-200 w-1/3 flex">
                  <div className="overflow-y-auto">
                    <ul className="p-8">
                      
                      {patient_links &&
                        patient_links.map((link) => {
                          return (
                            <h1>
                            <li
                              className="py-4 cursor-pointer text-indigo text-xl hover:text-gray-500 text-sm p-2"
                              key={link.name}
                              style={{ letterSpacing: '.75px' }} 
                            >
                              <NavLink
                                to={link.href}
                                className="block hover:translate-x-6 transition duration-500"
                                onClick={() => setPatient(false)}
                              >
                                {link.name}
                              </NavLink>
                            </li>
                            </h1>
                          );
                        })}
                    </ul>
                  </div>

                  <div
                    style={{ transform: "translate(-50%, -50%)",  }}
                  >
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
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                  <div className="absolute bottom-60 left-20">
                    <Sphere
                      style={{ transform: "translate(-50%, -50%)", zIndex: -1 }}
                    />
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden">
                  <div className="flex items-center justify-between h-14 px-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => setPatient(false)}
                        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                        aria-label="Toggle sidebar"
                      >
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
           
            {!treatments && (
  <li
    className={`hover:underline cursor-pointer hover:text-indigo-700 transition duration-150 ease-in-out items-center text-sm tracking-normal relative text-stone-900 hover:text-indigo-700 gap-2 mr-4 ${about ? 'hidden' : ''} ${treatments ? 'hidden' : ''}${patient ? 'hidden' : ''}`}
    onClick={() => handleMouseClick(true)}
    style={{ letterSpacing: '1.5px' }} 
  >
    TREATMENT
  </li>
)}
            <div
              className={
                treatments
                  ? "block absolute top-0 left-0 flex flex-row h-screen overflow-hidden translate-x-0 transition-all delay-300 duration-500 ease-out"
                  : "absolute top-0 left-0 flex flex-row h-screen overflow-hidden translate-x-[-100%] transition-all delay-0 duration-500 ease-out"
              }
            >
              <div className="flex h-screen w-screen backdrop-blur-sm bg-white/30">
                <div className="bg-stone-200 w-1/3 flex">
                  <div className="overflow-y-auto">
                    <ul className="p-8">
                      {treatments_links &&
                        treatments_links.map((link) => {
                          return (
                            <h1>
                            <li
                              className="py-4 cursor-pointer text-indigo text-xl hover:text-gray-500 text-sm p-2"
                              key={link.name}
                              style={{ letterSpacing: '.75px' }} 
                            >
                              <NavLink
                                to={link.href}
                                className="block hover:translate-x-6 transition duration-500"
                                onClick={() => setTreatments(false)}
                              >
                                {link.name}
                              </NavLink>
                            </li>
                            </h1>
                          );
                        })}
                    </ul>
                  </div>

                  <div
                    style={{ transform: "translate(-50%, -50%)", zIndex: -1 }}
                  >
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
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                  <div className="absolute bottom-60 left-20">
                    <Sphere
                      style={{ transform: "translate(-50%, -50%)", zIndex: -1 }}
                    />
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden">
                  <div className="flex items-center justify-between h-14 px-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => setTreatments(false)}
                        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                        aria-label="Toggle sidebar"
                      >
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <li>
              <NavLink to="/">
                <img
                  className="h-12 ml-10 mr-10"
                  src="../../images/logo_full.png"
                  alt="frey smiles orthodontics logo"
                />
              </NavLink>
            </li>
            <li className="ml-40 hover:underline text-xs cursor-pointer flex hover:text-indigo-700 transition duration-150 ease-in-out flex items-center tracking-normal hover:text-indigo-700">
              <a
                href="https://my.orthoblink.com/bLink/Login"
                className="cursor-pointer block leading-3 tracking-normal px-3 font-normal "
                style={{ letterSpacing: '1px' }} 
              >
                Patient Login
              </a>
            </li>
            <li className="hover:underline cursor-pointer flex hover:text-indigo-700 transition duration-150 ease-in-out flex items-center text-xs text-stone-900 tracking-normal  hover:text-indigo-700">
              <NavLink
                to="/locations"
                className="cursor-pointer block leading-3 tracking-normal px-3 font-normal"
                style={{ letterSpacing: '1px' }} 
              >
                Our Locations
              </NavLink>
            </li>
            <li className="hover:underline cursor-pointer flex hover:text-indigo-700 transition duration-150 ease-in-out flex items-center text-xs text-stone-900 tracking-normal  hover:text-indigo-700">
              <NavLink
                to="/products"
                className="cursor-pointer block leading-3 tracking-normal px-3 font-normal"
                style={{ letterSpacing: '1px' }} 
              >
                Shop
              </NavLink>
            </li>

            <li className="">
  {cartCount > 0 && (
    <NavLink to="/bag" className="flex flex-row items-center gap-2  cursor-pointer block text-xs leading-3 tracking-normal px-3 font-normal">
      <span className="hover:text-violet-500">
        Bag
      </span>
      <div className="relative w-full h-full">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="18" height="24">
          <g>
            <path d="M17.54 5.424a.47.47 0 0 1 .46.474v17.627a.47.47 0 0 1-.46.475H.46a.47.47 0 0 1-.46-.475V5.898a.47.47 0 0 1 .46-.474h4.795v-1.56C5.255 1.733 6.935 0 9 0c2.065 0 3.745 1.733 3.745 3.864v1.56zm-11.365 0h5.64v-1.56c0-1.608-1.264-2.915-2.82-2.915-1.555 0-2.82 1.307-2.82 2.915zm10.905.949h-4.335V8.61a.47.47 0 0 1-.46.475.47.47 0 0 1-.46-.475V6.373h-5.65V8.61a.47.47 0 0 1-.46.475.47.47 0 0 1-.46-.475V6.373H.92V23.05h16.16z"></path>
          </g>
        </svg>
        <span className="-mt-1 absolute top-3 mx-auto w-full h-full text-center">{cartCount}</span>
      </div>
    </NavLink>
  )}
</li>
<li className="">
  {  showSidebar ? (
    <button
      className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
      onClick={() => setShowSidebar(!showSidebar)}
    >
      x
    </button>
  ) : (
    <>
    <span className="hover:text-violet-500">
    Bag
  </span>
    <svg
      onClick={() => setShowSidebar(!showSidebar)}
      className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="24"
      viewBox="0 0 18 24"
    >
      <g>
        <path d="M17.54 5.424a.47.47 0 0 1 .46.474v17.627a.47.47 0 0 1-.46.475H.46a.47.47 0 0 1-.46-.475V5.898a.47.47 0 0 1 .46-.474h4.795v-1.56C5.255 1.733 6.935 0 9 0c2.065 0 3.745 1.733 3.745 3.864v1.56zm-11.365 0h5.64v-1.56c0-1.608-1.264-2.915-2.82-2.915-1.555 0-2.82 1.307-2.82 2.915zm10.905.949h-4.335V8.61a.47.47 0 0 1-.46.475.47.47 0 0 1-.46-.475V6.373h-5.65V8.61a.47.47 0 0 1-.46.475.47.47 0 0 1-.46-.475V6.373H.92V23.05h16.16z"></path>
      </g>
    </svg>
    </>
  )}

  <div
    className={`top-0 right-0 w-[35vw] bg-stone-300 p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
      showSidebar ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <Bag />
  </div>
</li>


          </ul>
          <div className="flex items-center">
            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:text-white font-normal">
              <NavLink
                to="/book-now"
                className="mr-10 cursor-pointer bg-B47EDE rounded px-6 py-2 hover:text-indigo-700 transition duration-300 ease-in-out flex items-center text-sm text-white tracking-normal text-white hover:text-stone-100 transform-gpu  hover:shadow-md hover:shadow-violet-400/50"
              >
                <span className="transform-gpu transition duration-300 ease-in">
                  Book Now
                </span>
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>

      {/* Desktop Navbar end */}

      {/* Mobile Navbar */}
      <nav id="mobile-nav" className="fixed top-0 left-0 right-0 mx-auto z-40">
        <section
          id="mobile-menu-header"
          className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-stone-900"
        >
          <NavLink
            to="/"
            className="cursor-pointer"
            onClick={() => setShow(false)}
          >
            <img
              src="../../images/logo_full.png"
              className="h-8"
              alt="logo full"
            />
          </NavLink>
          <div
            id="menu"
            className="cursor-pointer text-white z-0"
            onClick={() => setShow(!show)}
          >
            {show ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </div>
        </section>
        <section
          id="mobile-menu-links"
          className={
            show
              ? "w-full h-full absolute transform translate-x-0 xl:hidden"
              : "xl:hidden w-full h-full absolute transform -translate-x-full"
          }
        >
          <div
            id="mobile-menu-open"
            className="w-full h-max fixed overflow-y-auto top-0 bg-gray-800 shadow flex flex-col justify-between xl:hidden transition duration-150 ease-in-out"
          >
            <ul className="flex flex-col w-full px-8 py-4">
              <li className="text-white pt-10 flex items-center">
                <NavLink
                  to="/"
                  className="cursor-pointer"
                  onClick={() => setShow(false)}
                >
                  <p className="xl:text-base text-base ml-3">Home</p>
                </NavLink>
              </li>
              <li className="cursor-pointer text-white pt-8">
                <div className="flex items-center justify-between">
                  <p className="text-white xl:text-base text-base ml-3">
                    About Us
                  </p>
                  {about ? (
                    <div onClick={() => setAbout(!about)}>
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
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div onClick={() => setAbout(!about)}>
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
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {about && (
                  <ul className="my-3">
                    {about_us_links &&
                      about_us_links.map((link) => {
                        return (
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
                            <NavLink
                              to={link.href}
                              key={link.name}
                              className="cursor-pointer block text-gray-600 text-sm leading-3 tracking-normal hover:text-white px-3 font-normal"
                              onClick={() => setShow(false)}
                            >
                              {link.name}
                            </NavLink>
                          </li>
                        );
                      })}
                  </ul>
                )}
              </li>
              <li className="cursor-pointer text-white pt-8">
                <div className="flex items-center justify-between">
                  <p className="text-white xl:text-base  text-base ml-3">
                    Patient
                  </p>
                  {patient ? (
                    <div onClick={() => setPatient(!patient)}>
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
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div onClick={() => setPatient(!patient)}>
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
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {patient && (
                  <div>
                    <ul className="my-3">
                      {patient_links &&
                        patient_links.map((link) => {
                          return (
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
                              <NavLink
                                to={link.href}
                                key={link.name}
                                className="cursor-pointer block text-gray-600 text-sm leading-3 tracking-normal hover:text-white px-3 font-normal"
                                onClick={() => setShow(false)}
                              >
                                {link.name}
                              </NavLink>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                )}
              </li>
              <li className="cursor-pointer text-white pt-8">
                <div className="flex items-center justify-between">
                  <p className="text-white xl:text-base  text-base ml-3">
                    Treatments
                  </p>
                  {treatments ? (
                    <div onClick={() => setTreatments(!treatments)}>
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
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div onClick={() => setTreatments(!treatments)}>
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
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {treatments && (
                  <div>
                    <ul className="my-3">
                      {treatments_links &&
                        treatments_links.map((link) => {
                          return (
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
                              <NavLink
                                to={link.href}
                                key={link.name}
                                className="cursor-pointer block text-gray-600 text-sm leading-3 tracking-normal hover:text-white px-3 font-normal"
                                onClick={() => setShow(false)}
                              >
                                {link.name}
                              </NavLink>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                )}
              </li>
              <li className="text-white pt-8 flex items-center">
                <NavLink
                  to="/patient-login"
                  className="cursor-pointer"
                  onClick={() => setShow(false)}
                >
                  <p className="xl:text-base text-base ml-3">Patient Login</p>
                </NavLink>
              </li>
              <li className="text-white pt-8 flex items-center">
                <NavLink
                  to="/locations"
                  className="cursor-pointer"
                  onClick={() => setShow(false)}
                >
                  <p className="xl:text-base text-base ml-3">Our Locations</p>
                </NavLink>
              </li>
              <li className="text-white pt-8 flex items-center">
                <NavLink
                  to="/products"
                  className="cursor-pointer"
                  onClick={() => setShow(false)}
                >
                  <p className="xl:text-base text-base ml-3">Shop Products</p>
                </NavLink>
              </li>
            </ul>
            <div className="w-full py-8 my-4 px-10 border-t border-gray-700">
              <div className="w-full flex items-center justify-between">
                <NavLink
                  to="/book-now"
                  className="rounded-full bg-violet-300 text-violet-900 p-4"
                  onClick={() => setShow(false)}
                >
                  Book Now
                </NavLink>
                <NavLink
                  to="/bag"
                  onClick={() => setShow(false)}
                  className="cursor-pointer block text-sm leading-3 tracking-normal px-3 font-normal text-white"
                >
                  <span className="flex items-center gap-1">
                    Bag
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
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    {cartCount}
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </nav>
      {/* Mobile Navbar end */}
    </>
  );
}
