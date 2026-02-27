import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = () => {
    setAll(all + 1);
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setAll(all + 1);
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setAll(all + 1);
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text="good" onClick={handleGood} />
        <Button text="neutral" onClick={handleNeutral} />
        <Button text="bad" onClick={handleBad} />
      </div>

      <h1>statistics</h1>

      {all === 0 ? (
        <div>No feedback given</div>
      ) : (
        <div>
          <Statistics text="good" feedBack={good} />
          <Statistics text="neutral" feedBack={neutral} />
          <Statistics text="bad" feedBack={bad} />
          <Statistics text="all" feedBack={all} />
          <Statistics
            text="average"
            feedBack={all === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / all}
          />
          <Statistics
            text="positive"
            feedBack={`${all === 0 ? 0 : (good * 100) / all} %`}
          />
        </div>
      )}
    </div>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
const Statistics = ({ text, feedBack }) => {
  return <div>{`${text} ${feedBack}`}</div>;
};

export default App;
