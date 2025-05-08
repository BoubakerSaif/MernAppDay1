import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../Redux/userSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const formHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { password, confirmPassword } = user;
  const signUpHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(signUp({ user, navigate, toast }));
    } else {
      toast.error("Passwords are not matching");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
      <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
        SignUp
      </h1>
      <form className="w-full flex flex-col gap-4" onSubmit={signUpHandler}>
        <div className="flex items-start flex-col justify-start">
          <label
            for="firstName"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            First Name:
          </label>
          <input
            onChange={formHandler}
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            for="lastName"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Last Name:
          </label>
          <input
            onChange={formHandler}
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            for="username"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Age:
          </label>
          <input
            onChange={formHandler}
            type="number"
            id="age"
            name="age"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

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

        <div className="flex items-start flex-col justify-start">
          <label
            for="confirmPassword"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Confirm Password:
          </label>
          <input
            onChange={formHandler}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
        >
          Register
        </button>
      </form>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-300">
          Already have an account?
        </span>
        <Link to={"/signin"} className="text-blue-500 hover:text-blue-600">
          SignIn
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
