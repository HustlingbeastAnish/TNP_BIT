import React, { createContext } from "react";
import useState from "react-usestateref";
export const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  const [user, setuser, userRef] = useState(null);
  return (
    <StudentContext.Provider value={{ user, setuser, userRef }}>
      {children}
    </StudentContext.Provider>
  );
};
