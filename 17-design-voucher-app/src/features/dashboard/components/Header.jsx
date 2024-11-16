import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import useUserStore from "../../../stores/useUserStore";

const Header = () => {
  const {
    user: { name, email, profile_image },
  } = useUserStore();

  return (
    <header className="font-header mb-5">
      <Container>
        <div className=" flex justify-between items-center">
          <div>
            <Link to={"/dashboard"} className="text-3xl font-bold">
              Voucher App
            </Link>
            <p className="text-zinc-400">MMS IT Solutions</p>
          </div>
          <Link
            to={"/dashboard/user-profile"}
            className=" flex items-center gap-3"
          >
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
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
