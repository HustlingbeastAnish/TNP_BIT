import React, { useContext, useState } from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
import { StudentContext } from "../../../../../LoginContext/StudentContext";

function Profile() {
  const storedData = localStorage.getItem("studentUser");
  const parsedData = JSON.parse(storedData);
  console.log(parsedData.emailExists);
  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <StudentNavbar />
      </div>
      <div>
        <h2 className="text-white">Heyy</h2>
      </div>
      <div>
        <BottomDrawer />
      </div>
    </div>
  );
}

export default Profile;
