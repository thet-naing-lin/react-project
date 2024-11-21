import React from "react";
import { MdSell } from "react-icons/md";
import Container from "../../../components/Container";
import BreadCrumb from "../../../components/BreadCrumb";

const SalePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle="Sale Module" icon={<MdSell />} />
        {/* <VoucherInfo /> */}
      </Container>
    </section>
  );
};

export default SalePage;
