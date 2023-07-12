import React, { useState } from "react";
import Notifications from "./Notifications/Notifications";
import BottomDrawer from "./BottomDrawer/BottomDrawer";
import StudentNavbar from "./StudentNavbar/StudentNavbar";
import Cookies from "universal-cookie";
import { StudentContext } from "../../../../../LoginContext/StudentContext";
const cookies = new Cookies();
function StudentDashboard() {
  // const token = cookies.get("jwebtoken");
  // console.log(token);
  const context = useContext(StudentContext);
  console.log(context);
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
