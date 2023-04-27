import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DesktopNavbar() {
  const [show, setShow] = useState(null);
  const [about, setAbout] = useState(false);
  const [patient, setPatient] = useState(false);
  const [treatments, setTreatments] = useState("");

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
      <nav id="desktop-nav" className="w-full h-full bg-gray-800 shadow xl:block hidden">
        <ul className="w-full p-2 max-w-screen-xl mx-auto flex justify-between items-center">
          <li><Link to="/"><img className="h-12" src="../../images/logo_full.png" alt="frey smiles orthodontics logo"/></Link></li>
          <ul className="xl:flex hidden gap-8 justify-evenly items-center">
            <li
              className="cursor-pointer hover:text-indigo-700 transition duration-150 ease-in-out inline-flex items-center text-sm text-white tracking-normal relative text-white hover:text-indigo-700 gap-2"
              onClick={() => setAbout(!about)}
            >
              {about && (
                <ul className="bg-white shadow rounded py-1 w-max left-0 mt-12 -ml-4 absolute top-0">
                  {about_us_links && about_us_links.map(link => {
                    return (
                      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
                        <Link to={link.href} key={link.name} className="cursor-pointer block text-gray-600 text-sm leading-3 tracking-normal hover:text-white px-3 font-normal">{link.name}</Link>
                      </li>
                    )
                  })}
                </ul>
              )}
              About Us
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
                  {patient_links && patient_links.map(link => {
                    return (
                      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
                        <Link to={link.href} key={link.name} className="cursor-pointer block text-gray-600 text-sm leading-3 tracking-normal hover:text-white px-3 font-normal">{link.name}</Link>
                      </li>
                    )
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
              {treatments && (
                <ul className="bg-white shadow rounded py-1 w-max left-0 mt-12 -ml-4 absolute top-0">
                  {treatments_links && treatments_links.map(link => {
                    return (
                      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
                        <Link to={link.href} key={link.name} className="cursor-pointer block text-gray-600 text-sm leading-3 tracking-normal hover:text-white px-3 font-normal">{link.name}</Link>
                      </li>
                    )
                  })}
                </ul>
              )}
              <p>Treatments</p>
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
            <li className="cursor-pointer flex hover:text-indigo-700 transition duration-150 ease-in-out flex items-center text-sm text-white tracking-normal text-white hover:text-indigo-700">
              <Link to="/patient-login" className="cursor-pointer block text-sm leading-3 tracking-normal px-3 font-normal">Patient Login</Link>            
            </li>
            <li className="cursor-pointer flex hover:text-indigo-700 transition duration-150 ease-in-out flex items-center text-sm text-white tracking-normal text-white hover:text-indigo-700">
              <Link to="/allentown" className="cursor-pointer block text-sm leading-3 tracking-normal px-3 font-normal">Our Locations</Link>
            </li>
          </ul>
          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white font-normal">
            <button className="cursor-pointer bg-violet-300 rounded-full px-8 py-2 hover:text-indigo-700 transition duration-150 ease-in-out flex items-center text-sm text-white tracking-normal text-white hover:text-indigo-700">
              Book Now
            </button>
          </li>
        </ul>
      </nav>
      {/* Desktop Navbar end */}
      {/* Mobile Navbar */}
      <nav id="mobile-nav">
        <section id="mobile-menu" className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-gray-800 fixed top-0 z-10">
          <Link to="/" className="cursor-pointer">
            <img
              src="../../images/logo_full.png"
              className="h-12"
              alt="logo full"
            />
          </Link>
          <div
            id="menu"
            className="cursor-pointer text-white"
            onClick={() => setShow(!show)}
          >
            {show ? (
              ""
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
        <div
          className={
            show
              ? "w-full h-full absolute z-40 transform translate-x-0 xl:hidden"
              : "xl:hidden w-full h-full absolute z-40 transform -translate-x-full"
          }
        >
          <div
            className="bg-gray-800 opacity-50 w-full h-full"
            onClick={() => setShow(!show)}
          />
            <section id="mobile-menu-open" className="w-full h-full z-40 fixed overflow-y-auto z-40 top-0 bg-gray-800 shadow flex-col justify-between xl:hidden transition duration-150 ease-in-out">
              <div className="flex flex-col w-full">
                <div className="mt-6 px-8 flex w-full items-center justify-between">
                  <div className="flex items-center justify-between w-full">
                      <img
                        src="../../images/logo_full.png"
                        className="h-8"
                        alt="logo image"
                      />
                    <div
                      id="close"
                      className="cursor-pointer text-white"
                      onClick={() => setShow(!show)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <ul className="px-8 py-4">
                  <Link className="cursor-pointer">
                    <li className="text-white pt-10 flex items-center">
                      <p className="text-indigo-700 xl:text-base text-base ml-3">
                        Home
                      </p>
                    </li>
                  </Link>
                  <Link className="cursor-pointer">
                    <li className="text-white pt-8">
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
                          {about_us_links && about_us_links.map(link => {
                            return (
                              <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
                                <Link to={link.href} key={link.name} className="cursor-pointer block text-gray-600 text-sm leading-3 tracking-normal hover:text-white px-3 font-normal">{link.name}</Link>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </li>
                  </Link>
                  <Link className="cursor-pointer">
                    <li className="text-white pt-8">
                      <div className="flex items-center justify-between">
                        <p className="text-white xl:text-base  text-base ml-3">
                          Patient
                        </p>
                        {patient ? (
                          <div onClick={() => setPatient(!patient)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-up"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <polyline points="6 15 12 9 18 15" />
                            </svg>
                          </div>
                        ) : (
                          <div onClick={() => setPatient(!patient)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-down"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        )}
                      </div>
                      {patient && (
                        <div>
                          <ul className="my-3">
                          {patient_links && patient_links.map(link => {
                            return (
                              <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
                                <Link to={link.href} key={link.name} className="cursor-pointer block text-gray-600 text-sm leading-3 tracking-normal hover:text-white px-3 font-normal">{link.name}</Link>
                              </li>
                            )
                          })}
                          </ul>
                        </div>
                      )}
                    </li>
                  </Link>
                  <Link className="cursor-pointer">
                    <li className="text-white pt-8">
                      <div className="flex items-center justify-between">
                        <p className="text-white xl:text-base  text-base ml-3">
                          Treatments
                        </p>
                        {treatments ? (
                          <div onClick={() => setTreatments(!treatments)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-up"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <polyline points="6 15 12 9 18 15" />
                            </svg>
                          </div>
                        ) : (
                          <div onClick={() => setTreatments(!treatments)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-down"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        )}
                      </div>
                      {treatments && (
                        <div>
                          <ul className="my-3">
                          {treatments_links && treatments_links.map(link => {
                            return (
                              <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
                                <Link to={link.href} key={link.name} className="cursor-pointer block text-gray-600 text-sm leading-3 tracking-normal hover:text-white px-3 font-normal">{link.name}</Link>
                              </li>
                            )
                          })}
                          </ul>
                        </div>
                      )}
                    </li>
                  </Link>
                  <Link to="/patient-login" className="cursor-pointer">
                    <li className="text-white pt-8 flex items-center">
                      <p className="xl:text-base text-base ml-3">Patient Login</p>
                    </li>
                  </Link>
                  <Link to="/allentown" className="cursor-pointer">
                    <li className="text-white pt-8 flex items-center">
                      <p className="xl:text-base text-base ml-3">Our Locations</p>
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="w-full py-8 my-4 px-10 border-t border-gray-700">
                {/* <div className=""> */}
                  <div className="w-full flex items-center justify-between">
                    <button className="rounded-full bg-violet-300 text-violet-900 p-4">
                      Book Now
                    </button>
                  </div>
                {/* </div> */}
              </div>
            </section>
        </div>
      </nav>
      {/* Mobile Navbar end */}
    </>
  );
}