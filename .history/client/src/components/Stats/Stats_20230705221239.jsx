import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Bar, Line, Pie } from "react-chartjs-2";
function Stats() {
  const [year, setyear] = useState(2022);
  const placedata = [
    {
      2023: {
        average: 16.34,
        highest: 85.23,
      },
      2022: {
        average: 13.01,
        median: 9.22,
      },
      2021: {
        average: 10.02,
        median: 2023,
      },
      2020: {
        average: 2023,
        median: 2023,
      },
    },
  ];
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
      <div className="m-4">
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
      <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Average and Median Package
          </h5>
        </div>

        {/* <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Stay up to date and move work forward with Flowbite on iOS & Android.
          Download the app today.
        </p> */}
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <div class="text-left">
              <div class="mb-1 text-xs">Average Package</div>
              <div class="-mt-1 font-sans text-sm font-semibold">
                {13.01}LPA
              </div>
            </div>
          </a>
          <a
            href="#"
            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <div class="text-left">
              <div class="mb-1 text-xs">Median Package</div>
              <div class="-mt-1 font-sans text-sm font-semibold">{11.6}LPA</div>
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
