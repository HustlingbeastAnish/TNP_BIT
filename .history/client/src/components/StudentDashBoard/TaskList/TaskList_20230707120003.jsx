import React from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";

const TaskList = () => {
  const today = new Date();
  const dd = today.getDate();
  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <StudentNavbar />
      </div>
      <h2 className="text-white text-3xl font-extrabold text-center">
        This is the last list
      </h2>
    </div>
  );
};

export default TaskList;
