import Anecdote from '../components/Anecdote'

const Winner = ({anecdotes, scores}) => {
  if (scores.reduce((a, b) => a + b, 0) > 0) {
    const max = Math.max(...scores);
    const index = scores.indexOf(max);

    return <Anecdote anecdote={anecdotes[index]} score={scores[index]} />
  }
  else { 
    return <p>No votes given.</p>
  }
}

export default Winner;