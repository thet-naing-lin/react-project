import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "flowbite";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import "preline/preline";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
  </React.StrictMode>
);
