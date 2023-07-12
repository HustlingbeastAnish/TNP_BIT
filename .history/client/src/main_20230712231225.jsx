import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "tailwindcss/tailwind.css";
import { StudentProvider } from "../LoginContext/StudentContext.jsx";
export const server = "https://todo-app-ihdc.onrender.com/api/v1";
document.body.style.backgroundColor = "rgb(17 24 39)";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StudentProvider>
      <App />
    </StudentProvider>
  </React.StrictMode>
);
