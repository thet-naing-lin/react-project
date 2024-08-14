import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date();
  return (
    <div className="mt-auto">
      <Container>
        <footer className=" bg-black text-white text-center py-2">
          © {date.getFullYear()}{" "}
          <a
            href="https://mms-it.com"
            className="underline text-gray-400"
            target="_blank"
          >
            MMS IT
          </a>
          . All rights reserved.
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
