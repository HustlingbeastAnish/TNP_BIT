import React, { useState } from "react";
import BottomDrawer from "../../BottomDrawer/BottomDrawer";
import StudentNavbar from "../../StudentNavbar/StudentNavbar";
import School from "./svgs/school";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import College from "./svgs/college";
const AddAcdemics = () => {
  const [updatedStud, setupdatedStud] = useState({
    class10_board: "",
    class12_board: "",
  });
  const handleEdit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setupdatedStud({ ...updatedStud, [name]: value });
  };
  const [marks, setmarks] = useState({
    class10: "",
    class12: "",
  });
  const [Cmarks, setCmarks] = useState({
    sem1: "0.00",
    sem2: "0.00",
    sem3: "0.00",
    sem4: "0.00",
    sem5: "0.00",
    sem6: "0.00",
    sem7: "0.00",
    sem8: "0.00",
  });
  const marksEdit = (e) => {
    const { name, value } = e.target;
    const regex = /^(\d{0,2}(\.\d{0,2})?)?$/; // Regex pattern for XX.XX format
    if (regex.test(value) || value === "" || value.length > 5) {
      setmarks({ ...marks, [name]: value.substr(0, 5) });
    }
  };
  const CmarksEdit = (e) => {
    const { name, value } = e.target;
    const regex = /^\d(\.\d{0,2})?$/; // Regex pattern for X.XX format
    if (regex.test(value) || value === "" || value.length > 4) {
      setCmarks({ ...Cmarks, [name]: value.substr(0, 4) });
    }
  };
  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <StudentNavbar />
      </div>
      <div>
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          <figure className="flex flex-row items-center justify-around p-2 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <div>
              <School />
            </div>
            <div>
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <div className="flex">
                  <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white m-3">
                    Fill Out your Class 10 Details
                  </h3>
                </div>
              </blockquote>
              <div className="flex justify-around">
                <div className="">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Select Board
                  </label>
                  <FormControl fullWidth>
                    <Select
                      style={{
                        borderRadius: "8px",
                        height: "42px",
                        color: "white",
                      }}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={updatedStud.class10_board}
                      onChange={handleEdit}
                      name="class10_board"
                      label="Branches"
                    >
                      <MenuItem value={"CBSE"}>CBSE</MenuItem>
                      <MenuItem value={"ICSE"}>ICSE</MenuItem>
                      <MenuItem value={"STATE"}>STATE</MenuItem>
                      <MenuItem value={"CISCE"}>CICSE</MenuItem>
                      <MenuItem value={"NIOS"}>NIOS</MenuItem>
                      <MenuItem value={"OTHER"}>OTHER</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Percentage Scored
                  </label>
                  <input
                    type="email"
                    id="class10"
                    name="class10"
                    value={marks.class10}
                    onChange={marksEdit}
                    className="shadow-sm bg-gray-50 border w-1/2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="%"
                    required
                  />
                </div>
              </div>
            </div>
          </figure>
          <figure className="flex flex-row items-center justify-around p-2 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <div>
              <School />
            </div>
            <div>
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <div className="flex">
                  <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white m-3">
                    Fill Out your Class 12 Details
                  </h3>
                </div>
              </blockquote>
              <div className="flex justify-around">
                <div className="">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Select Board
                  </label>
                  <FormControl fullWidth>
                    <Select
                      style={{
                        borderRadius: "8px",
                        height: "42px",
                        color: "white",
                      }}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={updatedStud.class12_board}
                      onChange={handleEdit}
                      name="class12_board"
                      label="Branches"
                    >
                      <MenuItem value={"CBSE"}>CBSE</MenuItem>
                      <MenuItem value={"ICSE"}>ICSE</MenuItem>
                      <MenuItem value={"STATE"}>STATE</MenuItem>
                      <MenuItem value={"CISCE"}>CICSE</MenuItem>
                      <MenuItem value={"NIOS"}>NIOS</MenuItem>
                      <MenuItem value={"OTHER"}>OTHER</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Percentage Scored
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="class12"
                    value={marks.class12}
                    onChange={marksEdit}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="%"
                    required
                  />
                </div>
              </div>
            </div>
          </figure>
        </div>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <form className="m-10">
            <div className="flex flex-row">
              <div>
                <College />
              </div>
              <div>
                <h2 class="text-3xl font-extrabold dark:text-white m-4">
                  Enter your College CGPA
                </h2>
                <div className="relative z-0 w-full m-2 group flex flex-col">
                  <div className="grid grid-flow-col justify-stretch">
                    <div className="m-2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                      >
                        Sem1
                      </label>
                      <input
                        name="sem1"
                        value={marks.sem1}
                        id="sem1"
                        onChange={marksEdit}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Enter your sem1 marks"
                        maxLength={4}
                        required
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                      >
                        Sem2
                      </label>
                      <input
                        name="sem2"
                        value={marks.sem2}
                        id="sem2"
                        onChange={marksEdit}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Enter your sem2 marks"
                        maxLength={4}
                        pattern="[0-9]*"
                        required
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                      >
                        Sem3
                      </label>
                      <input
                        name="sem3"
                        value={marks.sem3}
                        id="sem3"
                        onChange={marksEdit}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Enter your sem3 marks"
                        maxLength={4}
                        pattern="[0-9]*"
                        required
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                      >
                        Sem4
                      </label>
                      <input
                        name="sem4"
                        value={marks.sem4}
                        id="sem4"
                        onChange={marksEdit}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Enter your sem4 marks"
                        maxLength={4}
                        pattern="[0-9]*"
                        required
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                      >
                        Sem5
                      </label>
                      <input
                        name="sem5"
                        value={marks.sem5}
                        id="sem5"
                        onChange={marksEdit}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Enter your sem5 marks"
                        maxLength={4}
                        pattern="[0-9]*"
                        required
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                      >
                        Sem6
                      </label>
                      <input
                        name="sem6"
                        value={marks.sem6}
                        id="sem6"
                        onChange={marksEdit}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Enter your sem6 marks"
                        maxLength={4}
                        pattern="[0-9]*"
                        required
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                      >
                        Sem7
                      </label>
                      <input
                        name="sem7"
                        value={marks.sem7}
                        id="sem7"
                        onChange={marksEdit}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Enter your sem7 marks"
                        maxLength={4}
                        pattern="[0-9]*"
                        required
                      />
                    </div>
                    <div className="m-2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                      >
                        Sem8
                      </label>
                      <input
                        name="sem8"
                        value={marks.sem8}
                        id="sem8"
                        // onChange={handleEdit}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Enter your sem8 marks"
                        maxLength={4}
                        pattern="[0-9]*"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </figure>
      </div>
      <div>
        <BottomDrawer />
      </div>
    </div>
  );
};

export default AddAcdemics;
