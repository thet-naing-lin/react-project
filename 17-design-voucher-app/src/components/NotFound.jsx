import React from "react";
import { Link } from "react-router-dom";
import useCookie from "react-use-cookie";

const NotFound = () => {
  const [user] = useCookie("user");

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl min-h-screen lg:py-16 lg:px-6 flex items-center">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-teal-600 dark:text-teal-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <Link
            to="/"
            className="inline-flex me-5 text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-teal-900 my-4"
          >
            Back to Homepage
          </Link>

          {user && (
            <Link
              to="/dashboard"
              className="inline-flex text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-teal-900 my-4"
            >
              Back to Dashboard
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default NotFound;
