import React, { Suspense, useEffect } from "react";
import Header from "./Header";
import { Navigate, Outlet } from "react-router-dom";
import useCookie from "react-use-cookie";
import useUserStore from "../../../stores/useUserStore";
import PageLoading from "../../../components/PageLoading";

const DashboardLayout = () => {
  const [token] = useCookie("login_token");
  const [userCookie] = useCookie("user");
  const { user, setUser } = useUserStore();

  if (!token) {
    return <Navigate to={"/"} />;
  }

  useEffect(() => {
    setUser(JSON.parse(userCookie));
  }, []);

  return (
    <main className="flex flex-col min-h-screen p-5 bg-teal-50">
      <Header />
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default DashboardLayout;
