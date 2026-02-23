const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

function Header({ course }) {
  return <h1>{course}</h1>;
}

function Content(props) {
  console.log("props", props);
  const part1 = props.parts[0];
  const part2 = props.parts[1];
  const part3 = props.parts[2];

  console.log("part1", part1);
  return (
    <div>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
    </div>
  );
}

function Part(props) {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
}
function Total(props) {
  const { part1, part2, part3 } = props.parts;
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
}
export default App;
