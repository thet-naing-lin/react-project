import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCookie from "react-use-cookie";
import useUserStore from "../stores/useUserStore";

const Header = () => {
  // const [userCookie] = useCookie("user");
  // console.log(userCookie);

  // const userObj = JSON.parse(userCookie);
  // console.log(userObj);

  // const { name, email, profile_image } = JSON.parse(userCookie);

  const {
    user: { name, email, profile_image },
  } = useUserStore();

  return (
    <header className="font-header mb-5">
      <Container>
        <div className=" flex justify-between items-center">
          <div>
            <Link to={"/"} className="text-3xl font-bold">
              Voucher App
            </Link>
            <p className="text-zinc-400">MMS IT Solutions</p>
          </div>
          <div className=" flex items-center gap-3">
            <img
              src={
                profile_image
                  ? profile_image
                  : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
              }
              className=" border border-white shadow-lg size-12 rounded-full object-cover"
              alt="user_profile"
            />
            <div>
              <h1 className="text-sm font-bold">{name}</h1>
              <p className="text-zinc-400 text-xs">{email}</p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
