import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Cookies from "js-cookie";
import { server } from "../../main.jsx";
const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
    phone: "",
    roll: "",
    branch: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (user.confirmPassword !== user.password) {
      // Handle error response
      Swal.fire({
        title: "Confirm Password should be same as password",
        text: "Password and confirm password has to be same",
        icon: "error",
        confirmButtonText: "Retry",
      });
      return;
    }
    // Validate the form fields here
    try {
      const response = await fetch(`${server}/api/registerStudent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.status === 400 || !data || data.error) {
        // Handle error response
        Swal.fire({
          title: "Bad Credentials",
          text: "Please enter valid details",
          icon: "error",
          confirmButtonText: "Retry",
        });
      } else {
        // Handle successful registration
        Swal.fire({
          title: "Registration Successful",
          icon: "success",
          timer: 1000,
        });
        navigate("/loginstudent");
      }
    } catch (error) {
      // Handle fetch error
    }
  };
  useEffect(() => {
    if (Cookies.get("jwtoken")) {
      navigate("/StudentDashBoard");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-gray-600 shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <div className="flex justify-center"></div>
          <h3 className="text-2xl font-bold text-center text-white">Join us</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="mt2">
              <div>
                <label className="block text-white" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-2">
                <label className="block text-white" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="w-full mt-2 mb-2">
                <label
                  htmlFor="exampleInputEmail2"
                  className="form-label inline-block mb-2 text-white"
                >
                  Select Gender
                </label>
                <FormControl fullWidth>
                  <Select
                    style={{
                      borderRadius: "8px",
                      height: "45px",
                      fontSize: "15px",
                      backgroundColor: "white",
                      borderColor: "black",
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={user.gender}
                    name="gender"
                    label="genders"
                    onChange={handleInputChange}
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Others"}>Others</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="flex flex-row">
                <div className="mr-4 mt-2">
                  <label className="block text-white">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="ml-4 mt-2">
                  <label className="block text-white">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mr-4 mt-2">
                  <label className="block text-white">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="ml-4 mt-2">
                  <label className="block text-white">Roll Number</label>
                  <input
                    type="text"
                    name="roll"
                    value={user.roll}
                    onChange={handleInputChange}
                    placeholder="Roll Number"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div className="w-full mt-2 mb-2">
                <label
                  htmlFor="exampleInputEmail2"
                  className="form-label inline-block mb-2 text-white"
                >
                  Select Branch
                </label>
                <FormControl fullWidth>
                  <Select
                    style={{
                      borderRadius: "8px",
                      height: "45px",
                      fontSize: "15px",
                      backgroundColor: "white",
                      borderColor: "black",
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={user.branch}
                    name="branch"
                    label="Branches"
                    onChange={handleInputChange}
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
              <div className="flex">
                <button
                  type="submit"
                  onClick={handleFormSubmit}
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark text-white">
                Already have an account?{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="/loginstudent"
                >
                  Log in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
