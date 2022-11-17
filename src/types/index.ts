export interface ICountryAPI {
  flags: IFlag;
  name: IName;
  capital: string[];
  region: string;
  area: BadgeLabel;
  population: BadgeLabel;
}

interface IFlag {
  png: string;
  svg: string;
}

interface IName {
  common: string;
  official: string;
  nativeName: {};
}

export interface ICountry {
  flag: string;
  name: string;
  capital: string;
  region: string;
  area: BadgeLabel;
  population: BadgeLabel;
}

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
}

export type BadgeLabel = number | "area" | "population";
