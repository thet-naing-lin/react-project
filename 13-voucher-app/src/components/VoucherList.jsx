import React from "react";

import { HiShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBtnCreateBtn from "./SearchBtnCreateBtn";
import useSWR from "swr";
import VoucherListRow from "./VoucherListRow";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const VoucherList = () => {
  const { data, isLoading, error } = useSWR(
    `${import.meta.env.VITE_API_URL}/vouchers`,
    fetcher
  );

  return (
    <div>
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
                Voucher ID
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Amount (MMK)
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Product Count
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end"></th>
            </tr>
          </thead>

          <tbody className="text-md">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hidden last:table-row">
              <td colSpan={5} className="text-center text-xl px-6 py-10">
                There is no voucher.
              </td>
            </tr>

            {!isLoading &&
              data?.map((voucher, index) => (
                <VoucherListRow
                  key={voucher.id}
                  voucher={voucher}
                  index={index}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoucherList;
