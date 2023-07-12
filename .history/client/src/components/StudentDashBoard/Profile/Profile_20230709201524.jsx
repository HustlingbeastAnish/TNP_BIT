import React, { useContext, useEffect, useState } from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
import { StudentContext } from "../../../../../LoginContext/StudentContext";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";
import axios from "axios";
const Profile = () => {
  const context = useContext(StudentContext);
  const [updatedStud, setupdatedStud] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
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
  const [school, setschool] = useState({
    class10: "",
    class10_board: "",
    class12: "",
    class12_board: "",
  });
  const marksData = {
    labels: Object.keys(marks), // Generate labels dynamically from the properties of the marks object
    datasets: [
      {
        label: "CGPA",
        data: Object.values(marks),
        backgroundColor: "black",
        borderColor: "white",
      },
    ],
  };
  const [flag, setflag] = useState(false);
  const [flagAcademic, setflagAcademic] = useState(false);
  const [avg, setavg] = useState(0.0);
  const handleEdit = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const phoneNumber = value.replace(/\D/g, "");
      const trimmedPhoneNumber = phoneNumber.slice(0, 10);
    } else setupdatedStud({ ...updatedStud, [name]: value });
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
      const average = (sum / x).toFixed(2);
      setavg(average);
    }
    setflag(true);
  };

  const getAcademicDetails = async () => {
    try {
      axios
        .get(
          `http://localhost:8080/api/getacademics?email=${context.user.emailExists.email}`
        )
        .then((response) => {
          console.log(response.data.exists);
          const res = response.data.exists;
          try {
            if (!res.school || !res.college) {
              console.log(err);
            } else {
              setmarks(res.college);
              setschool(res.school);
              setflagAcademic(true);
            }
          } catch (err) {
            console.log(err);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.error(err);
    }
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

  useEffect(() => {
    getAcademicDetails();
  }, []);
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
                  // onChange={handleEdit}
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
            <button
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg m-2 dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              Save Changes
            </button>
          </div>
          <BottomDrawer />
        </form>
        {flagAcademic ? (
          <div>
            <div>
              <h2 class="text-4xl font-extrabold dark:text-white m-10">
                Academic Details
              </h2>

              <ol class="relative border-l border-gray-200 dark:border-gray-700 m-10">
                <li class="mb-10 ml-6">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Birla Institute of Technology Mesra, Ranchi
                    <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                      Present
                    </span>
                  </h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Prusuing BTECH in {updatedStud.branch}
                  </time>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Birla Institute of Technology (BIT) is a prestigious
                    technical institute in India. Established in 1955, BIT Mesra
                    offers a wide range of undergraduate, postgraduate, and
                    doctoral programs in various disciplines. Known for its
                    academic excellence, research initiatives, and industry
                    collaborations, BIT provides a holistic education,
                    state-of-the-art infrastructure, and a vibrant campus life.
                    It continues to be a preferred choice for students seeking
                    quality technical education and has a strong network of
                    successful alumni.
                  </p>
                </li>
                <li class="mb-10 ml-6">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Completed Senior Secondary level of education from{" "}
                    {school.class12_board}
                  </h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Secured {school.class12} % in {school.class12_board} BOARD
                  </time>
                </li>
                <li class="ml-6">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Completed Secondary level of education from{" "}
                    {school.class10_board}
                  </h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Secured {school.class10} % in {school.class10_board} BOARD
                  </time>
                </li>
              </ol>
            </div>
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
                  <div className="mb-6">
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
        ) : (
          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div class="mx-auto max-w-screen-sm text-center">
                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white dark:text-primary-500">
                  Oops
                </h1>
                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                  Academic Details is missing
                </p>
                <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                  Complete the Academic Sections
                </p>
                <Link to="/studentDashBoard/profile/addacademics">
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Complete
                  </button>
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default Profile;
