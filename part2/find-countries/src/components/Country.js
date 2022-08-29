import React from 'react';

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital: {country.capital}</p>
      <h2>Spoken Languages</h2>
      <ul>
        add languages
      </ul>
      <img src={country.flag} alt="Country flag"></img>
    </div>
  )
}

export default Country;