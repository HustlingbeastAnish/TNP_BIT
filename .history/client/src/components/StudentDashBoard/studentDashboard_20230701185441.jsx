import React, { useState } from "react";
import Notifications from "./Notifications/Notifications";
import BottomDrawer from "./BottomDrawer/BottomDrawer";
function StudentDashboard() {
  return (
    <div className="bg-gray-900 h-screen">
      <div>
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
