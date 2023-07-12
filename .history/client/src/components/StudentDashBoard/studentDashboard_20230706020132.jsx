import React, { useState, useContext, useEffect } from "react";

import Notifications from "./Notifications/Notifications";

import BottomDrawer from "./BottomDrawer/BottomDrawer";
import StudentNavbar from "./StudentNavbar/StudentNavbar";
import { StudentContext } from "../../../../LoginContext/StudentContext";
function StudentDashboard() {
  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <div>
          <StudentNavbar />
        </div>
        <div>
          <section class="bg-gray-50 dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
              <div class="flex flex-col justify-center">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  We invest in the world’s potential
                </h1>
                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                  Here at Flowbite we focus on markets where technology,
                  innovation, and capital can unlock long-term value and drive
                  economic growth.
                </p>
                <a
                  href="#"
                  class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                >
                  Read more about our app
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div></div>
            </div>
          </section>
        </div>
        <div>
          <BottomDrawer />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
