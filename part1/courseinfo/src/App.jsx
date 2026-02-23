const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  return (
    <div>
      <Header course={course} />
      <Content data={{ part1, part2, part3 }} />
      <Total data={{ part1, part2, part3 }} />
    </div>
  );
};

function Header({ course }) {
  return <h1>{course}</h1>;
}

function Content(props) {
  const { part1, part2, part3 } = props.data;
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
  const { part1, part2, part3 } = props.data;
  return (
    <p>
      Number of exercises {part1.exercises + part2.exercises + part3.exercises}
    </p>
  );
}
export default App;
