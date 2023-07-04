import React, { useState, useContext, useEffect } from "react";

import Notifications from "./Notifications/Notifications";
import BottomDrawer from "./BottomDrawer/BottomDrawer";
import StudentNavbar from "./StudentNavbar/StudentNavbar";
import { StudentContext } from "../../../../LoginContext/StudentContext";
function StudentDashboard() {
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
