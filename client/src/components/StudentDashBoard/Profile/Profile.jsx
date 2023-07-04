import React, { useContext, useEffect, useState } from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
import { StudentContext } from "../../../../../LoginContext/StudentContext";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import FormControl from "@mui/material/FormControl";
import Loader from "../../Loader/Loader";
const Profile = () => {
  const context = useContext(StudentContext);
  const [updatedStud, setupdatedStud] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    roll: "",
  });

  const [marks, setmarks] = useState({
    sem1: "0.00",
    sem2: "0.00",
    sem3: "0.00",
    sem4: "0.00",
    sem5: "0.00",
    sem6: "0.00",
    sem7: "0.00",
    sem8: "0.00",
  });
  const marksData = {
    labels: Object.keys(marks), // Generate labels dynamically from the properties of the marks object
    datasets: [
      {
        label: "Attendance Percentage",
        data: Object.values(marks),
        backgroundColor: "black",
        borderColor: "white",
      },
    ],
  };
  const [flag, setflag] = useState(false);
  const [avg, setavg] = useState(0.0);
  const handleEdit = (e) => {
    const { name, value } = e.target;
    setupdatedStud({ ...updatedStud, [name]: value });
  };
  const marksEdit = (e) => {
    const { name, value } = e.target;
    const regex = /^\d(\.\d{0,2})?$/; // Regex pattern for X.XX format
    if (regex.test(value) || value === "" || value.length > 4) {
      setmarks({ ...marks, [name]: value.substr(0, 4) });
    }
  };

  const calAvg = () => {
    let x = 0;
    let sum = 0.0;
    for (let i = 1; i <= 8; i++) {
      if (marks[`sem${i}`] !== "0.00") {
        x++;
        sum += parseFloat(marks[`sem${i}`]);
      }
    }
    if (x === 0) {
      setavg(0.0);
    } else {
      setavg(sum / x).toFixed(2);
    }
    setflag(true);
  };
  useEffect(() => {
    if (context.user) {
      setupdatedStud((prevStud) => ({
        ...prevStud,
        name: context.user.emailExists.name,
        email: context.user.emailExists.email,
        phone: context.user.emailExists.phone,
        branch: context.user.emailExists.branch,
        roll: context.user.emailExists.roll,
      }));
      console.log(context.user);
    }
  }, [context.user]);
  return context.user ? (
    <div className="bg-gray-900 h-auto">
      <div>
        <StudentNavbar />
      </div>
      <div>
        <form className="m-10">
          <h2 class="text-4xl font-extrabold dark:text-white">
            Personal Details
          </h2>
          <div className="relative z-0 w-full mb-6 group">
            <div className="grid grid-flow-col justify-stretch">
              <div className="m-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  value={updatedStud.name}
                  onChange={handleEdit}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>{" "}
              <div className="m-2">
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

            <div className="grid grid-flow-col justify-stretch">
              <div className="m-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={updatedStud.phone}
                  id="floating_phone"
                  onChange={handleEdit}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>{" "}
              <div className="m-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Roll Number
                </label>
                <input
                  type="roll"
                  id="roll"
                  name="roll"
                  value={updatedStud.roll}
                  onChange={handleEdit}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="grid grid-flow-col justify-stretch">
              <div className="m-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Registration Number
                </label>
                <input
                  name="regno"
                  value={"TPBIT-" + updatedStud.roll}
                  id="regno"
                  // onChange={handleEdit}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>{" "}
              <div className="m-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Branch
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
              </div>
            </div>
          </div>
          {/* <BottomDrawer /> */}
        </form>
        <form className="m-10">
          <h2 class="text-4xl font-extrabold dark:text-white">
            Academic Details
          </h2>
          <div className="relative z-0 w-full mb-6 group flex flex-col">
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
            <div className="flex justify-center items-center m-2">
              <button
                type="button"
                onClick={calAvg}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Get CGPA
              </button>
              {flag && (
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  {avg}
                </button>
              )}
            </div>
            {flag && (
              <div className="">
                <Line
                  data={marksData}
                  options={{
                    plugins: {
                      legend: {
                        labels: {
                          font: {
                            size: 12,
                          },
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderColor: "white", // Set the line color to white
                        borderWidth: 2, // Set the line width (optional)
                      },
                    },
                  }}
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default Profile;
