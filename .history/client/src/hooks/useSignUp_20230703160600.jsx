import { useState } from "react";
import { StudentContext } from "../../../LoginContext/StudentContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(null);

  const signUp = async (email, password) => {
    setisLoading(true);
    setError(null);

    const response = await fetch("http://localhost:8080/api/loginStudent");
  };
};
