import React from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Landing from "./components/Landing/Landing";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
function App() {
  // Declaration of Router Object

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
