"use client";
import NavbarDesktop from "./navbardesktop";
import { useState, useRef, useEffect } from "react";
import NavbarMobile from "./navbarmobile";

const NavbarResponsive = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
    setIsHamburgerClicked((prev) => !prev);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)
      ) {
        if (isHamburgerClicked) {
          setIsHamburgerClicked(false);
        }
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isHamburgerClicked]);

  return (
    <>
      <nav className="bg-[#89A8B2] fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-md">
          <div className="flex items-center justify-between h-16">
            <NavbarDesktop />
            <div className="md:hidden">
              <button
                id="hamburger"
                ref={hamburgerRef}
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  id="hamburger-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    isHamburgerClicked ? "hidden" : "block"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>

                <svg
                  id="close-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    isHamburgerClicked ? "block" : "hidden"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <NavbarMobile isHamburgerClicked={isHamburgerClicked} mobileMenuRef={mobileMenuRef}/>
    </>
  );
};

export default NavbarResponsive;
