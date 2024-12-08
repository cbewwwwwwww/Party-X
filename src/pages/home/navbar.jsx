import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-black ">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
        <a href="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Party-X Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Party-X
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <a
            href="#"
            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Log in
          </a>
          <a
            href="#"
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Get started
          </a>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
          >
            {!menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pr-4 pl-3 text-white bg-primary-700 rounded lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-blue-500"
                    : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                }
              >
                About
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/policies"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pr-4 pl-3 text-white bg-primary-700 rounded lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-blue-500"
                    : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                }
              >
                Policies
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pr-4 pl-3 text-white bg-primary-700 rounded lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-blue-500"
                    : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                }
              >
                Events
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/joinUs"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pr-4 pl-3 text-white bg-primary-700 rounded lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-blue-500"
                    : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                }
              >
                Join Us
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/contactUs"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pr-4 pl-3 text-white bg-primary-700 rounded lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-blue-500"
                    : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
