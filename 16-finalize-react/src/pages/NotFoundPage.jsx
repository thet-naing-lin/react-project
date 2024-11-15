import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section>
      <Container>
        <div className=" h-screen flex items-center justify-center font-body">
          <div className="text-center">
            <h1 className="text-8xl font-extrabold text-teal-400">404</h1>
            <p className="text-2xl mt-4 text-gray-600 mb-10">
              Oops! The page you're looking for doesn't exist.
            </p>
            <Link
              to={"/"}
              className=" font-header px-6 py-3 bg-teal-400 text-white rounded-md hover:bg-teal-500"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFoundPage;
