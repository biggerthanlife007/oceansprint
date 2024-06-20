import React, { ChangeEvent, useState } from "react";
import Input from "../input/Input";
import Dropdown from "../dropdown/Dropdown";
import { IoLocationOutline } from "react-icons/io5";
import ContactCard from "./ContactCard";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";

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

const Contact = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue(e.target.value);
  };
  return (
    <div className="bg-[#0000008f]">
      <div className="pt-6 py-20">
        <div className="pt-6 ">
          <h1 className="text-white text-xl font-bold text-center pb-3">
            Get in touch, lets work together
          </h1>

          <div className="flex flex-col gap-12 pt-8">
            <ContactCard
              icon={IoLocationOutline}
              title="Address:"
              description="9 Tudor Green, Clacton-On-Sea, Essex, United Kingdom, CO15 2PA"
            />
            <ContactCard
              icon={FaPhoneAlt}
              title="Phone:"
              description="+44 7444 444 444"
            />
            <ContactCard
              icon={FaMailBulk}
              title="Email:"
              description="info@yourdomain.com"
            />
          </div>
        </div>
        <form className="w-full pt-6">
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
  );
};

export default Contact;
