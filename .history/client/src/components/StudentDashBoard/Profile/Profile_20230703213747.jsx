import React, { useContext, useState } from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
import { StudentContext } from "../../../../../LoginContext/StudentContext";

function Profile() {
  const context = useContext(StudentContext);
  console.log(context);
  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <StudentNavbar />
      </div>
      <div>Hey {context.name}</div>
      <div>
        <BottomDrawer />
      </div>
    </div>
  );
}

export default Profile;
