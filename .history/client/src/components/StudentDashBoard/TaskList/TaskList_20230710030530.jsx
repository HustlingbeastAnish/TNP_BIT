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
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const curr_day = arr[d];
  console.log(d);
  const [flag, setFlag, flagRef] = useState(false);
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
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setTableFixed(false);
      } else {
        setTableFixed(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="h-screen bg-gray-900">
      <div>
        <StudentNavbar />
      </div>
      <div className="flex flex-col m-2 justify-center items-center">
        <h2 className="text-white text-6xl font-extrabold text-center">
          My day
        </h2>
        <div className="flex flex-row justify-around items-center m-2">
          <span className="bg-blue-100 m-2 text-blue-800 text-xl font-medium mr-2 px-5 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {curr_day}
          </span>
          <span className="bg-green-100 text-green-800 text-xl font-medium mr-2 px-5 py-2 rounded-full dark:bg-green-900 dark:text-green-300">
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
                  style={{ width: "100%" }}
                  value={curr_task}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {flag ? (
          <div className="relative shadow-md sm:rounded-lg">
            <div className="flex items-center justify-center pb-4"></div>
            <div
              className={`overflow-x-auto ${
                isTableFixedt ? "table-fixed" : ""
              }`}
            >
              <table className="w-full">
                <colgroup>
                  <col style={{ width: "10%" }} />
                  <col style={{ width: "60%" }} />
                  <col style={{ width: "10%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs md:text-sm lg:text-sm font-medium text-black uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs md:text-sm lg:text-sm font-medium text-black uppercase tracking-wider">
                      Tasks
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs md:text-sm lg:text-sm font-medium text-black uppercase tracking-wider">
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
                      <td className="px-6 py-4 whitespace-wrap">
                        <div className="text-sm md:text-base lg:text-base font-medium text-gray-900 dark:text-gray-200 max-w-96 break-all">
                          {elem.task}
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs md:text-sm lg:text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                          {elem.id.split(" ")[1]}
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs md:text-sm lg:text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                          {elem.id.split(" ")[0]}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div
                          className="text-sm md:text-base lg:text-base font-medium text-gray-900 dark:text-gray-200"
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
          </div>
        ) : (
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <p className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Add Events / Tasks
                </p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                  "Seize the day, one task at a time!"
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
