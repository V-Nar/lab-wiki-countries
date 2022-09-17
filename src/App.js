import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import allCountries from './countries.json'
import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://ih-countries-api.herokuapp.com/countries'

function App() {
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    axios
      .get(url)
      .then((response) =>{
        setCountries(response.data)
      })
  }, [countries])
  
  return (
    <div className="App">
      <Navbar />
      <div  className='countries'>
        <CountriesList countries={countries}  />
        <Routes>
          <Route path='/:cca3' element={<CountryDetails countryInfo={countries} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
