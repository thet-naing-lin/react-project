import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { hourglass } from "ldrs";
import toast from "react-hot-toast";
import { FcCheckmark } from "react-icons/fc";

hourglass.register();

const ProductCreateCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const [isCreating, setIsCreating] = useState(false);

  const handleCreateProduct = async (data) => {
    // console.log(data);
    setIsCreating(true);

    // data.created_at = new Date().toISOString();

    await fetch(`${import.meta.env.VITE_API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        created_at: new Date().toISOString(),
      }),
    });

    setIsCreating(false);
    reset();
    toast("Product created successfully!", {
      icon: <FcCheckmark className="text-xl" />,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

    if (data.back_to_product_list) {
      navigate("/product");
    }
  };

  return (
    <div className=" bg-zinc-200 p-5 rounded-md mt-10 font-header w-3/4 mx-auto">
      <h1 className=" text-3xl font-bold mb-3">Create New Product</h1>
      <p className="mb-7 text-gray-400">
        create your product with detail information...
      </p>

      <form onSubmit={handleSubmit(handleCreateProduct)}>
        <div>
          <div className="mb-10">
            <label
              htmlFor="first_name"
              className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}
            >
              New Product Name
            </label>
            <input
              type="text"
              {...register("product_name", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              className={`bg-gray-50 border mb-1 ${
                errors.product_name
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white `}
              placeholder="eg. Orange"
            />

            {errors.product_name?.type === "required" && (
              <p className="text-red-500 text-sm">Product name is required</p>
            )}

            {errors.product_name?.type === "minLength" && (
              <p className="text-red-500 text-sm">
                Product name must be type more than 3 words
              </p>
            )}

            {errors.product_name?.type === "maxLength" && (
              <p className="text-red-500 text-sm">
                Product name must be less than 30 words
              </p>
            )}
          </div>
          <div className="mb-10">
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Price
            </label>
            <input
              type="number"
              {...register("price", {
                required: true,
                min: 100,
                max: 999999999,
              })}
              className={`mb-1 bg-gray-50 border ${
                errors.price
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white `}
              placeholder="eg. 1000"
            />

            {errors.price?.type === "required" && (
              <p className="text-red-500 text-sm">Product price is required</p>
            )}

            {errors.price?.type === "min" && (
              <p className="text-red-500 text-sm">Product price must be at least 100</p>
            )}

            {errors.price?.type === "max" && (
              <p className="text-red-500 text-sm">
                Product price must be under 1 billion
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center mb-4">
          <input
            {...register("all_correct")}
            id="all-correct"
            type="checkbox"
            defaultValue
            required
            className={`w-4 h-4 text-teal-400 bg-gray-100 border-teal-400  focus:ring-teal-400 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 rounded`}
          />
          <label
            htmlFor="all-correct"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
          >
            Make sure all filled are correct
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            {...register("back_to_product_list")}
            id="back-to-product-list"
            type="checkbox"
            defaultValue
            className={`w-4 h-4 text-teal-400 bg-gray-100 border-teal-400  focus:ring-teal-400 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 rounded`}
          />
          <label
            htmlFor="back-to-product-list"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
          >
            Back to product list after saving
          </label>
        </div>

        <div className="flex justify-end">
          <Link
            to={"/product"}
            className="text-white bg-gray-700 me-3 hover:bg-gray-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className=" inline-flex gap-1 px-5 py-2.5 text-black bg-teal-400 hover:bg-teal-500 hover:text-white  font-medium rounded-lg text-sm w-full sm:w-auto  text-center dark:bg-teal-600 dark:hover:bg-teal-700"
          >
            Create
            {isCreating && (
              <l-hourglass
                size="15"
                bg-opacity="0.2"
                speed="1.25"
                color="black"
              ></l-hourglass>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductCreateCard;
