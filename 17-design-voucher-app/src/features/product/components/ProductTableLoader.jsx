import React from "react";

const ProductTableLoader = () => {
  const rows = Array(5).fill(null); // Create an array with 5 elements

  return (
    <>
      {rows.map((_, index) => (
        <tr
          key={index}
          className="animate-pulse bg-white border-b hover:bg-gray-50"
        >
          <td className="px-6 py-4">
            <div className="h-4 w-4 bg-gray-200 rounded"></div>
          </td>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            <div className="h-4 w-36 bg-gray-200 rounded"></div>
          </th>
          <td className="px-6 py-4">
            <div className="h-4 w-12 ml-auto bg-gray-200 rounded"></div>
          </td>
          <td className="px-6 py-4">
            <div className="h-4 w-20 ml-auto bg-gray-200 rounded"></div>
            <div className="h-4 w-16 ml-auto mt-2 bg-gray-200 rounded"></div>
          </td>
          <td className="px-6 py-4">
            <div className="h-4 w-20 ml-auto bg-gray-200 rounded"></div>
            <div className="h-4 w-16 ml-auto mt-2 bg-gray-200 rounded"></div>
          </td>
          <td className="px-6 py-4 text-end">
            <div className="inline-flex gap-1 rounded-md" role="group">
              <div className="h-7 w-10 bg-gray-200 rounded-s-md"></div>
              <div className="h-7 w-10 bg-gray-200 rounded-e-md"></div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductTableLoader;
