import React from "react";

import SearchBtnCreateBtn from "./SearchBtnCreateBtn";
import { RiEdit2Line } from "react-icons/ri";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const ProductList = () => {
  return (
    <div>
      <SearchBtnCreateBtn  placeholder={"Search Products"} icon={<FaPlus />} btnName={"Add New Product"}/>
      <div className="font-body relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-900 uppercase bg-teal-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Price (mmk)
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
                There is no product.
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">1</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple
              </th>
              <td className="px-6 py-4 text-end">1000</td>
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

                {/* <div className="flex space-x-2 justify-end">
                  <a
                    href="#"
                    className="font-medium text-teal-600 dark:text-teal-500 hover:opacity-60"
                  >
                    <RiEdit2Line className="size-5" />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-500 dark:text-red-700 hover:opacity-60"
                  >
                    <FaDeleteLeft className="size-5" />
                  </a>
                </div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
