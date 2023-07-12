import React, { useContext } from "react";
import useState from "react-usestateref";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { StudentContext } from "../../../../LoginContext/StudentContext";
import Cookies from "js-cookie";

function StudentNavbar() {
  const context = useContext(StudentContext);
  const navigate = useNavigate();
  const [activeMenuItem, setActiveMenuItem, activeMenuItemRef] = useState("");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    activeMenuItemRef.current = menuItem;
  };

  const Logout = () => {
    localStorage.removeItem("studentUser");
    context.setUser(null);
    Cookies.remove("jwtoken");
    localStorage.removeItem("tasks");
    navigate("/");
  };

  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <Link to="/studentDashBoard/profile">
              <a
                href="#"
                className={`inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                  activeMenuItemRef.current === "profile"
                    ? "text-blue-600"
                    : "text-white"
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
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Profile
              </a>
            </Link>
          </li>
          <li className="mr-2">
            <Link to="/studentDashBoard">
              <a
                href="#"
                className={`inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                  activeMenuItemRef.current === "dashboard"
                    ? "text-blue-600"
                    : "text-white"
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
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                Dashboard
              </a>
            </Link>
          </li>
          <Link to="/studentDashBoard/tasklist">
            <div onClick={() => handleMenuItemClick("tasklist")}>
              <li className="mr-2">
                <a
                  href="#"
                  className={`inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                    activeMenuItemRef.current === "tasklist"
                      ? "text-blue-600"
                      : "text-white"
                  }`}
                >
                  <svg
                    aria-hidden="true"
                    className={`w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 ${
                      activeMenuItemRef.current === "tasklist"
                        ? "text-blue-600"
                        : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                  </svg>
                  Tasks List
                </a>
              </li>
            </div>
          </Link>
          <li className="mr-2">
            <Link to="/studentDashBoard/notice">
              <a
                href="#"
                className={`inline-flex items-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                  activeMenuItemRef.current === "notifications"
                    ? "text-blue-600"
                    : "text-white"
                }`}
                onClick={() => handleMenuItemClick("notifications")}
              >
                <FontAwesomeIcon
                  icon={faBell}
                  style={{ color: "#dfd0e2", marginRight: "8px" }}
                />
                Notifications
              </a>
            </Link>
          </li>
          <li className="ml-auto">
            <a
              href="#"
              className={`inline-flex items-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                activeMenuItemRef.current === "logout"
                  ? "text-blue-600"
                  : "text-white"
              }`}
              onClick={Logout}
            >
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StudentNavbar;
