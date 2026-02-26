import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGood = () => {
    const newGood = good + 1;
    setGood(newGood);
  };
  const handleNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
  };
  const handleBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
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
      <div>
        <FeedBack text="good" feedBack={good} />
        <FeedBack text="neutral" feedBack={neutral} />
        <FeedBack text="bad" feedBack={bad} />
      </div>
    </div>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
const FeedBack = ({ text, feedBack }) => {
  return <div>{`${text} ${feedBack}`}</div>;
};

export default App;
