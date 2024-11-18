import React from "react";
import { Link } from "react-router-dom";

const ProductTableEmptyStage = () => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50 ">
      <td colSpan={6} className="text-center text-md px-6 py-10 italic">
        There is no product. <Link to={"/dashboard/product-create"} className="lowercase underline text-blue-500">Create One</Link>
      </td>
    </tr>
  );
};

export default ProductTableEmptyStage;
