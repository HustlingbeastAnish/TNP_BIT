import React from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";

const TaskList = () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const d = today.getDay();
  const yy = today.getFullYear();
  const curr_date = dd + "/" + mm + "/" + yy;
  const arr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const curr_day = arr[d - 1];
  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <StudentNavbar />
      </div>
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-white text-3xl font-extrabold text-center">
          My day
        </h2>
        <div className="flex flex-row justify-center items-center">
          <span class="bg-blue-100 m-2 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {curr_day}
          </span>
          <span class="bg-green-100 text-green-800 text-xs text  font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            {curr_date}
          </span>
        </div>
        <div>
          <div className="m-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Add Tasks
            </label>
            <input
              type="name"
              id="name"
              name="name"
              //   value={updatedStud.name}
              //   onChange={handleEdit}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter your email"
              required
            />
          </div>{" "}
        </div>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-center pb-4">
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
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                    Mark as Read
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                    Notification
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                    Apply
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {Arr.map((item, index) => ( */}
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      // id={`checkbox${index}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-200">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {/* {truncateString(item.description, 150)} */}
                    </div>{" "}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a
                      // href={item.redirect_url}
                      target="_blank"
                      className="inline-flex items-center text-white hover:underline"
                    >
                      Apply Now
                      <svg
                        className="w-5 h-5 ml-2 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                      </svg>
                    </a>
                  </td>
                </tr>
                {/* ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
