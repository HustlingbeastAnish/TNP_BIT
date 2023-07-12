import React, { useState } from "react";

function StudentDashboard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [bottomWidth, setBottomWidth] = useState(60);

  const openDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setBottomWidth(bottomWidth === 350 ? 60 : 350);
  };

  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <div
          id="drawer-swipe"
          className={`fixed z-40 w-full overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform bottom-0 left-0 right-0 translate-y-full bottom-${bottomWidth}px`}
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
            <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
              <div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                <svg
                  className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 011-1h4a1 1 0 010 2H8a1 1 0 01-1-1zm2 3a1 1 0 100 2h2a1 1 0 100-2h-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Widget 1
              </p>
            </div>
            <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
              <div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                <svg
                  className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 011-1h4a1 1 0 010 2H8a1 1 0 01-1-1zm2 3a1 1 0 100 2h2a1 1 0 100-2h-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Widget 2
              </p>
            </div>
            <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
              <div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                <svg
                  className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 011-1h4a1 1 0 010 2H8a1 1 0 01-1-1zm2 3a1 1 0 100 2h2a1 1 0 100-2h-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Widget 3
              </p>
            </div>
            <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
              <div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                <svg
                  className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 011-1h4a1 1 0 010 2H8a1 1 0 01-1-1zm2 3a1 1 0 100 2h2a1 1 0 100-2h-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Widget 4
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
