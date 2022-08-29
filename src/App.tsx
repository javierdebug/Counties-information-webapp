import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import DetailedCountryView from "./pages/DetailedCountryView";
import Home from "./pages/Home";

import './App.css';

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <Router>
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/details">
                <Route path=":code" element={<DetailedCountryView />} />
              </Route> 
            </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
