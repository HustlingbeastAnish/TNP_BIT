import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "tailwindcss/tailwind.css";
import { StudentProvider } from "../../LoginContext/StudentContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StudentProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StudentProvider>
);
