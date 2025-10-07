import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookCanvas from "../components/Book Model/BookCanvas.jsx";
import toast from "react-hot-toast";
import axios from "axios";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUsersCog, FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [checkPassword, setCheckPassword] = useState(false);

  const handleCheckPassword = () => {
    setCheckPassword((prevCheckPassword) => !prevCheckPassword);
  };
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, role } = form;
    if (!name.trim() || !email.trim() || !password.trim() || !role) {
      toast.error("All fields are required");
      return;
    }
    try {
      setLoading(true);
      const BASE_URL =
        import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:5001";
      const data = await axios.post(`${BASE_URL}/api/auth/register`, {
        name,
        email,
        password,
        role,
      });
      // console.log(`Succesfully created an account`, data);
      setTimeout(() => {
        toast.success("Succesfully created an account");
      }, 2000);
      navigate("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message);
      } else {
        toast.error("Failed to create an account");
      }
      console.log(`Error creating an account`, error);
      toast.error("Failed to create an account");
    } finally {
      setLoading(false);
    }
  };
  console.log(form);

  return (
    <div className="max-w-4xl h-screen mx-auto p-10  flex items-center justify-center">
      <div className="flex  md:flex-row flex-col-reverse justify-around shadow-2xl rounded-xl p-10 w-full space-x-20 lg:space-y-0 space-y-10">
        <div className="flex flex-col items-center justify-center w-full">
          {/* <img
            src="https://tse1.mm.bing.net/th/id/OIP.wxiaLh1K6MaFKpeagGyxeAHaE7?pid=Api&P=0&h=220"
            alt=""
            className=" bg-blue-400 object-center lg:size-full rounded-xl"
          /> */}
          <h1 className="text-xl font-bold mb-4 text-center ">
            Join Kabooker — Register Your Account
          </h1>
          <figure className="w-full h-96 rounded-xl overflow-hidden  shadow-md">
            <BookCanvas />
          </figure>
        </div>
        <div className="w-full space-y-10 mt-8 ">
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
                <FaUserLarge />
                <label htmlFor="name" className="text-gray-700 font-semibold">
                  {" "}
                  Name
                </label>
              </div>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Enter your name"
                name="name"
                className="w-full border-none outline-none placeholder:text-gray-400"
              />
              <div className="absolute w-0 group-hover:w-full duration-300 transition-all  h-[2px] bg-black bottom-1 left-0"></div>
            </div>
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
                className="w-full border-none outline-none placeholder:text-gray-400"
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
                <button type="button" onClick={handleCheckPassword}>
                  {checkPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
              <div className="absolute w-0 group-hover:w-full duration-300 transition-all  h-[2px] bg-black bottom-1 left-0"></div>
            </div>
            <div className="flex flex-col space-y-2 relative group">
              <div className="flex items-center space-x-2">
                <FaUsersCog />
                <label htmlFor="role" className="text-gray-700 font-semibold">
                  {" "}
                  Role
                </label>
              </div>
              <select
                name="role"
                id=""
                onChange={handleChange}
                className="border-none outline-none"
              >
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
              </select>
              <div className="absolute w-0 group-hover:w-full duration-300 transition-all  h-[2px] bg-black bottom-1 left-0"></div>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full relative overflow-hidden rounded-xl group border border-gray-400 mb-10"
            >
              <span
                className="absolute 
            top-0 group-hover:bg-blue-400 group-hover:w-full left-0 transition-all duration-400 w-0 h-full "
              ></span>
              <span className="px-2 py-2 group-hover:text-white font-bold z-10 transition-colors duration-500 ">
                {loading ? "Loading" : "Register"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
