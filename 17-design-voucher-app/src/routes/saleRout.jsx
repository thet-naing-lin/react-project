import { lazy } from "react";

const SalePage = lazy(() => import("../features/sale/pages/SalePage"));

const saleRout = [
  {
    path: "sale",
    element: <SalePage />,
  },
];

export default saleRout;
