import React from "react";
import { Link } from "react-router-dom";

const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link to={url} className="flex flex-col gap-3 h-full items-center text-teal-900 text-center bg-teal-400 p-5 rounded-md">
      {icon}
      {name}
    </Link>
  );
};

export default ModuleBtn;
