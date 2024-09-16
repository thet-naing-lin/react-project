import React from "react";

import SearchBtnCreateBtn from "./SearchBtnCreateBtn";

import { FaPlus } from "react-icons/fa";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import ProductListEmptyStage from "./ProductListEmptyStage";
import ProductRow from "./ProductRow";
import useProductCreateStore from "../stores/useProductCreateStore";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductList = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  // console.log(apiUrl);

  const { data, isLoading, error } = useSWR(`${apiUrl}/products`, fetcher);

  const { isAddingProduct } = useProductCreateStore();
  // console.log(isAddingProduct);
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
              data.map((product, index) => (
                <ProductRow key={product.id} product={product} index={index} />
              ))
            )}

            {isAddingProduct && (
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
                <td className="px-6 py-4 text-end">
                  <div className="inline-flex gap-1 rounded-md" role="group">
                    <div className=" h-7 w-10 bg-gray-200 rounded-s-md dark:bg-gray-700"></div>
                    <div className=" h-7 w-10 bg-gray-200 rounded-e-md dark:bg-gray-700"></div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
