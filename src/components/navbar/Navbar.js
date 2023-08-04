import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  XMarkIcon,
  Bars2Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useAnimate, stagger } from "framer-motion";
import Sphere from "./sketch";
import BagSidePanel from "../bag/BagSidePanel";

function useMobileNavAnimation(show) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const mobileNavAnimations = show
      ? [
          [
            "ul",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.5" },
          ],
          [
            "a",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.5" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }) },
          ],
          [
            "a",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }) },
          ],
          ["ul", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];
    animate([...mobileNavAnimations]);
  }, [show, animate]);

  return scope;
}

export default function DesktopNavbar() {
  const bagItems = useSelector((state) => state.bag.line_items);

  const getBagQuantity = () => {
    let totalQuantity = 0;
    bagItems.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

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

  const [show, setShow] = useState(null); /* mobile nav */

  const handleToggleMobileNav = () => {
    setShow(!show);
  };

  const scope = useMobileNavAnimation(show);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        id="desktop-nav"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full transition duration-300 ease-in-out h-max bg-white/30 backdrop-blur-sm lg:block hover:bg-white"
      >
        <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto text-sm">
          <div id="left-links" className="flex space-x-8 ">
            <div id="about-links">
              <p
                className="font-medium tracking-wider text-gray-800 uppercase transition duration-300 ease-in-out cursor-pointer hover:text-indigo-700 group"
                onClick={handleToggleAbout}
              >
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondary50"></span>
              </p>
              <div
                className={`${
                  !about ? "translate-x-[-100%]" : "translate-x-0"
                } absolute top-0 left-0 w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden transition-all delay-300 duration-500 ease-out z-10
                `}
              >
                <ul className="relative flex flex-col w-1/3 h-full gap-8 p-16 text-2xl text-indigo-500 bg-white">
                  <button
                    className="self-end p-4 transition-colors duration-300 ease-linear h-max text-violet-500 hover:text-violet-400"
                    type="button"
                    onClick={handleToggleAbout}
                    aria-label="toggle close about sidebar links"
                  >
                    <XMarkIcon className="w-10 h-10 cursor-pointer" />
                  </button>
                  {about_us_links &&
                    about_us_links.map((link, index) => (
                      <li key={link.name}>
                        <NavLink
                          className="block transition-all duration-300 ease-in-out cursor-pointer hover:text-violet-400 hover:pl-10"
                          to={link.href}
                          onClick={handleToggleAbout}
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  <Sphere />
                </ul>
              </div>
            </div>
            <div id="patient-links">
              <p
                className="font-medium tracking-wider text-gray-800 uppercase transition duration-300 ease-in-out cursor-pointer hover:text-indigo-700 group"
                onClick={handleTogglePatient}
              >
                Patient
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondary50"></span>
              </p>
              <div
                className={`${
                  !patient ? "translate-x-[-100%]" : "translate-x-0"
                } absolute top-0 left-0 w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden transition-all delay-300 duration-500 ease-out z-10
                  `}
              >
                <ul className="relative flex flex-col w-1/3 h-full gap-8 p-16 text-2xl text-indigo-500 bg-white">
                  <button
                    className="self-end p-4 transition-colors duration-300 ease-linear h-max text-violet-500 hover:text-violet-400"
                    type="button"
                    onClick={handleTogglePatient}
                    aria-label="toggle close patient sidebar links"
                  >
                    <XMarkIcon className="w-10 h-10 cursor-pointer" />
                  </button>
                  {patient_links &&
                    patient_links.map((link, index) => (
                      <li key={link.name}>
                        <NavLink
                          className="block transition-all duration-300 ease-in-out cursor-pointer hover:text-violet-400 hover:pl-10"
                          to={link.href}
                          onClick={handleTogglePatient}
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  <Sphere />
                </ul>
              </div>
            </div>
            <div id="treatments-links">
              <p
                className="font-medium tracking-wider text-gray-800 uppercase transition duration-300 ease-in-out cursor-pointer hover:text-indigo-700 group"
                onClick={handleToggleTreatments}
              >
                Treatments
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondary50"></span>
              </p>
              <div
                className={`${
                  !treatments ? "translate-x-[-100%]" : "translate-x-0"
                } absolute top-0 left-0 w-screen h-screen backdrop-blur-sm bg-white/30 flex flex-row gap-2 overflow-hidden transition-all delay-300 duration-500 ease-out z-10
                `}
              >
                <ul className="relative flex flex-col w-1/3 h-full gap-8 p-16 text-2xl text-indigo-500 bg-white">
                  <button
                    className="self-end p-4 transition-colors duration-300 ease-linear h-max text-violet-500 hover:text-violet-400"
                    type="button"
                    onClick={handleToggleTreatments}
                    aria-label="toggle close treatments sidebar links"
                  >
                    <XMarkIcon className="w-10 h-10 cursor-pointer" />
                  </button>
                  {treatments_links &&
                    treatments_links.map((link, index) => (
                      <li key={link.name}>
                        <NavLink
                          className="block transition-all duration-300 ease-in-out cursor-pointer hover:text-violet-400 hover:pl-10"
                          to={link.href}
                          onClick={handleToggleTreatments}
                        >
                          {link.name}
                        </NavLink>
                      </li>
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
            <ul className="flex items-center space-x-8 text-gray-800 group">
              <li className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:right-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500 hover:text-indigo-700 ease-in-out">
                <NavLink
                  className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500"
                  to="https://my.orthoblink.com/bLink/Login"
                >
                  <p>Patient Login</p>
                </NavLink>
              </li>
              <li className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:right-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500 hover:text-indigo-700 ease-in-out">
                <NavLink
                  className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:translate-x-0 before:w-0 before:h-[2px] before:opacity-0 hover:before:w-1/2 hover:before:opacity-100 before:transition-all before:duration-500 before:bg-violet-500"
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
              <BagSidePanel isBagOpen={isBagOpen} setIsBagOpen={setIsBagOpen} />
            )}
          </div>
        </div>
      </nav>
      {/* Desktop Navbar end */}

      {/* Mobile Navbar */}
      <nav
        id="mobile-nav"
        className={`${
          show ? "bg-white" : "bg-white/30 backdrop-blur-sm"
        } fixed top-0 left-0 right-0 z-50 w-full py-6 mx-auto lg:hidden text-gray-600`}
      >
        <section className="flex items-center justify-between px-4">
          <NavLink to="/">
            <img
              className="h-10"
              src="../../images/logo_full.png"
              alt="FreySmiles Orthodontics logo"
            />
          </NavLink>
          <div
            className="transition duration-300 ease-linear cursor-pointer text-primary50 hover:text-secondary50"
            onClick={handleToggleMobileNav}
          >
            {show ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars2Icon className="w-6 h-6" />
            )}
          </div>
        </section>
        <section ref={scope}>
          {show && (
            <ul className="relative h-screen overflow-auto text-3xl bg-white">
              <div className="px-4 mt-12 cursor-pointer group text-primary40">
                <li
                  className="py-2 border-b border-secondary50/30"
                  onClick={() => setAbout(!about)}
                >
                  <span className="inline-flex items-center gap-2 font-light tracking-wider uppercase font-larken">
                    About <ChevronDownIcon className="w-4 h-4" />
                  </span>
                  {about && (
                    <div className="flex flex-col w-full my-4 space-y-1 capitalize">
                      {about_us_links &&
                        about_us_links.map((link) => (
                          <NavLink
                            key={link.name}
                            to={link.href}
                            className="mx-6 font-cera text-[1.5rem] text-secondary50"
                            onClick={() => setShow(!show)}
                          >
                            {link.name}
                          </NavLink>
                        ))}
                    </div>
                  )}
                </li>
                <li
                  className="py-2 border-b border-secondary50/30"
                  onClick={() => setPatient(!patient)}
                >
                  <span className="inline-flex items-center gap-2 font-light tracking-wider uppercase font-larken">
                    Patient <ChevronDownIcon className="w-4 h-4" />
                  </span>
                  {patient && (
                    <div className="flex flex-col w-full my-4 space-y-1 capitalize">
                      {patient_links &&
                        patient_links.map((link) => (
                          <NavLink
                            key={link.name}
                            to={link.href}
                            className="mx-6 font-cera text-secondary50 text-[1.5rem]"
                            onClick={() => setShow(!show)}
                          >
                            {link.name}
                          </NavLink>
                        ))}
                    </div>
                  )}
                </li>
                <li
                  className="py-2 border-b border-secondary50/30"
                  onClick={() => setTreatments(!treatments)}
                >
                  <span className="inline-flex items-center gap-2 font-light tracking-wider uppercase font-larken">
                    Treatments <ChevronDownIcon className="w-4 h-4" />
                  </span>
                  {treatments && (
                    <div className="flex flex-col w-full my-4 space-y-1 capitalize">
                      {treatments_links &&
                        treatments_links.map((link) => (
                          <NavLink
                            key={link.name}
                            to={link.href}
                            className="mx-6 font-cera text-secondary50 text-[1.5rem]"
                            onClick={() => setShow(!show)}
                          >
                            {link.name}
                          </NavLink>
                        ))}
                    </div>
                  )}
                </li>
              </div>
              <div
                className="px-4 mt-12 space-y-4 cursor-pointer"
                onClick={() => setShow(!show)}
              >
                <li className="">
                  <NavLink
                    className="block text-[2rem] font-cera text-secondary50"
                    to="https://my.orthoblink.com/bLink/Login"
                  >
                    Patient Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="block font-cera text-[2rem] text-secondary50"
                    to="/products"
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="pt-6">
                  <div className="px-3 py-2 rounded-md w-max bg-gradient-to-r from-purple-700 to-secondary50">
                    <NavLink
                      to="/book-now"
                      className="font-normal uppercase text-primary98 font-cera"
                    >
                      Book Now
                    </NavLink>
                  </div>
                </li>
              </div>
              {/* animated blobs */}
              <div className="absolute w-full -right-1/2 bottom-1/3">
                <div className="relative max-w-lg">
                  <div className="absolute top-0 rounded-full w-72 h-72 opacity-40 bg-primary50 -left-1/2 mix-blend-multiply filter animate-blob blur-xl"></div>
                  <div className="absolute top-0 bg-yellow-300 rounded-full w-72 h-72 opacity-40 -left-1/6 mix-blend-multiply filter animate-blob animation-delay-2000 blur-xl"></div>
                  <div className="absolute rounded-full w-72 h-72 opacity-40 bg-secondary70 -left-1/4 top-3/4 mix-blend-multiply filter animate-blob animation-delay-4000 blur-xl"></div>
                </div>
              </div>
            </ul>
          )}
        </section>
      </nav>
      {/* Mobile Navbar end */}
    </>
  );
}
