import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../../../components/BreadCrumb";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import ProfilePasswordChangeCard from "../components/ProfilePasswordChangeCard";

const PasswordChangePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageTitle={"Change Password"}
          icon={<RiLockPasswordFill />}
          links={[
            {
              title: "User Profile",
              path: "/dashboard/user-profile",
              icon: <FaUser />,
            },
          ]}
        />
        <ProfilePasswordChangeCard />
      </Container>
    </section>
  );
};

export default PasswordChangePage;
