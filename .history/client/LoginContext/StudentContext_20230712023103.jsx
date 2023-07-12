import React, { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["studentUser"]);
  const [user, setuser] = useState(null);

  // Update the user state from cookies
  useEffect(() => {
    const userFromCookie = cookies.studentUser;
    setuser(userFromCookie ? JSON.parse(userFromCookie) : null);
  }, [cookies]);

  // Add setUser function to update the user state and cookies
  const setUser = (updatedUser) => {
    setuser(updatedUser);
    setCookie("studentUser", JSON.stringify(updatedUser));
  };

  return (
    <StudentContext.Provider value={{ user, setUser }}>
      {children}
    </StudentContext.Provider>
  );
};
