import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import { FaUser } from "react-icons/fa";
import { PiPasswordFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useCookie, { removeCookie } from "react-use-cookie";
import { FcApproval } from "react-icons/fc";
import toast from "react-hot-toast";
import useUserStore from "../stores/useUserStore";

const UserProfileChangePasswordPage = () => {
  const [token] = useCookie("login_token");
  const [userCookie, setUserCookie] = useCookie("user");

  const { user, setUser } = useUserStore();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChangePasswordBtn = async (data) => {
    // console.log(data);

    const resp = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-password",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await resp.json();
    // console.log(json);

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

      // setUserCookie(JSON.stringify(json.user));
      // setUser(json.user);
      removeCookie("login_token");
      navigate("/");
    } else {
      toast.error(json.message);
    }
  };

  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Change Password"}
          icon={<PiPasswordFill />}
          links={[
            {
              title: "User Profile",
              path: "/dashboard/user-profile",
              icon: <FaUser />,
            },
          ]}
        />

        <div className=" flex justify-center items-center font-body">
          <div className=" mt-7 max-w-md w-full bg-white border rounded-xl shadow-lg dark:bg-neutral-900 dark:border-neutral-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Change New Password
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Need to remember your old password!
                </p>
              </div>
              <div className="mt-5">
                {/* Form */}
                <form onSubmit={handleSubmit(handleChangePasswordBtn)}>
                  <div className="grid gap-y-4">
                    {/* Form Group */}
                    <div>
                      <label
                        htmlFor="oldPassword"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Old Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="oldPassword"
                          {...register("old_password", { required: true })}
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="newPassword"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        New Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="newPassword"
                          {...register("new_password", { required: true })}
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="confirmNewPassword"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="confirmNewPassword"
                          {...register("new_password_confirmation", {
                            required: true,
                          })}
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                          required
                        />
                      </div>
                    </div>
                    {/* End Form Group */}

                    <div className="mt-4 flex justify-end space-x-3">
                      <Link
                        to={"/dashboard/user-profile"}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                      >
                        Cancel
                      </Link>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-teal-800 text-white rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </form>
                {/* End Form */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UserProfileChangePasswordPage;
