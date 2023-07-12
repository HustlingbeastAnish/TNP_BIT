import React, { useState, useEffect } from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
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
  const [flag, setflag] = useState(false);
  const [Tasks, setTasks] = useState({});
  const [curr_task, setcurr_task] = useState("");
  useEffect(() => {
    if (Object.keys(Tasks).length > 0) {
      setflag(true);
      console.log(Tasks);
    } else {
      setflag(false);
    }
  }, [Tasks, curr_date]);

  useEffect(() => {
    // Retrieve tasks from local storage or initialize with empty object
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks.length > 0) {
      setTasks(JSON.parse(storedTasks));
      setflag(true);
    } else {
      setTasks({});
      setflag(false);
    }
  }, []);
  const addTask = (task) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      if (updatedTasks[curr_date]) {
        // Check if the task already exists for the current date
        if (!updatedTasks[curr_date].includes(task)) {
          updatedTasks[curr_date].push(task);
        }
      } else {
        updatedTasks[curr_date] = [task];
      }
      return updatedTasks;
    });
  };
  useEffect(() => {
    // Save tasks to local storage whenever it changes
    localStorage.setItem("tasks", JSON.stringify(Tasks));
  }, [Tasks]);
  return (
    <div className="bg-gray-900 h-auto">
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
            <div className="flex flex-row">
              <div className="m-2">
                <button
                  onClick={(e) => {
                    if (e.target.value.trim() !== "") {
                      addTask(e.target.value.trim());
                      e.target.value = "";
                    }
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    size="xl"
                    style={{ color: "#ffffff" }}
                  />
                </button>
              </div>
              <div>
                <input
                  type="text"
                  id="tasks"
                  name="tasks"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Add your tasks"
                  required
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim() !== "") {
                      addTask(e.target.value.trim());
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {flag ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-center pb-4"></div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                    Tasks
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(Tasks).map(([date, tasks]) =>
                  tasks.map((task, index) => (
                    <tr key={`${date}-${index}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-200">
                          {task}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-200">
                          <FontAwesomeIcon icon={faCircleMinus} size="xl" />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                  Add Events / Tasks
                </p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                  Organize your events and tasks like a pro
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default TaskList;
