import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookCanvas from "../components/Book Model/BookCanvas.jsx";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import toast from "react-hot-toast";
import axios from "axios";
import { FaUsersCog, FaRegEyeSlash, FaRegEye } from "react-icons/fa";
const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSetCheckPassword = () => {
    setCheckPassword((prevCheck) => !prevCheck);
  };
  const handleSubmit = async (e) => {
    const { email, password } = form;
    e.preventDefault();
    setLoading(true);
    const BASE_URL =
      import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:5001";
    try {
      const data = await axios.post(`${BASE_URL}/api/auth/login`, {
        email,
        password,
      });
      toast.success("Succesfully Login");
      console.log(data);
      navigate("/dashboard");
    } catch (error) {
      console.log(`Error in login`, error);
      if (
        error.response &&
        error.ressponse.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message);
      } else {
        console.log(`Failed to login an account`, error);
        toast.error("Failed to login an account");
      }
    } finally {
      setLoading(false);
    }
  };
  console.log(form);

  return (
    <div className="max-w-4xl h-screen mx-auto p-10  flex items-center justify-center">
      <div className="flex  md:flex-row flex-col-reverse justify-around shadow-2xl rounded-xl p-10 w-full space-x-20 lg:space-y-0 space-y-10">
        <div className="flex flex-col items-center justify-center w-full space-y-4">
          {/* <img
            src="https://tse1.mm.bing.net/th/id/OIP.wxiaLh1K6MaFKpeagGyxeAHaE7?pid=Api&P=0&h=220"
            alt=""
            className=" bg-blue-400 object-center lg:size-full rounded-xl"
          /> */}
          <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Welcome Back! Please Log In to Your Kabooker Account
          </h1>
          <figure className="w-full h-96 rounded-xl overflow-hidden border border-gray-100 shadow-md">
            <BookCanvas />
          </figure>
        </div>
        <div className="w-full space-y-10 h-full mt-20 ">
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
          <form className="  mt-5 w-full space-y-10 " onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2 relative group">
              <div className="flex items-center space-x-2">
                <MdMarkEmailUnread />
                <label htmlFor="email" className="text-gray-700 font-semibold">
                  {" "}
                  Email
                </label>
              </div>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Enter your Email"
                name="email"
                className="border-none outline-none placeholder:text-gray-400"
              />
              <div className="absolute w-0 group-hover:w-full duration-300 transition-all  h-[2px] bg-black bottom-1 left-0"></div>
            </div>
            <div className="flex flex-col space-y-2 relative group">
              <div className="flex items-center space-x-2">
                <RiLockPasswordLine />
                <label
                  htmlFor="password"
                  className="text-gray-700 font-semibold"
                >
                  {" "}
                  Password
                </label>
              </div>
              <div className="flex items-center justify-between">
                <input
                  type={`${checkPassword ? 'text' : 'password'}`}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  name="password"
                  className="border-none outline-none placeholder:text-gray-400 w-full"
                />
                <button type="button" onClick={handleSetCheckPassword}>
                  {checkPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
              <div className="absolute w-0 group-hover:w-full duration-300 transition-all  h-[2px] bg-black bottom-1 left-0"></div>
            </div>
            <button className="flex items-center justify-center w-full relative overflow-hidden rounded-xl group border border-gray-400 mb-10">
              <span
                className="absolute 
            top-0 group-hover:bg-blue-400 group-hover:w-full left-0 transition-all duration-400 w-0 h-full "
              ></span>
              <span className="px-2 py-2 group-hover:text-white font-bold z-10 transition-colors duration-500 ">
                Login
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
