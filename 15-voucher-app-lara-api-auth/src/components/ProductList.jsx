import React, { useRef, useState } from "react";

import SearchBtnCreateBtn from "./SearchBtnCreateBtn";

import { FaPlus } from "react-icons/fa";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import ProductListEmptyStage from "./ProductListEmptyStage";
import ProductRow from "./ProductRow";
import useProductCreateStore from "../stores/useProductCreateStore";
import { TbMoodSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { debounce } from "lodash";
import Pagination from "./Pagination";
import useCookie from "react-use-cookie";

const ProductList = () => {
  const [token] = useCookie("login_token");

  const apiUrl = import.meta.env.VITE_API_URL;
  // console.log(apiUrl);

  const [search, setSearch] = useState("");

  const [fetchUrl, setFetchUrl] = useState(`${apiUrl}/products`);

  const searchInput = useRef();
  // console.log(searchInput);

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

  const { data, isLoading, error } = useSWR(fetchUrl, fetcher);
  // console.log(data);

  const { isAddingProduct } = useProductCreateStore();
  // console.log(isAddingProduct);

  const updateFetchUrl = (url) => {
    setFetchUrl(url);
  };

  const handleSearch = debounce((e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
    setFetchUrl(`${apiUrl}/products?q=${e.target.value}`);
  }, 500);

  const handleClearSearch = () => {
    setFetchUrl(`${apiUrl}/products`);
    searchInput.current.value = "";
    setSearch("");
  };

  return (
    <div>
      {/* <SearchBtnCreateBtn
        placeholder="Search Products"
        icon={<FaPlus />}
        btnName="Add New Product"
        url="/product/create"
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
              placeholder="Search Products"
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
            to="/dashboard/product/create"
            className="flex items-center gap-2 text-white bg-teal-900 hover:scale-95 hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700"
          >
            <FaPlus />
            Add New Product
          </Link>
        </div>
      </div>
      <div className="font-body mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" text-white text-sm uppercase bg-teal-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-end text-nowrap">
                Price (mmk)
              </th>
              <th scope="col" className="px-6 py-3 text-end text-nowrap">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end text-nowrap">
                Updated At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-md font-header">
            {isLoading ? (
              <ProductListSkeletonLoader />
            ) : data?.data?.length === 0 ? (
              <ProductListEmptyStage />
            ) : (
              data?.data?.map((product, index) => (
                <ProductRow key={product.id} product={product} index={index} />
              ))
            )}

            {/* {isAddingProduct && (
              <tr className="animate-pulse bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">
                  <div className="h-4 w-4 bg-gray-200 rounded dark:bg-gray-700"></div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="h-4 w-36 bg-gray-200 rounded dark:bg-gray-700"></div>
                </th>
                <td className="px-6 py-4">
                  <div className="h-4 w-12 ml-auto bg-gray-200 rounded dark:bg-gray-700"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 w-20 ml-auto bg-gray-200 rounded dark:bg-gray-700"></div>
                  <div className="h-4 w-16 ml-auto mt-2 bg-gray-200 rounded dark:bg-gray-700"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 w-20 ml-auto bg-gray-200 rounded dark:bg-gray-700"></div>
                  <div className="h-4 w-16 ml-auto mt-2 bg-gray-200 rounded dark:bg-gray-700"></div>
                </td>
                <td className="px-6 py-4 text-end">
                  <div className="inline-flex gap-1 rounded-md" role="group">
                    <div className=" h-7 w-10 bg-gray-200 rounded-s-md dark:bg-gray-700"></div>
                    <div className=" h-7 w-10 bg-gray-200 rounded-e-md dark:bg-gray-700"></div>
                  </div>
                </td>
              </tr>
            )} */}
          </tbody>
        </table>
      </div>

      {!isLoading && (
        <Pagination
          links={data?.links}
          meta={data?.meta}
          updateFetchUrl={updateFetchUrl}
        />
      )}
    </div>
  );
};

export default ProductList;
