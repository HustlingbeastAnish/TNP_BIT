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
  const getCurrUser = async () => {
    try {
      const token = cookies.get("jwebtoken");
      const res = await axios.get(`${BASE_URL}/checkuser`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status !== 200) {
        const err = new Error(res.error);
        throw err;
      } else {
        const { _id, name, gender, age, email } = res.data;
        setState({
          ...state,
          id: _id,
          name: name,
          gender: gender,
          age: age,
          email: email,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrUser();
  }, []);
  return (
    <StudentContext.Provider value={{ user, setUser: updateAndStoreUser }}>
      {children}
    </StudentContext.Provider>
  );
};
