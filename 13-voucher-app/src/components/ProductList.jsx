import React from "react";

import SearchBtnCreateBtn from "./SearchBtnCreateBtn";

import { FaPlus } from "react-icons/fa";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import ProductListEmptyStage from "./ProductListEmptyStage";
import ProductRow from "./ProductRow";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductList = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  // console.log(apiUrl);

  const { data, isLoading, error } = useSWR(`${apiUrl}/products`, fetcher);

  return (
    <div>
      <SearchBtnCreateBtn
        placeholder="Search Products"
        icon={<FaPlus />}
        btnName="Add New Product"
        url="/product/create"
      />
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
          <tbody className="text-md font-header">
            {isLoading ? (
              <ProductListSkeletonLoader />
            ) : data.length === 0 ? (
              <ProductListEmptyStage />
            ) : (
              data.map((product, index) => <ProductRow key={product.id} product={product} index={index} />)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
