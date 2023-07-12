import React from "react";
import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();
export const StudentReducer = (state, action) => {
  if (action.type === "LOGIN") {
    return { user: action.payload };
  } else if (action.type === "LOGOUT") {
    return { user: null };
  }
  return state;
};
export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StudentReducer, second, third);
  return (
    <StudentContext.Provider value="Yollo">{children}</StudentContext.Provider>
  );
};
