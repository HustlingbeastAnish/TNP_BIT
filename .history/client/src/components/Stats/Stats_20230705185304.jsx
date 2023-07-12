import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function Stats() {
  const [year, setyear] = useState(2022);
  // const marksData = {
  //   labels: Object.keys(marks), // Generate labels dynamically from the properties of the marks object
  //   datasets: [
  //     {
  //       label: "Attendance Percentage",
  //       data: Object.values(marks),
  //       backgroundColor: "black",
  //       borderColor: "white",
  //     },
  //   ],
  // };

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
            // onChange={handleYear}
          >
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Stats;
