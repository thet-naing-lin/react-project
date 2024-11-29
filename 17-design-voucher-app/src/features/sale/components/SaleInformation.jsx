import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { hourglass } from "ldrs";
import toast from "react-hot-toast";
import { FcApproval } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import { storeVoucher } from "../../../services/voucher";

hourglass.register();

const SaleInformation = () => {
  const [token] = useCookie("login_token");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [confirmVoucher, setConfirmVoucher] = useState(false);

  const { records, resetRecords } = useSaleProductStore();

  // Utility function to generate a unique invoice number
  function generateInvoiceNumber() {
    // Get the current date
    const date = new Date();

    // Format the date as YYYYMMDD
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    // Combine the formatted date and the random number
    const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;

    return invoiceNumber;
  }

  const navigate = useNavigate();

  const handleVoucherForm = async (data) => {
    setConfirmVoucher(true);

    const total = records.reduce((x, y) => x + y.cost, 0);
    const tax = total * 0.05;
    const net_total = total + tax;
    const created_at = new Date().toISOString();

    const currentVoucher = {
      ...data,
      records,
      total,
      tax,
      net_total,
      created_at,
    };

    const resp = await storeVoucher(currentVoucher);

    const json = await resp.json();

    if (resp.status === 201) {
      toast("Voucher created successfully!", {
        icon: <FcApproval className="text-xl" />,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });

      reset();
      resetRecords();

      if (data.redirect_to_detail) {
        navigate(`/dashboard/voucher-detail/${json?.data?.id}`);
      } else {
        navigate("/dashboard/vouchers");
      }

      setConfirmVoucher(false);
    } else {
      toast.error(json.message);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(handleVoucherForm)}
        id="voucherInfoForm"
        className="mb-5"
      >
        <div className=" grid grid-cols-1">
          {/* voucher id */}
          <div className="col-span-1">
            <div className="mb-5">
              <label
                htmlFor="voucher_id"
                className={`block mb-2 text-sm font-medium text-gray-900`}
              >
                Voucher ID
              </label>
              <input
                type="text"
                id="voucher_id"
                defaultValue={generateInvoiceNumber()}
                {...register("voucher_id", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                className={`bg-gray-50 border mb-1 ${
                  errors.voucher_id
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                placeholder="V12312312"
              />

              {errors.voucher_id?.type === "required" && (
                <p className="text-red-500 text-sm">Voucher ID is required</p>
              )}

              {errors.voucher_id?.type === "minLength" && (
                <p className="text-red-500 text-xs">
                  Voucher ID must be type more than 3 words
                </p>
              )}

              {errors.voucher_id?.type === "maxLength" && (
                <p className="text-red-500 text-xs">
                  Voucher ID must be less than 30 words
                </p>
              )}
            </div>
          </div>

          {/* customer name */}
          <div className="col-span-1">
            <div className="mb-5">
              <label
                htmlFor="customer_name"
                className={`block mb-2 text-sm font-medium text-gray-900`}
              >
                Customer Name
              </label>
              <input
                type="text"
                id="customer_name"
                {...register("customer_name", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                className={`bg-gray-50 border mb-1 ${
                  errors.customer_name
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-xs rounded-lg block w-full p-2.5`}
                placeholder="eg. John Doe"
              />

              {errors.customer_name?.type === "required" && (
                <p className="text-red-500 text-xs">
                  Customer name is required
                </p>
              )}

              {errors.customer_name?.type === "minLength" && (
                <p className="text-red-500 text-xs">
                  Customer name must be type more than 3 words
                </p>
              )}

              {errors.customer_name?.type === "maxLength" && (
                <p className="text-red-500 text-xs">
                  Customer name must be less than 30 words
                </p>
              )}
            </div>
          </div>

          {/* customer email */}
          <div className="col-span-1">
            <div className="mb-5">
              <label
                htmlFor="customer_email"
                className={`block mb-2 text-sm font-medium text-gray-900`}
              >
                Customer Email
              </label>
              <input
                type="text"
                id="customer_email"
                {...register("customer_email", {
                  required: true,
                  minLength: 3,
                  maxLength: 50,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  },
                })}
                className={`bg-gray-50 border mb-1 ${
                  errors.customer_email
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-xs rounded-lg block w-full p-2.5`}
                placeholder="eg. example@gmail.com"
              />

              {errors.customer_email?.type === "required" && (
                <p className="text-red-500 text-xs">
                  Customer Email is required
                </p>
              )}

              {errors.customer_email?.type === "minLength" && (
                <p className="text-red-500 text-xs">
                  Customer Email must be type more than 3 words
                </p>
              )}

              {errors.customer_email?.type === "maxLength" && (
                <p className="text-red-500 text-xs">
                  Customer Email must be less than 50 words
                </p>
              )}

              {errors.customer_email?.type === "pattern" && (
                <p className="text-red-500 text-sm">Invalid email address</p>
              )}
            </div>
          </div>

          {/* sale date */}
          <div className="col-span-1">
            <div className="mb-5">
              <label
                htmlFor="sale_date"
                className={`block mb-2 text-sm font-medium text-gray-900`}
              >
                Sale Date
              </label>
              <input
                type="date"
                id="sale_date"
                defaultValue={new Date().toISOString().split("T")[0]}
                {...register("sale_date", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                className={`bg-gray-50 border mb-1 ${
                  errors.sale_date
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              />

              {errors.sale_date?.type === "required" && (
                <p className="text-red-500 text-sm">Sale Date is required</p>
              )}

              {errors.sale_date?.type === "minLength" && (
                <p className="text-red-500 text-sm">
                  Sale Date must be type more than 3 words
                </p>
              )}

              {errors.sale_date?.type === "maxLength" && (
                <p className="text-red-500 text-sm">
                  Sale Date must be less than 30 words
                </p>
              )}
            </div>
          </div>
        </div>
      </form>

      <div className=" flex flex-col gap-3 justify-between items-center mt-auto">
        <div className=" flex flex-col">
          <div className="flex items-center mb-5">
            <input
              {...register("redirect_to_detail")}
              id="redirect_to_detail"
              type="checkbox"
              form="voucherInfoForm"
              defaultValue
              className={`w-4 h-4 rounded text-teal-400 bg-gray-100 border-teal-400  focus:ring-teal-400 `}
            />
            <label
              htmlFor="redirect_to_detail"
              className="ms-2 text-xs font-medium text-gray-900 select-none"
            >
              Redirect to Voucher Detail
            </label>
          </div>

          <div className="flex items-center">
            <input
              {...register("all_correct")}
              id="all-correct"
              type="checkbox"
              form="voucherInfoForm"
              defaultValue
              className={`w-4 h-4 rounded text-teal-400 bg-gray-100 border-teal-400  focus:ring-teal-400 `}
              {...register("all_correct", { required: true })}
            />
            <label
              htmlFor="all-correct"
              className="ms-2 text-xs font-medium text-gray-900 select-none"
            >
              Make sure all filled are correct
            </label>
          </div>
          {errors.all_correct?.type === "required" && (
            <p className="text-red-500 text-xs">Need to check this box.</p>
          )}
        </div>

        <button
          type="submit"
          form="voucherInfoForm"
          {...register("submit")}
          className=" inline-flex gap-1 justify-center px-5 py-2.5 text-white bg-teal-900 hover:scale-95 hover:text-white  font-medium rounded-lg text-sm w-full sm:w-auto  text-center"
        >
          Confirm Voucher
          {confirmVoucher && (
            <l-hourglass
              size="15"
              bg-opacity="0.2"
              speed="1.25"
              color="white"
            ></l-hourglass>
          )}
        </button>
      </div>
    </>
  );
};

export default SaleInformation;
