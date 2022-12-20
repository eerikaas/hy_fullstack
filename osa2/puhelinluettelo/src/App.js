import { useState } from 'react';
import Filter from './komponentit/Filter';
import Persons from './komponentit/Persons';
import NewPerson from './komponentit/NewPerson';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.some(e => e.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
        event.preventDefault()
        const nameObject = {
          name: newName,
          number: newNumber
        }
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
    }
  }

  const filtered = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>phonebook</h2>
      <Filter filterBy={filter} handler={handleFilter} />
      <h2>add new</h2>
      <NewPerson newName={newName} handleSubmit={handleSubmit} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber}/>
      <h2>Numbers</h2>
      <Persons show={filtered}/>
    </div>
  )

}

export default App