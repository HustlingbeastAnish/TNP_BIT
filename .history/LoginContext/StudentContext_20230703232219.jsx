import React, { createContext } from "react";

export const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  var [counter, setCounter, counterRef] = useState(0);
  return (
    <StudentContext.Provider value={{ user, setuser }}>
      {children}
    </StudentContext.Provider>
  );
};
