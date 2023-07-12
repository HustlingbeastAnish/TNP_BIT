import React, { useContext, useEffect, useState } from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
import { StudentContext } from "../../../../../LoginContext/StudentContext";

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
      if (marks[`sem${i}`] !== 0.0) {
        x++;
        sum += parseFloat(marks[`sem${i}`]);
      }
    }
    if (x === 0) {
      console.log(0.0);
    } else {
      console.log(sum / x).toFixed(2);
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
  return context.user ? (
    <div className="bg-gray-900 h-screen">
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
          </div>
          {/* <BottomDrawer /> */}
        </form>
        <form className="m-10">
          <h2 class="text-4xl font-extrabold dark:text-white">
            Academic Details
          </h2>
          <div className="relative z-0 w-full mb-6 group">
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
            <button
              type="button"
              onClick={calAvg}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get CGPA
            </button>
          </div>
          {/* <BottomDrawer /> */}
        </form>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center">
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Profile;
