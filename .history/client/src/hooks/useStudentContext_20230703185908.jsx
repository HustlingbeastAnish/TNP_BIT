import { StudentContext } from "../../../LoginContext/StudentContext";
import { useContext } from "react";
import { useReducer } from "react";
export const useStudentContext = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw Error("useStudentContext Must be inside an StudentContext.Provider");
  }
  return context;
};
