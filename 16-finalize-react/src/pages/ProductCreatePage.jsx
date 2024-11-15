import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import { HiGift } from "react-icons/hi2";
import { IoMdCreate } from "react-icons/io";
import ProductCreateCard from "../components/ProductCreateCard";

const ProductCreatePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle="Create Product"
          icon = {<IoMdCreate />}
          links={[{ title: "Product Module", path: "/product", icon: <HiGift /> }]}
        />
        <ProductCreateCard />
      </Container>
    </section>
  );
};

export default ProductCreatePage;
