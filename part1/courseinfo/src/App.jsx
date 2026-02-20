const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div>
      <Header course={course} />
      <Content
        data={{ part1, part2, part3, exercises1, exercises2, exercises3 }}
      />
      <Total exercises={{ exercises1, exercises2, exercises3 }} />
    </div>
  );
};

function Header({ course }) {
  return <h1>{course}</h1>;
}

function Content(props) {
  const { part1, part2, part3, exercises1, exercises2, exercises3 } =
    props.data;
  return (
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>
  );
}

function Total(props) {
  const { exercises1, exercises2, exercises3 } = props.exercises;
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
}
export default App;
