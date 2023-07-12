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
            indexAxis: "x", // Set the indexAxis to 'y' to make the bars horizontal
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
      <div>
        <h2>Percentage of Student Place</h2>
      </div>
    </div>
  );
}

export default Stats;
