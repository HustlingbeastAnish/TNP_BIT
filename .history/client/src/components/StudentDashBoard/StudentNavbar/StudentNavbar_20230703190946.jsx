import React, { useState } from "react";
import { Link } from "react-router-dom";

function StudentNavbar() {
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <Link
              to="/studentDashBoard/profile"
              className={`inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                activeMenuItem === "profile"
                  ? "text-blue-600 border-blue-600 underline"
                  : ""
              }`}
              onClick={() => handleMenuItemClick("profile")}
            >
              <svg
                aria-hidden="true"
                className={`w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 ${
                  activeMenuItem === "profile"
                    ? "text-blue-600 dark:text-blue-500"
                    : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG path */}
              </svg>
              Profile
            </Link>
          </li>
          <li className="mr-2">
            <Link
              to="/studentDashBoard"
              className={`inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                activeMenuItem === "dashboard"
                  ? "text-blue-600 border-blue-600 underline"
                  : ""
              }`}
              onClick={() => handleMenuItemClick("dashboard")}
            >
              <svg
                aria-hidden="true"
                className={`w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 ${
                  activeMenuItem === "dashboard"
                    ? "text-blue-600 dark:text-blue-500"
                    : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG path */}
              </svg>
              Dashboard
            </Link>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className={`inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                activeMenuItem === "settings"
                  ? "text-blue-600 border-blue-600 underline"
                  : ""
              }`}
              onClick={() => handleMenuItemClick("settings")}
            >
              <svg
                aria-hidden="true"
                className={`w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 ${
                  activeMenuItem === "settings"
                    ? "text-blue-600 dark:text-blue-500"
                    : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG path */}
              </svg>
              Settings
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className={`inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                activeMenuItem === "contacts"
                  ? "text-blue-600 border-blue-600 underline"
                  : ""
              }`}
              onClick={() => handleMenuItemClick("contacts")}
            >
              <svg
                aria-hidden="true"
                className={`w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 ${
                  activeMenuItem === "contacts"
                    ? "text-blue-600 dark:text-blue-500"
                    : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG path */}
              </svg>
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StudentNavbar;
