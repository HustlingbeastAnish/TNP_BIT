import { useState } from "react";
import { StudentContext } from "../../../LoginContext/StudentContext";
import { useStudentContext } from "./useStudentContext";
export const uselogIn = () => {
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(null);
  const { dispatch } = useStudentContext();
  const logIn = async ({ email, password }) => {
    setisLoading(true);
    setError(null);

    const response = await fetch("http://localhost:8080/api/loginStudent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (!response.ok) {
      setisLoading(false);
      setError(data.error);
    } else {
      // Saving the user to the local storage (basically the token)
      localStorage.setItem("studentUser", JSON.stringify(data));
      // Update the StudentContext
      dispatch({ type: "LOGIN", payload: data });

      setisLoading(false);
    }
  };
  return { logIn, error, isLoading };
};
