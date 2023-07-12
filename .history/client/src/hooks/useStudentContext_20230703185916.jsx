import { StudentContext } from "../../../LoginContext/StudentContext";
import { useContext, useReducer } from "react";
import {} from "react";
export const useStudentContext = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw Error("useStudentContext Must be inside an StudentContext.Provider");
  }
  return context;
};
