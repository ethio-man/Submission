function Total({ course }) {
  return (
    <p>
      Number of exercises{" "}
      {course.parts.reduce((total, course) => (total += course.exercises), 0)}
    </p>
  );
}
export default Total;
