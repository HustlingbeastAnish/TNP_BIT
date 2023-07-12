import React from "react";
import { createContext, useEffect, useState, useReducer } from "react";

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
  const [state, dispatch] = useReducer(StudentReducer, {
    user: null,
  });
  return (
    <StudentContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
