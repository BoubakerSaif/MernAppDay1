import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../Redux/userSlice";
import { toast } from "react-toastify";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const formHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(signIn({ user, navigate, toast }));
  };
  return (
    <div className="max-w-lg mx-auto mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
      <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
        SignIn
      </h1>
      <form className="w-full flex flex-col gap-4" onSubmit={loginHandler}>
        <div className="flex items-start flex-col justify-start">
          <label
            for="email"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Email:
          </label>
          <input
            onChange={formHandler}
            type="email"
            id="email"
            name="email"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            for="password"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Password:
          </label>
          <input
            onChange={formHandler}
            type="password"
            id="password"
            name="password"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-300">
          Don't have an account?
        </span>
        <Link to={"/signup"} className="text-blue-500 hover:text-blue-600">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
