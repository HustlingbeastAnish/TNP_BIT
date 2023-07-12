import React, { createContext, useState } from "react";

export const StudentContext = createContext();

// export const StudentReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { user: action.payload };
//     case "LOGOUT":
//       return { user: null };
//     default:
//       return state;
//   }
// };
export const StudentProvider = ({ children }) => {
  const [user, setuser] = useState({});
  return (
    <StudentContext.Provider value={{ user, setuser }}>
      {children}
    </StudentContext.Provider>
  );
};
