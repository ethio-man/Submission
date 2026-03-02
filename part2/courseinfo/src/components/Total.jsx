function Total({ course }) {
  return (
    <p style={{ fontWeight: "bold" }}>
      total of exercises{" "}
      {course.parts.reduce((total, course) => (total += course.exercises), 0)}
    </p>
  );
}
export default Total;
