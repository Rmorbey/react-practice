import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Contacts from '../components/Contacts';

const Phonebook = ( { persons }) => {
  return (
    <div>
      <Header title='Phonebook' />
      <Form />
      <Header title='Numbers' />
      <Contacts persons={persons} />
    </div>
  )
}

export default Phonebook;