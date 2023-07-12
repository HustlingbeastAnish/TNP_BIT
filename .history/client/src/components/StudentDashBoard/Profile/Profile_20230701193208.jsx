import React from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
function Profile() {
  return (
    <div>
      <div>
        <StudentNavbar />
      </div>
      <div>
        <BottomDrawer />
      </div>
    </div>
  );
}

export default Profile;
