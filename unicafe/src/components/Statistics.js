import Statistic from '../components/Statistic'

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;

  if (all > 0) {
    const average = (props.good - props.bad)/all

    return (
      <table>
        <tbody>
          <Statistic text='good' value={props.good} />
          <Statistic text='neutral' value={props.neutral} />
          <Statistic text='bad' value={props.bad} />
          <Statistic text='average' value={average} />
          <Statistic text='positive' value={(props.good * 100)/all + '%'} />
        </tbody>
      </table>
    );
  }
  else { 
    return <p>No Feedback given. We look forward to your Feedback.</p>
  }
}

export default Statistics;