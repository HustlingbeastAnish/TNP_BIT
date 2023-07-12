import React, { createContext, useState } from "react";

export const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  return (
    <StudentContext.Provider value={{ user, setuser }}>
      {children}
    </StudentContext.Provider>
  );
};
