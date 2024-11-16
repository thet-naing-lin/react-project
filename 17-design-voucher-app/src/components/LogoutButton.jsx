import React from "react";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "react-use-cookie";

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogoutBtn = () => {
    removeCookie("login_token");
    navigate("/");
  };

  return (
    <button
      onClick={handleLogoutBtn}
      className=" text-white bg-teal-900 hover:scale-95 hover:text-white font-medium rounded-lg text-sm sm:w-auto px-3 py-1 text-center dark:bg-teal-600 dark:hover:bg-teal-700"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
