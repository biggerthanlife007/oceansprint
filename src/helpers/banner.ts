import axios from "axios";
import { OptionType } from "@/components/dropdown/Dropdown.props";

const fetchCountries = async (): Promise<OptionType[]> => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  const countries = response.data.map((country: any) => ({
    label: country.name.common,
    value: country.name.common,
  }));

  countries.sort((a: OptionType, b: OptionType) =>
    a.label.localeCompare(b.label)
  );

  return countries;
};

const fetchCountryCodes = async (): Promise<OptionType[]> => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  const countryCodes = response.data.map((country: any) => ({
    label: `${country.name.common} (+${country.idd.root}${
      country.idd.suffixes?.[0] || ""
    })`,
    value: `${country.idd.root}${country.idd.suffixes?.[0] || ""}`,
  }));

  countryCodes.sort((a: OptionType, b: OptionType) =>
    a.label.localeCompare(b.label)
  );

  return countryCodes;
};

export { fetchCountries, fetchCountryCodes };
