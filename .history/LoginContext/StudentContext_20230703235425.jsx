import React, { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const update = () => {
    setuser(JSON.parse(localStorage.getItem("studentUser")));
  };
  useEffect(() => {
    update();
  }, []);
  return (
    <StudentContext.Provider value={{ user, setuser }}>
      {children}
    </StudentContext.Provider>
  );
};
