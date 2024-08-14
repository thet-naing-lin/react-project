import { create } from "zustand";

// const useCounterStore = create(function (set) {
//   return {
//     count: 13,
//     resetCount: function () {
//       return set({ count: 0 });
//     },
//     increaseCount: function () {
//       return set(function (state) {
//         return {
//           count: state.count + 1,
//         };
//       });
//     },
//     decreaseCount: function () {
//       return set(function (state) {
//         return {
//           count: state.count - 1,
//         };
//       });
//     },
//     increaseFive: function (amount) {
//       return set(function (state) {
//         return {
//           count: state.count + amount,
//         };
//       });
//     },
//     decreaseFive: function (amount) {
//       return set(function (stat) {
//         return {
//           count: stat.count - amount,
//         };
//       });
//     },
//   };
// });

const useCounterStore = create((set) => ({
  count: 13,
  resetCount: () => set({ count: 0 }),
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  increaseFive: (amount) => set((state) => ({ count: state.count + amount })),
  decreaseFive: (amount) => set((state) => ({ count: state.count - amount })),
}));

export default useCounterStore;
