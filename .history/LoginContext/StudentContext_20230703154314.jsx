import React from "react";
import { createContext, useEffect, useState } from "react";

export const 
export const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  return (
    <StudentContext.Provider value="Yollo">{children}</StudentContext.Provider>
  );
};
