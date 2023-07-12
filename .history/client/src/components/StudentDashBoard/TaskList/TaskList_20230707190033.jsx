import React, { useEffect } from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import useState from "react-usestateref";
const TaskList = () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const d = today.getDay();
  const yy = today.getFullYear();
  const curr_date = `${dd}/${mm}/${yy}`;
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
  const [flag, setFlag, flagRef] = useState(true);
  const [tasks, setTasks, tasksRef] = useState([]);
  const [curr_task, setCurrTask, curr_taskRef] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    // localStorage.setItem("tasks", JSON.stringify(tasks));
    setFlag(tasksRef.current.length > 0);
  }, [tasks]);

  const handleChange = (e) => {
    setCurrTask(e.target.value);
  };

  const addTask = () => {
    if (curr_task) {
      const currentTime = new Date().toLocaleTimeString();
      const key = `${curr_date} ${currentTime}`;
      const updatedTasks = [...tasks, { id: key, task: curr_task }];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(tasksRef.current));
      setFlag(tasksRef.current.length > 0);
      setCurrTask("");

      console.log(tasksRef.current);
    }
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(tasksRef.current));
    setFlag(tasksRef.current.length > 0);
  };
  return (
    <div className="bg-gray-900 h-auto">
      <div>
        <StudentNavbar />
      </div>
      <div className="flex justify-center flex-col items-center m-6">
        <h2 className="text-white text-3xl font-extrabold text-center">
          My day
        </h2>
        <div className="flex flex-row justify-center items-center m-6">
          <span className="bg-blue-100 m-2 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {curr_day}
          </span>
          <span className="bg-green-100 text-green-800 text-xs text font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            {curr_date}
          </span>
        </div>
        <div>
          <div className="m-2">
            <div className="flex flex-row">
              <div className="m-2">
                <button onClick={addTask}>
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
                  value={curr_task}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {flag ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-center pb-4"></div>
            <table className="w-full min-w-full divide-y divide-gray-200">
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
                {tasks.map((elem) => (
                  <tr key={elem.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis max-w-96">
                        {elem.task}
                      </div>
                      <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                        {elem.id.split(" ")[1]}
                      </span>
                      <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                        {elem.id.split(" ")[0]}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className="text-sm font-medium flex justify-center items-center text-gray-900 dark:text-gray-200"
                        onClick={() => removeTask(elem.id)}
                      >
                        <FontAwesomeIcon icon={faCircleMinus} size="xl" />
                      </div>
                    </td>
                  </tr>
                ))}
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
