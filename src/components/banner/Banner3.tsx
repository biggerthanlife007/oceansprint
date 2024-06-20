import React from "react";
import { MdPreview } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { GiConfrontation } from "react-icons/gi";
import BannerCard2 from "./bannerCard/BannerCard2";
import styles from "./Banner.module.scss";

const Banner3 = () => {
  return (
    <div className={`${styles.banner2} py-10`}>
      <div className=" bg-[#0000008f] flex flex-col justify-center md:mx-20 md:items-center lg:flex-row gap-4 lg:items-start py-3">
        <div className="flex flex-col gap-6 items-center  justify-center">
          <h1 className="text-2xl md:text-4xl text-white pt-20 whitespace-nowrap">
            Why Ocean Sprint?
          </h1>
          <h1 className="text-2xl md:text-4xl text-white whitespace-nowrap">
            We&apos;ve Got Reasons For You
          </h1>
          <button className="h-[40px] w-[220px]  bg-[#2c3aa4] text-[white] md:w-[259px]">
            Read More
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 items-center justify-center mx-20 lg:grid-cols-2 mt-10 ">
          <BannerCard2
            icon={MdPreview}
            title="Case Review"
            description="Performing preliminary checks to assess whether the case can result in a substantial recovery, based on our experience."
          />
          <BannerCard2
            icon={FaSearch}
            title="Gather The Evidence"
            description="Collecting all the information and documentation required to successfully pursue your case."
          />
          <BannerCard2
            icon={GiConfrontation}
            title="Confront The Entities"
            description="Systematically confronting the relevant entities that have facilitated the illicit transfer of your wealth"
          />
          <BannerCard2
            icon={MdPreview}
            title="Support 24/7"
            description="
          We take pride in our track record and assure you that we’ll go to great lengths to get your money back"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner3;
