import React, { createContext, useState, useEffect } from "react";
export const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const update = () => {
    setuser(JSON.parse(localStorage.getItem("studentUser")));
  };

  // Add setUser function to the context
  const setUser = (updatedUser) => {
    const { tokens, ...userData } = updatedUser; // Exclude the 'tokens' array from the user data
    setuser(userData);
    localStorage.setItem("studentUser", JSON.stringify(userData));
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
