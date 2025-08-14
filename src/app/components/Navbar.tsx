"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/60 backdrop-blur-md sticky top-0 z-50 px-7 ">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center text-sm">
          <a
            href="/"
            className="text-lg font-medium justify-center flex items-center space-x-2 text-gray-800"
          >
            <img src="../logo_solid.svg" alt="Logo" className="h-6 m-3" />
            Krupali Patel
          </a>

          <div className="hidden md:flex space-x-6">
            <a
              href="/"
              className="text-gray-500 hover:text-[var(--primary-color)] font-medium"
            >
              HOME
            </a>
            <a
              href="/about-me"
              className="text-gray-500  hover:text-[var(--primary-color)] font-medium"
            >
              ABOUT ME
            </a>
            <a
              href="/all-projects"
              className="text-gray-500 hover:text-[var(--primary-color)] font-medium"
            >
              PROJECTS
            </a>
            <a
              href="/contact"
              className="text-gray-500 hover:text-[var(--primary-color)] font-medium"
            >
              CONTACT
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[var(--primary-color)] font-medium"
            >
              RESUME
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/80 backdrop-blur-md shadow">
          <a
            href="#"
            className="block text-gray-700 hover:text-[var(--primary-color)]"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-[var(--primary-color)]"
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-[var(--primary-color)]"
          >
            Projects
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-[var(--primary-color)]"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
