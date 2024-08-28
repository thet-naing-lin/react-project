import { create } from "zustand";

const useCartStore = create((set) => ({
  carts: [
    // {
    //   id: 1,
    //   productId: 2,
    //   quantity: 3,
    // },
    // {
    //   id: 2,
    //   productId: 7,
    //   quantity: 2,
    // },
    // {
    //   id: 3,
    //   productId: 5,
    //   quantity: 3,
    // },
    // {
    //   id: 4,
    //   productId: 2,
    //   quantity: 1,
    // },
  ],
  addToCart: (newCart) =>
    set((state) => ({ carts: [...state.carts, newCart] })),
  increaseQuantity: (id) =>
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity + 1 } : el
      ),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity - 1 } : el
      ),
    })),
  removeFromCart: (id) =>
    set((state) => ({
      carts: state.carts.filter((el) => el.id !== id),
    })),
}));

export default useCartStore;
