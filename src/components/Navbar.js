import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./navbar/MobileNav";
import DesktopNav from "./navbar/DesktopNav";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleOpenMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
    <MobileNav className="lg:hidden md:block" />
    <DesktopNav className="md:hidden sm:hidden lg:block" />
    <nav className="flex items-center justify-center">
      <div className="flex max-w-6xl mx-auto items-center space-x-4">
        <div className="bg-indigo-50 w-16">
        <Link to="/">
          <img alt="doctors" src="../../images/logo_short.png"></img>
        </Link>
        </div>
        <section className="group relative cursor-pointer py-2">
          <div className="flex items-center justify-between ">
            <h1
              className="menu-hover my-2 py-1 text-base font-medium text-black lg:mx-4"
            >
              About Us
            </h1>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          <div
            className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
          >
            <Link to="/our-team" className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              Our Team
            </Link>

            <Link to="/why-choose-us" className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              Why Choose Us
            </Link>
          </div>
        </section>
        <section className="group relative cursor-pointer py-2">
          <div className="flex items-center justify-between space-x-5">
            <h1
              className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
            >
              Patient
            </h1>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          <div
            className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
          >
            <Link to="/your-care" className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              Your Care
            </Link>
            <Link to="/financing-treatment" className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              Financing Treatment
            </Link>
            <Link to="/virtual-consultation" className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              Virtual Consultation
            </Link>
            <Link to="/braces-care" className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              Caring For Your Braces
            </Link>
          </div>
        </section>
        <section className="group relative cursor-pointer py-2">
          <div className="flex items-center justify-between space-x-5">
            <h1
              className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
            >
              Treatments
            </h1>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          <div
            className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
          >
            <Link to="/braces" className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              Braces
            </Link>
            <Link to="/financing-treatment" className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              Financing Treatment
            </Link>
            <Link to="/virtual-consultation" className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              Virtual Consultation
            </Link>
            <Link to="/braces-care" className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              Caring For Your Braces
            </Link>
          </div>
        </section>
        <section className="flex space-x-4">
          <div className="hover:text-indigo-500 py-1"><Link>Patient Login</Link></div>

          <div className="hover:text-indigo-500 py-1"><Link>Our Locations</Link></div>
          <div className="hover:text-indigo-500 bg-transparent hover:bg-violet-400 text-black hover:text-white py-1 px-2 border border-black hover:border-transparent rounded-full"> <Link>Book Now</Link> </div>
        </section>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
