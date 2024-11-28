import { getCookie } from "react-use-cookie";

export const fetchVouchers = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("login_token")}`,
    },
  }).then((res) => res.json());

export const destroyVoucher = (id) => {
  return fetch(`${import.meta.env.VITE_API_URL}/vouchers/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("login_token")}`,
    },
  });
};
