import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import VoucherDetailRow from "./VoucherDetailRow";
import VoucherDetailSkeletonLoader from "./VoucherDetailSkeletonLoader";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const VoucherDetailCard = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useSWR(
    `${import.meta.env.VITE_API_URL}/vouchers/${id}`,
    fetcher
  );

  // console.log(data?.created_at);

  const time = new Date(data?.created_at);

  const saleTime = time.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className=" mt-10">
      {isLoading ? (
        <VoucherDetailSkeletonLoader />
      ) : (
        <div className=" font-mono">
          <div className="flex justify-between mb-7">
            <div className="">
              <h1 className=" font-bold text-lg mb-2">INVOICE</h1>
              <p>Invoice Number : {data?.voucher_id}</p>
              <p>
                Date : {data?.sale_date} ({saleTime})
              </p>
            </div>

            <div className="">
              <h3 className=" font-bold text-lg mb-2">Payment Information</h3>
              <p>Name : {data?.customer_name}</p>
              <p>Email : {data?.customer_email}</p>
            </div>
          </div>

          <div className=" rounded-lg font-header">
            <table className="w-full text-left border border-teal-900 mb-5">
              <thead>
                <tr className="bg-teal-900 text-white">
                  <th className="py-3 px-4">ITEM</th>
                  <th className="py-3 px-4">DESCRIPTION</th>
                  <th className="py-3 px-4 text-end">RATE</th>
                  <th className="py-3 px-4 text-end">Quantity</th>
                  <th className="py-3 px-4 text-end">AMOUNT</th>
                </tr>
              </thead>

              <tbody>
                {!isLoading &&
                  data?.records?.map((recordItem, index) => {
                    // console.log(recordItem);
                    return (
                      <VoucherDetailRow
                        key={recordItem.id}
                        recordItem={recordItem}
                        index={index}
                      />
                    );
                  })}
              </tbody>
            </table>

            <div className="flex flex-col items-end space-y-5">
              <div className=" border border-teal-900  px-8 py-2 w-80">
                <p className=" flex justify-between">
                  <span>Sub Total:</span>
                  <span>{data.total.toFixed(2)}</span>
                </p>
                <p className=" flex justify-between">
                  <span>Sub Tax:</span>
                  <span>{data.tax.toFixed(2)}</span>
                </p>
              </div>

              <div className=" bg-teal-900 text-white text-xl uppercase px-8 py-2 w-80">
                <p className=" flex justify-between">
                  <span>TOTAL:</span>
                  <span>{data.netTotal.toFixed(2)} MMK</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoucherDetailCard;
