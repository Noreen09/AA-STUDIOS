"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2C6259] shadow-md fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2"> {/* Adjusted padding */}
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/logo.png"
            className="h-8"
            width={100}
            height={100}
            alt="AA Portfolio Logo"
          />
          <span className="self-center text-2xl font-bold text-white">
            AA Studios
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6" // Removed text-white here
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Nav Links and Buttons */}
        <div
          className={`w-full md:block md:w-auto ${isMenuOpen ? "block" : "hidden"}`} // Simplified class names
          id="navbar-cta"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:items-center"> {/* Added md:items-center */}
            <li>
              <Link href="/services" className="block py-2 px-4 text-white hover:">Services</Link>
            </li>
            <li>
              <Link href="/portfolio" className="block py-2 px-4 text-white hover:">Portfolio</Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-4 text-white hover:">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-4 text-white hover:">Contact</Link>
            </li>
            <li className="md:ml-4"> {/* Added margin left on medium screens */}
              <Link href="/contact">
                <button className="bg-white text-[#2C6259] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-green-100 focus:ring-4 focus:ring-blue-300">
                  Free Estimate
                </button>
              </Link>
            </li>
            <li>
              <Link href="/OrderNow">
                <button className="bg-white text-[#2C6259] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-green-100 focus:ring-4 focus:ring-blue-300">
                  Order Now
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;