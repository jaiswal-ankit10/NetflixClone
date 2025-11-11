import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import profileImg from "../assets/profile_img.png";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { logout } from "../firebase";

const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);
  return (
    <div
      ref={navRef}
      className="w-full flex justify-between items-center px-20 py-8  fixed top-0 z-50 "
    >
      <div className="left-nav flex items-center gap-20">
        <img src={logo} alt="Netflix Logo" className="logo" width={"100px"} />
        <ul className="nav-links flex gap-8 text-xl cursor-pointer text-gray-300">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="right-nav flex items-center gap-6 text-xl">
        <img
          src={search_icon}
          alt="Search"
          className="icon search-icon cursor-pointer"
          width={"20px"}
        />
        <span className="kids-text cursor-pointer text-gray-200">Kids</span>
        <img
          src={bell_icon}
          alt="Notifications"
          className="icon bell-icon cursor-pointer"
          width={"20px"}
        />
        <div className="profile-menu flex items-center gap-2 relative group">
          <img
            src={profile_img}
            alt="Profile"
            className="icon profile-img cursor-pointer"
          />
          <img
            src={caret_icon}
            alt="Menu"
            className="icon caret-icon cursor-pointer"
          />
          <div className="dropdown absolute top-10 right-0 invisible group-hover:visible transition-all duration-300">
            <p
              onClick={() => logout()}
              className="text-sm px-2 py-2 bg-gray-400 w-[150px] text-center cursor-pointer text-black"
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
