import { useState } from 'react'
import Phonebook from './components/Phonebook';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  return (
    <div>
      <Phonebook persons={persons} />
      <div>debug: {newName}</div>
    </div>
  )
}

export default App