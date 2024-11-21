import React from "react";
import { FaFileInvoiceDollar, FaInfoCircle } from "react-icons/fa";
import Container from "../../../components/Container";
import BreadCrumb from "../../../components/BreadCrumb";

const VoucherDetailPage = () => {
  return (
    <div>
      <Container>
        <BreadCrumb
          currentPageTitle={"Voucher Detail"}
          icon={<FaInfoCircle />}
          links={[
            {
              title: "Voucher Module",
              path: "/dashboard/vouchers",
              icon: <FaFileInvoiceDollar />,
            },
          ]}
        />
        {/* <VoucherDetailCard /> */}
      </Container>
    </div>
  );
};

export default VoucherDetailPage;
