import { useState, useEffect } from 'react';
import Phonebook from './components/Phonebook';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState(null);

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
    const regExp = `^${newName}$`
    const match = persons.filter(person => new RegExp(regExp, "i").test(person.name));
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    if (match.length === 0) {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('');
          setNewNumber('');
          setMessage(`Added ${returnedPerson.name} to contacts.`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          console.log('create contact data response: ', returnedPerson)
      })
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personService
          .update(match[0].id, personObject)
          .then((returnedPerson) => {
            const updatedPersons = persons.map((person) => 
              person.id !== returnedPerson.id ? person : returnedPerson
            );
            setPersons(updatedPersons);
            setMessage(`Updated ${newName} number in contacts.`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
        }
      }
      setNewName('');
      setNewNumber('');
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Do you want to delete ${name} from your contacts?`)) {
      personService
        .remove(id)
        .then((response) => {
          const newPersons = persons.filter((person) => person.id !== id);
          setPersons(newPersons)
          setMessage(`Deleted ${name} from contacts.`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
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
      deleteOnClick={deletePerson}
      message={message} />
    </div>
  )
}

export default App