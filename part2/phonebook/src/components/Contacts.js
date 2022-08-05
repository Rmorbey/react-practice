import React from 'react';
import Person from '../components/Person';

const Contacts = ({ persons }) => {
  return (
    <>
      <div>
        {persons.map(person => 
          <Person key={person.name} name={person.name} />
        )}
      </div>
    </>
  )
}

export default Contacts;