import { StudentContext } from "../../../LoginContext/StudentContext";
import { useContext } from "react";
export const useStudentContext = () => {
  const context = useContext(StudentContext);
};
