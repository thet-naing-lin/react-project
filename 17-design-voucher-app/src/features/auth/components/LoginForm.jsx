import React from "react";
import useCookie from "react-use-cookie";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcApproval } from "react-icons/fc";
import { login } from "../../../services/auth";

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [token, setToken] = useCookie("login_token");
  const [userCookie, setUserCookie] = useCookie("user");

  const handleLoginBtn = async (data) => {
    const resp = await login(data);

    const json = await resp.json();

    if (resp.status === 200) {
      toast("Account Login successfully!", {
        icon: <FcApproval className="text-xl" />,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });

      setToken(json.token);
      setUserCookie(JSON.stringify(json.user));

      navigate("/dashboard");
    } else {
      toast.error(json.message);
    }
  };

  return (
    <form
      className="space-y-4 md:space-y-6"
      onSubmit={handleSubmit(handleLoginBtn)}
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          {...register("email")}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          {...register("password")}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="text-gray-500 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-500"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
      >
        Sign in
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?
        <Link
          to="/register"
          className="font-medium text-teal-600 hover:underline dark:text-teal-500"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
