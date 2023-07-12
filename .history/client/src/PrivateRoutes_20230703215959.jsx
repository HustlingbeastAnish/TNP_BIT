import React from "react";
import { Route, Navigate } from "react-router-dom";
import { StudentContext } from "../../LoginContext/StudentContext";
import { useContext } from "react";

function PrivateRoute({ children }) {
  const context = useContext(StudentContext);
  return context.user !== null ? children : <Navigate to="/" />;
}
export default PrivateRoute;
