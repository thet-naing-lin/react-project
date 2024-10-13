import React, { useRef } from "react";

import { HiShoppingCart } from "react-icons/hi2";
import SearchBtnCreateBtn from "./SearchBtnCreateBtn";
import useSWR from "swr";
import VoucherListRow from "./VoucherListRow";
import VoucherListSkeletonLoader from "./VoucherListSkeletonLoader";

import { useState } from "react";
import { TbMoodSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import { debounce, throttle } from "lodash";
import { RxCross2 } from "react-icons/rx";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const VoucherList = () => {
  // testing
  const [search, setSearch] = useState("");
  const searchInput = useRef("");
  
  // console.log(search);
  // console.log(searchInput);

  // const handleSearch = (e) => {
  //   // console.log(e.target.value);
  //   setSearch(e.target.value);
  // };

  const handleSearch = debounce((e) => {
    setSearch(e.target.value);
  }, 500);

  const handleClearSearch = () => {
    setSearch("");
    searchInput.current.value = "";
  };

  const { data, isLoading, error } = useSWR(
    search
      ? `${import.meta.env.VITE_API_URL}/vouchers?voucher_id_like=${search}`
      : `${import.meta.env.VITE_API_URL}/vouchers`,
    fetcher
  );

  return (
    <div>
      {/* <SearchBtnCreateBtn
        placeholder={"Search Vouchers"}
        icon={<HiShoppingCart className="size-4" />}
        btnName={"Create Sale"}
        url={"/sale"}
      /> */}

      <div className=" flex justify-between mb-3 font-body">
        <div className=" flex items-center justify-center">
          <div className="relative font-header">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <TbMoodSearch className="size-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              onChange={handleSearch}
              ref={searchInput}
              id="input-group-1"
              className="text-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Vouchers"
            />
          </div>

          {search && (
            <button onClick={handleClearSearch} className=" hover:scale-75">
              <RxCross2 className=" size-5 font-bold text-red-500 ms-1" />
            </button>
          )}
        </div>

        <div className="">
          <Link
            to="/sale"
            className="flex items-center gap-2 text-white bg-teal-900 hover:scale-95 hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700"
          >
            <HiShoppingCart className="size-4" />
            Create Sale
          </Link>
        </div>
      </div>

      <div className="font-body mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-white text-xs uppercase bg-teal-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Voucher ID
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-end text-nowrap">
                Item Count
              </th>
              <th scope="col" className="px-6 py-3 text-end text-nowrap">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end"></th>
            </tr>
          </thead>

          <tbody className="text-md">
            <tr className="bg-white font-header border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hidden last:table-row">
              <td colSpan={7} className="text-center text-xl px-6 py-10">
                There is no voucher.
              </td>
            </tr>

            {isLoading ? (
              <VoucherListSkeletonLoader />
            ) : (
              data?.map((voucher, index) => (
                <VoucherListRow
                  key={voucher.id}
                  voucher={voucher}
                  index={index}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoucherList;
