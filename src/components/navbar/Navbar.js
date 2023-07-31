import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Sphere from "./sketch";
import { XMarkIcon, Bars2Icon } from "@heroicons/react/24/outline";
import BagSidePanel from "../bag/BagSidePanel";

export default function DesktopNavbar() {
  const bagItems = useSelector((state) => state.bag.line_items);

  const getBagQuantity = () => {
    let totalQuantity = 0;
    bagItems.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  const [show, setShow] = useState(null); /* mobile nav */

  const [about, setAbout] = useState(false);
  const [patient, setPatient] = useState(false);
  const [treatments, setTreatments] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);

  const about_us_links = [
    { name: "Our Team", href: "/our-team", image: "../../images/doctors.jpg" },
    { name: "Why Choose Us", href: "/why-choose-us", image: "" },
    {
      name: "Testimonials",
      href: "/testimonials",
      image: "../../images/ronl.png",
    },
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

  const handleToggleAbout = () => {
    setAbout(!about);
  };

  const handleTogglePatient = () => {
    setPatient(!patient);
  };

  const handleToggleTreatments = () => {
    setTreatments(!treatments);
  };

  const handleToggleBag = () => {
    setIsBagOpen(!isBagOpen);
  };

  const handleToggleMobileNav = () => {
    setShow(!show);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav id="desktop-nav" className="fixed top-0 left-0 right-0 z-50 hidden w-full h-max bg-white/30 backdrop-blur-sm lg:block">
        <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto text-sm">
          <div id="left-links" className="flex space-x-8 ">
            <div id="about-links">
              <p className="font-medium tracking-wider uppercase transition-colors duration-300 ease-in-out cursor-pointer hover:underline hover:text-indigo-700" onClick={handleToggleAbout}>About</p>
                <div className={
                  !about ? "absolute top-0 left-0 w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden translate-x-[-100%] transition-all delay-300 duration-500 ease-out z-10"
                  : "absolute top-0 left-0 w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden translate-x-0 transition-all delay-300 duration-500 ease-out z-10"
                }>
                  <section className="relative flex flex-col w-1/3 h-full gap-8 p-16 text-2xl text-indigo-500 bg-white">
                    <button className="self-end p-4 transition-colors duration-300 ease-linear h-max text-violet-500 hover:text-violet-400" type="button"  onClick={handleToggleAbout} aria-label="toggle close about sidebar links">
                      <XMarkIcon className="w-10 h-10 cursor-pointer"/>
                    </button>
                    {about_us_links && about_us_links.map((link, index) => (
                      <NavLink key={link.name} className="block transition-all duration-300 ease-in-out cursor-pointer hover:text-violet-400 hover:pl-10" to={link.href} onClick={handleToggleAbout}>{link.name}</NavLink>
                    ))}
                    <Sphere />
                  </section>

                </div>
            </div>
            <div id="patient-links">
              <p className="font-medium tracking-wider uppercase transition-colors duration-300 ease-in-out cursor-pointer hover:underline hover:text-indigo-700" onClick={handleTogglePatient}>Patient</p>
                <div className={
                  !patient ? "absolute top-0 left-0 w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden translate-x-[-100%] transition-all delay-300 duration-500 ease-out z-10"
                  : "absolute top-0 left-0  w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden translate-x-0 transition-all delay-300 duration-500 ease-out z-10"
                }>
                  <ul className="relative flex flex-col w-1/3 h-full gap-8 p-16 text-2xl text-indigo-500 bg-white">
                    <button className="self-end p-4 transition-colors duration-300 ease-linear h-max text-violet-500 hover:text-violet-400" type="button"  onClick={handleTogglePatient} aria-label="toggle close patient sidebar links">
                      <XMarkIcon className="w-10 h-10 cursor-pointer"/>
                    </button>
                    {patient_links && patient_links.map((link, index) => (
                      <NavLink key={link.name} className="block transition-all duration-300 ease-in-out cursor-pointer hover:text-violet-400 hover:pl-10" to={link.href} onClick={handleTogglePatient}>{link.name}</NavLink>
                    ))}
                  <Sphere />
                </ul>
              </div>
            </div>
            <div id="treatments-links">
              <p className="font-medium tracking-wider uppercase transition-colors duration-300 ease-in-out cursor-pointer hover:underline hover:text-indigo-700" onClick={handleToggleTreatments}>Treatments</p>
                <div className={
                  !treatments ? "absolute top-0 left-0 w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden translate-x-[-100%] transition-all delay-300 duration-500 ease-out z-10"
                  : "absolute top-0 left-0 w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden translate-x-0 transition-all delay-300 duration-500 ease-out z-10"
                }>
                  <ul className="relative flex flex-col w-1/3 h-full gap-8 p-16 text-2xl text-indigo-500 bg-white">
                    <button className="self-end p-4 transition-colors duration-300 ease-linear h-max text-violet-500 hover:text-violet-400" type="button"  onClick={handleToggleTreatments} aria-label="toggle close treatments sidebar links">
                      <XMarkIcon className="w-10 h-10 cursor-pointer"/>
                    </button>
                    {treatments_links && treatments_links.map((link, index) => (
                      <NavLink key={link.name} className="block transition-all duration-300 ease-in-out cursor-pointer hover:text-violet-400 hover:pl-10" to={link.href} onClick={handleToggleTreatments}>{link.name}</NavLink>
                    ))}
                  <Sphere />
                </ul>
              </div>
            </div>
          </div>
          <div id="logo" className="my-4">
            <NavLink to="/#">
              <img
                className="h-10"
                src="../../images/logo_full.png"
                alt="frey smiles orthodontics logo"
              />
            </NavLink>
          </div>
          <div
            id="right-links"
            className="flex items-center gap-8 cursor-pointer"
          >
            <ul className="flex items-center space-x-8">
              <li className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:right-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500 hover:text-indigo-700 ease-in-out">
                <NavLink
                  className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500"
                  to="https://my.orthoblink.com/bLink/Login"
                >
                  <p>Patient Login</p>
                </NavLink>
              </li>
              <li className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:right-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500 hover:text-indigo-700 ease-in-out">
                <NavLink
                  className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500"
                  to="/locations"
                >
                  <p>Our Locations</p>
                </NavLink>
              </li>
              <li className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:right-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500 hover:text-indigo-700 ease-in-out">
                <NavLink
                  className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500"
                  to="/products"
                >
                  <p>Shop</p>
                </NavLink>
              </li>
            </ul>
            <ul className="flex items-center space-x-4 bag-book">
              {bagItems.length > 0 && (
                <li
                  className="flex items-center transition-colors duration-300 ease-in-out hover:underline hover:text-indigo-700"
                  onClick={handleToggleBag}
                >
                  <span>Bag</span>
                  <div className="relative">
                    <svg
                      className="w-6 h-6 ml-1"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.54 5.424a.47.47 0 0 1 .46.474v17.627a.47.47 0 0 1-.46.475H.46a.47.47 0 0 1-.46-.475V5.898a.47.47 0 0 1 .46-.474h4.795v-1.56C5.255 1.733 6.935 0 9 0c2.065 0 3.745 1.733 3.745 3.864v1.56zm-11.365 0h5.64v-1.56c0-1.608-1.264-2.915-2.82-2.915-1.555 0-2.82 1.307-2.82 2.915zm10.905.949h-4.335V8.61a.47.47 0 0 1-.46.475.47.47 0 0 1-.46-.475V6.373h-5.65V8.61a.47.47 0 0 1-.46.475.47.47 0 0 1-.46-.475V6.373H.92V23.05h16.16z"></path>
                    </svg>
                    <span className="absolute text-xs rounded-full top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/3 hover:text-violet-500">
                      {getBagQuantity()}
                    </span>
                  </div>
                </li>
              )}
              <li className="flex items-center px-6 py-2 font-medium tracking-wider text-white uppercase transition duration-300 ease-in-out rounded cursor-pointer hover:shadow-md bg-primary50 hover:bg-primary30 hover:text-primary90">
                <NavLink className="block" to="/book-now">
                  Book Now
                </NavLink>
              </li>
            </ul>
            {isBagOpen && (
              <BagSidePanel
                isBagOpen={isBagOpen}
                setIsBagOpen={setIsBagOpen}
              />
            )}
          </div>
        </div>
      </nav>

      {/* Desktop Navbar end */}

      {/* Mobile Navbar */}
      <nav
        id="mobile-nav"
        className="sticky top-0 left-0 right-0 z-40 w-full px-4 py-6 mx-auto bg-white/30 backdrop-blur-sm lg:hidden"
      >
        <section className="flex items-center justify-between">
          <NavLink to="/">
            <img
              className="h-10"
              src="../../images/logo_full.svg"
              alt="FreySmiles Orthodontics logo"
            />
          </NavLink>
          <div
            className="cursor-pointer text-violet-500"
            onClick={handleToggleMobileNav}
          >
            {show ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars2Icon className="w-6 h-6" />
            )}
          </div>
        </section>
        <section>
          {show && (
            <ul className="min-h-screen font-serif text-3xl font-thin tracking-wider uppercase">
              <div className="mt-12 cursor-pointer">
                <li
                  className="py-2 border-t border-light-brown"
                  onClick={() => setAbout(!about)}
                >
                  <span className="">About</span>
                  <span
                    className={
                      about ? "hidden" : "inline-block ml-2 text-sm align-super"
                    }
                  >
                    ❋
                  </span>
                  {about && (
                    <div className="w-full mt-4">
                      {about_us_links &&
                        about_us_links.map((link) => (
                          <>
                            <NavLink
                              to={link.href}
                              onClick={() => setShow(!show)}
                            >
                              {link.name}
                            </NavLink>
                            <span className="mx-2 text-sm align-super">❋</span>
                          </>
                        ))}
                    </div>
                  )}
                </li>
                <li
                  className="py-2 border-t border-light-brown"
                  onClick={() => setPatient(!patient)}
                >
                  <span className="">Patient</span>
                  <span
                    className={
                      patient
                        ? "hidden"
                        : "inline-block ml-2 text-sm align-super"
                    }
                  >
                    ❋
                  </span>
                  {patient && (
                    <div className="flex flex-col">
                      {patient_links &&
                        patient_links.map((link) => (
                          <>
                            <NavLink
                              to={link.href}
                              onClick={() => setShow(!show)}
                            >
                              <span className="mx-2 text-sm align-super">
                                ❋
                              </span>
                              {link.name}
                            </NavLink>
                          </>
                        ))}
                    </div>
                  )}
                </li>
                <li
                  className="py-2 border-t border-b border-light-brown"
                  onClick={() => setTreatments(!treatments)}
                >
                  <span className="">Treatments</span>
                  <span
                    className={
                      treatments
                        ? "hidden"
                        : "inline-block ml-2 text-sm align-super"
                    }
                  >
                    ❋
                  </span>
                  {treatments && (
                    <div>
                      {treatments_links &&
                        treatments_links.map((link) => (
                          <>
                            <NavLink
                              to={link.href}
                              onClick={() => setShow(!show)}
                            >
                              {link.name}
                            </NavLink>
                            <span className="mx-2 text-sm align-super">❋</span>
                          </>
                        ))}
                    </div>
                  )}
                </li>
              </div>
              <div
                className="mt-12 space-y-4 cursor-pointer"
                onClick={() => setShow(!show)}
              >
                <li className="">
                  <NavLink
                    className="block"
                    to="https://my.orthoblink.com/bLink/Login"
                  >
                    Patient Login
                  </NavLink>
                </li>
                <li className="">
                  <NavLink className="block" to="/products">
                    Shop
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    className="p-2 border rounded border-slate-900"
                    to="/book-now"
                  >
                    Book Now
                  </NavLink>
                </li>
              </div>
            </ul>
          )}
        </section>
      </nav>

      {/* <nav id="mobile-nav" className="fixed top-0 left-0 right-0 z-30 mx-auto lg:hidden">
        <section
          id="mobile-menu-header"
          className="flex items-center justify-between w-full px-6 py-4 xl:hidden bg-stone-900"
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
            className="z-0 text-white cursor-pointer"
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
            className="fixed top-0 flex flex-col justify-between w-full overflow-y-auto transition duration-150 ease-in-out bg-gray-800 shadow h-max xl:hidden"
          >
            <ul className="flex flex-col w-full px-8 py-4">
              <li className="flex items-center pt-10 text-white">
                <NavLink
                  to="/"
                  className="cursor-pointer"
                  onClick={() => setShow(false)}
                >
                  <p className="ml-3 text-base xl:text-base">Home</p>
                </NavLink>
              </li>
              <li className="pt-8 text-white cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="ml-3 text-base text-white xl:text-base">
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
                          <li key={link.name} className="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer hover:bg-indigo-300 hover:text-white">
                            <NavLink
                              to={link.href}
                              className="block px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-white"
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
              <li className="pt-8 text-white cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="ml-3 text-base text-white xl:text-base">
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
                            <li key={link.name} className="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer hover:bg-indigo-300 hover:text-white">
                              <NavLink
                                to={link.href}
                                className="block px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-white"
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
              <li className="pt-8 text-white cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="ml-3 text-base text-white xl:text-base">
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
                            <li key={link.name} className="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer hover:bg-indigo-300 hover:text-white">
                              <NavLink
                                to={link.href}
                                className="block px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-white"
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
              <li className="flex items-center pt-8 text-white">
                <NavLink
                  to="/patient-login"
                  className="cursor-pointer"
                  onClick={() => setShow(false)}
                >
                  <p className="ml-3 text-base xl:text-base">Patient Login</p>
                </NavLink>
              </li>
              <li className="flex items-center pt-8 text-white">
                <NavLink
                  to="/locations"
                  className="cursor-pointer"
                  onClick={() => setShow(false)}
                >
                  <p className="ml-3 text-base xl:text-base">Our Locations</p>
                </NavLink>
              </li>
              <li className="flex items-center pt-8 text-white">
                <NavLink
                  to="/products"
                  className="cursor-pointer"
                  onClick={() => setShow(false)}
                >
                  <p className="ml-3 text-base xl:text-base">Shop Products</p>
                </NavLink>
              </li>
            </ul>
            <div className="w-full px-10 py-8 my-4 border-t border-gray-700">
              <div className="flex items-center justify-between w-full">
                <NavLink
                  to="/book-now"
                  className="p-4 rounded-full bg-violet-300 text-violet-900"
                  onClick={() => setShow(false)}
                >
                  Book Now
                </NavLink>
                <NavLink
                  to="/bag"
                  onClick={() => setShow(false)}
                  className="block px-3 text-sm font-normal leading-3 tracking-normal text-white cursor-pointer"
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
      </nav> */}
      {/* Mobile Navbar end */}
    </>
  );
}
