import React from "react";
import StudentNavbar from "./StudentNavbar/StudentNavbar";
import BottomDrawer from "./BottomDrawer/BottomDrawer";

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
        <div class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <time class="text-lg font-semibold text-gray-900 dark:text-white">
            January 13th, 2022
          </time>
          <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <a
                href="#"
                class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  class="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Jese Leos image"
                />
                <div class="text-gray-600 dark:text-gray-400">
                  <div class="text-base font-normal">
                    <span class="font-medium text-gray-900 dark:text-white">
                      Jese Leos
                    </span>{" "}
                    likes{" "}
                    <span class="font-medium text-gray-900 dark:text-white">
                      Bonnie Green's
                    </span>{" "}
                    post in{" "}
                    <span class="font-medium text-gray-900 dark:text-white">
                      {" "}
                      How to start with Flowbite library
                    </span>
                  </div>
                  <div class="text-sm font-normal">
                    "I wanted to share a webinar zeroheight."
                  </div>
                  <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                    <svg
                      class="w-2.5 h-2.5 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                    </svg>
                    Public
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  class="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie Green image"
                />
                <div>
                  <div class="text-base font-normal text-gray-600 dark:text-gray-400">
                    <span class="font-medium text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>{" "}
                    react to{" "}
                    <span class="font-medium text-gray-900 dark:text-white">
                      Thomas Lean's
                    </span>{" "}
                    comment
                  </div>
                  <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                    <svg
                      class="w-2.5 h-2.5 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z" />
                      <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
                      <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
                    </svg>
                    Private
                  </span>
                </div>
              </a>
            </li>
          </ol>
        </div>

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
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Library v1.0.0
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2, 2021
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

        <div>
          <BottomDrawer />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
