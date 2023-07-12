import React from "react";
import { Route, Navigate } from "react-router-dom";
import { GlobalContext } from "./Context/GlobalContext";
import { useContext } from "react";

function PrivateRoute({ children }) {
  const context = useContext(GlobalContext);
  return context.user !== null ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
