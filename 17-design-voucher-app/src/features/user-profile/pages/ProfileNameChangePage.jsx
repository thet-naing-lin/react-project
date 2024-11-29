import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../../../components/BreadCrumb";
import { MdEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import ProfileNameChangeCard from "../components/ProfileNameChangeCard";

const ProfileNameChangePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageTitle={"Change Name"}
          icon={<MdEdit />}
          links={[
            {
              title: "User Profile",
              path: "/dashboard/user-profile",
              icon: <FaUser />,
            },
          ]}
        />
        <ProfileNameChangeCard />
      </Container>
    </section>
  );
};

export default ProfileNameChangePage;
