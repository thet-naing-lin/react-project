import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import DashboardPage from "../features/dashboard/pages/DashboardPage";

const dashboardRout = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
];

export default dashboardRout;
