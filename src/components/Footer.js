import React from "react";

const Footer = () => {
  return (
  <div className="bg-f7f5f2 grid grid-cols-4 gap-4 items-start absolute bottom-0 left-0 right-0 py-10">
    <div>
    <a href="/" className="text-black hover:text-indigo-500 hover:underline">
        <h1 className="text-sm font-bold">Home</h1>
      </a>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline"> <h1 className="text-sm font-bold">About Us</h1></a>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm font-bold">Contact</h1>
  </a>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm font-bold">Treatments</h1>
  </a>
  </div>
  <div>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm font-bold">Patient Info</h1>
  </a>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm font-bold">Patient Login</h1>
  </a>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm font-bold">Sitemap</h1>
  </a>
  </div>
  <div>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm font-bold">Anti-Spam Policy</h1>
  </a>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm font-bold">Privacy Policy</h1>
  </a>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm font-bold">Statement of Accessibility</h1>
  </a>
  </div>
  <div>
  <p>©Copyright FreySmiles 2023 - Braces & Invisalign in Allentown, Bethlehem, Schnecksville, & Lehighton, PA</p>
  </div>
  </div>
  )
};

export default Footer;