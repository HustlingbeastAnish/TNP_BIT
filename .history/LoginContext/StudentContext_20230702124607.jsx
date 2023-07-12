import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
const initialState = {
  user: null,
  user_id: null,
  token: null,
  phone: null,
  setAuthToken: () => {},
  setUserId: () => {},
  setUser: () => {},
  signup: () => {},
  login: () => {},
  logout: () => {},
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
  //Register User....
  const signup = async (name, email, password) => {
    if (name == "" || password === "" || email === "") {
      alert("Please Enter all the fields");
      return;
    }
    const response = await fetch("http://localhost:5000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    if (response.status === 200) {
      alert("User Created Successfully");
      // <Navigate to="/login" />;
    } else {
      alert("User Already Exists");
    }
  };
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setAuthToken(null);
    setUserId(null);
    setUser(null);
  };
  const update = () => {
    if (authToken === null) logout();
    // setUserId(jwt_decode(localStorage.getItem("authToken"))._id);
    setAuthToken(JSON.parse(localStorage.getItem("authToken")));
    setUser(JSON.parse(localStorage.getItem("user")));
  };
  const contextValue = {
    user: user,
    user_id: userId,
    token: authToken,
    setAuthToken: setAuthToken,
    setUserId: setUserId,
    setUser: setUser,
    // signup: signup,
    logout: logout,
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
