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
import Contact from "./components/Contact/Contact";
import Profile from "./components/StudentDashBoard/Profile/Profile";
import PrivateRoute from "./PrivateRoutes";
import Stats from "./components/Stats/Stats";
import Notice from "./components/StudentDashBoard/Notice/Notice";
import AddAcdemics from "./components/StudentDashBoard/Profile/AddAcademics/AddAcdemics";
import TaskList from "./components/StudentDashBoard/TaskList/TaskList";
import Footer from "./components/Footer/Footer";
function App() {
  // Declaration of Router Object
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          index
          element={
            <div>
              <Landing />
              <Stats />
              <Contact />
              <Footer />
            </div>
          }
        ></Route>
        <Route path="loginstudent" element={<LoginStudent />}></Route>
        <Route path="registerstudent" element={<RegisterStudent />}></Route>
        <Route path="loginrecruiter" element={<LoginRecruiter />}></Route>
        <Route path="studentDashboard">
          <Route path="tasklist" element={<TaskList />}></Route>
          <Route
            index
            element={
              <PrivateRoute>
                <StudentDashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route path="profile">
            <Route
              index
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="addacademics"
              element={
                <PrivateRoute>
                  <AddAcdemics />
                </PrivateRoute>
              }
            ></Route>
          </Route>
          <Route
            path="notice"
            element={
              <PrivateRoute>
                <Notice />
              </PrivateRoute>
            }
          ></Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
