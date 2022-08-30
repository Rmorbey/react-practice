import { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY

const Country = ({ country }) => {

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    console.log('weather effect')
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
      .then(response => {
        console.log('weather promise fulfilled')
        console.log('weather response: ', response.data)
        console.log(`Current temperature in ${response.data.location.name} is ${response.data.current.temperature}`)
        setWeather(response.data.current)
      })
  }, [country.capital])

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
      {Object.keys(weather).length !== 0 && (
        <>
          <h2>Weather in {country.capital}</h2>
          <p>Temperature:{weather.temperature} Celcius</p>
          <p>The weather is: {weather.weather_descriptions}</p>
          <img src={weather.weather_icons} alt="Weather icon"></img>
          <p>Wind speed: {weather.wind_speed} m/s.</p>
          <p>Wind direction: {weather.wind_dir}</p>
        </>
      )}
    </div>
  )
}

export default Country;