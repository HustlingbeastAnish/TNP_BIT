import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
const initialState = {
  data: [],
};
export const StudentContext = createContext(initialState);
export function GlobalProvider({ children }) {
  const contextValue = {};
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
