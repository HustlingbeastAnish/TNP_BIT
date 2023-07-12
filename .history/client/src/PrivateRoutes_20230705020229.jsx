import React, { useState, useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import { StudentContext } from "../../LoginContext/StudentContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const context = useContext(StudentContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    while (context.user == NULL) {
      setLoading(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading state
  }

  return context.user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
