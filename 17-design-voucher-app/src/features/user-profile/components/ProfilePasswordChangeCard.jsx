import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useCookie, { removeCookie } from "react-use-cookie";
import { FcApproval } from "react-icons/fc";
import toast from "react-hot-toast";
import { changeProfilePassword } from "../../../services/profile";
import { tailChase } from "ldrs";

tailChase.register();

const ProfilePasswordChangeCard = () => {
  const [token] = useCookie("login_token");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleChangePasswordBtn = async (data) => {
    const resp = await changeProfilePassword(data);

    const json = await resp.json();

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

      removeCookie("login_token");
      removeCookie("user");
      navigate("/");
    } else {
      toast.error(json.message);
    }
  };

  return (
    <div className=" flex justify-center items-center font-body">
      <div className=" mt-7 max-w-md w-full bg-white border rounded-xl shadow-lg ">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 ">
              Change New Password
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Need to remember your old password!
            </p>
          </div>
          <div className="mt-5">
            {/* Form */}
            <form onSubmit={handleSubmit(handleChangePasswordBtn)}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label htmlFor="oldPassword" className="block text-sm mb-2 ">
                    Old Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="oldPassword"
                      {...register("old_password", { required: true })}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none  "
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="newPassword" className="block text-sm mb-2 ">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="newPassword"
                      {...register("new_password", { required: true })}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none  "
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirmNewPassword"
                    className="block text-sm mb-2 "
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
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none  "
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
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-teal-800 text-white rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex justify-center items-center w-16">
                        <l-tail-chase
                          size="18"
                          speed="2.5"
                          color="white"
                        ></l-tail-chase>
                      </div>
                    ) : (
                      "Change"
                    )}
                  </button>
                </div>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePasswordChangeCard;
