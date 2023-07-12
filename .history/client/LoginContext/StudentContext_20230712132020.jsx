import React, { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie] = useCookies(["studentUser"]);

  useEffect(() => {
    const storedUser = cookies.studentUser;
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, [cookies]);

  const updateAndStoreUser = (updatedUser) => {
    setUser(updatedUser);
    setCookie("studentUser", JSON.stringify(updatedUser), { path: "/" });
  };

  return (
    <StudentContext.Provider value={{ user, setUser: updateAndStoreUser }}>
      {children}
    </StudentContext.Provider>
  );
};
