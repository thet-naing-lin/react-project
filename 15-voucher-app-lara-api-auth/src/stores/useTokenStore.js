import { create } from "zustand";

// သုံးလို့မရ global state က runtime မှာပဲ အလုပ်လုပ်လို့ refresh လုပ်ရင် token ပျောက်ပီး not found page ဖစ်
const useTokenStore = create((set) => ({
  token: "",
  setToken: (token) => set({ token }),
  resetToken: () => set({ token: "" }),
}));

export default useTokenStore;
