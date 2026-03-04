"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", link: "/#about" },
    { label: "Experience", link: "/#experience" },
    { label: "Projects", link: "/projects" },
    { label: "Resume", link: "/resume" },
    { label: "Contact", link: "/#contact" },
  ];

  return (
    <nav className="relative bg-white shadow dark:bg-neutral-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold my-2 text-neutral-700 dark:text-neutral-200">
            <img src="/favicon.png" alt="Logo" className="w-8 h-8" />
            Portfolio
          </Link>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-neutral-500 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`absolute inset-x-0 z-20 w-3/5 h-screen mt-4 px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-neutral-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:h-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="my-2 text-neutral-700 transition-colors duration-300 transform dark:text-neutral-200 hover:text-stone-500 dark:hover:text-stone-400 md:mx-4 md:my-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
