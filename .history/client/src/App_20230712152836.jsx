import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorPage";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Landing from "./components/Landing/Landing";
import StudentDashboard from "./components/StudentDashBoard/studentDashboard";
import RegisterStudent from "./components/Registers/RegisterStudent";
import Notifications from "./components/StudentDashboard/Notifications/Notifications";
import LoginStudent from "./components/Logins/LoginStudent";
import LoginRecruiter from "./components/Logins/LoginRecruiter";
import Contact from "./components/Contact/Contact";
import Profile from "./components/StudentDashboard/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import Stats from "./components/Stats/Stats";
import Notice from "./components/StudentDashboard/Notice/Notice";
import AddAcademics from "./components/StudentDashboard/Profile/AddAcademics/AddAcademics";
import TaskList from "./components/StudentDashboard/TaskList/TaskList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="loginstudent" element={<LoginStudent />} />
          <Route path="registerstudent" element={<RegisterStudent />} />
          <Route path="loginrecruiter" element={<LoginRecruiter />} />
          <Route path="studentDashboard" element={<StudentDashboard />}>
            <Route path="tasklist" element={<TaskList />} />
            <Route index element={<Profile />} />
            <Route path="addacademics" element={<AddAcademics />} />
            <Route path="notice" element={<Notice />} />
          </Route>
          <Route path="gallery" element={<Gallery />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="contact" element={<Contact />} />
          <Route path="stats" element={<Stats />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
