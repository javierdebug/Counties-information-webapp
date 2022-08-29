import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { GET_COUNTRIES, GET_COUNTRIES_WITH_DETAILS } from '../queries/countriesQueries';
import { Country, IDetailedCountryView, Details, Continent, ContinentInDetails } from '../interface/interface';
import { Link } from "react-router-dom";

import '../styles/Details.css';

export default function DetailedCountryView( {selectedCountry}:IDetailedCountryView ) {

  const { code } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRIES_WITH_DETAILS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const [dataFiltered]  = data.countries.filter((country:Details) => country.name === code)

  return (
  <section className="detailsContainer p-5">
    <div className="detailsContainer container h3 text-light">
        <div className="row g-4">
            <h1 className="text-center mb-4">{dataFiltered.name} Country Details</h1>
            <ul className="list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Official name:</span> {dataFiltered.name}
              </li>
              <li className="list-group-item">
                <span className="fw-bold">International code:</span> {dataFiltered.code}
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Currency(ies) symbol:</span> {dataFiltered.currency}
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Continent:</span> {dataFiltered.continent.name}
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Official language(s):</span> {dataFiltered.languages.map((language:ContinentInDetails) => (`${language.name} `) )}
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Capital city:</span> {dataFiltered.capital}
              </li>
            </ul>
          </div>
        <footer className="container d-flex justify-content-center">
          <Link to="/" className="d-flex justify-content-center text-warning">
            Go Back
          </Link>
        </footer>
      </div>
    </section>
  )
}
