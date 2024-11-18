import React, { useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { FaDeleteLeft } from "react-icons/fa6";
import useSWR, { useSWRConfig } from "swr";
import Swal from "sweetalert2";
import { lineSpinner } from "ldrs";
import toast from "react-hot-toast";
import { FcCancel } from "react-icons/fc";
import { Link } from "react-router-dom";
import useCookie from "react-use-cookie";
import ShowDateTime from "../../../components/ShowDateTime";

const ProductRow = ({
  product: { id, product_name, price, created_at, updated_at },
  index,
}) => {
  const [token] = useCookie("login_token");

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );
  // console.log(data);

  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);
  // console.log(created_at);
  lineSpinner.register();

  const handleDeleteBtn = async () => {
    // console.log(id);

    await Swal.fire({
      title: "Are you sure to delete?",
      text: `(${product_name})`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16bdca",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        confirmButton: "swal-confirm-text",
        text: "swal-text",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setIsDeleting(true);

        const resp = fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
          method: "DELETE",
          headers: {
            // Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        // const json = resp.json();

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
    <tr className="bg-white border-b text-sm hover:bg-gray-50 ">
      <td className="px-6 py-4">{index + 1}({id})</td>
      <th
        scope="row"
        className="px-6 py-4 text-nowrap font-medium text-gray-900 "
      >
        {product_name}
      </th>
      <td className="px-6 py-4 text-end">{price}</td>
      <td className="px-6 py-4 text-end">
        <ShowDateTime timestamp={created_at} />
      </td>
      <td className="px-6 py-4 text-end">
        <ShowDateTime timestamp={updated_at} />
      </td>

      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md" role="group">
          {/* Edit Button */}
          <Link
            to={`/dashboard/product/edit/${id}`}
            className="w-10 h-8 flex justify-center items-center text-sm 
        text-blue-500  bg-transparent border-2 
        border-blue-500 rounded-md hover:bg-blue-500 hover:text-white 
        transition-all duration-300 ease-in-out mx-1"
          >
            <RiEdit2Line />
          </Link>

          {/* Delete Button */}
          <button
            type="button"
            onClick={handleDeleteBtn}
            className="w-10 h-8 flex justify-center items-center text-sm 
        text-red-500 bg-transparent border-2 
        border-red-500 rounded-md hover:bg-red-500 hover:text-white 
        transition-all duration-300 ease-in-out mx-1"
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
