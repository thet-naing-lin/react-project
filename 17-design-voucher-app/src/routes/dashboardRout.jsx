import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import productRout from "./productRout";
import profileRout from "./profileRout";
import saleRout from "./saleRout";
import voucherRout from "./voucherRout";

const dashboardRout = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      ...productRout,
      ...voucherRout,
      ...saleRout,
      ...profileRout,
    ],
  },
];

export default dashboardRout;
