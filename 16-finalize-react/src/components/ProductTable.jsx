import React, { useEffect, useState } from "react";

const ProductTable = () => {
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");

  console.log("product table render");

  console.log("object", data);

  const fetchProduct = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/products?limit=${limit}&page=${page}${
        q && `&q=${q}`
      }`
    );
    const data = await res.json();
    setData(data);
  };

  const handleResize = () => {
    console.log("Window resize", window.innerWidth);
  };

  useEffect(() => {
    console.log("product table mount(useEffect work)");

    fetchProduct();

    // window.addEventListener("resize", handleResize);

    return () => {
      console.log("Product table unmount");
      // window.removeEventListener("resize", handleResize);
    };
  }, [limit, page, q]);

  return (
    <div>
      <h1 className=" text-2xl font-bold">Product Table</h1>

      <ul>
        {data?.data?.map((product) => (
          <li key={product.id}>
            <p>{product.product_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductTable;
