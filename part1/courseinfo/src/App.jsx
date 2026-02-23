const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

function Header(props) {
  return <h1>{props.name}</h1>;
}

function Content(props) {
  console.log("props", props);
  const part1 = props.course.parts[0];
  const part2 = props.course.parts[1];
  const part3 = props.course.parts[2];

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
  return (
    <p>
      Number of exercises{" "}
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </p>
  );
}
export default App;
