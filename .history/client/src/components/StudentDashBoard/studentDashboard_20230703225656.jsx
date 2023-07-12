import React, { useState, useContext } from "react";
import Notifications from "./Notifications/Notifications";
import BottomDrawer from "./BottomDrawer/BottomDrawer";
import StudentNavbar from "./StudentNavbar/StudentNavbar";
function StudentDashboard() {
  const storedData = localStorage.getItem("studentUser");
  const parsedData = JSON.parse(storedData);
  console.log(parsedData.emailExists.name);
  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <div>
          <StudentNavbar />
        </div>
        <div className="mt-5">
          <Notifications />
        </div>
        <div>
          <BottomDrawer />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
