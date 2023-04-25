import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from '@headlessui/react'

export default function DesktopNavbar() {
  const [show, setShow] = useState(null);
  const [hoverShow, setHoverShow] = useState(false);
  const [about, setAbout] = useState(false);
  const [patient, setPatient] = useState(false);
  const [treatments, setTreatments] = useState(false);

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
      <nav
        id="desktop-nav"
        className="w-full h-max relative top-0 left-0 right-0 mx-auto bg-stone-300 shadow xl:block hidden z-40"
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
            <li
              className="h-full cursor-pointer hover:text-indigo-700 transition duration-150 ease-in-out inline-flex items-center text-sm text-white tracking-normal relative text-white hover:text-indigo-700 gap-2"
              // onClick={() => setAbout(!about)}
              onMouseEnter={() => setHoverShow(true)}
              onMouseLeave={() => setHoverShow(false)}
            >
              {/* {about && ( */}
              {hoverShow && (
                <ul className="bg-white shadow rounded py-1 w-max left-0 mt-12 -ml-4 absolute top-0">
                  {about_us_links &&
                    about_us_links.map((link) => {
                      return (
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal hover:bg-indigo-300 hover:text-white font-normal">
                          <NavLink
                            to={link.href}
                            key={link.name}
                            className="cursor-pointer block p-4 text-gray-600 text-sm leading-3 tracking-normal hover:text-white font-normal"
                          >
                            {link.name}
                          </NavLink>
                        </li>
                      );
                    })}
                </ul>
              )}
              <p className="py-4">About Us</p>
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
            <li
              className="cursor-pointer hover:text-indigo-700 transition duration-150 ease-in-out inline-flex items-center text-sm text-white tracking-normal relative text-white hover:text-indigo-700 gap-2"
              onClick={() => setPatient(!patient)}
            >
              {patient && (
                <ul className="bg-white shadow rounded py-1 w-max left-0 mt-12 -ml-4 absolute top-0">
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
                </ul>
              )}
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
            </li>
            <li
              className="cursor-pointer hover:text-indigo-700 transition duration-150 ease-in-out inline-flex items-center text-sm text-white tracking-normal relative text-white hover:text-indigo-700 gap-2"
              onClick={() => setTreatments(!treatments)}
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
                <div className="bg-stone-400 w-1/3 flex">
                  <div className="overflow-y-auto">
                    <ul className="p-8">
                      {treatments_links &&
                        treatments_links.map((link) => {
                          return (
                            <li
                              className="py-4 cursor-pointer text-white text-xl hover:text-gray-200 text-sm p-2"
                              key={link.name}
                            >
                              <NavLink to={link.href} className="block hover:translate-x-6 transition duration-500"  onClick={() => setTreatments(false)}>
                                {link.name}
                              </NavLink>
                            </li>
                          );
                        })}
                    </ul>
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
              <NavLink
                to="/patient-login"
                className="cursor-pointer block text-sm leading-3 tracking-normal px-3 font-normal"
              >
                Patient Login
              </NavLink>
            </li>
            <li className="cursor-pointer flex hover:text-indigo-700 transition duration-150 ease-in-out flex items-center text-sm text-white tracking-normal text-white hover:text-indigo-700">
              <NavLink
                to="/allentown"
                className="cursor-pointer block text-sm leading-3 tracking-normal px-3 font-normal"
              >
                Our Locations
              </NavLink>
            </li>
          </ul>
          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:text-white font-normal">
            <NavLink
              to="/book-now"
              className="cursor-pointer bg-violet-300 rounded-full px-8 py-2 hover:text-indigo-700 transition duration-300 ease-in-out flex items-center text-sm text-white tracking-normal text-white hover:text-indigo-700"
            >
              Book Now
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Desktop Navbar end */}

      {/* Mobile Navbar */}
      <nav id="mobile-nav" className="fixed top-0 left-0 right-0 mx-auto z-40">
        <section
          id="mobile-menu-header"
          className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-gray-800"
        >
          <NavLink to="/" className="cursor-pointer">
            <img
              src="../../images/logo_full.png"
              className="h-8"
              alt="logo full"
            />
          </NavLink>
          <div
            id="menu"
            className="cursor-pointer text-white"
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
                <NavLink to="/allentown" className="cursor-pointer" onClick={() => setShow(false)}>
                  <p className="xl:text-base text-base ml-3">Our Locations</p>
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
              </div>
            </div>
          </div>
        </section>
      </nav>
      {/* Mobile Navbar end */}
    </>
  );
}
