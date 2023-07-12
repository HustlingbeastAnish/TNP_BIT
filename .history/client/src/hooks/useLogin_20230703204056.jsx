import { useState } from "react";
import { StudentContext } from "../../../LoginContext/StudentContext";
import { useStudentContext } from "./useStudentContext";

export const useLogIn = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useStudentContext();

  const logIn = async ({ email, password }) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/loginStudent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Failed to log in.");
      }
      const data = await response.json();
      console.log(data);
      // Saving the user to the local storage (basically the token)
      localStorage.setItem("studentUser", JSON.stringify(data));
      // Update the StudentContext
      dispatch({ type: "LOGIN", payload: data });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { logIn, error, isLoading };
};
