import React, { useState } from "react";
import BottomDrawer from "../../BottomDrawer/BottomDrawer";
import StudentNavbar from "../../StudentNavbar/StudentNavbar";
import School from "./svgs/school";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
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
  const marksEdit = (e) => {
    const { name, value } = e.target;
    const regex = /^\d(\.\d{0,2})?$/; // Regex pattern for X.XX format
    if (regex.test(value) || value === "" || value.length > 4) {
      setmarks({ ...marks, [name]: value.substr(0, 4) });
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
                    value={updatedStud.class10}
                    onChange={marksEdit}
                    className="shadow-sm bg-gray-50 border w-1/2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter your email"
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
                    value={updatedStud.class12}
                    onChange={marksEdit}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
            </div>
          </figure>
        </div>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Solid foundation for any project
            </h3>
            <p className="my-4">
              Designing with Figma components that can be easily translated to
              the utility classes of Tailwind CSS is a huge timesaver!"
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Roberta Casas</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Lead designer at Dropbox
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div>
        <BottomDrawer />
      </div>
    </div>
  );
};

export default AddAcdemics;
