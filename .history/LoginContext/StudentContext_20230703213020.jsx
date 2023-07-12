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
const [user, setuser] = useState({});
export const StudentProvider = ({ children }) => {
  return (
    <StudentContext.Provider value={{}}>{children}</StudentContext.Provider>
  );
};
