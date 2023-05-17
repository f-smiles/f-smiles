import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from '@headlessui/react'
import Sphere from "./navbar/sketch";
import CartContext from "../app/CartContext";

export default function DesktopNavbar() {
  const { cartCount, total } = useContext(CartContext);
  const [show, setShow] = useState(null);
  // const [cartCount, setCartCount] = useState(0);
  // const [cart, setCart] = useState([]);
  const [about, setAbout] = useState(false);
  const [patient, setPatient] = useState(false);
  const [treatments, setTreatments] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const threshold = 10; 


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


  useEffect(() => {
    console.log("cartCount has changed:", cartCount);
  }, [cartCount]);
  const handleMouseOver = () => {
    setTreatments(true);
    clearTimeout(hideTimeoutId);
  };

  let hideTimeoutId = null;

  const handleMouseLeave = () => {
    hideTimeoutId = setTimeout(() => setTreatments(false), 2550000);
  };

  const about_us_links = [
    { name: "Our Team", href: "/our-team" },
    { name: "Why Choose Us", href: "/why-choose-us" },
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
        className={`w-full h-max fixed top-0 left-0 right-0 mx-auto shadow xl:block hidden z-40 ${
          navbarTransparent ? "bg-stone-300" : "bg-stone-400/70"
        }`}
      >
        <ul className="w-full p-2 max-w-screen-xl mx-auto flex justify-between items-center">
          <li>
            <NavLink to="/">
              <img
                className="h-12"
                src="../../images/logo_full.png"
                alt="frey smiles orthodontics logo"
              />
            </NavLink>
          </li>
          <ul className="xl:flex hidden gap-8 justify-evenly items-center">
          <div
  className="relative"
  onMouseLeave={() => setShow(null)}
>
  <li
    className="h-full cursor-pointer hover:text-indigo-700 transition duration-150 ease-in-out inline-flex items-center text-sm text-white tracking-normal relative text-white hover:text-indigo-700 gap-2"
    onMouseOver={() => setShow("about")}
    onClick={() => setShow("about")}
  >
    About Us
  </li>
  <Transition
    show={show === "about"}
    enter="transition duration-100 ease-out"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition duration-75 ease-out"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div
      onMouseOver={() => setShow("about")}
      onMouseLeave={() => setShow(null)}
      className="bg-white shadow rounded py-1 w-screen left-0 mt-12 absolute top-0 z-50"
    >
      {about_us_links &&
        about_us_links.map((link) => {
          return (
            <li
              className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal hover:bg-indigo-300 hover:text-white font-normal"
              key={link.name}
            >
              <NavLink
                to={link.href}
                className="block p-4 text-gray-600 text-sm leading-3 tracking-normal hover:text-white font-normal"
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
    </div>
  </Transition>
          </div>
<li
  className="cursor-pointer hover:text-indigo-700 transition duration-150 ease-in-out inline-flex items-center text-sm text-white tracking-normal relative text-white hover:text-indigo-700 gap-2"
  onMouseOver={() => setPatient(true)}
  onMouseLeave={() => setPatient(false)}
>
  Patient
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
  <Transition
    show={patient}
    enter="transition duration-100 ease-out"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition duration-75 ease-out"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    className="bg-white shadow rounded py-1 w-max left-0 mt-12 -ml-4 absolute top-0"
    onMouseOver={() => setPatient(true)}
    onMouseLeave={() => setPatient(false)}
  >
    {patient_links &&
      patient_links.map((link) => {
        return (
          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal hover:bg-indigo-300 hover:text-white font-normal">
            <NavLink
              to={link.href}
              key={link.name}
              className="cursor-pointer block text-gray-600 text-sm leading-3 tracking-normal hover:text-white p-4 font-normal"
            >
              {link.name}
            </NavLink>
          </li>
        );
      })}
  </Transition>
</li>
            <li
              className="cursor-pointer hover:text-indigo-700 transition duration-150 ease-in-out inline-flex items-center text-sm text-white tracking-normal relative text-white hover:text-indigo-700 gap-2"
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              // onClick={() => setTreatments(!treatments)}
            >
              Treatments
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
            </li>
            <div className={
              treatments
                ? "block absolute top-0 left-0 flex flex-row h-screen overflow-hidden translate-x-0 transition-all delay-300 duration-500 ease-out"
                : "absolute top-0 left-0 flex flex-row h-screen overflow-hidden translate-x-[-100%] transition-all delay-0 duration-500 ease-out"
            }>

              <div className="flex h-screen w-screen backdrop-blur-sm bg-white/30">
              <div className="bg-stone-200 w-1/3 flex">
  <div className="overflow-y-auto">
    <ul className="p-8">
      {treatments_links &&
        treatments_links.map((link) => {
          return (
            <li
              className="py-4 cursor-pointer text-indigo text-xl hover:text-gray-500 text-sm p-2"
              key={link.name}
            >
              <NavLink
                to={link.href}
                className="block hover:translate-x-6 transition duration-500"
                onClick={() => setTreatments(false)}
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
    </ul>
  </div>

  <div style={{ transform: 'translate(-50%, -50%)', zIndex: -1 }}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
</div>
  <div className="absolute bottom-60 left-20">
  <Sphere style={{ transform: 'translate(-50%, -50%)', zIndex: -1 }} />
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
            <li className="cursor-pointer flex hover:text-indigo-700 transition duration-150 ease-in-out flex items-center text-sm text-white tracking-normal text-white hover:text-indigo-700">
            <a
  href="https://my.orthoblink.com/bLink/Login"
  className="cursor-pointer block text-sm leading-3 tracking-normal px-3 font-normal"
>
  Patient Login
</a>
            </li>
            <li className="cursor-pointer flex hover:text-indigo-700 transition duration-150 ease-in-out flex items-center text-sm text-white tracking-normal text-white hover:text-indigo-700">
              <NavLink
                to="/locations"
                className="cursor-pointer block text-sm leading-3 tracking-normal px-3 font-normal"
              >
                Our Locations
              </NavLink>
            </li>
            <li className="cursor-pointer flex hover:text-indigo-700 transition duration-150 ease-in-out flex items-center text-sm text-white tracking-normal text-white hover:text-indigo-700">
              <NavLink
                to="/products"
                className="cursor-pointer block text-sm leading-3 tracking-normal px-3 font-normal"
              >
                Shop
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center">
          <li className="z-10">
            
  <NavLink to="/checkout" className="cursor-pointer block text-sm leading-3 tracking-normal px-3 font-normal hover:text-violet-500 transition duration-500 ease-in-out">
    <span className="flex items-center gap-1">
      Bag
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd" viewBox="0 0 22 24" stroke="purple" className="w-8 h-5">
        <path className="bag-path-static text-gray-700" d="M17.54 5.424a.47.47 0 0 1 .46.474v17.627a.47.47 0 0 1-.46.475H.46a.47.47 0 0 1-.46-.475V5.898a.47.47 0 0 1 .46-.474h4.795v-1.56C5.255 1.733 6.935 0 9 0c2.065 0 3.745 1.733 3.745 3.864v1.56zm-11.365 0h5.64v-1.56c0-1.608-1.264-2.915-2.82-2.915-1.555 0-2.82 1.307-2.82 2.915zm10.905.949h-4.335V8.61a.47.47 0 0 1-.46.475.47.47 0 0 1-.46-.475V6.373h-5.65V8.61a.47.47 0 0 1-.46.475.47.47 0 0 1-.46-.475V6.373H.92V23.05h16.16z" strokeWidth="1"></path>
        <text x="6" y="18" fill="black" fontSize="12">{cartCount}</text>
      </svg>
    </span>
  </NavLink>
</li>

            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:text-white font-normal">
    <NavLink
      to="/book-now"
      className="cursor-pointer bg-violet-300 rounded-full px-8 py-2 hover:text-indigo-700 transition duration-300 ease-in-out flex items-center text-sm text-white tracking-normal text-white hover:text-indigo-700 transform-gpu btn3 hover:shadow-md hover:shadow-violet-400/50"
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
          className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-gray-800"
        >
          <NavLink to="/" className="cursor-pointer" onClick={() => setShow(false)}>
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
                <NavLink to="/" className="cursor-pointer" onClick={() => setShow(false)}>
                  <p className="xl:text-base text-base ml-3">
                    Home
                  </p>
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
                <NavLink to="/patient-login" className="cursor-pointer" onClick={() => setShow(false)}>
                  <p className="xl:text-base text-base ml-3">Patient Login</p>
                </NavLink>
              </li>
              <li className="text-white pt-8 flex items-center">
                <NavLink to="/locations" className="cursor-pointer" onClick={() => setShow(false)}>
                  <p className="xl:text-base text-base ml-3">Our Locations</p>
                </NavLink>
              </li>
              <li className="text-white pt-8 flex items-center">
                <NavLink to="/products" className="cursor-pointer" onClick={() => setShow(false)}>
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
                to="/cart"
                onClick={() => setShow(false)}
                className="cursor-pointer block text-sm leading-3 tracking-normal px-3 font-normal text-white">
                <span className="flex items-center gap-1">
                  Bag
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
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

