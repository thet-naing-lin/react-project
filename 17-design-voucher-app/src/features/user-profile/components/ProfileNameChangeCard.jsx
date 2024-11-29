import React from "react";
import useCookie from "react-use-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcApproval } from "react-icons/fc";
import useUserStore from "../../../stores/useUserStore";
import { changeProfileName } from "../../../services/profile";
import { tailChase } from "ldrs";

tailChase.register();

const ProfileNameChangeCard = () => {
  const [userCookie, setUserCookie] = useCookie("user");

  const { user, setUser } = useUserStore();

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const handleChangeNameBtn = async (newName) => {
    const resp = await changeProfileName(newName);

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

      setUserCookie(JSON.stringify(json.user));
      setUser(json.user);
      reset();
      navigate("/dashboard/user-profile");
    } else {
      toast.error(json.message);
    }
  };
  return (
    <div className=" flex items-center justify-center p-4 font-body">
      <div className="border bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Change Your Name</h2>
          <form onSubmit={handleSubmit(handleChangeNameBtn)}>
            <input
              type="text"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileNameChangeCard;
