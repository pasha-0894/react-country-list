import { CountryList } from "./components/CountryList/CountryList";
import countries from "./country-data.json";
import { transformCountries } from "./mappers/transformCountries";

export const App = () => {
  const transformedCountries = transformCountries(countries);
  return (
    <div>
      <h1>Country List</h1>
      <CountryList country={transformedCountries} />
    </div>
  );
};
