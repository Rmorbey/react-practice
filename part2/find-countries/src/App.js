import { useState, useEffect } from 'react';
import FindCountries from './components/FindCountries';
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <FindCountries
      filterValue={filter}
      filterOnChange={handleFilterChange}
      countries={countries}
      />
    </div>
  );
}

export default App;
