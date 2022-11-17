import { ICountry, ICountryAPI } from "../types";

export const transformCountries = (countries: ICountryAPI[]): ICountry[] => {
  return countries.map(({ flags, name, capital, region, area, population }) => {
    return {
      flag: flags.svg,
      name: name.common,
      capital: capital[0],
      region: region,
      area: area,
      population: population,
    };
  });
};
