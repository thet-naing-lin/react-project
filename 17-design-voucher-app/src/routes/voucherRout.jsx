import { lazy } from "react";

const VoucherDetailPage = lazy(() =>
  import("../features/voucher/pages/VoucherDetailPage")
);
const VoucherListPage = lazy(() =>
  import("../features/voucher/pages/VoucherListPage")
);

const voucherRout = [
  {
    path: "vouchers",
    element: <VoucherListPage />,
  },
  {
    path: "voucher-detail/:id",
    element: <VoucherDetailPage />,
  },
];

export default voucherRout;
