import React, { useState, useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import { StudentContext } from "../LoginContext/StudentContext";
import { useContext } from "react";
import Loader from "./components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const context = useContext(StudentContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to fetch context.user
    setTimeout(() => {
      setLoading(false);
    }, !context.user); // Adjust the delay as needed
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    ); // Render a loading state
  }

  return context.user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
