import React from "react";

const VoucherDetailSkeletonLoader = () => {
  return (
    <div className="w-[14.8cm]">
      {/* Header Skeleton */}
      <div className="flex justify-between mb-7">
        <div>
          <div className="h-6 bg-gray-300 rounded w-28 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-40 mb-1 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-32 animate-pulse"></div>
        </div>

        <div>
          <div className="h-6 bg-gray-300 rounded w-48 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-36 mb-1 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-40 animate-pulse"></div>
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="rounded-lg font-header">
        <div className="w-full text-left border border-teal-900 mb-5">
          <div className="bg-teal-900 text-white h-10 rounded-t animate-pulse"></div>

          {/* Table Body Rows */}
          <div className="space-y-4 py-3">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 gap-4 px-4 py-2 animate-pulse"
                >
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded col-span-1"></div>
                  <div className="h-4 bg-gray-300 rounded col-span-1 text-end"></div>
                  <div className="h-4 bg-gray-300 rounded col-span-1 text-end"></div>
                  <div className="h-4 bg-gray-300 rounded col-span-1 text-end"></div>
                </div>
              ))}
          </div>
        </div>

        {/* Totals Skeleton */}
        <div className="flex flex-col items-end space-y-5">
          <div className="border rounded-md border-teal-900 px-8 py-2 w-80 animate-pulse">
            <div className="flex justify-between">
              <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-300 rounded w-24"></div>
              <div className="h-4 bg-gray-300 rounded w-16"></div>
            </div>
          </div>

          <div className="bg-teal-900 rounded-md text-white text-xl uppercase px-8 py-2 w-80 animate-pulse">
            <div className="flex justify-between py-2">
              <div className="h-5 bg-gray-100 rounded w-20"></div>
              <div className="h-5 bg-gray-100 rounded w-28"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherDetailSkeletonLoader;
