import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/app.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
  </React.StrictMode>
);
