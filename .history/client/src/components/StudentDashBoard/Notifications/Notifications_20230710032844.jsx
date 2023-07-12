import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../Loader/Loader";
const Notifications = () => {
  const [flag, setflag] = useState(false);
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
        console.log(err);
      });
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  const truncateString = (str, limit) => {
    if (!str || str.length <= limit) {
      return str;
    }

    return str.slice(0, limit).trim() + "...";
  };
  return (
    <>
 return (
    <>
      {flag ? (
        <div className="bg-gray-900 h-auto">
          <div className="overflow-x-auto">
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
                {Arr.map((item, index) => (
                  <tr key={index} className="grid grid-cols-3">
                    <td className="px-6 py-4">
                      <input
                        id={`checkbox${index}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {truncateString(item.description, 150)}
                      </div>{" "}
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={item.redirect_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white hover:underline bg-blue-600 py-2 px-4 rounded-md transition-colors duration-300 ease-in-out"
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Notifications;
