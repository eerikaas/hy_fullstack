import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div className='App'>
      <div style= {{ fontWeight: 'bold' }}>Give feedback </div>
      <button onClick={() => setGood(good+1)}>good</button><button onClick={() => setNeutral(neutral+1)}>neutral</button><button onClick={() => setBad(bad+1)}>bad</button><br/>
      <br/>
      <div style= {{ fontWeight: 'bold' }}>Statistics </div>
      good {good} <br/>
      neutral {neutral} <br/>
      bad {bad} <br/>
      all {good + bad + neutral} <br/>
      average {(good - bad)/(good + bad + neutral)} <br/>
      positive {(good / (good + bad + neutral))*100}% <br/>
    </div>
  )
}

const Statistics = (props) => {
  if (props.good > 0|| props.bad > 0 || props.neutral > 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <Statistic text="good" value ={props.good} />
            <Statistic text="neutral" value ={props.neutral} />
            <Statistic text="bad" value ={props.bad} />
            <Statistic text="all" value= {props.good + props.bad + props.neutral} />
            <Statistic text="average" value= {(props.good - props.bad) / (props.good + props.bad + props.neutral)} />
            <Statistic text="positive" value= '${(props.good / (props.good + props.bad + props.neutral)) * 100} %' />
        </tbody>
        </table>
      </div>
    );
    } else {
    return (
      <div>No feedback given</div>
    )
}

const Statistic = ({ text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)
}

export default App