import React from "react";

const Footer = () => {
  return (
  <div className="bg-f7f5f2 grid grid-cols-4 gap-4 items-start absolute bottom-0 left-0 right-0 py-10">
    <div>
    <a href="/" className="text-black hover:text-indigo-500 hover:underline">
        <h1 className="text-sm">Home</h1>
      </a>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline"> <h1 className="text-sm">About Us</h1></a>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm">Contact</h1>
  </a>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm">Treatments</h1>
  </a>
  </div>
  <div>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm">Patient Info</h1>
  </a>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm">Patient Login</h1>
  </a>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm">Sitemap</h1>
  </a>
  </div>
  <div>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm">Anti-Spam Policy</h1>
  </a>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm">Privacy Policy</h1>
  </a>
  <a href="/" className="text-black hover:text-indigo-500 hover:underline">
  <h1 className="text-sm">Statement of Accessibility</h1>
  </a>
  </div>
  <div>
  <p className = "text-sm">©Copyright FreySmiles 2023 - All Rights Reserved</p>
  </div>
  </div>
  )
};

export default Footer;