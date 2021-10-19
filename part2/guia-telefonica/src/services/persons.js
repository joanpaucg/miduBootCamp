import axios from "axios"
const baseUrl="http://localhost:3001/api/persons"
//const baseUrl="https://serene-beyond-02874.herokuapp.com/api/persons"
const getPersons=()=>{
   const request = axios.get(baseUrl)

   return request.then(response=>response.data)
      

}
const addPerson=(newPerson)=>{
    const request= axios.post(baseUrl,newPerson)
    return request.then(response=>response.data)
    
}

const deletePerson=(id)=>{
    const request= axios.delete(`${baseUrl}/${id}`)
    return request.then(response=>response.data)
}
const updatePerson=(id,newPerson)=>{
    console.log(id,newPerson)
    const request= axios.put(`${baseUrl}/${id}`,newPerson)
    return request.then(response=>response.data) 
}
export default {getPersons,addPerson,deletePerson,updatePerson}