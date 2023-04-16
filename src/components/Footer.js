import React from "react";

const Footer = () => {
  return (
    <div className="bg-f7f5f2 py-10">
      <div className="container mx-auto flex flex-wrap"></div>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
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
  <section className="flex flex-col">
    <div className="flex space-x-4">
    <span className="border-2 border-slate-500 rounded-full p-2">
      <a className="hover:text-indigo-500" href="http://www.facebook.com" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      </a>
    </span>
    <span className="border-2 border-slate-500 rounded-full p-2">
      <a className="hover:text-indigo-500" href="http://www.instagram.com" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
      </a>
    </span>
    </div>
    <div>
  <p className = "text-sm py-1">©Copyright FreySmiles 2023 - All Rights Reserved</p>
  </div>
  </section>
  </div>
  )
};

export default Footer;