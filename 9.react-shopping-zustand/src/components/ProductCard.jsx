import React from "react";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
    slug,
  },
}) => {
  //   console.log(props);

  const { carts, addToCart } = useCartStore();
  const navigate = useNavigate();

  const handleAddCart = (event) => {
    event.stopPropagation(); // to stop to enter detail page when click add cart btn
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addToCart(newCart);
    toast.success("Item is added to your cart.");
    // toast("Item is added to your cart.", {
    //   icon: "👀",
    // });
  };

  const handleAddedBtn = (event) => {
    event.stopPropagation();
    toast.error("Item is already added in the cart.");
    // toast.custom(<div class=" bg-red-500">Hello World</div>);
  };

  // console.log(useNavigate());
  const handleOpenDetail = () => {
    navigate(`/product-detail/${slug}`);
  };

  return (
    <div
      onClick={handleOpenDetail}
      className="border border-gray-500 rounded-md 
    p-5 flex flex-col items-start gap-5 select-none"
    >
      <img src={image} className="h-40 cursor-pointer" alt="" />
      <p className="font-bold line-clamp-2">{title}</p>

      <Rating rate={rate} />

      <div className="flex justify-between w-full items-end">
        <p>$ {price}</p>
        {carts.find((cart) => cart.productId === id) ? (
          <button
            onClick={handleAddedBtn}
            className="text-xs border border-black rounded-md px-3 py-1 bg-black text-white"
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCart}
            className="text-xs border border-black rounded-md px-3 py-1"
          >
            Add Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
