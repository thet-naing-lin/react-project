import { lazy } from "react";

const PasswordChangePage = lazy(() =>
  import("../features/user-profile/pages/PasswordChangePage")
);
const ProfileNameChangePage = lazy(() =>
  import("../features/user-profile/pages/ProfileNameChangePage")
);
const UserProfilePage = lazy(() =>
  import("../features/user-profile/pages/UserProfilePage")
);

const profileRout = [
  {
    path: "user-profile",
    element: <UserProfilePage />,
  },
  {
    path: "user-profile/change-name",
    element: <ProfileNameChangePage />,
  },
  {
    path: "user-profile/change-password",
    element: <PasswordChangePage />,
  },
];

export default profileRout;
