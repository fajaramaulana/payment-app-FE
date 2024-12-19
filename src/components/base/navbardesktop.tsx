"use client";
import Link from "next/link";
import { useState } from "react";

const NavbarDesktop = () => {
  const [isChildDropdownVisible, setIsChildDropdownVisible] = useState(false);
  const [isChildDropdownVisible2, setIsChildDropdownVisible2] = useState(false);

  return (
    <>
      <div className="flex items-center md:pl-10 sm:pl-5">
        <i className="fa fa-book text-xl text-[#f6f6f6] mr-2"></i>
        <Link href="#" className="ml-1 text-xl font-bold text-[#f6f6f6]">
          Learning
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-5 pr-10">
        <Link href="#" className="text-[#f6f6f6] hover:text-gray-200 uppercase">
          Home
        </Link>
        <div className="relative group">
          <button
            className="text-[#f6f6f6] hover:text-gray-200 uppercase"

            aria-label="Toggle dropdown for Chaining options"
          >
            Chaining Dropdown
          </button>
          <div
            id="dropdown-menu-first"
            className={`absolute hidden group-hover:block w-48 bg-white text-gray-700 rounded shadow-lg`}
          >
            <div className="relative">
              <button
                className="block px-4 py-2 w-full hover:bg-gray-100 hover:rounded-t-md text-left"
                id="dropdown-child-btn"
                aria-expanded={isChildDropdownVisible ? "true" : "false"} // for screen readers
                onMouseEnter={() => setIsChildDropdownVisible(true)}
                onMouseLeave={() => setIsChildDropdownVisible(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setIsChildDropdownVisible(!isChildDropdownVisible);
                  }
                }}
                aria-label="Toggle dropdown for Chaining options"
              >
                Option 1
                <div
                  className={`absolute right-full top-0 ${isChildDropdownVisible ? "block" : "hidden"} w-48 bg-white text-gray-700 rounded shadow-lg`}
                  id="dropdown-child-menu"
                >
                  <Link
                    href="#"
                    className="block px-4 py-2 w-full hover:bg-gray-100 rounded-t-md"
                  >
                    Child Option 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 w-full hover:bg-gray-100 rounded-b-md"
                  >
                    Child Option 2
                  </Link>
                </div>
              </button>
            </div>
            <Link href="#" className="block px-4 py-2 w-full hover:bg-gray-100">
              Option 2
            </Link>
            <div className="relative">
              <button
                className="block px-4 py-2 w-full hover:bg-gray-100 text-left hover:rounded-b-md"
                id="dropdown-child-btn-2"
                aria-expanded={isChildDropdownVisible2 ? "true" : "false"} // for screen readers
                onMouseEnter={() => setIsChildDropdownVisible2(true)}
                onMouseLeave={() => setIsChildDropdownVisible2(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setIsChildDropdownVisible2(!isChildDropdownVisible2);
                  }
                }}
                aria-label="Toggle dropdown for Chaining options"
              >
                Option 3
                <div
                  className={`absolute right-full top-0 ${isChildDropdownVisible2 ? "block" : "hidden"} w-48 bg-white text-gray-700 rounded shadow-lg`}
                  id="dropdown-child-menu-2"
                >
                  <Link
                    href="#"
                    className="block px-4 py-2 w-full hover:bg-gray-100 rounded-t-md"
                  >
                    Child Option 3
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 w-full hover:bg-gray-100 rounded-b-md"
                  >
                    Child Option 4
                  </Link>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="relative group">
          <button className="text-[#f6f6f6] hover:text-gray-200 uppercase">
            Dropdown
          </button>
          <div
            id="dropdown-menu-first"
            className="absolute hidden group-hover:block w-48 bg-white text-gray-700 rounded shadow-lg"
          >
            <Link
              href="#"
              className="block px-4 py-2 w-full hover:bg-gray-100 rounded-t-md"
            >
              Child Option 5
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 w-full hover:bg-gray-100 rounded-b-md"
            >
              Child Option 6
            </Link>
          </div>
        </div>
        <Link href="#" className="text-[#f6f6f6] hover:text-gray-200 uppercase">
          About
        </Link>
      </div>
    </>
  );
};

export default NavbarDesktop;
