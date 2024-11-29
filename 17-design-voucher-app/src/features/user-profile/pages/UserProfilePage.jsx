import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../../../components/BreadCrumb";
import { FaUser } from "react-icons/fa";
import UserProfileCard from "../components/UserProfileCard";

const UserProfilePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle={"User Profile"} icon={<FaUser />} />
        <UserProfileCard />
      </Container>
    </section>
  );
};

export default UserProfilePage;
