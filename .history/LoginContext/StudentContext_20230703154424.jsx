import React from "react";
import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();
export const StudentReducer = (state, action) => {
  if (action.type === "LOGIN") {
    return { user: action.payload };
  }
};
export const StudentProvider = ({ children }) => {
  return (
    <StudentContext.Provider value="Yollo">{children}</StudentContext.Provider>
  );
};
