import { ICountry } from "../../types";
import { Badge } from "../Badge/Badge";
import { CountryItem } from "../CountryItem/CountryItem";

interface IProps {
  country: ICountry[];
}

export const CountryList = ({ country }: IProps) => {
  return (
    <ul className="list-group">
      {country.map((country) => {
        return (
          <li className="list-group-item" key={country.name}>
            <CountryItem
              flag={country.flag}
              name={country.name}
              capital={country.capital}
              region={country.region}
              area={country.area}
              population={country.population}
            />
          </li>
        );
      })}
    </ul>
  );
};
