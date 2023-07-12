import React, { useContext, useEffect, useState } from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
import { StudentContext } from "../../../../../LoginContext/StudentContext";

function Profile() {
  const context = useContext(StudentContext);
  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <StudentNavbar />
      </div>
      <div>
        <h2 className="text-white">Heyy {context.user.emailExists.name}</h2>
      </div>
      <div>
        <BottomDrawer />
      </div>
    </div>
  );
}

export default Profile;
