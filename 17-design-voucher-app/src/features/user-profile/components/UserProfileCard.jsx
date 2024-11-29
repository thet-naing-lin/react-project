import React, { useRef, useState } from "react";
import useCookie from "react-use-cookie";
import { FaUser, FaUserEdit } from "react-icons/fa";
import { HiUser } from "react-icons/hi2";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FcApproval } from "react-icons/fc";
import useUserStore from "../../../stores/useUserStore";
import { changeProfileImage } from "../../../services/profile";

const UserProfileCard = () => {
  const [userCookie, setUserCookie] = useCookie("user");

  const { user, setUser } = useUserStore();

  const [changeImage, setChangeImage] = useState(false);

  const {
    user: { name, email, profile_image },
  } = useUserStore();

  const fileInputRef = useRef(null);

  const handleChangeProfileImage = async (event) => {
    setChangeImage(true);
    const formData = new FormData();
    formData.append("profile_image", event.target.files[0]);

    const resp = await changeProfileImage(formData);

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
      setChangeImage(false);
    } else {
      setChangeImage(false);
      toast.error(json.message);
    }
  };

  const handleImageUploadIcon = () => {
    // console.log(fileInputRef);
    // console.log(fileInputRef.current);
    fileInputRef.current.click();
  };

  return (
    <div className=" flex items-center justify-center px-4 mt-10 font-body">
      {changeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg flex gap-5">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-e-2 border-teal-900"></div>
            <p className="mt-4 text-teal-900 font-semibold">
              Updating image...
            </p>
          </div>
        </div>
      )}

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

          <button
            onClick={handleImageUploadIcon}
            className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md "
          >
            <FaUserEdit />
          </button>
          <input
            ref={fileInputRef}
            onChange={handleChangeProfileImage}
            type="file"
            id="image-input"
            className=" hidden w-full border border-gray-200 shadow-sm rounded-lg text-sm  focus:z-10 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400"
          />
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
              to={"change-name"}
              className="mt-4 text-sm px-4 py-2 bg-teal-900 text-white rounded hover:bg-teal-600"
            >
              Edit Name
            </Link>
            <Link
              to={"change-password"}
              className="mt-4 text-sm px-4 py-2 bg-teal-900 text-white rounded hover:bg-teal-600"
            >
              Change Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
