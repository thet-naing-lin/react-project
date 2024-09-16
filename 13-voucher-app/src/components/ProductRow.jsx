import React, { useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { FaDeleteLeft } from "react-icons/fa6";
import { useSWRConfig } from "swr";
import Swal from "sweetalert2";
import { lineSpinner } from "ldrs";
import toast from "react-hot-toast";
import { FcCancel } from "react-icons/fc";
import { Link } from "react-router-dom";

const ProductRow = ({
  product: { id, product_name, price, created_at },
  index,
}) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  lineSpinner.register();

  // for date and time
  const date = new Date(created_at);

  const currentDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const currentTime = date.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const handleDeleteBtn = async () => {
    // console.log(id);

    await Swal.fire({
      title: "Are you sure to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16bdca",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        confirmButton: "swal-confirm-text",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setIsDeleting(true);

        fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
          method: "DELETE",
        });

        mutate(`${import.meta.env.VITE_API_URL}/products`);

        toast(`${product_name} deleted successfully`, {
          icon: <FcCancel className="text-xl" />,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
          position: "bottom-right",
        });
      }
    });

    mutate(`${import.meta.env.VITE_API_URL}/products`);
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4">{index + 1}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product_name}
      </th>
      <td className="px-6 py-4 text-end">{price}</td>
      <td className="px-6 py-4 text-end">
        <p className=" text-xs">{currentDate}</p>
        <p className=" text-xs">{currentTime}</p>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md" role="group">
          <Link
            to={`/product/edit/${id}`}
            className="w-10 h-8 flex justify-center items-center text-sm text-teal-600 dark:text-teal-500 bg-transparent border border-s-teal-500 border-t-teal-500 border-b-teal-500  rounded-s-md hover:opacity-60 focus:z-10"
          >
            <RiEdit2Line />
          </Link>

          <button
            type="button"
            onClick={handleDeleteBtn}
            className="w-10 h-8 flex justify-center items-center text-sm text-red-500 dark:text-red-700 bg-transparent border border-teal-500 rounded-e-md hover:opacity-60 focus:z-10"
          >
            {isDeleting ? (
              <l-line-spinner
                size="20"
                stroke="2"
                speed="1"
                color="red"
              ></l-line-spinner>
            ) : (
              <FaDeleteLeft />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
