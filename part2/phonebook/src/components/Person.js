import React from 'react';
import Button from './Button';

const Person = ({ name, number, deletePerson }) => {
  return (
    <li>
      {name} {number} <Button onClick={deletePerson} text={'Delete'}/>
    </li>
  )
  
}

export default Person;