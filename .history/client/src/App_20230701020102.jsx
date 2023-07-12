import React from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Landing from "./components/Landing/Landing";
import studentDashboard from "./components/StudentDashBoard/studentDashboard";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Router,
  Routes,
  ScrollRestoration,
} from "react-router-dom";

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
        <Route path="loginrecruiter" element={<LoginRecruiter />}></Route>
        <Route path="studentDashboard" element={<StudentDashBoard />}></Route>
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
