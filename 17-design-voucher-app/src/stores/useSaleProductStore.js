import { create } from "zustand";

const useSaleProductStore = create((set) => ({
  records: [],
  addRecord: (records) => {
    set((state) => ({ records: [...state.records, records] }));
  },
  removeRecord: (id) => {
    set((state) => ({
      records: state.records.filter((record) => record.id !== id),
    }));
  },
  changeQuantity: (id, quantity) => {
    set((state) => ({
      records: state.records.map((record) => {
        if (record.id === id) {
          const newQuantity = parseInt(record.quantity) + parseInt(quantity);
          const newCost = newQuantity * record.product.price;

          if (record.quantity === 1 && quantity === -1) {
            return record;
          }

          return { ...record, quantity: newQuantity, cost: newCost };
        }
        return record;
      }),
    }));
  },
  resetRecords: () => set({ records: [] }),
}));

export default useSaleProductStore;
