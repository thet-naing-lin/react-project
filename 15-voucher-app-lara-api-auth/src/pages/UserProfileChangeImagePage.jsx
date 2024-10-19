import React, { useRef } from "react";
import Container from "../components/Container";
import useCookie from "react-use-cookie";
import Breadcrumb from "../components/Breadcrumb";
import { FaFileImage, FaUser, FaUserEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcApproval } from "react-icons/fc";
import useUserStore from "../stores/useUserStore";
import { HiCamera } from "react-icons/hi2";

const UserProfileChangeImagePage = () => {
  const [token] = useCookie("login_token");
  const [userCookie, setUserCookie] = useCookie("user");

  const { user, setUser } = useUserStore();

  const {
    user: { name, email, profile_image },
  } = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const handleChangeProfileImageBtn = async (event) => {
    // console.log(event.target.files[0]);
    // console.log(event.profile_image[0]);

    const formData = new FormData();
    // formData.append("profile_image", event.profile_image[0]);
    formData.append("profile_image", event.target.files[0]);

    const resp = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-profile-image",
      {
        method: "POST",
        body: formData,
        headers: {
          // "Content-Type": "multipart/form-data", // ဒီဟာလိုတတ်တယ် img ဆိုရင်
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
      navigate("/dashboard/user-profile");
    } else {
      toast.error(json.message);
    }
  };

  const handleImageUploadIcon = () => {
    // console.log(fileInputRef);
    // console.log(fileInputRef.current);
    fileInputRef.current.click();
  };

  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Change Profile Image"}
          icon={<FaFileImage />}
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
              <h2 className="text-2xl font-bold mb-4">Change Profile Image</h2>
              <form onSubmit={handleSubmit(handleChangeProfileImageBtn)}>
                <div className=" flex justify-center items-center">
                  <div className=" relative inline-block">
                    <img
                      src={
                        profile_image
                          ? profile_image
                          : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
                      }
                      className=" size-48 rounded-full mb-5 object-cover"
                      alt="profile image"
                    />
                    <button
                      onClick={handleImageUploadIcon}
                      className=" absolute  bottom-4 right-4 translate-x-1/2 -translate-y-1/2 size-6 flex justify-center items-center rounded-full bg-teal-600 text-white hover:bg-teal-500 active:scale-125"
                    >
                      <HiCamera />
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="image-input" className="sr-only">
                    Choose file
                  </label>
                  <input
                    ref={fileInputRef}
                    onChange={handleChangeProfileImageBtn}
                    type="file"
                    id="image-input"
                    // {...register("profile_image", { required: true })}
                    className=" hidden w-full border border-gray-200 shadow-sm rounded-lg text-sm  focus:z-10 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400"
                  />
                </div>

                {/* <div className="mt-4 flex justify-center space-x-3">
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
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UserProfileChangeImagePage;
