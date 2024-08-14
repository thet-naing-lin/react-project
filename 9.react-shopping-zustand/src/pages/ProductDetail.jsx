import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";
import useProductStore from "../store/useProductStore";

const ProductDetail = () => {
  // data ပြန်ပြတဲ့ချိန်မှာ prodcutId.producId ဆိုပြီးမရေးချင်လို့ destructure လုပ်ပြီးရေးထားတာ
  const { productId } = useParams();
  //   console.log(productId);
  //   console.log(useParams());

  const {products} = useProductStore();

  const currentProduct = products.find((product) => product.id == productId);
  // const currentProduct = products.find((product) => product.id == productId.productId);
  //   console.log(currentProduct);

  return (
    <Container className="p-5">
      <BreadCrumb currentPageTitle="Product Detail"/>
      <div className="border border-black p-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <img
              src={currentProduct.image}
              className=" w-[200px] md:w-3/4 block md:mx-auto mb-5 md:mb-0"
              alt=""
            />
          </div>
          <div className="col-span-1 flex flex-col gap-5 items-start">
            <h1 className="text-2xl font-bold">{currentProduct.title}</h1>
            <p className="border bg-gray-300 inline-block px-4 py-2">
              {currentProduct.category}
            </p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between w-full items-center">
              <p>Price ({currentProduct.price})</p>
              <button className="border border-black rounded-md px-3 py-1">
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
