import React from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";
import Notifications from "../Notifications/Notifications";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
function Notice() {
  return (
    <div className="bg-gray-900 h-auto">
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

export default Notice;
