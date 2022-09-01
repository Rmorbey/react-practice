import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Contacts from '../components/Contacts';
import UserInput from './UserInput';
import Notification from './Notification';

const Phonebook = ( { persons, formOnSubmit, formNameValue, formNumberValue, filterValue, formNameOnChange, formNumberOnChange, filterOnChange, deleteOnClick, message }) => {
  return (
    <div>
      <Header title='Phonebook' />
      <Notification message={message} />
      <UserInput
      text='Search through contacts:'
      value={filterValue}
      onChange={filterOnChange} />
      <Header title='Add a new contact' />
      <Form 
      onSubmit={formOnSubmit} 
      nameValue={formNameValue}
      nameOnChange={formNameOnChange}
      numberValue={formNumberValue}
      numberOnChange={formNumberOnChange} />
      <Header title='List of contacts' />
      <Contacts
      persons={persons}
      filter={filterValue}
      deleteOnClick={deleteOnClick} />
    </div>
  )
}

export default Phonebook;