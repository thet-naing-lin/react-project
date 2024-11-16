import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../features/public/components/PublicLayout";
import publicRout from "./publicRout";
import authRout from "./authRout";
import NotFound from "../components/NotFound";
import dashboardRout from "./dashboardRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [...publicRout],
  },
  ...authRout,
  ...dashboardRout,
]);

export default router;
