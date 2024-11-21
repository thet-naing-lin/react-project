import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../../../components/BreadCrumb";
import { HiGift } from "react-icons/hi2";
import VoucherList from "../components/VoucherTable";

const VoucherListPage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle="Voucher Module" icon={<HiGift />} />
        <VoucherList />
      </Container>
    </section>
  );
};

export default VoucherListPage;
