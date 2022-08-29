import React from 'react';
import Country from '../components/Country';

const Countries = ({ countries, filter }) => {
  let filteredCountries = countries
  if (filter) {
    filteredCountries = countries.filter(country => new RegExp(filter, "i").test(country.name.common));
  }
  return (
    <>
      <div>
        {filteredCountries.map(country => 
          <Country key={country.name.common} name={country.name.common} />
          )}
      </div>
    </>
  )
}

export default Countries;