import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import BannerCard from "./bannerCard/BannerCard";

const Banner2 = () => {
  return (
    <div className="bg-[#0000008f] text-white mt-12  md:mt-0">
      <div className="-mt-12 md:mt-0 grid grid-cols-1 lg:grid-cols-4 py-10 mx-10">
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
  );
};

export default Banner2;
