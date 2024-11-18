import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Sortable = ({ children, handleSort, sort_by, align }) => {
  return (
    <div
      className={`flex items-center gap-1 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      <span className=" flex flex-col">
        <button
          className=" hover:text-teal-300"
          onClick={handleSort.bind(null, {
            sort_by: sort_by,
            sort_direction: "asc",
          })}
        >
          <IoMdArrowDropup />
        </button>
        <button
          className=" hover:text-teal-300"
          onClick={handleSort.bind(null, {
            sort_by: sort_by,
            sort_direction: "desc",
          })}
        >
          <IoMdArrowDropdown />
        </button>
      </span>
      <span>{children}</span>
    </div>
  );
};

export default Sortable;
