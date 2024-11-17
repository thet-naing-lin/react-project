import React from "react";
import { Link } from "react-router-dom";

const ProductTableEmptyStage = () => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50 ">
      <td colSpan={6} className="text-center text-xl px-6 py-10">
        There is no product. <Link to={"/dashboard/product-create"} className=" text-lg underline text-blue-500">Create One</Link>
      </td>
    </tr>
  );
};

export default ProductTableEmptyStage;
