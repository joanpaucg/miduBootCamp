import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Total from './Total'
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} nuExercises={exercises1} />
      <Content part={part2} nuExercises={exercises2} />
      <Content part={part3} nuExercises={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3}/>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
