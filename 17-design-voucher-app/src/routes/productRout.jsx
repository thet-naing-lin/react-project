import { lazy } from "react";

const ProductCreatePage = lazy(() => import("../features/product/pages/ProductCreatePage"));
const ProductEditPage = lazy(() => import("../features/product/pages/ProductEditPage"));
const ProductListPage = lazy(() => import("../features/product/pages/productListPage"));

const productRout = [
  {
    path: "products",
    element: <ProductListPage />,
  },
  {
    path: "product-create",
    element: <ProductCreatePage />,
  },
  {
    path: "product-edit/:id",
    element: <ProductEditPage />,
  },
];

export default productRout;
