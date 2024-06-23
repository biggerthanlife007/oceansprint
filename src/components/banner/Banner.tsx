import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./Banner.module.scss";
import Img from "../image/Image";
import BannerImg from "@/assets/images/Banner.jpg";
import Input from "../input/Input";
import Dropdown from "../dropdown/Dropdown";
import { fetchCountries } from "@/helpers/banner";
import { OptionType } from "../dropdown/Dropdown.props";

const scamType = [
  { label: "Binary Options", value: "Binary Options" },
  { label: "Forex", value: "Forex" },
  { label: "Crypto (related)", value: "Crypto (related)" },
  { label: "Stock Trading Scam", value: "Stock Trading Scam" },
  {
    label: "Pig Butchering Scam Recovery",
    value: "Pig Butchering Scam Recovery",
  },
  { label: "SLBC/Bank Guarantee Scam", value: "SLBC/Bank Guarantee Scam" },
];

const currency = [
  { label: "USD", value: "USD" },
  { label: "GBP", value: "GBP" },
  { label: "EUR", value: "EUR" },
  { label: "AUD", value: "AUD" },
  { label: "CAD", value: "CAD" },
  { label: "ZAR", value: "ZAR" },
  { label: "DEK", value: "DEK" },
  { label: "SEK", value: "SEK" },
  { label: "BTC", value: "BTC" },
];

const paymentMethod = [
  { label: "Credit/Debit Card", value: "Credit/Debit Card" },
  { label: "Bank Wire Transfer", value: "Bank Wire Transfer" },
  {
    label: "Credit/Debit Card and Bank Wire Transfer",
    value: "Credit/Debit Card and Bank Wire Transfer",
  },
  { label: "Bitcoin/Cryptocurrencies", value: "Bitcoin/Cryptocurrencies" },
  { label: "Others", value: "Others" },
];

const amountLost = [
  { label: "2000-5,000", value: "2000-5,000" },
  { label: "5000-10,000", value: "5000-10,000" },
  { label: "10,000-50,000", value: "10,000-50,000" },
  { label: "50,000-100,000", value: "50,000-100,000" },
  { label: "100,000+", value: "100,000+" },
];

const Banner = () => {
  const [country, setCountry] = useState<OptionType[]>([]);
  const [formValues, setFormValues] = useState({
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

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleDropdownChange = (
    e: ChangeEvent<HTMLSelectElement>,
    fieldName: string
  ) => {
    setFormValues({
      ...formValues,
      [fieldName]: e.target.value,
    });
  };

  useEffect(() => {
    const getOptions = async () => {
      const countryOptions = await fetchCountries();
      setCountry(countryOptions);
    };

    getOptions();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormValues({
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
    }, 3000);
  };

  return (
    <div className="w-full h-[1650px] md:h-[980px]">
      <div className={styles.banner}>
        <div className="mt-0 flex flex-col items-center justify-center md:flex md:flex-row md:gap-5 md:mx-6">
          <h1 className="w-4/6 text-[white] text-4xl md:text-6xl text-start  md:w-[35%] pt-[10rem]">
            Have You Been Scammed Online? Let’s Recover Your Money Now!
          </h1>

          <div className="bg-[#0000008f] mt-[7rem] w-11/12 rounded-lg md:w-[1150px] lg:w-[600px] py-6 md:px-2">
            <h1 className="text-[white] pt-[2rem] text-[1.4rem] whitespace-nowrap text-center md:mt-[3rem]">
              Get a free consultation now...
            </h1>
            <p className="w-4/6 mx-auto text-[white] mt-[1rem] text-center">
              We are ready to offer you a helping hand immediately!
            </p>

            <form className="w-full mt-6" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <Input
                  label="Name"
                  name="name"
                  onChange={handleInputChange}
                  value={formValues.name}
                />
                <Input
                  label="Email"
                  name="email"
                  onChange={handleInputChange}
                  value={formValues.email}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-4">
                <Input
                  label="Phone Number"
                  name="phoneNumber"
                  onChange={handleInputChange}
                  value={formValues.phoneNumber}
                />
                <Input
                  label="Scam Company Name"
                  name="scamCompanyName"
                  onChange={handleInputChange}
                  value={formValues.scamCompanyName}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
                <div className="mt-4">
                  <Dropdown
                    label="Country"
                    options={country}
                    onChange={(e) => handleDropdownChange(e, "country")}
                    dropdownValue={formValues.country}
                  />
                </div>

                <div className="mt-4">
                  <Dropdown
                    label="Amount Lost"
                    options={amountLost}
                    onChange={(e) => handleDropdownChange(e, "amountLost")}
                    dropdownValue={formValues.amountLost}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
                <div className="mt-4">
                  <Dropdown
                    label="Payment Method"
                    options={paymentMethod}
                    onChange={(e) => handleDropdownChange(e, "paymentMethod")}
                    dropdownValue={formValues.paymentMethod}
                  />
                </div>

                <div className="mt-4">
                  <Dropdown
                    label="Currency"
                    options={currency}
                    onChange={(e) => handleDropdownChange(e, "currency")}
                    dropdownValue={formValues.currency}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
                <Input
                  label="Last Transaction Date"
                  name="lastTransactionDate"
                  onChange={handleInputChange}
                  value={formValues.lastTransactionDate}
                />

                <div className="mt-4">
                  <Dropdown
                    label="Scam Type"
                    options={scamType}
                    onChange={(e) => handleDropdownChange(e, "scamType")}
                    dropdownValue={formValues.scamType}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
                <textarea
                  name="message"
                  placeholder="message"
                  className="items-center justify-center w-[300px] md:w-[459px] rounded-[5px] outline-none placeholder:text-[black]"
                  rows={5}
                  onChange={handleInputChange}
                  value={formValues.message}
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
                <button
                  className="h-[40px] w-[220px] bg-[#2c3aa4] text-[white] md:w-[459px]"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Get Consultation"}
                </button>
              </div>

              {submitted && (
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
                  <p className="text-[green]">
                    Your details have been submitted successfully!
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
