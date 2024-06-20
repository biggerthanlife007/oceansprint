import React from "react";
import Base from "@/assets/images/base.jpg";
import Img from "../image/Image";
import Footer from "../footer/Footer";
import Banner3 from "../banner/Banner3";
import Banner4 from "../banner/Banner4";
import Navbar from "../navbar/Navbar";

const About = () => {
  return (
    <section>
      <Navbar />
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
            About Us
          </h1>
        </div>
      </div>
      <Banner3 />
      <Banner4 />
      <Footer />
    </section>
  );
};

export default About;
