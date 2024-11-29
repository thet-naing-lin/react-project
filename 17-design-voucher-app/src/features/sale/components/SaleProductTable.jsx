import React from "react";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import SaleProductTableRow from "./SaleProductTableRow";

const SaleProductTable = () => {
  const { records } = useSaleProductStore();

  const total = records.reduce((x, y) => x + y.cost, 0);
  const tax = total * 0.05;
  const net_total = total + tax;

  return (
    <div className="container mx-auto text-xs">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left rtl:text-right text-gray-500">
          <thead className="text-white uppercase bg-teal-900">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Cost
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-end table-cell print:hidden"
              >
                Remove
              </th>
            </tr>
          </thead>

          <tbody id="recordGroup">
            {records.length === 0 && (
              <tr className="hidden last:table-row border-b">
                <th
                  scope="row"
                  colSpan={6}
                  className="text-center px-6 py-16 font-medium text-gray-900 whitespace-nowrap "
                >
                  There is no record yet.
                </th>
              </tr>
            )}

            {records.map((record, index) => (
              <SaleProductTableRow
                key={record.id}
                record={record}
                index={index}
              />
            ))}
          </tbody>

          <tfoot>
            <tr className="border-b">
              <th
                scope="row"
                colSpan={4}
                className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Total
              </th>
              <td className="px-6 py-4 text-end" id="recordTotal">
                {total.toFixed(2)}
              </td>
              <td className="px-6 py-4 text-end table-cell print:hidden" />
            </tr>

            <tr className="border-b">
              <th
                scope="row"
                colSpan={4}
                className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Tax(Vat 5%)
              </th>
              <td className="px-6 py-4 text-end" id="recordTax">
                {tax.toFixed(2)}
              </td>
              <td className="px-6 py-4 text-end table-cell print:hidden" />
            </tr>

            <tr className="border-b">
              <th
                scope="row"
                colSpan={4}
                className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Net Total
              </th>
              <td
                className="px-6 py-4 text-end text-nowrap"
                id="recordNetTotal"
              >
                {net_total.toFixed(2)} MMK
              </td>
              <td className="px-6 py-4 text-end table-cell print:hidden" />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SaleProductTable;
