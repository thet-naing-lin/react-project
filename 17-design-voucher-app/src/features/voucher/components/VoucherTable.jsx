import React, { useEffect, useRef } from "react";

import { HiShoppingCart } from "react-icons/hi2";

import useSWR from "swr";

import { useState } from "react";
import { TbMoodSearch } from "react-icons/tb";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { debounce, set, throttle } from "lodash";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import VoucherRow from "./VoucherRow";
import PageLoading from "../../../components/PageLoading";
import VoucherTableLoader from "./VoucherTableLoader";
import Pagination from "../../../components/Pagination";
import reactUseCookie from "react-use-cookie";
import { fetchVouchers } from "../../../services/voucher";
import { urlToParamObj } from "../../../utils/url";
import Sortable from "../../../components/Sortable";

const VoucherTable = () => {
  const [params, setParams] = useSearchParams();

  const [search, setSearch] = useState("");

  const location = useLocation();

  const searchInput = useRef("");

  useEffect(() => {
    if (params.get("q")) {
      searchInput.current.value = params.get("q");
    }
  }, []);

  // testing
  const [fetchUrl, setFetchUrl] = useState(
    `${import.meta.env.VITE_API_URL}/vouchers${location.search}`
  );

  const { data, isLoading } = useSWR(fetchUrl, fetchVouchers);

  const updateFetchUrl = (url) => {
    setFetchUrl(url);
    // using urlToParamObj from util folder (separate code)
    setParams(urlToParamObj(url));
  };

  const handleSearch = debounce((e) => {
    if (e.target.value) {
      setSearch(e.target.value);
      setParams({ q: e.target.value });

      setFetchUrl(
        `${import.meta.env.VITE_API_URL}/vouchers?q=${e.target.value}`
      );
    } else {
      setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers`);
      searchInput.current.value = "";
      setParams({});
      setSearch("");
    }
  }, 500);

  const handleClearSearch = () => {
    setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers`);
    searchInput.current.value = "";
    setParams({});
    setSearch("");
  };

  const handleSort = (sortData) => {
    const sortParams = new URLSearchParams(sortData).toString();
    setParams(sortData);
    setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers?${sortParams}`);
  };

  return (
    <div>
      <div className=" flex justify-between mb-3 font-body">
        <div className=" flex items-center justify-center">
          <div className="relative font-header">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <TbMoodSearch className="size-5 text-gray-500" />
            </div>
            <input
              type="text"
              onChange={handleSearch}
              ref={searchInput}
              id="input-group-1"
              className="text-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
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
            className="flex items-center gap-2 text-white bg-teal-900 hover:scale-95 hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            <HiShoppingCart className="size-4" />
            Create Sale
          </Link>
        </div>
      </div>

      <div className="font-body mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left rtl:text-right text-gray-500">
          <thead className="text-white text-xs uppercase bg-teal-900">
            <tr>
              <th scope="col" className="px-6 py-3">
                <Sortable handleSort={handleSort} sort_by="id">
                  #
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3">
                Voucher ID
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap">
                <Sortable handleSort={handleSort} sort_by="customer_name">
                  TotCustomer Info
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                <Sortable handleSort={handleSort} sort_by="total" align={"right"}>
                  Total
                </Sortable>
              </th>

              <th scope="col" className="px-6 py-3 text-end text-nowrap">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end"></th>
            </tr>
          </thead>

          <tbody className="text-md">
            <tr className="bg-white font-header border-b hover:bg-gray-50 hidden last:table-row">
              <td colSpan={7} className="text-center text-xl px-6 py-10">
                There is no voucher.
              </td>
            </tr>

            {isLoading ? (
              <VoucherTableLoader />
            ) : (
              data?.data?.map((voucher, index) => (
                <VoucherRow key={voucher.id} voucher={voucher} index={index} />
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        links={data?.links}
        meta={data?.meta}
        updateFetchUrl={updateFetchUrl}
      />
    </div>
  );
};

export default VoucherTable;
