import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FcCancel } from "react-icons/fc";
import useSaleProductStore from "../../../stores/useSaleProductStore";

const SaleProductTableRow = ({
  record: {
    id,
    quantity,
    cost,
    product: { product_name, price },
  },
  index,
}) => {
  const { removeRecord, changeQuantity } = useSaleProductStore();

  const handleDeleteRecord = () => {
    // console.log(id);
    Swal.fire({
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
        removeRecord(id);
        toast(`${product_name} deleted successfully`, {
          icon: <FcCancel className="text-xl" />,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    });
  };

  const handleIncreasedQuantity = () => {
    changeQuantity(id, 1);
  };

  const handleDecreasedQuantity = () => {
    changeQuantity(id, -1);
  };

  return (
    <tr className="record-row border-b">
      <td className="px-6 py-4">{index + 1}</td>

      <th
        scope="row"
        className="record-product-name px-6 py-4 font-medium text-gray-900"
      >
        {product_name}
      </th>

      <td className="record-product-price px-6 py-4 text-end">{price}</td>

      <td className="px-6 py-4 text-end group">
        <button
          onClick={handleDecreasedQuantity}
          className="quantity-sub hidden group-hover:inline-block active:scale-90 border border-teal-500 text-teal-700 p-0.5 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-2 pointer-events-none"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>

        <span className="record-quantity w-5 inline-block text-center">
          {quantity}
        </span>

        <button
          onClick={handleIncreasedQuantity}
          className="quantity-add hidden group-hover:inline-block active:scale-90 border border-teal-500 text-teal-700 p-0.5 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-2 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </td>

      <td className="record-cost px-6 py-4 text-end">{cost.toFixed(2)}</td>

      <td className="px-6 py-4 text-end table-cell print:hidden">
        <button
          className="record-remove hover:scale-90 opacity-80"
          onClick={handleDeleteRecord}
        >
          <IoTrashBinSharp className=" text-xl text-red-500" />
        </button>
      </td>
    </tr>
  );
};

export default SaleProductTableRow;
