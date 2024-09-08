import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="font-header mb-5">
      <Container>
        <Link to={"/"}>
          <h1 className="text-3xl font-bold">Voucher App</h1>
          <p className="text-zinc-400">MMS IT Solutions</p>
        </Link>
      </Container>
    </header>
  );
};

export default Header;
