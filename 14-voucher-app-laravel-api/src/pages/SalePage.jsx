import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import { MdSell } from "react-icons/md";
import VoucherInfo from "../components/VoucherInfo";
import SaleForm from "../components/SaleForm";

const SalePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle="Sale Module" icon={<MdSell />} />
        <VoucherInfo />
      </Container>
    </section>
  );
};

export default SalePage;
