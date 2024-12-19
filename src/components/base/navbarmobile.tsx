import Link from "next/link";
import { useState } from "react";
interface NavbarMobileProps {
  isHamburgerClicked: boolean;
  mobileMenuRef: React.RefObject<HTMLDivElement>;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  isHamburgerClicked,
  mobileMenuRef,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownChainVisible, setIsDropdownChainVisible] = useState(false);
  const [isChildDropdownChainVisible, setIsChildDropdownChainVisible] =
    useState(false);
  return (
    <div
      id="mobile-menu"
      ref={mobileMenuRef}
      className={`fixed top-0 right-0 ${
        isHamburgerClicked ? "block animate-openmenu" : "animate-closemenu"
      } md:hidden bg-darkest w-3/6 h-screen flex-col overflow-y-auto shadow-lg z-[1]`}
    >
      <div className="flex-grow">
        <p className="block py-2 px-4 tracking-wide uppercase text-lightest mt-20 border-b-2 border-gray-300">
          Menu
        </p>
        <div className="px-4 bg-darkest">
          <Link
            href="#"
            className="block py-2 capitalize tracking-wide text-lightest"
          >
            Home
          </Link>
          <Link
            href="#"
            className="block py-2 capitalize tracking-wide text-lightest"
          >
            Profile
          </Link>

          <div>
            <button
              className="py-2 w-full text-left capitalize tracking-wide flex items-center justify-between text-lightest"
              id="dropdown-chaining-btn-mobile"
              aria-expanded={isDropdownVisible ? "true" : "false"} // for screen readers
              onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            >
              Chaining Dropdown{" "}
              <span
                id="dropdown-chaining-arrow-mobile"
                className={`ml-auto transform transition-transform text-light ${
                  isDropdownVisible ? "rotate-180 " : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              id="dropdown-chaining-menu-mobile"
              className={`${
                isDropdownVisible
                  ? "block transition-all duration-300"
                  : "hidden"
              } pl-4 overflow-hidden`}
            >
              <div>
                <button
                  className="py-2 w-full text-left capitalize flex items-center justify-between text-lightest"
                  id="dropdown-child-btn-mobile"
                  aria-expanded={isChildDropdownChainVisible ? "true" : "false"} // for screen readers
                  onClick={() =>
                    setIsChildDropdownChainVisible(!isChildDropdownChainVisible)
                  }
                >
                  Option 1{" "}
                  <span
                    id="dropdown-child-arrow-mobile"
                    className={`${isChildDropdownChainVisible ? "rotate-180" : ""} ml-auto transform transition-transform text-light`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  id="dropdown-child-menu-mobile"
                  className={`${(isChildDropdownChainVisible? "block" : "hidden")} pl-4 overflow-hidden transition-transform duration-300`}
                >
                  <Link href="#" className="block py-2 text-lightest">
                    Child Option 1
                  </Link>
                </div>
              </div>
              <Link href="#" className="block py-2 text-lightest">
                Option 2
              </Link>
              <Link href="#" className="block py-2 text-lightest">
                Option 3
              </Link>
            </div>
          </div>
          <div>
            <button
              className="py-2 w-full text-left capitalize tracking-wide flex items-center justify-between text-lightest"
              id="dropdown-btn-mobile"
              aria-expanded={isDropdownChainVisible ? "true" : "false"} // for screen readers
              onClick={() => setIsDropdownChainVisible(!isDropdownChainVisible)}
            >
              Dropdown{" "}
              <span
                id="dropdown-arrow-mobile"
                className={`ml-auto transform transition-transform text-light ${isDropdownChainVisible ? "rotate-180 " : ""}`}
              >
                ▼
              </span>
            </button>
            <div
              id="dropdown-menu-mobile"
              className={`${isDropdownChainVisible ? "" : "hidden"} pl-4 overflow-hidden transition-all duration-300`}
            >
              <Link href="#" className="block py-2 text-lightest">
                Option 4
              </Link>
              <Link href="#" className="block py-2 text-lightest">
                Option 5
              </Link>
            </div>
          </div>
          <Link
            href="#"
            className="block py-2 capitalize tracking-wide text-lightest"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
