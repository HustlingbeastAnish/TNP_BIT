import React, { useState } from "react";

const Notifications = () => {
  const [selectedFilter, setSelectedFilter] = useState("Last 30 days");

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <div className="bg-gray-900 h-screen">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-4">
          <div>
            <button
              id="dropdownRadioButton"
              data-dropdown-toggle="dropdownRadio"
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <svg
                className="w-4 h-4 mr-2 text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {selectedFilter}
              <svg
                className="w-3 h-3 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownRadio"
              className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="top"
              style={{
                position: "absolute",
                inset: "auto auto 0px 0px",
                margin: "0px",
                transform: "translate3d(522.5px, 3847.5px, 0px)",
              }}
            >
              <ul
                className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioButton"
              >
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="filter-radio-example-1"
                      type="radio"
                      value="Last day"
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-700"
                      checked={selectedFilter === "Last day"}
                      onChange={handleFilterChange}
                    />
                    <label
                      htmlFor="filter-radio-example-1"
                      className="ml-3 text-gray-900 dark:text-gray-200"
                    >
                      Last day
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="filter-radio-example-2"
                      type="radio"
                      value="Last 7 days"
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-700"
                      checked={selectedFilter === "Last 7 days"}
                      onChange={handleFilterChange}
                    />
                    <label
                      htmlFor="filter-radio-example-2"
                      className="ml-3 text-gray-900 dark:text-gray-200"
                    >
                      Last 7 days
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="filter-radio-example-3"
                      type="radio"
                      value="Last 30 days"
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-700"
                      checked={selectedFilter === "Last 30 days"}
                      onChange={handleFilterChange}
                    />
                    <label
                      htmlFor="filter-radio-example-3"
                      className="ml-3 text-gray-900 dark:text-gray-200"
                    >
                      Last 30 days
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <input
              id="searchInput"
              type="text"
              placeholder="Search"
              className="block w-64 px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-gray-700"
            />
            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 ml-4 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mark as Read
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notification
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  id="checkbox1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-200">
                  New message received
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  You have a new message from John Doe.
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  id="checkbox2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-200">
                  New friend request
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  You have a new friend request from Jane Doe.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notifications;
