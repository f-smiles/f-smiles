import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-center bg-gray-200">
      <div className="flex max-w-6xl mx-auto items-center space-x-4">
        <Link to="/">
          <h1>frey smiles</h1>
        </Link>
        <section className="group relative cursor-pointer py-2">
          <div className="flex items-center justify-between bg-white px-4">
            <h1
              className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
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
          <div className="flex items-center justify-between space-x-5 bg-white px-4">
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
          <div className="flex items-center justify-between space-x-5 bg-white px-4">
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
          <Link>Patient Login</Link>
          <Link>Our Locations</Link>
          <Link>Book Now</Link>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
