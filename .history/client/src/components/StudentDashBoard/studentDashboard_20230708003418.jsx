import React from "react";
import StudentNavbar from "./StudentNavbar/StudentNavbar";
import BottomDrawer from "./BottomDrawer/BottomDrawer";
import Profile from "./svgs/profile";
function StudentDashboard() {
  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <div>
          <StudentNavbar />
        </div>
        <div>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 flex flex-col items-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
              Welcome to the Placement Portal of BIT MESRA
            </h1>
            <div className="flex justify-between w-full mt-8">
              <div className="flex flex-col items-center">
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                  Before moving on, we would advise you to download the SOP and
                  read it properly.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                  onClick={() =>
                    (window.location.href = "https://tp.bitmesra.co.in/SOP.pdf")
                  }
                >
                  <svg
                    className="w-3 h-3 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                  Download SOP
                </button>
              </div>
              <div className="flex flex-col items-center">
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                  Amidst the placement and intern season if you miss your
                  college classes make sure you use the form below
                </p>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                  onClick={() =>
                    (window.location.href =
                      "https://tp.bitmesra.co.in/Attendance%20Template%20for%20Students.pdf")
                  }
                >
                  <svg
                    className="w-3 h-3 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                  Download Attendance Form
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-10">
          <ol class="items-center sm:flex">
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <div className="flex justify-around items-center">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Complete Profile
                  </h3>
                  <div>
                    <Profile />
                  </div>
                </div>
                <time class="block mb-2 text-sm text-center font-normal leading-none text-gray-400 dark:text-gray-500">
                  Complete Academic Section
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements.
                </p>
              </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Library v1.2.0
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on December 23, 2021
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements.
                </p>
              </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Library v1.3.0
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on January 5, 2022
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div>
          <BottomDrawer />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
