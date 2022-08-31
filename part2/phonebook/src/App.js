import { useState, useEffect } from 'react';
import Phonebook from './components/Phonebook';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('');
        setNewNumber('');
        console.log('create contact data response: ', returnedPerson)
    })


    const regExp = `^${newName}$`
    const match = persons.filter(person => new RegExp(regExp, "i").test(person.name));
    if (match.length > 0) {
      window.alert(`${newName} is already a contact in the phonebook`);
    } else {
      setPersons(persons.concat(personObject));
    }
    setNewName('');
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Do you want to delete ${name} from your contacts?`)) {
      personService
        .remove(id)
        .then((response) => {
          const newPersons = persons.filter((person) => person.id !== id);
          setPersons(newPersons)
        })
    }
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
      filterOnChange={handleFilterChange}
      deleteOnClick={deletePerson} />
    </div>
  )
}

export default App