import React, { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import ShowDate from "./ShowDate";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";
import { FcCancel } from "react-icons/fc";
import Swal from "sweetalert2";
import { lineSpinner } from "ldrs";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

lineSpinner.register();

const VoucherListRow = ({
  voucher: {
    id,
    voucher_id,
    customer_name,
    customer_email,
    sale_date,
    netTotal,
    records,
    created_at,
  },
  index,
}) => {
  // console.log(records);

  const date = new Date(sale_date);

  const currentDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const time = new Date(created_at);

  const currentTime = time.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const [isDeleting, setIsDeleting] = useState(false);

  const { mutate } = useSWRConfig();

  const handleDeleteVoucherBtn = async () => {
    // console.log(id);

    await Swal.fire({
      title: `Are you sure to delete customer "${customer_name}"?`,
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

        fetch(`${import.meta.env.VITE_API_URL}/vouchers/${id}`, {
          method: "DELETE",
        });

        toast(`${customer_name} deleted successfully`, {
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

    mutate(`${import.meta.env.VITE_API_URL}/vouchers`);
  };

  return (
    <tr className=" font-header text-sm bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4"> {index + 1}</td>

      <td className="px-6 py-4 font-bold"> {voucher_id}</td>
      <th scope="row" className="px-6 py-4  whitespace-nowrap dark:text-white">
        {customer_name}
      </th>
      <td className="px-6 py-4">{customer_email}</td>
      <td className="px-6 py-4 text-end">{records.length}</td>
      <td className="px-6 py-4 text-end ">
        <ShowDate timestamp={sale_date} timeOnly={created_at} />
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md" role="group">
          {/* Detail Button */}
          <Link
            to={`/voucher/detail/${id}`}
            className="w-10 h-8 flex justify-center items-center text-sm 
        text-blue-500 dark:text-blue-700 bg-transparent border-2 
        border-blue-500 rounded-md hover:bg-blue-500 hover:text-white 
        transition-all duration-300 ease-in-out mx-1"
          >
            <FaInfoCircle />
          </Link>

          {/* Delete Button */}
          <button
            type="button"
            onClick={handleDeleteVoucherBtn}
            className="w-10 h-8 flex justify-center items-center text-sm 
        text-red-500 dark:text-red-700 bg-transparent border-2 
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

export default VoucherListRow;
