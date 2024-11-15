import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="font-header mb-5">
      <Container>
        <div>
          <Link to={"/"} className="text-3xl font-bold">
            Voucher App
          </Link>
          <p className="text-zinc-400">MMS IT Solutions</p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
