import React from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Landing from "./components/Landing/Landing";
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
import Login from "./components/Login/Login";
function App() {
  // Declaration of Router Object
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="user">
          <Route index element={<UserProfile />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="expressions" element={<UserExpressions />}></Route>
          <Route path="fundcampaigns" element={<UserCampaigns />}></Route>
          <Route path="donations" element={<UserDonations />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <Navbar />
      <Landing />
      {/* <Gallery /> */}
      {/* <div className="flex justify-center items-center">
        <h2 className="text-red-600"> Sup GLobal</h2>
      </div> */}
    </>
  );
}

export default App;
