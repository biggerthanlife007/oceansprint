import Banner from "@/components/banner/Banner";
import Banner2 from "@/components/banner/Banner2";
import Banner3 from "@/components/banner/Banner3";
import Banner4 from "@/components/banner/Banner4";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

import React from "react";

const index = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Banner2 />
      <Banner3 />
      <Banner4 />
      <Footer />
    </div>
  );
};

export default index;
