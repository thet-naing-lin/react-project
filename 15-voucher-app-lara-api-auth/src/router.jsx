import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import SalePage from "./pages/SalePage";
import VoucherPage from "./pages/VoucherPage";
import ProductPage from "./pages/ProductPage";
import VoucherDetailPage from "./pages/VoucherDetailPage";
import ProductCreatePage from "./pages/ProductCreatePage";
import ProductEditPage from "./pages/ProductEditPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserProfileChangeNamePage from "./pages/UserProfileChangeNamePage";
import UserProfileChangePasswordPage from "./pages/UserProfileChangePasswordPage";
import UserProfileChangeImagePage from "./pages/UserProfileChangeImagePage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/dashboard",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "product",
            element: <ProductPage />,
          },
          {
            path: "product/create",
            element: <ProductCreatePage />,
          },
          {
            path: "product/edit/:id", // dynamic route
            element: <ProductEditPage />,
          },
          {
            path: "sale",
            element: <SalePage />,
          },
          {
            path: "voucher",
            element: <VoucherPage />,
          },
          {
            path: "voucher/detail/:id", // dynamic route
            element: <VoucherDetailPage />,
          },
          {
            path: "user-profile",
            children: [
              {
                index: true,
                element: <UserProfilePage />,
              },
              {
                path: "user-change-name",
                element: <UserProfileChangeNamePage />,
              },
              {
                path: "user-change-password",
                element: <UserProfileChangePasswordPage />,
              },
              {
                path: "user-change-image",
                element: <UserProfileChangeImagePage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
