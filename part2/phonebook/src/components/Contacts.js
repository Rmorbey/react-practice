import React from 'react';
import Person from '../components/Person';

const Contacts = ({ persons, filter, deleteOnClick }) => {
  let filteredContacts = persons
  if (filter) {
    filteredContacts = persons.filter(person => new RegExp(filter, "i").test(person.name));
  }
  return (
    <>
      <div>
        {filteredContacts.map(person => 
          <Person key={person.name} name={person.name} number={person.number} deletePerson={() => deleteOnClick(person.id, person.name)} />
        )}
      </div>
    </>
  )
}

export default Contacts;