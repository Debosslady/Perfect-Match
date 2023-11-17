"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="bg-slate-200 text-white font-bold fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <p className="text-white text-lg">Your Logo/Brand</p>
          </Link>

          {/* Hamburger menu icon for mobile */}
          <div className="lg:hidden cursor-pointer" onClick={toggleNavbar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>

          {/* Navbar links */}
          <ul
            className={`${
              isNavbarOpen ? 'block' : 'hidden'
            } lg:flex lg:space-x-4 text-sm`}
          >
            <li>
              <Link href="/" className="mx-4">Home</Link>
            </li>
            <li>
              <Link href="/about" className="mx-4">About</Link>
            </li>
            <li>
              <Link href="/services" className="mx-4">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="mx-4">Contact</Link>
            </li>
            <li>
              <Link href="/login" className="mx-4">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

