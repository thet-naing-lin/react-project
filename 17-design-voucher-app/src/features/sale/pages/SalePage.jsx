import React from "react";
import { MdSell } from "react-icons/md";
import Container from "../../../components/Container";
import BreadCrumb from "../../../components/BreadCrumb";
import SaleCard from "../components/SaleCard";

const SalePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle="Sale Module" icon={<MdSell />} />
        <SaleCard />
      </Container>
    </section>
  );
};

export default SalePage;
