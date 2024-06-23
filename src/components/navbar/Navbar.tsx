import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaInfoCircle, FaTimes, FaBriefcase, FaBars } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { SiBlogger } from "react-icons/si";
import { PiGooglePodcastsLogoLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { text: "Home", icon: <AiFillHome />, link: "/" },
    { text: "Our Services", icon: <FaBriefcase />, link: "/service" },
    { text: "About Us", icon: <FaInfoCircle />, link: "/about" },
    { text: "Contact Us", icon: <BiSolidContact />, link: "/contact" },
    { text: "Blog", icon: <SiBlogger />, link: "/blog" },
  ];

  return (
    <div className="fixed top-0 w-full bg-white z-50">
      {/* <div className="flex items-center justify-center gap-6 mt-2"> */}
      {/* <div className="flex h-[2rem] gap-8 items-center justify-center mx-8 mt-8"> */}
      <div className={styles.NavbarItems}>
        <div className="flex items-center mb-6">
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {/* Hamburger icon */}
            <div
              className={`${
                isMenuOpen ? "hidden" : "block"
              } text-[22px] cursor-pointer mt-[1.5rem]`}
            >
              <GiHamburgerMenu />
            </div>
            {isMenuOpen && (
              // "Cancel" button to close the menu
              <div
                className="left-[3rem] text-[22px] bottom-[44rem] mt-[1.5rem] cursor-pointer "
                onClick={closeMenu}
              >
                <LiaTimesSolid />
              </div>
            )}
          </div>
          <div className="flex items-center gap-6 mx-[2rem] md:w-[1340px] md:mt-3">
            <h1 className={styles.navbar_logo}>
              OCEANSPRINT
              <div className="bg-[#2c3aa4]">
                <div className="color-[#fff]">
                  <PiGooglePodcastsLogoLight style={{ color: "white" }} />
                </div>
              </div>
            </h1>

            <div className="hidden mb-14  md:flex flex-row items-center gap-8">
              {navItems.map((item, index) => (
                <Link href={item.link} key={index}>
                  <h1 className={styles.nav_links}>{item.text}</h1>
                </Link>
              ))}
            </div>
            <button className="hidden md:block bg-[#2c3aa4] text-white h-[3rem] px-2 mt-2 rounded-md ">
              Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE SCREEN */}
      {isMenuOpen && (
        <div className="md:hidden absolute bg-[white] flex flex-col  h-[50rem] w-[400px] pt-[2rem] md:pt-0 pl-6  border-r-2 z-50">
          {navItems.map((item, index) => (
            <div key={index}>
              <Link href={item.link}>
                <h1 className={styles.nav_links}>{item.text}</h1>
              </Link>
              <hr className="border-gray-300" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
