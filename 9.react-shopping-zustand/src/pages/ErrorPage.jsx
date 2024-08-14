import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-3">404 Page Not Found</h1>
        <p className="w-[400px] mb-7 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          consequatur asperiores quis necessitatibus assumenda sunt inventore ea
          magnam odio ullam!
        </p>
        <Link to={"/"} className="border border-gray-500 px-4 py-2 rounded-md">
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
