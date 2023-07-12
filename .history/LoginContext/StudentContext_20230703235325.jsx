import React, { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();
const update = () => {
  setuser(JSON.parse(localStorage.getItem("user")));
};
export const StudentProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    update();
  }, []);
  return (
    <StudentContext.Provider value={{ user, setuser }}>
      {children}
    </StudentContext.Provider>
  );
};
