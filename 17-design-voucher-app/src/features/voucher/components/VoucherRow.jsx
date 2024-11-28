import React, { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";
import { FcCancel } from "react-icons/fc";
import Swal from "sweetalert2";
import { lineSpinner } from "ldrs";
import { FaInfoCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import ShowDateTime from "../../../components/ShowDateTime";
import Avatar from "react-avatar";
import { IoCalendarOutline } from "react-icons/io5";
import { destroyVoucher } from "../../../services/voucher";

lineSpinner.register();

const VoucherRow = ({
  voucher: {
    id,
    voucher_id,
    customer_name,
    customer_email,
    sale_date,
    net_total,
    records,
    created_at,
    total,
  },
  index,
}) => {
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

  const location = useLocation();

  const handleDeleteVoucherBtn = async () => {
    const userConfirmation = await Swal.fire({
      title: `Are you sure to delete customer "${customer_name}"?`,
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
        const resp = await destroyVoucher(id);

        const json = await resp.json();

        if (resp.ok) {
          const currentURL = `${import.meta.env.VITE_API_URL}/vouchers${
            location.search
          }`;
          mutate(currentURL);

          toast(`${customer_name} deleted successfully`, {
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
        toast.error("Error deleting voucher");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <tr className=" font-header text-sm bg-white border-b  hover:bg-gray-50">
      <td className="px-6 py-4">
        {" "}
        {index + 1}({id})
      </td>

      <td className="px-6 py-4 font-bold text-nowrap text-xs">
        <p className="  text-gray-800">{voucher_id}</p>
        <p className=" text-zinc-400 text-[10px] flex gap-1 items-center">
          <IoCalendarOutline />
          {sale_date}
        </p>
      </td>

      <td
        scope="row"
        className="px-6 py-4  whitespace-nowrap flex items-center gap-1"
      >
        <Avatar name={customer_name} round={true} size="30" />
        <div className=" flex flex-col">
          <span className=" font-bold text-gray-800">{customer_name}</span>
          <span className=" text-zinc-400 text-xs">{customer_email}</span>
        </div>
      </td>

      <td className="px-6 py-4 text-end">{total}</td>

      <td className="px-6 py-4 text-end text-nowrap">
        <ShowDateTime timestamp={created_at} timeOnly={created_at} />
      </td>

      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md" role="group">
          {/* Detail Button */}
          <Link
            to={`/dashboard/voucher-detail/${id}`}
            className="w-10 h-8 flex justify-center items-center text-sm 
        text-blue-500 bg-transparent border-2 
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

export default VoucherRow;
