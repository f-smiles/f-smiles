import React, { useState, useContext, useEffect, useRef } from "react";
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import Sphere from "./sketch";
import CartContext from "../../app/CartContext";
// import Bag from "../stripe/Bag";
import { XMarkIcon, Bars2Icon } from "@heroicons/react/24/outline"
import BagSidePanel from "../bag/BagSidePanel";

export default function DesktopNavbar() {

  const bagItems = useSelector(state => state.bag.line_items)

  const getBagTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    bagItems.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return { totalPrice, totalQuantity }
  }

  const { cartCount } = useContext(CartContext);

  const [show, setShow] = useState(null); /* mobile nav */
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  const [about, setAbout] = useState(false);
  const [patient, setPatient] = useState(false);
  const [treatments, setTreatments] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);

  // const [showCheckout, setShowCheckout] = useState(false);
  // const sidebarRef = useRef(null);
  // const [showSidebar, setShowSidebar] = useState(false);

  // const handleCheckout = () => {
  //   setShowCheckout(true);
  // };

  // const handleClickOutside = (event) => {
  //   if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
  //     setShowSidebar(false);
  //   }
  // };

  // const handleToggleSidebar = () => {
  //   setShowSidebar(!showSidebar);
  // };

  // useEffect(() => {
  //   if (showSidebar) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [showSidebar]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset;
  //     const threshold = 5;

  //     if (scrollTop > threshold) {
  //       setNavbarTransparent(false);
  //     } else {
  //       setNavbarTransparent(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


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
      <nav id="desktop-nav" className={`w-full h-max fixed top-0 left-0 right-0 z-40 bg-white/30 backdrop-blur-sm hidden lg:block`}>
        <div className="max-w-screen-xl mx-auto flex justify-between items-center text-sm ">
          <div id="left-links" className="flex space-x-8 ">
            <div id="about-links">
              <h4 className="cursor-pointer uppercase font-medium tracking-wider hover:underline hover:text-indigo-700 transition-colors duration-300 ease-in-out" onClick={handleToggleAbout}>About</h4>
                <div className={
                  !about ? "absolute top-0 left-0 w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden translate-x-[-100%] transition-all delay-300 duration-500 ease-out"
                  : "absolute top-0 left-0  w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden translate-x-0 transition-all delay-300 duration-500 ease-out"
                }>
                  <section className="relative w-1/3 h-full p-16 bg-stone-200 flex flex-col gap-8 text-2xl text-indigo-500">
                    <button className="self-end h-max p-4 text-violet-500 hover:text-violet-400 transition-colors duration-300 ease-linear z-10" type="button"  onClick={handleToggleAbout} aria-label="toggle close about sidebar links">
                      <XMarkIcon className="w-10 h-10 cursor-pointer"/>
                    </button>
                    {about_us_links && about_us_links.map((link, index) => (
                      <div key={link.name} className=" hover:text-violet-400 hover:translate-x-10 transition-transform ease-in duration-300">
                        <NavLink className="block" to={link.href} onClick={handleToggleAbout}>{link.name}</NavLink>
                      </div>
                    ))}
                    <Sphere />
                  </section>

                </div>
            </div>
            <div id="patient-links">
              <h4 className="cursor-pointer uppercase font-medium tracking-wider hover:underline hover:text-indigo-700 transition-colors duration-300 ease-in-out" onClick={handleTogglePatient}>Patient</h4>
                <div className={
                  !patient ? "absolute top-0 left-0 w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden translate-x-[-100%] transition-all delay-300 duration-500 ease-out"
                  : "absolute top-0 left-0  w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden translate-x-0 transition-all delay-300 duration-500 ease-out"
                }>
                  <ul className="relative w-1/3 h-full p-16 bg-stone-200 flex flex-col gap-8 text-2xl text-indigo-500">
                    <button className="self-end h-max p-4 text-violet-500 hover:text-danger-600 transition-colors duration-300 ease-linear z-10" type="button"  onClick={handleTogglePatient} aria-label="toggle close patient sidebar links">
                      <XMarkIcon className="w-10 h-10 cursor-pointer"/>
                    </button>
                    {patient_links && patient_links.map((link, index) => (
                      <li key={link.name} className=" hover:text-violet-400 hover:translate-x-10 transition-transform ease-in duration-300">
                        <NavLink className="block" to={link.href} onClick={handleTogglePatient}>{link.name}</NavLink>
                      </li>
                    ))}
                    <Sphere />
                  </ul>
                </div>
            </div>
            <div id="treatments-links">
              <h4 className="cursor-pointer uppercase font-medium tracking-wider hover:underline hover:text-indigo-700 transition-colors duration-300 ease-in-out" onClick={handleToggleTreatments}>Treatments</h4>
                <div className={
                  !treatments ? "absolute top-0 left-0 w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden translate-x-[-100%] transition-all delay-300 duration-500 ease-out"
                  : "absolute top-0 left-0 w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden translate-x-0 transition-all delay-300 duration-500 ease-out"
                }>
                  <ul className="relative w-1/3 h-full p-16 bg-stone-200 flex flex-col gap-8 text-2xl text-indigo-500">
                    <button className="self-end h-max p-4 text-violet-500 hover:text-danger-600 transition-colors duration-300 ease-linear z-10" type="button"  onClick={handleToggleTreatments} aria-label="toggle close treatments sidebar links">
                      <XMarkIcon className="w-10 h-10 cursor-pointer"/>
                    </button>
                    {treatments_links && treatments_links.map((link, index) => (
                      <li key={link.name} className=" hover:text-violet-400 hover:translate-x-10 transition-transform ease-in duration-300">
                        <NavLink className="block" to={link.href} onClick={handleToggleTreatments}>{link.name}</NavLink>
                      </li>
                    ))}
                    <Sphere />
                  </ul>
                </div>
            </div>
          </div>
          <div id="logo" className="my-4" >
            <NavLink to="/#">
              <img className="h-12 ml-10 mr-10" src="../../images/logo_full.png" alt="frey smiles orthodontics logo" />
            </NavLink>
          </div>
          <div id="right-links" className="flex items-center gap-8 cursor-pointer">
            <ul className="flex items-center space-x-8 ">
              <li className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:right-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500 hover:text-indigo-700 ease-in-out">
                  <NavLink className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500" to="https://my.orthoblink.com/bLink/Login">Patient Login</NavLink>
              </li>
              <li className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:right-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500 hover:text-indigo-700 ease-in-out">
                <NavLink className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500"  to="/locations">Our Locations</NavLink>
              </li>
              <li className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:right-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500 hover:text-indigo-700 ease-in-out">
                <NavLink className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500"  to="/products">Shop</NavLink>
              </li>
            </ul>
            <ul className="bag-book flex items-center space-x-4">
              {bagItems.length > 0 && (
                  <li className="flex items-center hover:underline hover:text-indigo-700 transition-colors duration-300 ease-in-out" onClick={handleToggleBag}>
                    <span>Bag</span>
                    <div className="relative">
                      <svg
                        className="ml-1 w-6 h-6"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.54 5.424a.47.47 0 0 1 .46.474v17.627a.47.47 0 0 1-.46.475H.46a.47.47 0 0 1-.46-.475V5.898a.47.47 0 0 1 .46-.474h4.795v-1.56C5.255 1.733 6.935 0 9 0c2.065 0 3.745 1.733 3.745 3.864v1.56zm-11.365 0h5.64v-1.56c0-1.608-1.264-2.915-2.82-2.915-1.555 0-2.82 1.307-2.82 2.915zm10.905.949h-4.335V8.61a.47.47 0 0 1-.46.475.47.47 0 0 1-.46-.475V6.373h-5.65V8.61a.47.47 0 0 1-.46.475.47.47 0 0 1-.46-.475V6.373H.92V23.05h16.16z"></path>
                      </svg>
                      <span className="absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/3 text-xs rounded-full hover:text-violet-500 -z-10">
                        {getBagTotal().totalQuantity}
                      </span>
                    </div>
                  </li>
                )}
              {cartCount > 0 && (
                <li className="hidden items-center hover:underline hover:text-indigo-700 transition-colors duration-300 ease-in-out" onClick={handleToggleBag}>
                  <span>Bag</span>
                  <div className="relative">
                    <svg
                      className="ml-1 w-6 h-6"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.54 5.424a.47.47 0 0 1 .46.474v17.627a.47.47 0 0 1-.46.475H.46a.47.47 0 0 1-.46-.475V5.898a.47.47 0 0 1 .46-.474h4.795v-1.56C5.255 1.733 6.935 0 9 0c2.065 0 3.745 1.733 3.745 3.864v1.56zm-11.365 0h5.64v-1.56c0-1.608-1.264-2.915-2.82-2.915-1.555 0-2.82 1.307-2.82 2.915zm10.905.949h-4.335V8.61a.47.47 0 0 1-.46.475.47.47 0 0 1-.46-.475V6.373h-5.65V8.61a.47.47 0 0 1-.46.475.47.47 0 0 1-.46-.475V6.373H.92V23.05h16.16z"></path>
                    </svg>
                    <span className="absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/3 text-xs rounded-full hover:text-violet-500 -z-10">
                      {cartCount}
                    </span>
                  </div>
                </li>
              )}
              <li className="cursor-pointer bg-B47EDE uppercase font-medium tracking-wider flex items-center rounded px-6 py-2 transition duration-300 ease-in-out text-violet-100 hover:text-violet-900 hover:shadow-md hover:shadow-violet-400/50">
                <NavLink className="block" to="/book-now">Book Now</NavLink>
              </li>
            </ul>
            {isBagOpen && (
              <BagSidePanel className='-z-50' isBagOpen={isBagOpen} setIsBagOpen={setIsBagOpen} />
            )}
            {/* <div id="bag-panel" className={
              isBagOpen ? "absolute top-0 left-0 right-0 w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row justify-start overflow-hidden translate-x-0 transition-all delay-300 duration-500 ease-out"
              : "absolute top-0 left-0 right-0 w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden translate-x-[100%] transition-all delay-300 duration-500 ease-out"
            }>
              <div className="relative w-1/3 left-2/3 h-full p-16 bg-stone-200 flex flex-col ">
                <button className="self-end h-max p-4 text-violet-500 hover:text-danger-600 transition-colors duration-300 ease-linear z-10" type="button" onClick={handleToggleBag} aria-label="toggle close treatments sidebar links">
                  <XMarkIcon className="w-10 h-10 cursor-pointer"/>
                </button>
                <Bag isBagOpen={isBagOpen} />
              </div>
            </div> */}
          </div>
        </div>
      </nav>

      {/* Desktop Navbar end */}

      {/* Mobile Navbar */}
      <nav id="mobile-nav" className="sticky top-0 left-0 right-0 mx-auto w-full z-40 lg:hidden bg-c py-6 px-4">
        <section className="flex justify-between items-center">
          <NavLink to='/'>
            <img className="h-10" src="../../images/logo_full.png" alt="FreySmiles Orthodontics logo" />
          </NavLink>
          <div className="cursor-pointer text-slate-500" onClick={handleToggleMobileNav}>
            {show ? (
              <XMarkIcon className="w-6 h-6" />
              ) : (
              <Bars2Icon className="w-6 h-6" />
            )}
          </div>
        </section>
        <section>
          {show && (
            <ul className="font-serif text-3xl font-thin tracking-wider uppercase min-h-screen">
              <div className="mt-12 cursor-pointer">
                <li className="border-t py-2 border-light-brown" onClick={() => setAbout(!about)}>
                  <span className="">About</span>
                  <span className={about ? 'hidden' : 'inline-block ml-2 text-sm align-super'}>❋</span>
                  {about && (
                    <div className="w-full mt-4">
                      {about_us_links && about_us_links.map((link) => (
                        <>
                        <NavLink to={link.href} onClick={() => setShow(!show)}>{link.name}</NavLink>
                        <span className="mx-2 text-sm align-super">❋</span>
                        </>
                      ))}
                    </div>
                  )}
                </li>
                <li className="border-t border-light-brown py-2" onClick={() => setPatient(!patient)}>
                  <span className="">Patient</span>
                  <span className={patient ? 'hidden' : 'inline-block ml-2 text-sm align-super'}>❋</span>
                  {patient && (
                    <div className="flex flex-col">
                      {patient_links && patient_links.map((link) => (
                        <>
                        <NavLink to={link.href} onClick={() => setShow(!show)}>
                          <span className="mx-2 text-sm align-super">❋</span>
                          {link.name}
                        </NavLink>
                        </>
                      ))}
                    </div>
                  )}
                </li>
                <li className="border-b border-t border-light-brown py-2"  onClick={() => setTreatments(!treatments)}>
                  <span className="">Treatments</span>
                  <span className={treatments ? 'hidden' : 'inline-block ml-2 text-sm align-super'}>❋</span>
                  {treatments && (
                    <div>
                      {treatments_links && treatments_links.map((link) => (
                        <>
                        <NavLink to={link.href} onClick={() => setShow(!show)}>{link.name}</NavLink>
                        <span className="mx-2 text-sm align-super">❋</span>
                        </>
                      ))}
                    </div>
                  )}

                </li>
              </div>
              <div className="mt-12 cursor-pointer space-y-4" onClick={() => setShow(!show)}>
                <li className="">
                  <NavLink className="block" to="https://my.orthoblink.com/bLink/Login">Patient Login</NavLink>
                </li>
                <li className="">
                  <NavLink className="block" to="/products">Shop</NavLink>
                </li>
                <li className="">
                  <NavLink className="p-2 rounded border border-slate-900" to="/book-now">Book Now</NavLink>
                </li>
              </div>
            </ul>
          )}
        </section>
      </nav>

      {/* <nav id="mobile-nav" className="fixed top-0 left-0 right-0 mx-auto z-30 lg:hidden">
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
                          <li key={link.name} className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
                            <NavLink
                              to={link.href}
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
                            <li key={link.name} className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
                              <NavLink
                                to={link.href}
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
                            <li key={link.name} className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
                              <NavLink
                                to={link.href}
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
      </nav> */}
      {/* Mobile Navbar end */}
    </>
  );
}
