import React from "react";
import styles from "./Footer.module.scss";
import { PiGooglePodcastsLogoLight } from "react-icons/pi";
import { FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[gray]">
      <div className="flex flex-col lg:flex-row mx-20 md:mx-5 lg:mx-0 lg:items-start gap-4 text-white justify-center py-20">
        <div className="w-5/6 md:w-1/3">
          <h1 className={styles.logo}>
            OCEANSPRINT
            <div className="bg-[#2c3aa4]">
              <div className="color-[#fff]">
                <PiGooglePodcastsLogoLight style={{ color: "white" }} />
              </div>
            </div>
          </h1>

          <h3 className="text-white">
            Ocean Sprint is proud to be spearheading the legal fight against
            unregulated Binary Options / Forex / Cryptocurrencies companies,
            helping countless financial fraud victims recover their stolen
            funds.
          </h3>
        </div>

        <div>
          <h1>Quick links</h1>
          <div className="flex flex-col gap-4 my-5">
            <div className="flex flex-row items-center gap-4">
              <FaChevronRight className="text-[#4068e2]" />
              <h2>Home</h2>
            </div>
            <div className="flex flex-row items-center gap-4">
              <FaChevronRight className="text-[#4068e2]" />
              <h2>Our Service</h2>
            </div>
            <div className="flex flex-row items-center gap-4">
              <FaChevronRight className="text-[#4068e2]" />
              <h2>About Us</h2>
            </div>
            <div className="flex flex-row items-center gap-4">
              <FaChevronRight className="text-[#4068e2]" />
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>

        <div>
          <h1>Address</h1>

          <div className="flex flex-row items-center gap-4">
            9 Tudor Green, Clacton-On-Sea, Essex, United Kingdom, <br /> CO15
            2PA
          </div>
        </div>
        <div>
          <h1>Contact Us</h1>

          <div className="flex flex-row items-center gap-4">
            <IoMdMail className="text-[#4068e2] text-3xl" /> Contact@gmail.com
          </div>
          <div className="flex flex-row items-center gap-4 mt-2">
            <FaPhoneAlt className="text-[#4068e2] text-3xl" />
            +44 2344 567865
          </div>
        </div>
      </div>
      <p className="text-center text-white pb-5">
        © 2024 All Rights Reserved. Ocean Sprint
      </p>
    </div>
  );
};

export default Footer;
