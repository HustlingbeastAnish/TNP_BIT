import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Image
          src={navlogo}
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
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
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <button
              id="mega-menu-dropdown-button"
              data-dropdown-toggle="mega-menu-dropdown"
              className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              onClick={toggleDropdown}
            >
              Company{" "}
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="mega-menu-dropdown"
              className={`absolute z-10 grid  w-auto ${
                isOpen ? "" : "hidden"
              } grid-cols-2 text-sm mt-7 bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700`}
            >
              <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                <ul
                  className="space-y-4"
                  aria-labelledby="mega-menu-dropdown-button"
                >
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Library
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Resources
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Pro Version
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Playground
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      License
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-4">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Support Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Stats
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
