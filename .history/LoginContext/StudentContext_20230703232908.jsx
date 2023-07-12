import React, { createContext } from "react";
import { useStateRef } from "react-usestateref";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [user, setuser, userRef] = useStateRef(null);
  return (
    <StudentContext.Provider value={{ user, setuser, userRef }}>
      {children}
    </StudentContext.Provider>
  );
};
