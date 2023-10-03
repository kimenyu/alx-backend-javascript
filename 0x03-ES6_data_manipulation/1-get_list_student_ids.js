export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const byId = array.map((item) => item.id);

  return byId;
}
