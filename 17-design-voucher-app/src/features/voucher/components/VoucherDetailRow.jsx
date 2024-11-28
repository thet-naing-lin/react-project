import React from "react";

const VoucherDetailRow = ({
  index,
  recordItem: {
    quantity,
    cost,
    product: { product_name, price },
  },
}) => {
  // console.log(recordItem);
  return (
    <tr className=" text-xs">
      <td className="py-3 px-4 border-t">{index + 1}</td>
      <td className="py-3 px-4 border-t">{product_name}</td>
      <td className="py-3 px-4 border-t text-end">{price}</td>
      <td className="py-3 px-4 border-t text-end">{quantity}</td>
      <td className="py-3 px-4 border-t text-end">{cost}</td>
    </tr>
  );
};

export default VoucherDetailRow;
