import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
const initialState = {
  data: [],
  setdata: () => {},
};
export const StudentContext = createContext(initialState);
export function StudentProvider({ children }) {
  const [studentUser, setstudentUser] = useState({});
  const contextValue = {
    data: studentUser,
    setdata: setstudentUser,
  };
  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
}
