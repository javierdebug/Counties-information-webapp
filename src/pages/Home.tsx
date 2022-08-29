import { useState } from 'react';
import Search from '../components/Search';
import ContinentFilter from '../components/ContinentFilter';
import CurrencyFilter from '../components/CurrencyFilter';
import Countries from '../components/Countries';

export default function Home() {

  const [countryFilter, setCountryFilter] = useState('');
  const [continentFilter, setContinentFilter] = useState('');
  const [currencyFilter, setCurrencyFilter] = useState('');

  const handleSearchChange = (value:string) => {
    setCountryFilter(value);
  }

  const handleContinentChange = (value:string) => {
    setContinentFilter(value);
  }

  const handleCurrencyChange = (value:string) => {
    setCurrencyFilter(value);
  }

  const removeContinentFilter = () => {
    setContinentFilter('');
  };

  const removeCurrencyFilter = () => {
    setCurrencyFilter('');
  };

  return (
    <>
      <div className="generalContainer container d-flex flex-column justify-content-center my-3 mx-9">
        <div className="componentsContainer d-flex flex-column g-5">
          <h1 className="d-flex justify-content-center my-3">COUNTRIES APPLICATION</h1>
            <div className="d-flex flex-column">
              <Search onChange={(value) => handleSearchChange(value)} countryFilter={countryFilter}/>
              <ContinentFilter onChange={(value) => handleContinentChange(value)} onClick={() => removeContinentFilter()} />
              <CurrencyFilter onChange={(value) => handleCurrencyChange(value)} onClick={() => removeCurrencyFilter()}/>
              <Countries countryFilter={countryFilter} continentFilter={continentFilter} currencyFilter={currencyFilter}/>
            </div>
          <br/>
        </div>
      </div>
    </>
  );
}
