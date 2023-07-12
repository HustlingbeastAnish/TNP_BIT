import React, { createContext, useEffect } from "react";
import { useState } from "react-usestateref";
export const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const update = () => {
    setuser(JSON.parse(localStorage.getItem("studentUser")));
  };

  // Add setUser function to the context
  const setUser = (updatedUser) => {
    setuser(updatedUser);
    localStorage.setItem("studentUser", JSON.stringify(updatedUser));
  };

  useEffect(() => {
    update();
  }, []);

  return (
    <StudentContext.Provider value={{ user, setUser }}>
      {children}
    </StudentContext.Provider>
  );
};
