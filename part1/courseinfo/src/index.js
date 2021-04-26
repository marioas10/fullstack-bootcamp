import React from 'react'
import ReactDOM from 'react-dom'

/* 
DESESTRUCTURACIÓN (Extraer propiedad de un objeto directamente)
 
const Title = ({course}) => <h1>{course}</h1>

const {course} = props
const course = props.course
 */

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {
  const { parts } = props.data;

  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return <p>{props.part} {props.exercises}</p>
}

const Total = (props) => {
  const { parts } = props.data;
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises

  return <p>Number of exercises {total}</p>
}

const App = () => {
  /* const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14 */

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
      <Header course={course} />
      <Content data={course} />
      <Total data={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))