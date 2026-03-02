import Part from "./Part.jsx";
function Content({ course }) {
  console.log("course", course);
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
}

export default Content;
