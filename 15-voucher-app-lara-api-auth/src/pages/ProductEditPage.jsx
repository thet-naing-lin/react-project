import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import { HiGift } from "react-icons/hi2";
import { IoMdCreate } from "react-icons/io";
import ProductEditCard from "../components/ProductEditCard";

const ProductEditPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle="Edit Product"
          icon={<IoMdCreate />}
          links={[
            { title: "Product Module", path: "/product", icon: <HiGift /> },
          ]}
        />
        <ProductEditCard />
      </Container>
    </section>
  );
};

export default ProductEditPage;
