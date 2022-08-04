import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Statistics from './components/Statistics'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleFeedback = (value, addition) => addition(value + 1)

  return (
    <div>
      <Header title='give feedback' />
      <Button handleClick={() => handleFeedback(good, setGood)} text='good' />
      <Button handleClick={() => handleFeedback(neutral, setNeutral)} text='neutral' />
      <Button handleClick={() => handleFeedback(bad, setBad)} text='bad' />
      <Header title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;