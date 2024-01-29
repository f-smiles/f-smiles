import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-d4cdc0 pt-12 pb-24 mt-auto">
      <div className="flex flex-wrap max-w-screen-xl mx-auto">
        <div className="w-full mb-6 sm:w-1/4">
          <Link
            to="/"
          >
            <h1 className="text-sm">Home</h1>
          </Link>
          <Link
            to="/our-team"
          >
            <h1 className="text-sm">Our Team</h1>
          </Link>
          <Link
            to="/invisalign"
          >
            <h1 className="text-sm">Invisalign</h1>
          </Link>
          <Link
            to="/braces"
          >
            <h1 className="text-sm">Braces</h1>
          </Link>
        </div>
        <div className="w-full mb-6 sm:w-1/4">
          <Link
            to="/careers"
          >
            <h1 className="text-sm">Careers</h1>
          </Link>
          <Link
            to="https://my.orthoblink.com/bLink/Login"
          >
            <h1 className="text-sm">Patient Login</h1>
          </Link>
        </div>
        <div className="w-full mb-6 sm:w-1/4">
          <Link
            to="/"
          >
            <h1 className="text-sm">Anti-Spam Policy</h1>
          </Link>
          <Link
            to="/"
          >
            <h1 className="text-sm">Privacy Policy</h1>
          </Link>
          <Link
            to="/"
          >
            <h1 className="text-sm">Statement of Accessibility</h1>
          </Link>
        </div>
        <div className="w-full sm:w-1/4">
          <span className="flex gap-6 mb-6 ">
            <Link href="http://www.facebook.com" target="_blank">
              <Facebook/>
            </Link>
            <Link
              className="hover:text-indigo-500"
              href="http://www.instagram.com"
              target="_blank"
            >
              <Instagram/>
            </Link>
          </span>
          <p className="mt-4 text-sm">
            Copyright &copy; 2023 FreySmiles Orthodontics
          </p>
        </div>
      </div>
    </footer>
  );
}
