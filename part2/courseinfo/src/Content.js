import { Part } from "./Part"
const Content= ({parts})=>{
    //console.log(parts)
    const total= parts.reduce((s,p)=>{
        return({exercises:s.exercises+p.exercises})
    })
    return(
        <div>
            <ul>
            {parts.map((part)=>{
                return(<Part key={part.id} {...part}  ></Part>)
            })}
        </ul>
        <p>
            <strong>Total of {total.exercises} exercises</strong>
        </p>
        </div>
        
    )
    

}
export default Content