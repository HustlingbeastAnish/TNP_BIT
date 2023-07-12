import React, { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("studentUser"));
    setUser(storedUser);
  }, []);

  const updateUserInLocalStorage = (updatedUser) => {
    setUser(userData);
    localStorage.setItem("studentUser", JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("studentUser");
  };

  return (
    <StudentContext.Provider
      value={{ user, setUser: updateUserInLocalStorage, logoutUser }}
    >
      {children}
    </StudentContext.Provider>
  );
};
