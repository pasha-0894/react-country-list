import { Color, ICountry } from "../../types";
import { Badge } from "../Badge/Badge";

export const CountryItem = ({
  flag,
  name,
  capital,
  region,
  area,
  population,
}: ICountry) => {
  return (
    <div className="row row-cols-6 d-flex align-items-center">
      <img src={flag} className="col-1" />
      <p className="col-3">{name}</p>
      <p>{capital}</p>
      <p>{region}</p>
      <Badge color={Color.Primary} badgeLabel={area} name={"area"} />
      <Badge
        color={Color.Secondary}
        badgeLabel={population}
        name={"population"}
      />
    </div>
  );
};
