import React from "react";
import Base from "@/assets/images/base.jpg";
import Img from "../image/Image";
import BannerCard from "../banner/bannerCard/BannerCard";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import styles from "./Service.module.scss";
import { MdPreview } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { GiConfrontation } from "react-icons/gi";
import BannerCard2 from "../banner/bannerCard/BannerCard2";
import Footer from "../footer/Footer";

const Service = () => {
  return (
    <section>
      <div className="relative">
        <div>
          <Img
            path={Base}
            name={""}
            className=" md:block  w-full  h-[15rem] top-5  bottom-16  object-cover"
          />
        </div>
        <div className="absolute  -bottom-5 bg-[#0000008f] h-72 w-full">
          <h1 className="text-white text-2xl md:text-4xl font-extrabold flex items-center justify-center mt-40">
            Our Services
          </h1>
        </div>
      </div>
      <div className="bg-[#0000008f] text-white  md:mt-0">
        <div className="flex flex-col items-center justify-center pt-10">
          <h1 className="text-2xl md:text-4xl font-bold">Services</h1>
          <h1 className="w-2/3 md:w-4/6 md:text-base text-center text-sm py-2">
            Our team of experts are trained to always put the interest of the
            client first. This has endeared us to many of our clients who trust
            us, you can also trust us too.
          </h1>
        </div>
        <div className="-mt-12 md:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 mx-10">
          <BannerCard
            bgColor="bg-[#7a7878]"
            iconBgColor="bg-[#4068e2]"
            icon={<IoCheckmarkDoneCircle />}
            title="Funds Recovery"
            description="We help you recover money that you might have lost to fraudulent online schemes."
          />
          <BannerCard
            bgColor="bg-[#7a7878]"
            iconBgColor="bg-[#4068e2]"
            icon={<IoCheckmarkDoneCircle />}
            title="Investment Advising"
            description="We advise you on profitable investment portfolios so as to ensure that you don't fall victim of investment scams again."
          />
          <BannerCard
            bgColor="bg-[#7a7878]"
            iconBgColor="bg-[#4068e2]"
            icon={<IoCheckmarkDoneCircle />}
            title="Assessment"
            description="Our analysis of claims is through and carried out by some of the best attorneys in the business."
          />
          <BannerCard
            bgColor="bg-[#7a7878]"
            iconBgColor="bg-[#4068e2]"
            icon={<IoCheckmarkDoneCircle />}
            title="Intelligent Gathering"
            description="Benefit from a wealth of data gathered by us and also by our associates. We can help you verify authenticity of investment schemes."
          />
        </div>
      </div>
      <div className={`${styles.banner2} py-10`}>
        <div className=" bg-[#0000008f] flex flex-col justify-center md:mx-20 md:items-center lg:flex-row gap-4 lg:items-start py-3">
          <div className="flex flex-col items-center justify-center pt-10 text-white">
            <h1 className="text-2xl md:text-4xl font-bold">
              Our Working Process
            </h1>
            <h1 className="w-2/3 md:w-4/6 md:text-base text-center text-sm py-2">
              Our team of experts are trained to always put the interest of the
              client first. Here to help you get back what you lost to online
              fraud.
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-4 items-center justify-center mx-20 md:grid-cols-2 lg:grid-cols-4  mt-10 ">
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
      <Footer />
    </section>
  );
};

export default Service;
