import { getCookie } from "react-use-cookie";

export const fetchProducts = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("login_token")}`,
    },
  }).then((res) => res.json());
