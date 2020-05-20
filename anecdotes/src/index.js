import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Anecdote = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.anecdote}
      <br/>
      has {props.votes} votes
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
    {props.text}
    </button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(props.anecdotes.length))

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length))
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const getPopularAnecdote = () => {
    let popular = 0;

    for (let i=1; i<votes.length; i++) {
      if (votes[popular] < votes[i]) {
        popular = i;
      }
    }

    return popular;
  }

  return (
    <div>
      <Anecdote title="Anecdote of the day" anecdote={props.anecdotes[selected]} votes={votes[selected]}/>
      <br/>
      <Button text="next anecdote" handleClick={nextAnecdote}/>
      <Button text="vote" handleClick={vote}/>

      <Anecdote title="Anecdote with most votes" anecdote={props.anecdotes[getPopularAnecdote()]} votes={votes[getPopularAnecdote()]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)