import React from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";

const TaskList = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <StudentNavbar />
      </div>
      <h2 className="text-white text-3xl font-extrabold">
        This is the last list
      </h2>
    </div>
  );
};

export default TaskList;
