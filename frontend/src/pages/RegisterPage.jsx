import React from "react";
import { Link } from "react-router-dom";
import BookCanvas from "../components/Book Model/BookCanvas.jsx";
const RegisterPage = () => {
  return (
    <div className="max-w-4xl h-screen mx-auto p-10  flex items-center justify-center">
      <div className="flex  md:flex-row flex-col-reverse justify-around shadow-2xl rounded-xl p-10 w-full space-x-20 lg:space-y-0 space-y-10">
        <div className="flex  items-center justify-center w-full">
          {/* <img
            src="https://tse1.mm.bing.net/th/id/OIP.wxiaLh1K6MaFKpeagGyxeAHaE7?pid=Api&P=0&h=220"
            alt=""
            className=" bg-blue-400 object-center lg:size-full rounded-xl"
          /> */}
          <figure className="size-full">
            <BookCanvas />
          </figure>
        </div>
        <div className="w-full space-y-10 ">
          <div className="flex space-x-8 justify-around ">
            <Link
              to={"/login"}
              className="font-bold text-xl hover:text-blue-500 duration-500 transition-colors"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="font-bold text-xl hover:text-blue-500 duration-500 transition-colors"
            >
              Register
            </Link>
          </div>
          <form className="  mt-5 w-full space-y-10 ">
            <div className="flex flex-col space-y-2 relative group">
              <label htmlFor="name" className="text-gray-700 font-semibold">
                {" "}
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="border-none outline-none placeholder:text-gray-400"
              />
              <div className="absolute w-0 group-hover:w-full duration-300 transition-all  h-[2px] bg-black bottom-1 left-0"></div>
            </div>
            <div className="flex flex-col space-y-2 relative group">
              <label
                htmlFor="email"
                className="text-gray-700 font-semibold tex"
              >
                Password
              </label>
              <input
                type="text"
                placeholder="Enter your password"
                name="password"
                className="border-none outline-none placeholder:text-gray-400"
              />
              <div className="absolute w-0 group-hover:w-full duration-300 transition-all  h-[2px] bg-black bottom-1 left-0"></div>
            </div>
            <div className="flex flex-col space-y-2 relative group">
              <label
                htmlFor="email"
                className="text-gray-700 font-semibold tex"
              >
                Password
              </label>
              <input
                type="text"
                placeholder="Enter your password"
                name="password"
                className="border-none outline-none placeholder:text-gray-400"
              />
              <div className="absolute w-0 group-hover:w-full duration-300 transition-all  h-[2px] bg-black bottom-1 left-0"></div>
            </div>
            <div className="flex flex-col space-y-2 relative group">
              <label htmlFor="role" className="text-gray-700 font-semibold tex">
                Role
              </label>
              <select name="" id="">
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
              </select>
              <div className="absolute w-0 group-hover:w-full duration-300 transition-all  h-[2px] bg-black bottom-1 left-0"></div>
            </div>
          </form>
          <button className="flex items-center justify-center w-full relative overflow-hidden rounded-xl group border border-gray-400 mb-10">
            <span
              className="absolute 
            top-0 group-hover:bg-blue-400 group-hover:w-full left-0 transition-all duration-400 w-0 h-full "
            ></span>
            <span className="px-2 py-2 group-hover:text-white font-bold z-10 transition-colors duration-500 ">
              Login
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
