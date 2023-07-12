import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
const initialState = {
  data: [],
};
export const StudentContext = createContext(initialState);
export function GlobalProvider({ children }) {
  const [authToken, setAuthToken] = useState(() => {
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null;
  });
  const [userId, setUserId] = useState(
    localStorage.getItem("authToken")
      ? jwt_decode(localStorage.getItem("authToken"))._id
      : null
  );
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const contextValue = {
    user: user,
    user_id: userId,
    token: authToken,
    // setAuthToken: setAuthToken,
    // setUserId: setUserId,
  };
  useEffect(() => {
    update();
  }, []);
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
