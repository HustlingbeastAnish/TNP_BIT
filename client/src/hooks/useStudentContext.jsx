import { StudentContext } from "../../../LoginContext/StudentContext";
import { useContext } from "react";
export const useStudentContext = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw Error("useStudentContext Must be inside an StudentContextProvider");
  }
  return context;
};
