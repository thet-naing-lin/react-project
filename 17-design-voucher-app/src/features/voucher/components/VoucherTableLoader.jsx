import React from "react";
import { useSearchParams } from "react-router-dom";

const VoucherTableLoader = () => {
  const [params, setParams] = useSearchParams();
  const currentLimit = params.get("limit") ?? 5;

  const rows = Array(parseInt(currentLimit)).fill(null); //
  return (
    <>
      {rows.map((_, index) => (
        <tr
          key={index}
          className="font-header text-[11px] bg-white border-b hover:bg-gray-50 "
        >
          <td className="px-6 py-4">
            <div className="h-4 w-6 bg-gray-200 rounded-md animate-pulse"></div>
          </td>

          <td className="px-6 py-4">
            <div className="h-4 w-32 bg-gray-200 rounded-md animate-pulse mb-1"></div>
            <div className="h-4 w-20 bg-gray-200 rounded-md animate-pulse"></div>
          </td>

          <td
            scope="row"
            className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap"
          >
            <div className="flex gap-1 items-center">
              <div className="size-8 bg-gray-200 rounded-full animate-pulse mb-1"></div>

              <div className="">
                <div className="h-4 w-20 bg-gray-200 rounded-md animate-pulse mb-1"></div>
                <div className="h-4 w-32 bg-gray-200 rounded-md animate-pulse"></div>
              </div>
            </div>
          </td>

          <td className="px-6 py-4 flex justify-end mt-2">
            <div className="h-4 w-16 bg-gray-200 rounded-md animate-pulse"></div>
          </td>

          <td className="px-6 py-4">
            <div className="space-y-1 flex flex-col items-end">
              <div className="h-3 w-16 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-3 w-12 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </td>

          <td className="px-6 py-4 text-end flex gap-3 items-end justify-end">
            <div className="h-8 w-10 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="h-8 w-10 bg-gray-200 rounded-md animate-pulse"></div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default VoucherTableLoader;
