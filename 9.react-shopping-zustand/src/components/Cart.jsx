import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();

  const currentProduct = products.find((el) => el.id === productId);

  const cost = quantity * currentProduct.price;

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      // confirm("Are you sure you want to remove this item from cart?") && removeFromCart(id);
      Swal.fire({
        title: "Are you sure you want to remove this item from cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#64748b",
        cancelButtonColor: "#d33",
        confirmButtonText: "Remove",
      }).then((result) => {
        if (result.isConfirmed) {
          removeFromCart(id);
          toast.success("Item remove successfully.")
        }
      });
    }
  };

  return (
    <div className="border border-black p-5 grid grid-cols-6 mb-5 rounded">
      <div className="col-span-1">
        <img src={currentProduct.image} className="h-16" alt="" />
      </div>
      <div className="col-span-3">
        <p className="mb-3">{currentProduct.title}</p>
        <p className="text-gray-400">Price ($ {currentProduct.price})</p>
      </div>
      <div className="col-span-1">
        <p className="mb-3">Quantity</p>
        <div className="flex gap-3 items-center">
          <button
            onClick={handleDecreaseQuantity}
            className="bg-black text-white px-2 py-0.5"
          >
            -
          </button>
          {quantity}
          <button
            onClick={handleIncreaseQuantity}
            className="bg-black text-white px-2 py-0.5"
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <p className="text-end text-2xl font-bold mt-4">{cost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
