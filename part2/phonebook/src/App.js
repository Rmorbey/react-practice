import { useState } from 'react'
import Phonebook from './components/Phonebook';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }

    const regExp = `^${newName}$`
    const match = persons.filter(person => new RegExp(regExp, "i").test(person.name));
    if (match.length > 0) {
      window.alert(`${newName} is already a contact in the phonebook`);
    } else {
      setPersons(persons.concat(personObject));
    }
    setNewName('');
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <Phonebook 
      persons={persons} 
      formOnSubmit={addPerson} 
      formNameValue={newName}
      formNumberValue={newNumber} 
      formNameOnChange={handleNameChange}
      formNumberOnChange={handleNumberChange} />
    </div>
  )
}

export default App