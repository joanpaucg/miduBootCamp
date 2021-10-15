import React, { useState,useEffect } from 'react'
import { Filter } from './Filter'
import { PersonForm } from './PersonForm'
import { Persons } from './Persons'
import { Notification } from './Notification'
import personsService from "./services/persons"
const App = () => {
  const [persons, setPersons] = useState([
    
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber]=useState('')
  const [ newSearch, setNewSearch]=useState('')
  const [notification,setNotification]=useState({"message":null,"name":null})
  const personsToShow= newSearch.length === 0 ? persons : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase())   )
  useEffect(()=>{
    personsService
    .getPersons()
    .then(data=>setPersons(data))
  },[])
  const addPerson= (event)=>{
    //console.log("Submit Form")
    event.preventDefault();
    const existPerson=persons.filter(person=>person.name===newName)
    const newPerson={
      name:newName,
      number:newNumber

    }
    if(existPerson.length>0){
      const res=window.confirm(`${newName} is already added to phonebook,replace the old number with a new one?` )
      if(res){
       // console.log("Exist Person",existPerson)
       const [personToUpdate]=existPerson
       console.log("Person to update",personToUpdate)
        personsService
        .updatePerson(personToUpdate.id,newPerson)
        .then(returnedPerson=>{
          setPersons(persons.map(person=>person.id!==personToUpdate.id? person:returnedPerson))
          setNotification({"message":`${newName} has been updated correctly`,"name":"success"})
          setTimeout(()=>{setNotification({"message":null,"name":null})},5000)
        })
        .catch(error=>console.log(error))

      }
    }
    else{
      
      personsService
      .addPerson(newPerson)
      .then(data=>{
        console.log(data)
        setPersons([...persons,data])
      })
  
      
      setNewName("")
      setNewNumber("")
    }
    

  }
  const deletePerson=(id)=>{
    personsService
    .deletePerson(id)
    .then((response)=>{
      const newPersons=persons.filter(p=>p.id!==id)
      setPersons(newPersons)
    })

  }
  const handleChangeName=(event)=>{
    setNewName(event.target.value)

  }
  const handleChangeNumber=(event)=>{
    setNewNumber(event.target.value)
  }
  const handleSearch=(event)=>{
    const text=event.target.value
    setNewSearch(text)

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification}/>
      <Filter newSearch={newSearch} handleSearch={handleSearch} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleChangeName={handleChangeName} newNumber={newNumber} handleChangeNumber={handleChangeNumber} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
      ...
    </div>
  )
}

export default App