import React from "react";
import Base from "@/assets/images/base.jpg";
import Img from "@/components/image/Image";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Contact from "@/components/contact/Contact";

const contact = () => {
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
            Contact Us
          </h1>
        </div>
      </div>
      <Contact />

      <Footer />
    </section>
  );
};

export default contact;
