import React from "react";

const ProductListEmptyStage = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td colSpan={5} className="text-center text-xl px-6 py-10">
        There is no product.
      </td>
    </tr>
  );
};

export default ProductListEmptyStage;
