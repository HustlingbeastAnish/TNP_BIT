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
    setmarks({ ...marks, [name]: value });
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
          <BottomDrawer />
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
                  placeholder="Enter your email"
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
                  placeholder="Enter your email"
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
                  placeholder="Enter your email"
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
                  placeholder="Enter your email"
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
                  placeholder="Enter your email"
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
                  placeholder="Enter your email"
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
                  placeholder="Enter your email"
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
                  onChange={marksEdit}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
          </div>
          <BottomDrawer />
        </form>
      </div>
    </div>
  ) :
  );
};

export default Profile;
