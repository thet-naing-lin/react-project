import React, { useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { FaDeleteLeft } from "react-icons/fa6";
import useSWR, { useSWRConfig } from "swr";
import Swal from "sweetalert2";
import { lineSpinner } from "ldrs";
import toast from "react-hot-toast";
import { FcCancel } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import useCookie from "react-use-cookie";
import ShowDateTime from "../../../components/ShowDateTime";
import { destroyProduct } from "../../../services/product";

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

  const location = useLocation();

  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);
  lineSpinner.register();

  const handleDeleteBtn = async () => {
    const userConfirmation = await Swal.fire({
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
    });

    // isConfirmed is from SweetAlert
    if (userConfirmation.isConfirmed) {
      setIsDeleting(true);

      try {
        const resp = await destroyProduct(id);

        const json = await resp.json();

        if (resp.ok) {
          // This is using window.location.search ****************
          // const currentURL = `${import.meta.env.VITE_API_URL}/products${
          //   window.location.search
          // }`;
          // mutate(currentURL); // Refresh cache for the specific URL

          // It's better to use useLocation instead of window.location.search cuz of react app ****************
          const currentURL = `${import.meta.env.VITE_API_URL}/products${
            location.search
          }`;
          mutate(currentURL);

          toast(`${product_name} deleted successfully`, {
            icon: <FcCancel className="text-xl" />,
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
            position: "bottom-right",
          });
        } else {
          toast.error(json.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("Error deleting product");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <tr className="bg-white border-b text-sm hover:bg-gray-50 ">
      <td className="px-6 py-4">
        {index + 1}({id})
      </td>
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
            to={`/dashboard/product-edit/${id}`}
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
