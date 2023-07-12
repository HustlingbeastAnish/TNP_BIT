import React, { useState } from "react";

const Notifications = () => {
  const [selectedFilter, setSelectedFilter] = useState("Last 30 days");
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div>
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
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      checked={selectedFilter === "Last day"}
                      onChange={handleFilterChange}
                    />
                    <label htmlFor="filter-radio-example-1" className="ml-3">
                      Last day
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="filter-radio-example-2"
                      type="radio"
                      value="Last week"
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      checked={selectedFilter === "Last week"}
                      onChange={handleFilterChange}
                    />
                    <label htmlFor="filter-radio-example-2" className="ml-3">
                      Last week
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
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      checked={selectedFilter === "Last 30 days"}
                      onChange={handleFilterChange}
                    />
                    <label htmlFor="filter-radio-example-3" className="ml-3">
                      Last 30 days
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M21 21l-4.35-4.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10.5" cy="10.5" r="7.5" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Select
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Notification
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <input
                    id="notificationCheckbox1"
                    name="notificationCheckbox1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">Notification 1</div>
                <div className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <input
                    id="notificationCheckbox2"
                    name="notificationCheckbox2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">Notification 2</div>
                <div className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
