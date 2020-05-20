import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)

  let content = props.parts.map(part => <p key={part.name}> {part.name} {part.exercises} </p>)

  return (
    <>
      {content}
    </>
  )
}

const Total = (props) => {
  console.log(props)

  let total = 0;

  props.parts.map(part => total += part.exercises)  

  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))