import { useState } from 'react'
import Header from './components/Header'
import Title from './components/Title'
import Button from './components/Button'
import Rating from './components/Rating'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Title />
      <Rating value={good} text='good'/>
      <Rating value={neutral} text='neutral'/>
      <Rating value={bad} text='bad'/>
    </div>
  )
}

export default App;