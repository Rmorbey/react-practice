import React from 'react';

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital City: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h2>Spoken Languages</h2>
      <ul>
        {Object.values(country.languages).map((value, index) => <li key={index}>{value}</li>)}
      </ul>
      <img src={country.flags[Object.keys(country.flags)[0]]} alt="Country flag"></img>
    </div>
  )
}

export default Country;