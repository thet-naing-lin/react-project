import { getCookie } from "react-use-cookie";

export const fetchProducts = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("login_token")}`,
    },
  }).then((res) => res.json());

export const createProduct = (product_name, price) => {
  return fetch(`${import.meta.env.VITE_API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("login_token")}`,
    },
    body: JSON.stringify({
      product_name: product_name,
      price: price,
      created_at: new Date().toISOString(),
    }),
  });
};

export const destroyProduct = (id) => {
  return fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("login_token")}`,
    },
  });
};

export const editProduct = (id, product_name, price) => {
  return fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("login_token")}`,
    },
    body: JSON.stringify({
      product_name: product_name,
      price: price,
      created_at: new Date().toISOString(),
    }),
  });
};
