import { gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      currency
      continent {
        code
        name
      }
    }
  }
`;

const GET_COUNTRIES_WITH_CURRENCY = gql`
  query {
    countries {
      code
      currency
    }
  }
`;

const GET_COUNTRIES_BY_CONTINENT = gql`
  query {
    continents {
      code
      name
      countries {
        code
        name
        currency
      }
    }
  }
`;

const GET_COUNTRIES_WITH_DETAILS = gql`
query {
    countries {
      code
      name
      currency
      continent {
        name
      }
      languages {
        name
      }
      capital
    }
}
`

export { GET_COUNTRIES, GET_COUNTRIES_WITH_CURRENCY, GET_COUNTRIES_BY_CONTINENT, GET_COUNTRIES_WITH_DETAILS };
