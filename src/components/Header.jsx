import React, { useState } from "react";
import { Link } from "react-router-dom";
import jsonData from "./constant/jsonData/navlist.json";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white poppins-regular border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-50">
      {/* Mobile Layout */}
      <div className="md:hidden max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center   text-2xl font-semibold whitespace-nowrap dark:text-white">
            VILLA
          </span>
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M1 1h15M1 13h15" : "M4 6h9M1 1h15M1 13h15"}
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden max-w-screen-xl mx-auto p-4">
          <ul className="flex flex-col space-y-4">
            {jsonData.map((value) => (
              <li key={value.id}>
                <Link
                  to={value.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  {value.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="hidden md:flex md:max-w-screen-xl md:mx-auto md:p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            VILLA
          </span>
        </a>
        <ul className="flex flex-row items-center justify-end flex-1 space-x-6">
          {jsonData.map((value) => (
            <li key={value.id}>
              <Link
                to={value.url}
                className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
              >
                {value.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
