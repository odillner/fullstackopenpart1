import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );
}

const Buttons = (props) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick ={props.handleGood} />
      <Button text="neutral" handleClick ={props.handleNeutral} />
      <Button text="bad" handleClick ={props.handleBad} />
    </div>
  );
}

const Statistic = (props) => {
  return (
    <div>
      <tr><td>{props.text}</td><td>{props.value}</td></tr> 
    </div>
  );
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (     
      <div>
        <h1>statistics</h1>
        no feedback given
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value ={props.good} />
          <Statistic text="neutral" value ={props.neutral} />
          <Statistic text="bad" value ={props.bad} />
          <Statistic text="total" value ={props.total} />
          <Statistic text="average" value ={props.average} />
          <Statistic text="positive" value ={props.positive} />
        </tbody>
      </table>
    </div>
  );
}



const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (val, set) => {
    const handler = () => {
      set(val + 1);
    }

    return handler;
  }

  const getTotalCount = () => {
    return good+neutral+bad;
  }

  const getAverage = () => {
    const totalCount = getTotalCount();

    if (totalCount === 0) {return 0;}

    const totalVal = good + bad * -1;
    
    return totalVal/totalCount;
  }

  const getPositive = () => {
    const totalCount = getTotalCount();

    if (totalCount === 0) {return 0;}

    return good/getTotalCount() * 100;
  }

  return (
    <div>
      <Buttons 
        handleGood =    {handleClick(good, setGood)}
        handleNeutral = {handleClick(neutral, setNeutral)}
        handleBad =     {handleClick(bad, setBad)}
      />
      <Statistics 
        good = {good} 
        neutral= {neutral} 
        bad= {bad} 
        total= {getTotalCount()} 
        average= {getAverage()} 
        positive= {getPositive()} 
      />
    </div>
  );
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)