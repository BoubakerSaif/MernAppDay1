import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.AuthReducer);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { password, confirmPassword } = user;
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(updateUser({ user, navigate, toast }));
    } else {
      toast.error("Passwords are not matching");
    }
  };

  return (
    <div>
      <section className="py-10 my-auto dark:bg-gray-900 h-screen">
        <div className="lg:w-[80%] md:w-[90%] w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] sm:w-[88%] w-full mx-auto shadow-2xl p-4 rounded-xl  self-center dark:bg-gray-800/40">
            <div>
              <h1 className="lg:text-3xl md:text-2xl text-xl font-serif font-extrabold mb-2 dark:text-white text-center">
                Update your Profile
              </h1>
              <form onSubmit={updateHandler}>
                <div className="w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center"></div>
                <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-6">
                    <label className="mb-2 dark:text-gray-300">FirstName</label>
                    <input
                      onChange={changeHandler}
                      type="text"
                      name="firstName"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      defaultValue={userInfo?.firstName}
                    />
                  </div>
                  <div className="w-full  mb-4 lg:mt-6">
                    <label className=" dark:text-gray-300">LastName</label>
                    <input
                      onChange={changeHandler}
                      name="lastName"
                      type="text"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      defaultValue={userInfo?.lastName}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-6">
                    <label className="mb-2 dark:text-gray-300">Age</label>
                    <input
                      onChange={changeHandler}
                      type="number"
                      name="age"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      defaultValue={userInfo?.age}
                    />
                  </div>
                  <div className="w-full  mb-4 lg:mt-6">
                    <label className=" dark:text-gray-300">Email</label>
                    <input
                      onChange={changeHandler}
                      name="email"
                      type="email"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      defaultValue={userInfo?.email}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-6">
                    <label className="mb-2 dark:text-gray-300">Password</label>
                    <input
                      onChange={changeHandler}
                      type="password"
                      name="password"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>
                  <div className="w-full  mb-4 lg:mt-6">
                    <label className=" dark:text-gray-300">
                      Confirm Password
                    </label>
                    <input
                      onChange={changeHandler}
                      name="confirmPassword"
                      type="password"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>
                </div>

                <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                  <button type="submit" className="w-full p-4">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
