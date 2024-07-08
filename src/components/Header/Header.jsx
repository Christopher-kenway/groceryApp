import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { motion } from "framer-motion";
import {
  Button,
  Dialog,
  Card,
  CardContent,
  Typography,
  Input,
  Checkbox,
} from "@mui/material";
import Logo from "../../assets/Logo.png";
import signlogo from "../../assets/signlogo.png";
import heroSvg from "../../assets/heroSvg.svg";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <header className="z-50 inset-x-0 top-0 p-6">
        {/* Desktop & Tablet */}
        <nav
          aria-label="Global"
          className="md:flex w-full h-full items-center justify-between text-base pt-1 px-20 font-sans font-medium"
        >
          <Link to="/" className="logo flex lg:flex-1">
            <motion.img
              whileTap={{ scale: 0.9 }}
              alt="Eriqueenah Logo"
              src={Logo}
              className="h-8 w-auto cursor-pointer"
            />
          </Link>

          <div className="searchbox hidden drop-shadow-sm lg:flex flex-1">
            <form onSubmit={""} className="relative">
              <input
                value={""}
                // onChange={(e) => setSearchText(e.target.value)}
                type="text"
                className="searchbar block w-full p-4 ps-10 text-sm pl-10 pr-4 py-2 border-2 border-green-900 rounded-lg focus:border-green-900"
                placeholder="Search products"
              />
              <div className="absolute left-0 top-0 bottom-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21L15.803 15.803M15.803 15.803A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                  />
                </svg>
              </div>
            </form>
          </div>

          <div className="navicon__link hidden items-center space-x-4 gap-2 relative drop-shadow-md lg:flex">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="flex items-center text-green-800 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-9"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742Z"
                  clipRule="evenodd"
                />
              </svg>
              <ArrowDropDownIcon className="mt-5" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="flex items-center text-green-800 hover:text-green-900 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </motion.button>
          </div>

          <div className="navauth hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="">
              <button
                onClick={handleOpen}
                className="px-4 py-2 border-2 bg-green-900 rounded-lg focus:border-green-900 drop-shadow-sm text-white"
              >
                SIGN IN
              </button>

              <Dialog
                open={open}
                onClose={handleOpen}
                className="bg-opacity-25 dialog"
              >
                <Card className=" mx-auto w-full max-w-[34rem] h-full rounded-sm">
                  <CardContent className="cardcontent p-6 flex flex-col gap-5">
                    <Link to="/">
                      <Typography className="flex text-gray-200 font-thin cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 mr-4 my-auto"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                          />
                        </svg>
                        Back to shop
                      </Typography>
                    </Link>
                    <Typography className="mb-6 text-gray-100 text-center text-xs font-normal">
                      <img
                        className="text-center h-8 my-9 mx-auto mt-16"
                        src={signlogo}
                      />
                      Sign in with your Email Address and Password
                    </Typography>
                    <Input
                      fullWidth
                      placeholder="Email"
                      size="medium"
                      className="border-2 border-black rounded-lg mb-2 bg-white p-2"
                    />
                    <Input
                      fullWidth
                      placeholder="Password"
                      size="medium"
                      type="password"
                      className="border-2 border-black rounded-lg mb-2 bg-white p-2"
                    />
                    <Typography
                      variant="body2"
                      className="text-white cursor-pointer"
                      onClick={() => alert("Forgot password clicked!")}
                    >
                      Forgot password?
                    </Typography>
                    <button
                      onClick={handleOpen}
                      fullWidth
                      className="bg-black hover:bg-gray-900 text-white p-2 font-sans rounded-md w-44 text-center mx-auto"
                    >
                      Continue
                    </button>
                    <Typography
                      variant="small"
                      className="mt-10 flex justify-center text-white text-xs font-light gap-3 my-auto items-center"
                    >
                      Don&apos;t have an account?
                      <Typography
                        component="a"
                        href="#signup"
                        className="ml-2 font-bold cursor-pointer text-white"
                        onClick={handleOpen}
                      >
                        Sign up
                      </Typography>
                    </Typography>
                  </CardContent>
                </Card>
              </Dialog>
            </Link>
          </div>
        </nav>

        {/* Mobile */}
        <nav className="flex md:hidden w-full h-full"></nav>
      </header>

      <div
        className="herosection mt-2 px-6 lg:py-10 relative isolate bg-cover bg-no-repeat border-t-2 border-b-2 border-green-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${heroSvg})`,
        }}
      >
        <div className="max-w-5xl px-20 lg:px-20 sm:py-32 lg:py-50">
          <div className="herosection-info text-left">
            <h1 className="text-7xl font-normal tracking-wider text-gray-100 sm:text-5xl">
              Welcome to Eriqueenah's Green Grocery Shop
            </h1>
            <p className="max-w-96 mt-6 text-3xl leading-8 text-gray-100 font-sans font-medium">
              Your trusted one-way stop for 100% Organic & Fresh Fruits
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
