import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid';


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


const MobileNav = () => {
  const [closeMenu, setCloseMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(null);

  const handleOpenMenu = (index) => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index));
    setCloseMenu(true);
  };

  return (
    <Disclosure>
      {({ open }) => (
        <>
        <div className="flex items-center justify-between px-4 py-2">
        <span>
          <img className="w-12 inline-block bg-indigo-300" src="../../images/logo_short.png" alt="frey smiles orthodontics logo"></img>
        </span>
        <Disclosure.Button onClick={() => setCloseMenu(!closeMenu)}>
          {closeMenu ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          )}
        </Disclosure.Button>
        </div>
        <Disclosure.Panel>
          <Menu as="nav" className="top-0 left-0 right-0">
            <div className="relative">
                <Menu.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <Link to="/">Home</Link>
                </Menu.Button>

                <Menu.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" onClick={() => handleOpenMenu(0)}>
                  <span>About Us</span>
                  <ChevronDownIcon className="h-5 w-5 text-purple-500" aria-hidden="true" />
                </Menu.Button>
            {isOpen === 0 && (
            <Menu.Items className="absolute right-0 w-full bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-4 py-2 text-sm text-gray-500">
                {about_us_links && about_us_links.map((link) => {
                  return (
                    <Menu.Item key={link.name}>
                      {({ active, close }) => (
                        <Link to={link.href} className={`block ${active ? 'bg-purple-100 text-purple-900' : 'text-gray-900'}`} onClick={close}>
                          {link.name}
                        </Link>
                      )}
                    </Menu.Item>
                  )
                })}
              </div>
            </Menu.Items>
            )}

            <Menu.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" onClick={() => handleOpenMenu(1)}>
              <span>Patient</span>
              <ChevronDownIcon className="h-5 w-5 text-purple-500" aria-hidden="true" />
            </Menu.Button>
            {isOpen === 1 && (
            <Menu.Items className="absolute right-0 w-full bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-4 py-2 text-sm text-gray-500">
                {patient_links && patient_links.map((link) => {
                  return (
                    <Menu.Item key={link.name}>
                      {({ active }) => (
                        <Link to={link.href} className={`block ${active ? 'bg-purple-100 text-purple-900' : 'text-gray-900'}`}>
                          {link.name}
                        </Link>
                      )}
                    </Menu.Item>
                  )
                })}
              </div>
            </Menu.Items>
            )}

            <Menu.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" onClick={() => handleOpenMenu(2)}>
              <span>Treatments</span>
              <ChevronDownIcon className="h-5 w-5 text-purple-500" aria-hidden="true" />
            </Menu.Button>
            {isOpen === 2 && (
            <Menu.Items className="absolute right-0 w-full bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-4 py-2 text-sm text-gray-500">
                {treatments_links && treatments_links.map((link) => {
                  return (
                    <Menu.Item key={link.name}>
                      {({ active }) => (
                        <Link to={link.href} className={`block ${active ? 'bg-purple-100 text-purple-900' : 'text-gray-900'}`}>
                          {link.name}
                        </Link>
                      )}
                    </Menu.Item>
                  )
                })}
              </div>
            </Menu.Items>
            )}

            <Menu.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <Link to="/patient-login">Patient Login</Link>
            </Menu.Button>

            <Menu.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <Link to="/our-locations">Our Locations</Link>
            </Menu.Button>

            <Menu.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <Link to="/book-now">Book Now</Link>
            </Menu.Button>

            </div>
          </Menu>
        </Disclosure.Panel>
        </>
    )}
    </Disclosure>
  );
};

export default MobileNav;