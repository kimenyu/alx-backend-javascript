export default function getStudentsByLocation(students, city) {
  const bycity = students.filter((student) => student.location === city);
  return bycity;
}
