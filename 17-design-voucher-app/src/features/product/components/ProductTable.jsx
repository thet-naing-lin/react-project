import React, { useEffect, useRef, useState } from "react";

import { FaPlus } from "react-icons/fa";
import useSWR from "swr";
import { TbMoodSearch } from "react-icons/tb";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { debounce } from "lodash";
import ProductTableLoader from "./ProductTableLoader";
import ProductTableEmptyStage from "./ProductTableEmptyStage";
import ProductRow from "./ProductRow";
import { fetchProducts } from "../../../services/product";
import Pagination from "../../../components/Pagination";
import { urlToParamObj } from "../../../utils/url";
import Sortable from "../../../components/Sortable";

const ProductTable = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [params, setParams] = useSearchParams();

  const [search, setSearch] = useState("");

  const location = useLocation();

  const searchInput = useRef();

  useEffect(() => {
    if (params.get("q")) {
      searchInput.current.value = params.get("q");
    }
  }, []);

  const [fetchUrl, setFetchUrl] = useState(
    `${apiUrl}/products${location.search}`
  );

  const { data, isLoading, error } = useSWR(fetchUrl, fetchProducts);

  const updateFetchUrl = (url) => {
    setFetchUrl(url);
    // using urlToParamObj from util folder (separate code)
    setParams(urlToParamObj(url));
  };

  const handleSort = (sortData) => {
    const sortParams = new URLSearchParams(sortData).toString();
    setParams(sortData);
    setFetchUrl(`${import.meta.env.VITE_API_URL}/products?${sortParams}`);
  };

  const handleSearch = debounce((e) => {
    if (e.target.value) {
      setParams({ q: e.target.value });
      setFetchUrl(`${apiUrl}/products?q=${e.target.value}`);
    } else {
      setParams({});
      setFetchUrl(`${apiUrl}/products`);
    }
  }, 500);

  const handleClearSearch = () => {
    setFetchUrl(`${apiUrl}/products`);
    searchInput.current.value = "";
    setParams({});
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
              <TbMoodSearch className="size-5 text-gray-500 " />
            </div>
            <input
              type="text"
              onChange={handleSearch}
              ref={searchInput}
              className="text-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
              placeholder="Search Products"
            />
          </div>

          {fetchUrl !== `${apiUrl}/products` && (
            <button onClick={handleClearSearch} className=" hover:scale-75">
              <RxCross2 className=" size-5 font-bold text-red-500 ms-1" />
            </button>
          )}
        </div>

        <div className="">
          <Link
            to="/dashboard/product-create"
            className="flex items-center gap-2 text-white bg-teal-900 hover:scale-95 hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            <FaPlus />
            Add New Product
          </Link>
        </div>
      </div>
      <div className="font-body mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left rtl:text-right text-gray-500 ">
          <thead className=" text-white text-xs uppercase bg-teal-900">
            <tr>
              <th scope="col" className="px-6 py-3">
                <Sortable handleSort={handleSort} sort_by="id">
                  #
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3">
                <Sortable handleSort={handleSort} sort_by="product_name">
                  Title
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-end text-nowrap">
                <Sortable handleSort={handleSort} sort_by="price" align={"right"}>
                  Price (mmk)
                </Sortable>
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
              <ProductTableLoader />
            ) : data?.data?.length === 0 ? (
              <ProductTableEmptyStage />
            ) : (
              data?.data?.map((product, index) => (
                <ProductRow key={product.id} product={product} index={index} />
              ))
            )}
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

export default ProductTable;
