import React from "react";
import { TbMoodSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

const SearchBtnCreateBtn = ({ placeholder, icon, btnName, url }) => {
  return (
    <div className=" flex justify-between mb-3 font-body">
      <div className="">
        <div className="relative font-header">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <TbMoodSearch className="size-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="text-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
          />
        </div>
      </div>

      <div className="">
        <Link
          to={url}
          className="flex items-center gap-2 bg-teal-400 hover:bg-teal-500 hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700"
        >
          {icon}
          {btnName}
        </Link>
      </div>
    </div>
  );
};

export default SearchBtnCreateBtn;
