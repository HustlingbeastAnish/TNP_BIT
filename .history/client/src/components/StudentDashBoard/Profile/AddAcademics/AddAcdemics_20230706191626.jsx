import React from "react";
import BottomDrawer from "../../BottomDrawer/BottomDrawer";
import StudentNavbar from "../../StudentNavbar/StudentNavbar";
import School from "./svgs/school";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const AddAcdemics = () => {
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
          </figure>
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
              value={updatedStud.branch}
              name="branch"
              label="Branches"
              onChange={handleEdit}
            >
              <MenuItem value={"CSE"}>CSE</MenuItem>
              <MenuItem value={"IT"}>IT</MenuItem>
              <MenuItem value={"ECE"}>ECE</MenuItem>
              <MenuItem value={"EEE"}>EEE</MenuItem>
              <MenuItem value={"MECH"}>MECH</MenuItem>
              <MenuItem value={"CIVIL"}>CIVIL</MenuItem>
            </Select>
          </FormControl>
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
