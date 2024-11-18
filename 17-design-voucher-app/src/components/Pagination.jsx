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
      <span className="text-xs text-gray-700">
        Showing <b>{from}</b> to <b>{to}</b> of <b>{total}</b> Entries
      </span>
      {/* Buttons */}
      <div className="inline-flex mt-2 xs:mt-0">
        {links.map((link) => {
          return (
            <button
              key={link.label}
              disabled={!link.url}
              onClick={() => updateFetchUrl(link.url)}
              className={`${link.active ? "bg-teal-800 text-white" : "bg-white"}
                flex items-center justify-center size-8 text-sm font-medium text-stone-900  border-y first:border-s last:border-e border-gray-200 first:rounded-s-lg last:rounded-e-lg hover:bg-teal-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none
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
