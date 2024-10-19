import React, { useEffect } from "react";
import Header from "./Header";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useCookie from "react-use-cookie";
import useUserStore from "../stores/useUserStore";

const Layout = () => {
  const [token] = useCookie("login_token");
  const [userCookie] = useCookie("user");
  const { user, setUser } = useUserStore();

  // // programatic route
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!token) {
  //     navigate("/");
  //   }
  // }, []);

  if (!token) {
    return <Navigate to={"/"} />;
  }

  useEffect(() => {
    setUser(JSON.parse(userCookie));
  }, []);
  // console.log(JSON.parse(userCookie));

  return (
    <main className="flex flex-col min-h-screen p-5">
      <Header />
      <Outlet />
      <Toaster position="top-right" />
    </main>
  );
};

export default Layout;
