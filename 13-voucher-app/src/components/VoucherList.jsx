import React from "react";

import { HiShoppingCart } from "react-icons/hi2";
import SearchBtnCreateBtn from "./SearchBtnCreateBtn";
import useSWR from "swr";
import VoucherListRow from "./VoucherListRow";
import VoucherListSkeletonLoader from "./VoucherListSkeletonLoader";

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
