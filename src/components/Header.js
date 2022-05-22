import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden");

  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Courses",
      key: "/courses",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];

  const pathName = window.location.pathname;

  return (
    <div className="text-white font-mont fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex bg-theme justify-between items-center p-2 shadow-lg ${
          showMenu !== "md:hidden" && "flex-col"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <Link to="/">
            <h1 className="text-4xl font-semibold hover:text-yellow-500 cursor-pointer">
              V J
            </h1>
          </Link>
          <FaBars
            className="lg:hidden xl:hidden 2xl:hidden md:flex xs:flex cursor-pointer"
            onClick={() => {
              if (showMenu === "md:hidden") {
                setShowMenu("");
              } else {
                setShowMenu("md:hidden");
              }
            }}
          ></FaBars>
        </div>
        <div className="flex md:hidden">
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none mx-5 p-1 ${
                  item.key === pathName && "bg-white text-black rounded-md"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>

        <div
          className={`mt-5 md:flex flex-col items-start w-full lg:hidden xl:hidden 2xl:hidden ${showMenu}`}
        >
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none my-2 p-1 ${
                  item.key === pathName && "bg-white text-black rounded-md"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
