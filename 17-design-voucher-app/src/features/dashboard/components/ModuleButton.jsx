import React from "react";
import { Link } from "react-router-dom";

const ModuleButton = ({ name, icon, url }) => {
  return (
    <Link
      to={url}
      className="flex flex-col gap-3 h-full items-center text-white text-center bg-teal-900 p-5 rounded-md"
    >
      {icon}
      {name}
    </Link>
  );
};

export default ModuleButton;
