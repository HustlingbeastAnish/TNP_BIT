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
    class10: "0.00",
    class10_board: "",
    class12: "0.00",
    class12_board: "",
  });
  const handleEdit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setupdatedStud({ ...updatedStud, [name]: value });
  };
  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <StudentNavbar />
      </div>
      <div>
        <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <div className="flex">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white m-3">
                  Fill Out your Class 10 Details
                </h3>
                <School />
              </div>
            </blockquote>
            <div className="flex">
              <div>
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
                    value={updatedStud.board}
                    onChange={handleEdit}
                    name="branch"
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
              <div className="">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={updatedStud.email}
                  onChange={handleEdit}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
          </figure>
          <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Solid foundation for any project
              </h3>
              <p class="my-4">
                Designing with Figma components that can be easily translated to
                the utility classes of Tailwind CSS is a huge timesaver!"
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center space-x-3">
              <img
                class="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Roberta Casas</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  Lead designer at Dropbox
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Solid foundation for any project
            </h3>
            <p class="my-4">
              Designing with Figma components that can be easily translated to
              the utility classes of Tailwind CSS is a huge timesaver!"
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Roberta Casas</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
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
