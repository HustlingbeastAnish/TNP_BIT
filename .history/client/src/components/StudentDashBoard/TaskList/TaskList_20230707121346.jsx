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
              Full Name
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
      </div>
    </div>
  );
};

export default TaskList;
