import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useSearchParams } from "react-router-dom";

const Pagination = ({
  links: { prev, next, first, last } = {
    prev: null,
    next: null,
    first: null,
    last: null,
  },
  meta: { total, from, to, current_page, last_page, path } = {
    total: 0,
    from: 0,
    to: 0,
    links: [],
    current_page: 0,
    last_page: 0,
    path: "",
  },
  updateFetchUrl,
}) => {
  const [params, setParams] = useSearchParams();
  const currentLimit = params.get("limit") ?? 5; // ?? 5 mean if limit is null or undefined then set default value 5
  const pageLimits = [5, 10, 20, 50, 100];

  const handleRowLimitSelect = (e) => {
    setParams({ page: 1, limit: e.target.value });
    updateFetchUrl(`${path}?page=1&limit=${e.target.value}`);
  };

  const handlePrevBtn = () => {
    updateFetchUrl(prev);
  };

  const handleNextBtn = () => {
    updateFetchUrl(next);
  };

  return (
    <div className="flex justify-between items-center font-header mt-2 ">
      {/* Help text */}
      <span className="text-xs text-gray-700">
        Showing <b>{from}</b> to <b>{to}</b> of <b>{total}</b> Entries
      </span>
      {/* Buttons */}
      <div className="inline-flex items-center xs:mt-0">
        
        {/* row per page btn */}
        <div className=" flex items-center gap-2 me-2">
          <label
            htmlFor="countries"
            className="block text-gray-700 text-sm text-nowrap "
          >
            Rows per page
          </label>
          <select
            onChange={handleRowLimitSelect}
            className="flex items-center justify-center h-8 text-xs font-medium border-y border rounded-lg border-gray-200   disabled:opacity-50 disabled:pointer-events-none"
            value={currentLimit}
          >
            {pageLimits.map((limit, index) => (
              <option key={index} value={limit}>
                {limit}
              </option>
            ))}
          </select>
        </div>

        <span className="text-xs text-gray-700 me-2">
          Page <b>{current_page}</b> of <b>{last_page}</b>
        </span>

        {/* prev and next btn */}
        <div className=" flex items-center">
          <button
            disabled={!prev}
            onClick={() => updateFetchUrl(first)}
            className={`flex items-center bg-white justify-center size-8 text-sm font-medium text-stone-900  border-y first:border-s last:border-e border-gray-200 first:rounded-s-lg last:rounded-e-lg hover:bg-teal-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
          >
            <MdKeyboardDoubleArrowLeft />
          </button>

          <button
            disabled={!prev}
            onClick={() => updateFetchUrl(prev)}
            className={`flex items-center bg-white justify-center size-8 text-sm font-medium text-stone-900  border-y first:border-s last:border-e border-gray-200 first:rounded-s-lg last:rounded-e-lg hover:bg-teal-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
          >
            <MdKeyboardArrowLeft />
          </button>

          <button
            disabled={!next}
            onClick={() => updateFetchUrl(next)}
            className={`flex items-center bg-white justify-center size-8 text-sm font-medium text-stone-900  border-y first:border-s last:border-e border-gray-200 first:rounded-s-lg last:rounded-e-lg hover:bg-teal-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
          >
            <MdKeyboardArrowRight />
          </button>

          <button
            disabled={!next}
            onClick={() => updateFetchUrl(last)}
            className={`flex items-center bg-white justify-center size-8 text-sm font-medium text-stone-900  border-y first:border-s last:border-e border-gray-200 first:rounded-s-lg last:rounded-e-lg hover:bg-teal-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
          >
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
