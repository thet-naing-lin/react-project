import React from "react";
import { RiEdit2Line } from "react-icons/ri";
import { FaDeleteLeft } from "react-icons/fa6";
import { TbMoodSearch } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBtnCreateBtn from "./SearchBtnCreateBtn";

const VoucherList = () => {
  return (
    <div>
      {/* <div className=" flex justify-between mb-3">
        <div className="">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <TbMoodSearch className="size-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="text-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Voucher"
            />
          </div>
        </div>

        <div className="">
          <Link
            to="/sale"
            className="flex items-center gap-2 bg-teal-400 hover:bg-teal-600 hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700"
          >
            <HiShoppingCart className="size-4" />
            Create Sale
          </Link>
        </div>
      </div> */}
      <SearchBtnCreateBtn
        placeholder={"Search Vouchers"}
        icon={<HiShoppingCart className="size-4" />}
        btnName={"Create Sale"}
        url={"/sale"}
      />
      <div className="font-body relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-gray-900 uppercase bg-teal-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-md">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hidden last:table-row">
              <td colSpan={5} className="text-center text-xl px-6 py-10">
                There is no voucher.
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">1</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lone Lone
              </th>
              <td className="px-6 py-4 text-end">lonelone@gmail.com</td>
              <td className="px-6 py-4 text-end">
                <p className=" text-xs">8 Sep 2024</p>
                <p className=" text-xs">11:30 PM</p>
              </td>
              <td className="px-6 py-4 text-end">
                <div className="inline-flex rounded-md" role="group">
                  <button
                    type="button"
                    className="px-3 py-2 text-sm text-teal-600 dark:text-teal-500 bg-transparent border border-teal-500 rounded-s-md hover:opacity-60 focus:z-10"
                  >
                    <RiEdit2Line />
                  </button>

                  <button
                    type="button"
                    className="px-3 py-2 text-sm text-red-500 dark:text-red-700 bg-transparent border border-teal-500 rounded-e-md hover:opacity-60 focus:z-10"
                  >
                    <FaDeleteLeft />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoucherList;
