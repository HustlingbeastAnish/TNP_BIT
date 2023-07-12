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
      const { name, email, phone, branch, roll } = context.user.emailExists;
      setupdatedStud((prevStud) => ({
        ...prevStud,
        name,
        email,
        phone,
        branch,
        roll,
      }));
    }
  }, [context.user]);

  return context.user ? (
    <div className="bg-gray-900 h-screen">
      <StudentNavbar />
      <div className="m-10">
        <form>
          <h2 className="text-4xl font-extrabold text-white dark:text-white">
            Personal Details
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={updatedStud.name}
                onChange={handleEdit}
                className="input"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
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
                className="input"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={updatedStud.phone}
                onChange={handleEdit}
                className="input"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label
                htmlFor="roll"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Roll Number
              </label>
              <input
                type="text"
                id="roll"
                name="roll"
                value={updatedStud.roll}
                onChange={handleEdit}
                className="input"
                placeholder="Enter your roll number"
                required
              />
            </div>
            <div>
              <label
                htmlFor="branch"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Branch
              </label>
              <input
                type="text"
                id="branch"
                name="branch"
                value={updatedStud.branch}
                onChange={handleEdit}
                className="input"
                placeholder="Enter your branch"
                required
              />
            </div>
          </div>

          <h2 className="text-4xl font-extrabold text-white dark:text-white mt-10">
            Academic Details
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <label
                htmlFor="sem1"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Sem1
              </label>
              <input
                type="text"
                id="sem1"
                name="sem1"
                value={marks.sem1}
                onChange={marksEdit}
                maxLength={4}
                pattern="[0-9]*"
                className="input"
                placeholder="Enter Semester 1 marks"
                required
              />
            </div>
            <div>
              <label
                htmlFor="sem2"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Sem2
              </label>
              <input
                type="text"
                id="sem2"
                name="sem2"
                value={marks.sem2}
                onChange={marksEdit}
                maxLength={4}
                pattern="[0-9]*"
                className="input"
                placeholder="Enter Semester 2 marks"
                required
              />
            </div>
            {/* ... Repeat the above code for other semesters (sem3, sem4, sem5, sem6, sem7, sem8) */}
          </div>

          <button className="button mt-10">Save Changes</button>
        </form>
      </div>
      <BottomDrawer />
    </div>
  ) : null;
};

export default Profile;
