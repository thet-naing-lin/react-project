import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { TbHomeFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const BreadCrumb = ({ currentPageTitle, icon, links }) => {
  return (
    <div className="w-full flex gap-2 mb-5 font-body">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-teal-400"
            >
              <TbHomeFilled />
              Home
            </Link>
          </li>

          {links &&
            links.map((link, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <IoMdArrowDropright className="size-5" />
                  <Link
                    to={link.path}
                    className="flex items-center gap-1 ms-1 text-sm font-medium text-gray-400 hover:text-teal-400 md:ms-2"
                  >
                    {link.icon}
                    {link.title}
                  </Link>
                </div>
              </li>
            ))}

          <li>
            <div className="flex items-center">
              <IoMdArrowDropright className="size-5" />
              <Link
                to="#"
                className="flex items-center gap-2 ms-1 text-sm font-medium text-gray-900 hover:text-teal-400 md:ms-2"
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

export default BreadCrumb;
