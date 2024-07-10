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
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const [{ cartShow }, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      payload: !cartShow,
    });
  };

  return (
    <>
      <header className=" inset-x-0 top-0 p-6">
        {/* Desktop & Tablet */}
        <nav
          aria-label="Global"
          className="hidden md:flex w-full h-full items-center justify-between text-base pt-1 px-4 lg:px-20 font-sans font-medium"
        >
          <Link to="/" className="logo flex lg:flex-1">
            <motion.img
              whileTap={{ scale: 0.9 }}
              alt="Eriqueenah Logo"
              src={Logo}
              className="h-8 w-auto cursor-pointer"
            />
          </Link>

          <div className="searchbox hidden lg:flex flex-1">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative w-[70%]"
            >
              <input
                value={""}
                type="text"
                onChange={(e) => {}}
                className="searchbar block w-full ps-10 text-sm pl-10 pr-4 py-2 border-2 border-green-900 rounded-lg focus:border-green-900"
                placeholder="Search products"
              />
              <div className="absolute left-0 top-0 bottom-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
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

          <div className="navicon__link hidden items-center space-x-4 gap-2 relative lg:flex">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="flex items-center text-green-900 cursor-pointer"
            >
              <PlaceOutlinedIcon style={{ fontSize: "2.5rem" }} />
              <ArrowDropDownIcon
                style={{ fontSize: "2rem" }}
                className="mt-5 text-green-900"
              />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="flex items-center text-green-800 hover:text-green-900 cursor-pointer"
              onClick={showCart}
            >
              <ShoppingCartOutlinedIcon
                style={{ fontSize: "2.3rem" }}
                className="text-green-900"
              />
            </motion.button>
          </div>

          <div className="navauth hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="">
              <Button
                sx={{
                  backgroundColor: "#064F26",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#046A38",
                  },
                }}
                onClick={handleOpen}
                className="px-4 py-2 border-2 bg-green-900 rounded-lg focus:border-green-900 text-white"
              >
                SIGN IN
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile */}
        <nav className="flex md:hidden w-full h-full items-center justify-between">
          <button onClick={toggleMobileMenu} className="text-green-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
          <Link to="/" className="logo">
            <motion.img
              whileTap={{ scale: 0.9 }}
              alt="Eriqueenah Logo"
              src={Logo}
              className="h-7 w-auto cursor-pointer"
            />
          </Link>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex items-center text-green-800 hover:text-green-900 cursor-pointer"
          >
            <SearchIcon
              style={{ fontSize: "2rem" }}
              className="text-green-900"
            />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex items-center text-green-800 hover:text-green-900 cursor-pointer"
            onClick={showCart}
          >
            <ShoppingCartOutlinedIcon
              style={{ fontSize: "2rem" }}
              className="text-green-900"
            />
          </motion.button>
          <Link to="">
            <motion.button
              onClick={handleOpen}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-green-900 rounded-lg text-white"
            >
              SIGN IN
            </motion.button>
          </Link>
        </nav>

        <dialog
          open={isMobileMenuOpen}
          onClose={toggleMobileMenu}
          className="absolute left-0 top-0 z-10 h-screen max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
        >
          <div className="bg-white rounded-lg p-4 w-64">
            <button
              onClick={toggleMobileMenu}
              className="text-green-900 mb-4 item-end justify-end w-full flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="space-y-4">
              <li className="">
                <Link
                  to="/"
                  onClick={toggleMobileMenu}
                  className="font-semibold flex w-full item-center p-1 justify-between "
                >
                  Home
                  <HomeIcon className="text-green-900" />
                </Link>
              </li>
              <li className="">
                <Link
                  to="/"
                  onClick={toggleMobileMenu}
                  className="font-semibold flex w-full item-center p-1 justify-between"
                >
                  Settings
                  <SettingsIcon className="text-green-900" />
                </Link>
              </li>
              <li className="">
                <Link
                  to="/"
                  onClick={toggleMobileMenu}
                  className="font-semibold flex w-full item-center p-1 justify-between"
                >
                  Location
                  <PlaceOutlinedIcon className="text-green-900" />
                </Link>
              </li>
            </ul>
          </div>
        </dialog>

        <Dialog
          open={isOpen}
          onClose={handleOpen}
          className="bg-opacity-25 dialog"
        >
          <Card className=" mx-auto w-full max-w-[34rem] h-full rounded-sm">
            <CardContent className="cardcontent p-6 flex flex-col gap-5">
              <Link to="/">
                <Typography
                  onClick={handleOpen}
                  className="flex text-gray-200 font-thin cursor-pointer"
                >
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
      </header>

      <div
        className="herosection mt-2 px-6 lg:py-10 relative isolate bg-cover bg-no-repeat border-t-2 border-b-2 border-green-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${heroSvg})`,
        }}
      >
        <div className="max-w-5xl px-4 sm:px-10 lg:px-20 py-8 sm:py-20 lg:py-32">
          <div className="herosection-info text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-normal tracking-wider text-gray-100">
              Welcome to Eriqueenah's Green Grocery Shop
            </h1>
            <p className="max-w-full sm:max-w-96 mt-4 sm:mt-6 text-lg sm:text-2xl lg:text-3xl leading-6 sm:leading-8 text-gray-100 font-sans font-medium">
              Your trusted one-way stop for 100% Organic & Fresh Fruits
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
