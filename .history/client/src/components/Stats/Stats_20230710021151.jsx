import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Bar, Line, Pie } from "react-chartjs-2";

function Stats() {
  const placedata = [
    {
      2023: {
        average: 16.34,
        highest: 85.23,
      },
      2022: {
        average: 13.01,
        highest: 58.53,
      },
      2021: {
        average: 10.02,
        highest: 51.75,
      },
      2020: {
        average: 11.76,
        highest: 49.76,
      },
      2019: {
        average: 10.56,
        highest: 40.63,
      },
    },
  ];

  const data_2022 = [
    {
      label: "Median",
      backgroundColor: "blue",
      data: [8.95, 8.1, 7.5, 6.5, 16.0, 8.13, 11.0, 16.0, 8.01, 7.5],
    },
    {
      label: "Average",
      backgroundColor: "#FFA500",
      data: [9.49, 8.44, 7.64, 7.09, 19.28, 11.91, 13.3, 20.59, 8.06, 7.52],
    },
    {
      label: "Highest",
      backgroundColor: "gray",
      data: [
        11.85, 12.85, 12.85, 11.0, 58.34, 29.25, 58.53, 58.53, 15.0, 12.85,
      ],
    },
  ];

  const placementData = {
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

  const [year, setYear] = useState(2022);
  const [averagePackage, setAveragePackage] = useState(
    placedata[0][2022].average
  );
  const [highestPackage, setHighestPackage] = useState(
    placedata[0][2022].highest
  );

  const handleYear = (e) => {
    const selectedYear = parseInt(e.target.value);
    setYear(selectedYear);
    setAveragePackage(placedata[0][selectedYear].average);
    setHighestPackage(placedata[0][selectedYear].highest);
  };

  return (
    <div className="flex justify-center flex-col items-center bg-gray-900">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Placement Stats
        </span>{" "}
        {year}
      </h1>
      <div className="m-4">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Year</InputLabel>
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
            onChange={handleYear}
          >
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Average and Median Package
          </h5>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg p-4 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <div className="text-left">
              <div className="mb-1 text-xs">Average Package</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                {averagePackage} LPA
              </div>
            </div>
          </div>
          <div className="bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg p-4 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <div className="text-left">
              <div className="mb-1 text-xs">Highest Package</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                {highestPackage} LPA
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <Bar
          data={placementData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: {
                  font: {
                    size: 12,
                  },
                },
              },
            },
            scales: {
              x: {
                maxBarThickness: 50,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Stats;
