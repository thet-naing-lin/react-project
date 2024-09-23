import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import useRecordStore from "../stores/useRecordStore";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SaleForm = () => {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URL}/products`,
    fetcher
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // using zustand
  const { addRecord, records, changeQuantity } = useRecordStore();

  const handleSaleForm = (data) => {
    // console.log(data);
    const currentProduct = JSON.parse(data.product);
    const currentProductId = currentProduct.id;

    // console.log({
    //   id: uuidv4(),
    //   product: currentProduct,
    //   quantity: data.quantity,
    //   cost: data.quantity * currentProduct.price,
    //   created_at: new Date().toISOString(),
    // });

    const existingRecord = records.find(
      ({ product: { id } }) => id === currentProductId
    );
    // console.log(existingRecord);

    if (existingRecord) {
      changeQuantity(existingRecord.id, data.quantity);
    } else {
      addRecord({
        id: uuidv4(),
        product: currentProduct,
        quantity: data.quantity,
        cost: data.quantity * currentProduct.price,
        created_at: new Date().toISOString(),
      });
    }

    reset();
  };

  return (
    <div className="container mx-auto mb-7 block print:hidden">
      <form id="createRecordForm" onSubmit={handleSubmit(handleSaleForm)}>
        <div className="grid grid-cols-5 gap-3 bg-teal-100 p-5 rounded shadow">
          <div className="col-span-3">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Product
            </label>
            <select
              id="productSelect"
              name="product_select"
              {...register("product", {
                required: true,
              })}
              className={`mb-1 bg-gray-50 border ${
                errors.product
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white `}
            >
              <option value="">Choose a product</option>

              {!isLoading &&
                data.map((product) => (
                  <option key={product.id} value={JSON.stringify(product)}>
                    {product.product_name}
                  </option>
                ))}
            </select>
            {errors.product?.type === "required" && (
              <p className="text-red-500 text-sm font-bold mt-2">
                Please select the product
              </p>
            )}
          </div>

          <div className="col-span-1">
            <label
              htmlFor="quantity"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Amount
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              {...register("quantity", {
                required: true,
                min: 1,
              })}
              className={`mb-1 bg-gray-50 border ${
                errors.quantity
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white `}
            />

            {errors.quantity?.type === "required" && (
              <p className="text-red-500 text-[11px] font-bold mt-2">
                Select the count of the product
              </p>
            )}

            {errors.quantity?.type === "min" && (
              <p className="text-red-500 text-[11px] font-bold mt-2">
                Select positive number
              </p>
            )}
          </div>

          <div className="col-span-1">
            <button
              type="submit"
              className=" sm:w-28 md:w-32 lg:w-44 h-[70px] text-sm flex justify-center items-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-md text-center"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
