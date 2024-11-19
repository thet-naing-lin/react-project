import React from "react";
import { HiGift } from "react-icons/hi2";
import { IoMdCreate } from "react-icons/io";
import BreadCrumb from "../../../components/BreadCrumb";
import Container from "../../../components/Container";
import ProductEditCard from "../components/ProductEditCard";

const ProductEditPage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageTitle="Edit Product"
          icon={<IoMdCreate />}
          links={[
            { title: "Product Module", path: "/dashboard/products", icon: <HiGift /> },
          ]}
        />
        <ProductEditCard />
      </Container>
    </section>
  );
};

export default ProductEditPage;
