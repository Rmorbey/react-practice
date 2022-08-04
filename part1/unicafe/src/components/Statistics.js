import Statistic from '../components/Statistic'

const Statistics = ({ good, neutral, bad}) => {
  const all = good + neutral + bad;

  if (all > 0) {
    const average = (good - bad)/all

    return (
      <table>
        <tbody>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='average' value={average} />
          <Statistic text='positive' value={(good * 100)/all + '%'} />
        </tbody>
      </table>
    );
  }
  else { 
    return <p>No Feedback given. We look forward to your Feedback.</p>
  }
}

export default Statistics;