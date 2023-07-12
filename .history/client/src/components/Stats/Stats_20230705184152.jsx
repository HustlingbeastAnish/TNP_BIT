import React, { useState } from "react";

function Stats() {
  const [year, setyear] = useState(2022);
  const marksData = {
    labels: Object.keys(marks), // Generate labels dynamically from the properties of the marks object
    datasets: [
      {
        label: "Attendance Percentage",
        data: Object.values(marks),
        backgroundColor: "black",
        borderColor: "white",
      },
    ],
  };
  return (
    <div className="flex justify-center items-center bg-gray-900">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Placement Stats
        </span>{" "}
        {year}
      </h1>
      <div></div>
    </div>
  );
}

export default Stats;
