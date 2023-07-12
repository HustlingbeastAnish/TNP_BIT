import React from "react";
import { createContext, useEffect, useState } from "react";
const initialState = {
  data: [],
  setdata: () => {},
};
const StudentContext = createContext("initial");
const StudentProvider = ({ children }) => {
  return (
    <StudentContext.Provider value="Yollo">{children}</StudentContext.Provider>
  );
};
export { StudentContext, StudentProvider };
