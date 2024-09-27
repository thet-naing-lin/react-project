import React from "react";
import useRecordStore from "../stores/useRecordStore";
import VoucherTableRow from "./VoucherTableRow";

const VoucherTable = () => {
  const { records } = useRecordStore();

  const total = records.reduce((x, y) => x + y.cost, 0);
  const tax = total * 0.05;
  const netTotal = total + tax;

  return (
    <div className="container mx-auto mb-7">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-white uppercase bg-teal-900 dark:bg-teal-600 dark:text-gray-400">
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
              <tr className="hidden last:table-row border-b dark:border-gray-700">
                <th
                  scope="row"
                  colSpan={6}
                  className="text-center px-6 py-16 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  There is no record yet.
                </th>
              </tr>
            )}

            {records.map((record, index) => (
              <VoucherTableRow key={record.id} record={record} index={index} />
            ))}
          </tbody>

          <tfoot>
            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                colSpan={4}
                className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Total
              </th>
              <td className="px-6 py-4 text-end" id="recordTotal">
                {total.toFixed(2)}
              </td>
              <td className="px-6 py-4 text-end table-cell print:hidden" />
            </tr>

            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                colSpan={4}
                className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Tax(Vat 5%)
              </th>
              <td className="px-6 py-4 text-end" id="recordTax">
                {tax.toFixed(2)}
              </td>
              <td className="px-6 py-4 text-end table-cell print:hidden" />
            </tr>

            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                colSpan={4}
                className="text-end px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Net Total
              </th>
              <td className="px-6 py-4 text-end" id="recordNetTotal">
                {netTotal.toFixed(2)} MMK
              </td>
              <td className="px-6 py-4 text-end table-cell print:hidden" />
            </tr>
          </tfoot>
        </table>
      </div>

      <p className="mt-20 text-center hidden print:block">
        "ဝယ်ယူအားပေးမှုကို ကျေးဇူးအထူးတင်ရှိပါတယ်။ MMS IT မိသားစု"
      </p>
    </div>
  );
};

export default VoucherTable;
