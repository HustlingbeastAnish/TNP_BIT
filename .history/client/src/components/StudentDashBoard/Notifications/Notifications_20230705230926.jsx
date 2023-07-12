import React, { useState, useEffect } from "react";
import axios from "axios";
const Notifications = () => {
  const [selectedFilter, setSelectedFilter] = useState("Last 30 days");

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };
  const [Arr, setArr] = useState([{}]);
  const fetchJobs = () => {
    axios
      .get(
        `https://api.adzuna.com/v1/api/jobs/in/search/1?&results_per_page=20&content-type=application/json&app_id=24852f12&app_key=c93fe974f8009e5341efb9e2ce97e08f&what=&where=`
      )
      .then((res) => {
        if (res.data.results) {
          setArr(res.data.results);
          setflag(true);
        } else {
          window.alert("Please Enter valid credentials");
        }
      })
      .catch((err) => {
        window.alert("Please enter valid Location");
        console.log(err);
      });
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="bg-gray-900 h-screen">
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
            </tr>
          </thead>
          <tbody>
            {Arr.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    id={`checkbox${index}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-200">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {item.description}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notifications;
