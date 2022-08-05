import { useState } from 'react'
import Header from './components/Header';
import Form from './components/Form';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  return (
    <div>
      <Header title='Phonebook' />
      <Form />
      <div>debug: {newName}</div>
      <Header title='Numbers' />
      ...
    </div>
  )
}

export default App