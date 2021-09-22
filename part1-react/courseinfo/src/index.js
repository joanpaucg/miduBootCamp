import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Total from './Total'
const Display =({contador}) =>{
  return(<h2>{contador}</h2>)
}
const App = (props) => {
  const [contador,updateContador]=useState(1)
  //const contador=useState(15);
  //const contadorValue= contador[0];
  //const updateContador= contador[1];
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const handleClick= (operation)=>{
    operation === 0 ? updateContador(contador+1): updateContador(contador-1)
  }
  const handleClickReset= ()=>{
    updateContador(1)
  }
  const isEven= contador % 2 === 0
  const mensajePar= isEven? "Es par":"Es impar"
  return (
    <div>
      <Header course={course} />
      <Display contador={contador}></Display>
      <small>{mensajePar}</small>
      <Content part={part1} nuExercises={exercises1} />
      <Content part={part2} nuExercises={exercises2} />
      <Content part={part3} nuExercises={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3}/>
      <button onClick={()=>{handleClick(0)}}>Up</button>
      <button onClick={()=>{handleClick(1)}}>Down</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))




