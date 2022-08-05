import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Contacts from '../components/Contacts';

const Phonebook = ( { persons, formOnSubmit, formNameValue, formNumberValue, formNameOnChange, formNumberOnChange, }) => {
  return (
    <div>
      <Header title='Phonebook' />
      <Form 
      onSubmit={formOnSubmit} 
      nameValue={formNameValue}
      nameOnChange={formNameOnChange}
      numberValue={formNumberValue}
      numberOnChange={formNumberOnChange} />
      <Header title='Numbers' />
      <Contacts persons={persons} />
    </div>
  )
}

export default Phonebook;