import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { TbHomeFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle, icon, links }) => {
  return (
    <div className="w-full flex gap-2 mb-5 font-body">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <TbHomeFilled />
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <IoMdArrowDropright className="size-5"/>
              <Link
                to="#"
                className="flex items-center gap-1 ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                {icon}
                {currentPageTitle}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
