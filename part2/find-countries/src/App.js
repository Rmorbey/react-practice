import { useState, useEffect } from 'react';
import FindCountries from './components/FindCountries';
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setAllCountries(response.data)
      })
  }, [])

  console.log('render', countries.length, 'countries')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    if (filter) {
      const regex = new RegExp( filter, 'i' );
      const filteredCountries = () => allCountries.filter(country => country.name.common.match(regex))
      setCountries(filteredCountries)
    }
  }

  return (
    <div>
      <FindCountries
      filterValue={filter}
      filterOnChange={handleFilterChange}
      countries={countries}
      setCountries={setCountries} />
    </div>
  );
}

export default App;
