import React, { useState } from "react";

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
          console.log(countryRef.current);
          console.log(locRef.current);
          console.log(locRef.current);
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
                  CISCO - CISCO - CISCO Pre-Placement Talk
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  CISCO is here with its PPT(Pre-Placement Talk) which will be
                  conducted on the 5th of July, from 04:45 PM to 6:15 PM.
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
                  NOTICE - DELOITTE INDIA
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  We have got new notification from Deloitte India regarding its
                  registeration for the ET&P role and the company has asked to
                  hault the registration process for sometime.
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
                  Salesforce Online Assessment (B.Tech-k21)
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Salesforce will be conducting an online assessment for Intern
                  Software Engineer. There will be an info session after which
                  the details for the online assessment will be shared in real
                  time.
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
                  CISCO - Code with Cisco | An Inclusive Code-a-thon
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  CISCO is here with its 24-hour CODE-A-THON which is open for
                  both the 2024-2025 passing out batches.
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
                  Tata Crucible Campus Quiz
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  It is to remind that the Tata Crucible Campus Quiz 2023
                  Prelims 1is scheduled to take place today from 6:30 pm
                  onwards.
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
