import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import { MdSell } from "react-icons/md";

const SalePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle="Sale Module" icon={<MdSell />} />
      </Container>
    </section>
  );
};

export default SalePage;
