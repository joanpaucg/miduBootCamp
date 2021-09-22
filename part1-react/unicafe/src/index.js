import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Header = ({text})=>{
  return (
    <h1>{text}</h1>
  )
}
const Button = ({text,handler})=>{
  return(<button onClick={handler}>{text}</button>)
}
const Statistic= ({text,value})=>{
  return(<tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>)
}
const Statistics = (props) => {
  // ...
    const all=props.good+props.neutral+props.bad
    if(all===0){
      return(<p>No feedback given</p>)
    }
      return(
      <table>
      <tbody>
      <Statistic text={"good"} value={props.good}/>
      <Statistic text={"neutral"} value={props.neutral}/>
      <Statistic text={"bad"} value={props.bad}/>
      <Statistic text={"all"} value={all}/>
      <Statistic text={"average"} value={(all)/3}/>
      <Statistic text={"positive (%)"} value={props.good/(all)*100}/>
      </tbody>
      </table>
      )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text={"give feedback"}  />
      <Button text={"good"} handler={()=>{setGood(good+1)}}/>
      <Button text={"neutral"} handler={()=>{setNeutral(neutral+1)}} />
      <Button text={"bad"} handler={()=>{setBad(bad+1)}} />
      <Header text={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)