import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Navbar />
      <button
        type="button"
        onClick={handleModalToggle}
        className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
      >
        <svg
          aria-hidden="true"
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          ></path>
        </svg>
        Get Started
      </button>

      {isModalOpen && (
        <div
          id="crypto-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50"
        >
          <div className="bg-white rounded-lg shadow-lg dark:bg-gray-700">
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

            <div className="px-6 py-4">
              <div className="text-xl font-medium text-gray-900 dark:text-white">
                Choose your Domain
              </div>
              <div className="mt-4">
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Login using the options below:
                </p>
              </div>
            </div>

            <div className="px-6 pt-4 pb-2">
              <div>
                <img
                  src={studlogo}
                  alt="Student Logo"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <button
                  type="button"
                  className="px-4 py-2 font-semibold text-gray-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                >
                  Login As Student
                </button>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div>
                <img
                  src={recruiterlogo}
                  alt="Recruiter Logo"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <button
                  type="button"
                  className="px-4 py-2 font-semibold text-gray-200 bg-gray-800 rounded-lg hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                >
                  Login As Recruiter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
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
            <Link to="/login">
              <a
                href="#"
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
              </a>
            </Link>
            <a
              href="#"
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
