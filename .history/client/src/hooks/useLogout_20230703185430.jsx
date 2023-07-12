import { StudentContext } from "../../../LoginContext/StudentContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // Remove user from storage
    localStorage.removeItem("studentUser");

    // Dispatch the logout action
    dispatch({ type: "LOGOUT" });
  };
};