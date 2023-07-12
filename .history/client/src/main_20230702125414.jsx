import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "tailwindcss/tailwind.css";
import { StudentContext } from "../../LoginContext/StudentContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StudentContext.Provider>
      <App />
    </StudentContext.Provider>
  </React.StrictMode>
);
