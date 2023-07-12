import React, { useState, useContext, useEffect } from "react";
import Notifications from "./Notifications/Notifications";
import BottomDrawer from "./BottomDrawer/BottomDrawer";
import StudentNavbar from "./StudentNavbar/StudentNavbar";
import { StudentContext } from "../../../../LoginContext/StudentContext";
function StudentDashboard() {
  const context = useContext(StudentContext);
  const storedData = localStorage.getItem("studentUser");
  const parsedData = JSON.parse(storedData);
  useEffect(() => {
    context.setuser(parsedData);
    console.log(parsedData);
  }, []);
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
