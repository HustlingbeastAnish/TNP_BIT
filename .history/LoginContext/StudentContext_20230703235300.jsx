import React, { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();
const update = () => {
  if (authToken === null) logout();
  // setUserId(jwt_decode(localStorage.getItem("authToken"))._id);
  setAuthToken(JSON.parse(localStorage.getItem("authToken")));
  setUser(JSON.parse(localStorage.getItem("user")));
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
