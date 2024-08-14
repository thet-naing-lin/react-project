import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const Header = () => {
  const { carts } = useCartStore();

  return (
    <header className="px-5 py-4">
      <Container>
        <div className="flex justify-between">
          <Link to={"/"} className="text-3xl font-bold">
            Online Shop
          </Link>
          <Link
            to={"/my-cart"}
            className="border border-gray-500 rounded-md px-4 py-2 relative"
          >
            My Cart
            {carts.length > 0 && (
              <span
                className="inline-block absolute top-0 right-0
            translate-x-1/2 -translate-y-1/2 text-xs bg-red-500 text-white px-2 py-1 rounded-full"
              >
                {carts.length}
              </span>
            )}
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
