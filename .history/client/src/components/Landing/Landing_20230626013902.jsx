import React from "react";

const Landing = () => {
  return (
    <section class="bg-center bg-no-repeat bg-[url('data:image/jpeg;base64,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')] bg-gray-700 bg-blend-multiply">
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          One Stop Portal for Students
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Welcome to the recruitment website For BIT MESRA. BIT MESRA is India's
          foremost industrial leadership development institution. Our Graduates
          are a combination of rigorous thinking, hardwork and fundamental
          stronghold. They are nurtured by the institute to strive for
          excellence and deliver impact in their field of work.
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              aria-hidden="true"
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;