import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
const initialState = {
  data: [],
  setdata: () => {},
};
export const StudentContext = createContext(initialState);
export function GlobalProvider({ children }) {
  const [studentUser, setstudentUser] = useState({});
  const contextValue = {
    data: studentUser
    setdata: setstudentUser,
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
