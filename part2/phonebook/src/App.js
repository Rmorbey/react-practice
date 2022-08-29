import { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook';
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <Phonebook 
      persons={persons} 
      formOnSubmit={addPerson} 
      formNameValue={newName}
      formNumberValue={newNumber} 
      filterValue={filter}
      formNameOnChange={handleNameChange}
      formNumberOnChange={handleNumberChange}
      filterOnChange={handleFilterChange} />
    </div>
  )
}

export default App