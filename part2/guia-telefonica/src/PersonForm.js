export const PersonForm=(props)=>{
    return(
        <form onSubmit={props.addPerson}>
        
        <div>
          name: <input value={props.newName} onChange={props.handleChangeName} />
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}