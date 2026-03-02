import Part from "./Part.jsx";
function Content({ course }) {
  console.log("course", course);
  const part1 = course.parts[0];
  const part2 = course.parts[1];
  const part3 = course.parts[2];

  console.log("part1", part1);
  return (
    <div>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
    </div>
  );
}

export default Content;
