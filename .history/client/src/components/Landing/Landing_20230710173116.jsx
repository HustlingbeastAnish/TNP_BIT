import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import studlogo from "../../assets/svgs/student-medium-skin-tone-svgrepo-com.svg";
import recruiterlogo from "../../assets/svgs/job-svgrepo-com.svg";
import { StudentContext } from "../../../LoginContext/StudentContext";
import bitmesrabg from "./images/bitmesrabg.jpg";
const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const context = useContext(StudentContext);
  useEffect(() => {}, [context.user]);

  return (
    <>
      <Navbar />
      {isModalOpen && (
        <div
          id="crypto-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full overflow-x-hidden overflow-y-auto bg-gray-500 bg-opacity-50"
        >
          <div className="bg-black rounded-lg shadow-lg dark:bg-gray-700 w-96">
            <button
              type="button"
              onClick={handleModalToggle}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <div className="px-6 py-4 flex flex-col justify-center items-center p-3">
              <div className="text-xl font-semibold text-gray-900 dark:text-white">
                Choose your Domain
              </div>
              <div className="mt-4">
                <p className="text-base text-gray-600  font-semibold dark:text-gray-400">
                  Login using the options below:
                </p>
              </div>
            </div>

            <div className="px-6 pt-4 pb-2 m-4">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={studlogo}
                  alt="Student Logo"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <div className="flex flex-row">
                  <Link to="/loginstudent">
                    <button
                      type="button"
                      className="px-4 py-1.5 font-semibold text-gray-200 bg-gray-800 rounded-lg hover:bg-gray-900 mr-2"
                    >
                      Login As Student
                    </button>
                  </Link>
                  <Link to="/registerstudent">
                    <button
                      type="button"
                      className="px-4 py-1.5 font-semibold text-gray-200 bg-gray-800 rounded-lg hover:bg-gray-900"
                    >
                      Register As Student
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="px-6 pt-4 pb-2 m-4">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={recruiterlogo}
                  alt="Recruiter Logo"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <Link to="/loginrecruiter">
                  <button
                    type="button"
                    className="px-4 py-2 font-semibold text-gray-200 bg-gray-800 rounded-lg hover:bg-gray-900"
                  >
                    Login As Recruiter
                  </button>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      )}
      <section
        className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply"
        style={{
          backgroundImage: `url(${bitmesrabg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            One Stop Portal for Students
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Welcome to the recruitment website For BIT MESRA. BIT MESRA is
            India's foremost industrial leadership development institution. Our
            Graduates are a combination of rigorous thinking, hardwork and
            fundamental stronghold. They are nurtured by the institute to strive
            for excellence and deliver impact in their field of work.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            {context.user ? (
              <a
                // onClick={handleModalToggle}
                href="/studentDashBoard"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Go To DashBoard
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            ) : (
              <button
                onClick={handleModalToggle}
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Get started
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            )}
            <a
              href="https://www.bitmesra.ac.in/"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
