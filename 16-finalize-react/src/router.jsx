import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy } from "react";

// import NotFoundPage from "./pages/NotFoundPage";
// import DashboardPage from "./pages/DashboardPage";
// import SalePage from "./pages/SalePage";
// import VoucherPage from "./pages/VoucherPage";
// import ProductPage from "./pages/ProductPage";
// import VoucherDetailPage from "./pages/VoucherDetailPage";
// import ProductCreatePage from "./pages/ProductCreatePage";
// import ProductEditPage from "./pages/ProductEditPage";

const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const SalePage = lazy(() => import("./pages/SalePage"));
const VoucherPage = lazy(() => import("./pages/VoucherPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const VoucherDetailPage = lazy(() => import("./pages/VoucherDetailPage"));
const ProductCreatePage = lazy(() => import("./pages/ProductCreatePage"));
const ProductEditPage = lazy(() => import("./pages/ProductEditPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/product/create",
        element: <ProductCreatePage />,
      },
      {
        path: "/product/edit/:id", // dynamic route
        element: <ProductEditPage />,
      },
      {
        path: "/sale",
        element: <SalePage />,
      },
      {
        path: "/voucher",
        element: <VoucherPage />,
      },
      {
        path: "/voucher/detail/:id", // dynamic route
        element: <VoucherDetailPage />
      }
    ],
  },
]);

export default router;
