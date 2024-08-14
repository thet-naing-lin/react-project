import React from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";
import useProductStore from "../store/useProductStore";
// import products from "../data/products";

const ProductSection = () => {

  const {products} = useProductStore();

  return (
    <section className="p-5">
      <Container>
        <p className="text-sm text-gray-500 mb-2">Available Product Lists</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
