import React from "react";

const ProductEditLoader = () => {
  return (
    <div className="animate-pulse bg-zinc-200 p-5 rounded-md mt-10 font-header w-3/4 mx-auto">
      <div className="h-8 bg-gray-300 rounded w-1/3 mb-3"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3 mb-7"></div>

      <div>
        <div>
          <div className="mb-10">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-10 bg-gray-300 rounded mb-1"></div>
          </div>
          <div className="mb-10">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-10 bg-gray-300 rounded mb-1"></div>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 ms-2"></div>
        </div>

        <div className="flex justify-end">
          <div className="h-10 bg-gray-300 rounded w-24 mr-3"></div>
          <div className="h-10 bg-gray-300 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductEditLoader;
