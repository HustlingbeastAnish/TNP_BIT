import React from "react";
import { createContext, useEffect, useState } from "react";
const initialState = {
  data: [],
  setdata: () => {},
};
export const StudentContext = createContext(initialState);
const StudentProvider = ({ children }) => {
  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};
