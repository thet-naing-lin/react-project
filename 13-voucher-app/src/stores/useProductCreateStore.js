import { create } from "zustand";

const useProductCreateStore = create((set) => ({
    isAddingProduct: false,
    setAddingProduct: (adding) => set({isAddingProduct: adding}),
}))

export default useProductCreateStore;