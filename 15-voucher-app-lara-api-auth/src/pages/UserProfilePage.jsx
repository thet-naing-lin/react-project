import React from "react";
import Container from "../components/Container";
import useCookie from "react-use-cookie";
import Breadcrumb from "../components/Breadcrumb";
import { FaUser, FaUserEdit } from "react-icons/fa";
import { HiUser } from "react-icons/hi2";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import useUserStore from "../stores/useUserStore";

const UserProfilePage = () => {
  // const [userCookie] = useCookie("user");

  // const { name, email, profile_image } = JSON.parse(userCookie);

  const {
    user: { name, email, profile_image },
  } = useUserStore();

  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"User Profile"} icon={<FaUser />} />

        <div className=" flex items-center justify-center px-4 mt-10 font-body">
          <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                className="w-full h-96 object-cover object-center"
                src={
                  profile_image
                    ? profile_image
                    : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
                }
                alt="Profile"
              />
              <Link to={"user-change-image"} className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md ">
                <FaUserEdit />
              </Link>
            </div>
            <div className="p-6">
              <h2 className=" flex items-center gap-3 text-xl font-bold text-gray-800">
                <HiUser />
                {name}
              </h2>
              <p className=" flex items-center gap-3 text-gray-600 mt-2">
                <TfiEmail /> {email}
              </p>
              <div className=" flex gap-3 justify-end">
                <Link
                  to={"user-change-name"}
                  className="mt-4 text-sm px-3 py-1 bg-teal-900 text-white rounded hover:bg-teal-600"
                >
                  Edit Name
                </Link>
                <button className="mt-4 text-sm px-3 py-1 bg-teal-900 text-white rounded hover:bg-teal-600">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UserProfilePage;
