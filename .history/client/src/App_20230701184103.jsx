import React from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Landing from "./components/Landing/Landing";
import StudentDashboard from "./components/StudentDashBoard/studentDashboard";
import RegisterStudent from "./components/Registers/RegisterStudent";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Router,
  Routes,
  ScrollRestoration,
} from "react-router-dom";

import Notifications from "./components/StudentDashBoard/Notifications/Notifications";
import { Root } from "postcss";
import LoginStudent from "./components/Logins/LoginStudent";
import LoginRecruiter from "./components/Logins/LoginRecruiter";
function App() {
  // Declaration of Router Object
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Landing />}></Route>
        <Route path="loginstudent" element={<LoginStudent />}></Route>
        <Route path="registerstudent" element={<RegisterStudent />}></Route>
        <Route path="loginrecruiter" element={<LoginRecruiter />}></Route>
        <Route path="studentDashboard" element={<StudentDashboard />}></Route>
        <Route path="noti" element={<Notifications />}></Route>
        {/* <Route path="login">
          <Route index element={<Login />}></Route>
          <Route path="student" element={<LoginStudent />}></Route> */}
        {/* <Route path="expressions" element={<UserExpressions />}></Route>
          <Route path="fundcampaigns" element={<UserCampaigns />}></Route>
          <Route path="donations" element={<UserDonations />}></Route> */}
        {/* </Route> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
