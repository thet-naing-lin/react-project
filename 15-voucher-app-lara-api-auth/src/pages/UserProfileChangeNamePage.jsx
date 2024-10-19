import React from "react";
import Container from "../components/Container";
import useCookie from "react-use-cookie";
import Breadcrumb from "../components/Breadcrumb";
import { FaUser, FaUserEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcApproval } from "react-icons/fc";
import useUserStore from "../stores/useUserStore";

const UserProfileChangeNamePage = () => {
  const [userCookie, setUserCookie] = useCookie("user");

  // const { name, email, profile_image } = JSON.parse(userCookie);

  const { user, setUser } = useUserStore();

  const [token] = useCookie("login_token");

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const handleChangeNameBtn = async (newName) => {
    console.log(newName);

    const resp = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-name",
      {
        method: "POST",
        body: JSON.stringify(newName),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await resp.json();
    console.log(json);

    if (resp.status === 200) {
      toast(json.message, {
        icon: <FcApproval className="text-xl" />,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        position: "bottom-right",
      });

      setUserCookie(JSON.stringify(json.user));
      setUser(json.user);
      reset();
      navigate("/dashboard/user-profile")
    } else {
      toast.error(json.message);
    }
  };

  return (
    <section>
      <Container>
        <Breadcrumb
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

        <div className=" flex items-center justify-center p-4 font-body">
          <div className="border bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Change Your Name</h2>
              <form onSubmit={handleSubmit(handleChangeNameBtn)}>
                <input
                  type="text"
                  // value={name}
                  {...register("name", { required: true })}
                  placeholder="Enter new name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div className="mt-4 flex justify-end space-x-3">
                  <Link
                    to={"/dashboard/user-profile"}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-teal-900 text-white rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Change
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UserProfileChangeNamePage;
