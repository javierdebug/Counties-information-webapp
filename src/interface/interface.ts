export interface Country {
  code: string;
  name: string;
  continent?: Continent;
  capital?: string;
  currency: string;
}

export interface Continent {
  code: string;
  name: string;
  countries: Country[];
}

export interface CountriesInterface {
  countryFilter?: string;
  continentFilter?: string;
  currencyFilter?: string;
}

export interface SearchInterface {
  countryFilter?: string;
  onChange(value: string): void;
}

export interface IDetailedCountryView {
  selectedCountry?: string;
}

export interface ContinentInterface {
  onChange(value: string): void;
  onClick(): void;
}

export interface CurrencyInterface {
  onChange(value: string): void;
  onClick(): void;
}

export interface Details {
  code: string;
  name: string;
  currency: string;
  continent: ContinentInDetails;
  languages: ContinentInDetails[];
  capital: string;
}

export interface ContinentInDetails {
  name: string;
}
