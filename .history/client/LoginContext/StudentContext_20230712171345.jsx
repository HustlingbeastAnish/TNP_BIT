import React, { createContext, useState, useEffect } from "react";
export const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const setUser = (updatedUser) => {
    setuser(updatedUser);
    // localStorage.setItem("studentUser", JSON.stringify(updatedUser));
  };
  return (
    <StudentContext.Provider value={{ user, setUser }}>
      {children}
    </StudentContext.Provider>
  );
};
