
import Header from './Header'
import Content from './Content'
export const Course = (props) =>{
    //console.log(props)
    return(
        <div>
            <Header course={props.name}/>
            <Content parts={props.parts} />    
        </div>
        

    )

}
