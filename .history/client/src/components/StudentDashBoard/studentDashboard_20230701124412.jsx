import React, { useState } from "react";

function StudentDashboard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [bottom_width, setbottom_width] = useState(60);
  const openDrawer = () => {
    setIsDrawerOpen(true);
    setbottom_width(500);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <div
          id="drawer-swipe"
          className={`fixed z-40 w-full overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform bottom-0 left-0 right-0 translate-y-full bottom-${bottom_wdith}px`}
          tabIndex="-1"
          aria-labelledby="drawer-swipe-label"
        >
          <div
            className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
            data-drawer-toggle="drawer-swipe"
          >
            <button onClick={openDrawer}>
              <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
            </button>
            <h5
              id="drawer-swipe-label"
              className="inline-flex items-center text-base text-gray-500 dark:text-gray-400"
            >
              <svg
                className="w-5 h-5 mr-2"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
              </svg>
              Add widget
            </h5>
          </div>
          <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4">
            <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center justify-center mb-2 text-gray-500 dark:text-gray-400">
                <svg
                  className="w-8 h-8"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2C5.03 2 1 6.03 1 11c0 1.91.5 3.68 1.38 5.22.3.45.7.88 1.18 1.26L10 21l6.45-3.52c.48-.38.88-.81 1.18-1.26C18.5 14.68 19 12.91 19 11c0-4.97-4.03-9-9-9zm-1 4.17a4.002 4.002 0 013.54 6.02l3.72 3.72L17.65 15 16 13.35l-3.72-3.72a4.002 4.002 0 01-6.02-3.54zm2 4.53a2 2 0 102.55 2.55l-2.55-2.55zm-4.76-.78a3.98 3.98 0 014.22-4.22l-4.22 4.22zm1.41-1.41L6 7.59l4.22-4.22A3.98 3.98 0 017.65 9.11zM10 16a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h6 className="text-sm font-medium text-gray-900 dark:text-white">
                Chart
              </h6>
            </div>
            <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center justify-center mb-2 text-gray-500 dark:text-gray-400">
                <svg
                  className="w-8 h-8"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2C5.03 2 1 6.03 1 11c0 1.91.5 3.68 1.38 5.22.3.45.7.88 1.18 1.26L10 21l6.45-3.52c.48-.38.88-.81 1.18-1.26C18.5 14.68 19 12.91 19 11c0-4.97-4.03-9-9-9zm-1 4.17a4.002 4.002 0 013.54 6.02l3.72 3.72L17.65 15 16 13.35l-3.72-3.72a4.002 4.002 0 01-6.02-3.54zm2 4.53a2 2 0 102.55 2.55l-2.55-2.55zm-4.76-.78a3.98 3.98 0 014.22-4.22l-4.22 4.22zm1.41-1.41L6 7.59l4.22-4.22A3.98 3.98 0 017.65 9.11zM10 16a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h6 className="text-sm font-medium text-gray-900 dark:text-white">
                Graph
              </h6>
            </div>
            <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center justify-center mb-2 text-gray-500 dark:text-gray-400">
                <svg
                  className="w-8 h-8"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3.75A2.75 2.75 0 015.75 1h8.5A2.75 2.75 0 0117 3.75v4.5a.75.75 0 01-1.5 0v-4.5a1.25 1.25 0 00-1.25-1.25h-8.5A1.25 1.25 0 003 3.75v11.5c0 .689.561 1.25 1.25 1.25h8.5c.689 0 1.25-.561 1.25-1.25v-4.5a.75.75 0 011.5 0v4.5A2.75 2.75 0 0114.25 19h-8.5A2.75 2.75 0 013 16.25v-11.5zM12 6a1 1 0 100-2 1 1 0 000 2zM6 6a1 1 0 100-2 1 1 0 000 2zM6 10a1 1 0 100-2 1 1 0 000 2zM12 10a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h6 className="text-sm font-medium text-gray-900 dark:text-white">
                Table
              </h6>
            </div>
            <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center justify-center mb-2 text-gray-500 dark:text-gray-400">
                <svg
                  className="w-8 h-8"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.06 1a4.95 4.95 0 014.9 5.5l-.15 1.55A6 6 0 0118 13.13V15a5 5 0 11-10 0v-1.88c0-1.44.6-2.82 1.66-3.82l.94-.9V6a5 5 0 015-5zm2.9 5.5a2.95 2.95 0 00-2.9-3.25V3a3 3 0 00-6 0v.25A2.95 2.95 0 004.04 6L4 6.12V6a4 4 0 118 0v.12l-.04-.02zM5 6v-.13A2.95 2.95 0 017.04 3.5L7 3.38V6a3 3 0 01-6 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h6 className="text-sm font-medium text-gray-900 dark:text-white">
                List
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
