import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import { FaFileInvoiceDollar, FaInfoCircle } from "react-icons/fa";
import VoucherDetailCard from "../components/VoucherDetailCard";

const VoucherDetailPage = () => {
  return (
    <div>
      <Container>
        <Breadcrumb
          currentPageTitle={"Voucher Detail"}
          icon={<FaInfoCircle />}
          links={[
            {
              title: "Voucher Module",
              path: "/voucher",
              icon: <FaFileInvoiceDollar />,
            },
          ]}
        />
        <VoucherDetailCard />
      </Container>
    </div>
  );
};

export default VoucherDetailPage;
