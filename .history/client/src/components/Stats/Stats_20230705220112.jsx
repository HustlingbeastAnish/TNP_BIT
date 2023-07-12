import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Bar, Line, Pie } from "react-chartjs-2";
function Stats() {
  const [year, setyear] = useState(2022);
  const data_2022 = [
    {
      label: "Median",
      fillColor: "blue",
      data: [8.95, 8.1, 7.5, 6.5, 16.0, 8.13, 11.0, 16.0, 8.01, 7.5],
    },
    {
      label: "Average",
      fillColor: "#FFA500",
      data: [9.49, 8.44, 7.64, 7.09, 19.28, 11.91, 13.3, 20.59, 8.06, 7.52],
    },
    {
      label: "Highest",
      fillColor: "gray",
      data: [
        11.85, 12.85, 12.85, 11.0, 58.34, 29.25, 58.53, 58.53, 15.0, 12.85,
      ],
    },
  ];
  const data_2021 = [
    {
      label: "Median",
      fillColor: "blue",
      data: [8.95, 8.1, 7.5, 6.5, 16.0, 8.13, 11.0, 16.0, 8.01, 7.5],
    },
    {
      label: "Average",
      fillColor: "#FFA500",
      data: [9.49, 8.44, 7.64, 7.09, 19.28, 11.91, 13.3, 20.59, 8.06, 7.52],
    },
    {
      label: "Highest",
      fillColor: "gray",
      data: [
        11.85, 12.85, 12.85, 11.0, 58.34, 29.25, 58.53, 58.53, 15.0, 12.85,
      ],
    },
  ];
  var placementData = {
    labels: [
      "BT",
      "CHEMICAL",
      "CHEMICAL(P&P)",
      "CIVIL",
      "CSE",
      "EE",
      "ECE",
      "IT",
      "MECH",
      "PROD",
    ],
    datasets: data_2022,
  };

  const handleYear = (e) => {
    setyear(e.target.value);
  };
  return (
    <div className="flex justify-center flex-col items-center bg-gray-900">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Placement Stats
        </span>{" "}
        {year}
      </h1>
      <div class="w-full p-4 text-center bg-white border border-gray-200 flex flex-row rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Work fast from anywhere
          </h5>
        </div>
        <div>
          <FormControl fullWidth>
            <Select
              style={{
                borderRadius: "8px",
                height: "42px",
                color: "white",
              }}
              className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              name="branch"
              label="Branches"
              onChange={handleYear}
            >
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
            </Select>
          </FormControl>
        </div>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Stay up to date and move work forward with Flowbite on iOS & Android.
          Download the app today.
        </p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              class="mr-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="apple"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              ></path>
            </svg>
            <div class="text-left">
              <div class="mb-1 text-xs">Download on the</div>
              <div class="-mt-1 font-sans text-sm font-semibold">
                Mac App Store
              </div>
            </div>
          </a>
          <a
            href="#"
            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              class="mr-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google-play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              ></path>
            </svg>
            <div class="text-left">
              <div class="mb-1 text-xs">Get in on</div>
              <div class="-mt-1 font-sans text-sm font-semibold">
                Google Play
              </div>
            </div>
          </a>
        </div>
      </div>
      <div>
        <Bar
          data={placementData}
          options={{
            plugins: {
              legend: {
                labels: {
                  font: {
                    size: 12,
                  },
                },
              },
            },
            indexAxis: "x", // Set the indexAxis to 'x' to make the bars horizontal
            layout: {
              padding: {
                left: 50, // Adjust the left padding to make the graph narrower
                right: 20, // Adjust the right padding
                top: 20, // Adjust the top padding
                bottom: 50, // Adjust the bottom padding to make the graph shorter
              },
            },
            scales: {
              x: {
                maxBarThickness: 50, // Adjust the maximum bar thickness (width)
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Stats;
