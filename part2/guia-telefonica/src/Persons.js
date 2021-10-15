

export const  Persons=(props) =>{
  const confirmDelete=(person)=>{
    const res=window.confirm(`Delete ${person.name}?`)
    if(res){
      props.deletePerson(person.id)
    }
  }
    return( 
    <div>
        <ul>
          {props.personsToShow.map((person)=>(  
            <div key={person.name}>
             <li> <p>{person.name} {person.number}</p>
              <button onClick={()=>{confirmDelete(person)}}>Delete</button> </li>
              </div> 
          ))}
        </ul>
    </div>)
   

}