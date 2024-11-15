import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  links: { prev, next },
  meta: { total, from, to, links },
  updateFetchUrl,
}) => {
  const handlePrevBtn = () => {
    updateFetchUrl(prev);
  };

  const handleNextBtn = () => {
    updateFetchUrl(next);
  };

  return (
    <div className="flex justify-between items-center font-header ">
      {/* Help text */}
      <span className="text-xs text-gray-700 dark:text-gray-400">
        Showing <b>{from}</b> to <b>{to}</b> of <b>{total}</b> Entries
      </span>
      {/* Buttons */}
      <div className="inline-flex mt-2 xs:mt-0">
        {/* <button
          disabled={!prev}
          onClick={handlePrevBtn}
          className="flex items-center justify-center size-10 text-sm font-medium text-stone-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-0 disabled:pointer-events-none"
        >
          <HiArrowLeft />
        </button>
        <button
          disabled={!next}
          onClick={handleNextBtn}
          className="flex items-center justify-center size-10 text-sm font-medium text-stone-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-0 disabled:pointer-events-none"
        >
          <HiArrowRight />
        </button> */}

        {links.map((link) => {
          return (
            <button
              key={link.label}
              disabled={!link.url}
              onClick={() => updateFetchUrl(link.url)}
              className={`${link.active ? "bg-teal-800 text-white" : "bg-white"}
                flex items-center justify-center size-8 text-sm font-medium text-stone-900  border-y first:border-s last:border-e border-gray-200 first:rounded-s-lg last:rounded-e-lg hover:bg-teal-300 hover:text-teal-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none
                `}
            >
              {link.label === "&laquo; Previous" ? (
                <IoIosArrowBack />
              ) : link.label === "Next &raquo;" ? (
                <IoIosArrowForward />
              ) : (
                link.label
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
