import React from "react";
import { HiGift } from "react-icons/hi2";
import { IoMdCreate } from "react-icons/io";
import BreadCrumb from "../../../components/BreadCrumb";
import Container from "../../../components/Container";
import ProductCreateCard from "../components/ProductCreateCard";

const ProductCreatePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageTitle="Create Product"
          icon={<IoMdCreate />}
          links={[
            { title: "Product Module", path: "/dashboard/products", icon: <HiGift /> },
          ]}
        />
        <ProductCreateCard />
      </Container>
    </section>
  );
};

export default ProductCreatePage;
