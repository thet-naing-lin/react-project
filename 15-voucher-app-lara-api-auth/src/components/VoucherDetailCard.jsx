import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import VoucherDetailRow from "./VoucherDetailRow";
import VoucherDetailSkeletonLoader from "./VoucherDetailSkeletonLoader";
import printJS from "print-js";
import html2pdf from "html2pdf.js";
import useCookies from "react-use-cookie";

const VoucherDetailCard = () => {
  const { id } = useParams();

  const [token] = useCookies("login_token");
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

  const { data, isLoading, error } = useSWR(
    `${import.meta.env.VITE_API_URL}/vouchers/${id}`,
    fetcher
  );

  // console.log(data?.created_at);

  const time = new Date(data?.created_at);

  const saleTime = time.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const handlePrint = () => {
    // window.print();

    printJS({
      printable: "printArea",
      type: "html",
      targetStyles: ["*"],
      // scanStyles: true,
      // css: [
      //   "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
      // ],
    });
  };

  const handlePDF = () => {
    // console.log("export pdf");
    const element = document.getElementById("printArea");

    // Options for PDF generation
    const opt = {
      margin: 0.1,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a5", orientation: "portrait" },
    };

    // Convert the element to PDF
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className=" mt-10">
      {isLoading ? (
        <VoucherDetailSkeletonLoader />
      ) : (
        <div className=" font-mono w-[14.8cm]">
          <div id="printArea">
            <div className="flex justify-between mb-7 text-sm">
              <div>
                <h1 className=" font-bold text-lg mb-2">INVOICE</h1>
                <p className=" mb-2">{data?.data?.voucher_id}</p>
                <p>
                  {data?.data?.sale_date} ({saleTime})
                </p>
              </div>

              <div>
                <h3 className=" font-bold text-lg mb-2">Payment Information</h3>
                <p>Name : {data?.data?.customer_name}</p>
                <p>Email : {data?.data?.customer_email}</p>
              </div>
            </div>

            <div className=" font-header">
              <table className="w-full text-left border border-teal-900 mb-5">
                <thead>
                  <tr className="bg-teal-900 text-white text-xs">
                    <th className="py-3 px-4">ITEM</th>
                    <th className="py-3 px-4">DESCRIPTION</th>
                    <th className="py-3 px-4 text-end">RATE</th>
                    <th className="py-3 px-4 text-end">Quantity</th>
                    <th className="py-3 px-4 text-end">AMOUNT</th>
                  </tr>
                </thead>

                <tbody>
                  {!isLoading &&
                    data?.data?.records?.map((recordItem, index) => {
                      // console.log(recordItem);
                      return (
                        <VoucherDetailRow
                          key={recordItem.id}
                          recordItem={recordItem}
                          index={index}
                        />
                      );
                    })}
                </tbody>
              </table>

              <div className="flex flex-col items-end space-y-5 text-xs">
                <div className=" border rounded-md border-teal-900  px-4 py-2 w-48">
                  <p className=" flex justify-between">
                    <span>Sub Total:</span>
                    <span>{parseFloat(data?.data?.total).toFixed(2)}</span>
                  </p>
                  <p className=" flex justify-between">
                    <span>Sub Tax:</span>
                    <span>{parseFloat(data?.data?.tax).toFixed(2)}</span>
                  </p>
                </div>

                <div className=" bg-teal-900 rounded-md text-white uppercase px-8 py-2 w-48 ">
                  <p className=" flex justify-between text-nowrap">
                    <span>TOTAL:</span>
                    <span>
                      {parseFloat(data?.data?.net_total).toFixed(2)} MMK
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex justify-end mt-5 gap-3">
            <button
              onClick={handlePDF}
              className="flex items-center gap-2 text-white bg-teal-900 hover:scale-95 hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700"
            >
              Download PDF
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 text-white bg-teal-900 hover:scale-95 hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700"
            >
              Print
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoucherDetailCard;
