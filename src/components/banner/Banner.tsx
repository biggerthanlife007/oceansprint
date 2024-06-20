import React, { ChangeEvent, useState } from "react";
import styles from "./Banner.module.scss";
import Img from "../image/Image";
import BannerImg from "@/assets/images/Banner.jpg";
import Input from "../input/Input";
import Dropdown from "../dropdown/Dropdown";

const options = [
  {
    label: "...",
    value: "",
  },
  {
    label: "Boy",
    value: "boy",
  },
  {
    label: "Girl",
    value: "girl",
  },
];

const Banner = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    scamCompanyName: "",
    country: "",
    amountLost: "",
    paymentMethod: "",
    currency: "",
    lastTransactionDate: "",
    scamType: "",
    message: "",
  });
  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue(e.target.value);
  };

  return (
    <div className=" w-full h-[1650px] md:h-[980px]">
      <div className={styles.banner}>
        <div className="mt-0 flex flex-col items-center justify-center md:flex md:flex-row md:mx-6">
          <h1 className="w-4/6 text-[white] text-4xl md:text-[3rem] text-start md:w-full  pt-[10rem]">
            Have You Been Scammed Online? Let’s Recover Your Money Now!{" "}
          </h1>

          <div className="bg-[#0000008f] mt-[7rem] w-11/12 rounded-lg md:w-[1150px] lg:w-[600px] h-[1100px] md:h-[780px]">
            <h1 className="text-[white] pt-[2rem] text-[1.4rem] whitespace-nowrap text-center md:mt-[3rem]">
              Get a free consultation now...
            </h1>
            <p className="w-4/6 mx-auto text-[white] mt-[1rem] text-center">
              We are ready to offer you a helping hand immediately!
            </p>

            <form className="w-full mt-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <Input label="Name" />
                <Input label="Email" />
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-4">
                <Input label="Phone Number" />
                <Input label="Scam Company Name" />
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
                <div className="mt-4">
                  <Dropdown
                    label="Country"
                    options={options}
                    onChange={handleDropdownChange}
                    dropdownValue={dropdownValue}
                  />
                </div>

                <div className="mt-4">
                  <Dropdown
                    label="Amount Lost"
                    options={options}
                    onChange={handleDropdownChange}
                    dropdownValue={dropdownValue}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
                <div className="mt-4">
                  <Dropdown
                    label="Payment Method"
                    options={options}
                    onChange={handleDropdownChange}
                    dropdownValue={dropdownValue}
                  />
                </div>

                <div className="mt-4">
                  <Dropdown
                    label="Currency"
                    options={options}
                    onChange={handleDropdownChange}
                    dropdownValue={dropdownValue}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
                <Input label="Last Transaction Date" />

                <div className="mt-4">
                  <Dropdown
                    label="Scam Type"
                    options={options}
                    onChange={handleDropdownChange}
                    dropdownValue={dropdownValue}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
                <textarea
                  placeholder="message"
                  className="items-center justify-center w-[220px] md:w-[459px] rounded-[5px] outline-none placeholder:text-[black]"
                  rows={5}
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
                {/* <div className="mt-6"> */}
                <button className="h-[40px] w-[220px]  bg-[#2c3aa4] text-[white] md:w-[459px]">
                  Get Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
