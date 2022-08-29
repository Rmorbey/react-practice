import React from 'react';
import Header from '../components/Header';
import UserInput from './UserInput';
import Countries from './Countries';

const FindCountries = ( { filterValue, filterOnChange, countries}) => {
  return (
    <div>
      <Header title='Find Countires' />
      <UserInput
      text='Search for countries:'
      value={filterValue}
      onChange={filterOnChange} />
      <Countries
      countries={countries}
      filter={filterValue}
      />
    </div>
  )
}

export default FindCountries;