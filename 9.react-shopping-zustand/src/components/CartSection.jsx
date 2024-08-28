import React from "react";
import Cart from "./Cart";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import emptyCartImg from "../assets/empty-cart.svg";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();
  // console.log(carts);
  // console.log(products);

  const total = carts.reduce((pv, cv) => {
    const cost =
      cv.quantity * products.find(({ id }) => id === cv.productId).price;
    return pv + cost;
  }, 0);

  //   console.log(total);

  const tax = total * 0.05;

  const netTotal = total + tax;

  return (
    <div className="flex flex-col h-full">
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}

      {carts.length === 0 ? (
        <img
          src={emptyCartImg}
          className="w-[500px] block mx-auto mt-16"
          alt="empty-cart"
        />
      ) : (
        <div className="w-full bg-white py-7">
          <Container className="px-5">
            <div className="border-t border-black flex justify-end gap-14">
              <div className="text-right">
                <p className="text-gray-500">Total ($)</p>
                <p className="font-bold text-lg">{total.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Tax (5%)</p>
                <p className="font-bold text-lg">{tax.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Net Total ($)</p>
                <p className="font-bold text-3xl">{netTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className=" text-end mt-5">
              <Link className=" border border-gray-500 rounded-md px-7 py-2">
                Order Now
              </Link>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default CartSection;
