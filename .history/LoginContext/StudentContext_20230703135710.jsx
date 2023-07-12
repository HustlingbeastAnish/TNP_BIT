import React from "react";
import { createContext, useEffect, useState } from "react";
const initialState = {
  data: [],
  setdata: () => {},
};
export const StudentContext = createContext("initial");
const StudentProvider = ({ children }) => {
  return (
    <StudentContext.Provider value="Anish">{children}</StudentContext.Provider>
  );
};
