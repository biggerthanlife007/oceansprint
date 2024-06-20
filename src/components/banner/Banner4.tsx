import React from "react";
import Base from "@/assets/images/base.jpg";
import Img from "../image/Image";

const Banner4 = () => {
  return (
    <div>
      <div className="relative flex flex-col md:flex-row gap-6 items-start justify-center w-5/6 mx-auto my-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold md:text-4xl">
            We Provide The Best Of <br className="block md:hidden" /> Recovery
            Services
          </h1>
          <p className="text-start text-base w-11/1">
            Our mission is to help innocent people who have lost their monies
            online, to recover them in the shortest possible time and in the
            most cost effective way. Our vision is to have an enabling
            environment for investment. We look to reduce to the barest minimum,
            the number of unrecovered money lost due to fraudulent online
            schemes.
          </p>
          <button className="h-[40px] w-[220px] bg-[#2c3aa4] text-[white] md:w-[459px]">
            Read More
          </button>
        </div>

        <Img
          path={Base}
          name={""}
          className=" md:block absolute w-[17rem]  h-[15rem] top-5  md:w-[190rem] bottom-16 md:h-[40rem] object-cover"
        />
      </div>
    </div>
  );
};

export default Banner4;
