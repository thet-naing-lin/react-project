import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import { HiGift } from "react-icons/hi2";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle="Product Module" icon={<HiGift />} />
       <ProductList/>
      </Container>
    </section>
  );
};

export default ProductPage;
