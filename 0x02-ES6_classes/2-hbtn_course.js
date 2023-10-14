export default class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the types of attributes
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new Error('Invalid attribute types');
    }

    // Private attributes with underscores
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for the 'name' attribute
  get name() {
    return this._name;
  }

  // Setter for the 'name' attribute
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Invalid attribute type for name');
    }
  }

  // Getter for the 'length' attribute
  get length() {
    return this._length;
  }

  // Setter for the 'length' attribute
  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new Error('Invalid attribute type for length');
    }
  }

  // Getter for the 'students' attribute
  get students() {
    return this._students;
  }

  // Setter for the 'students' attribute
  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      throw new Error('Invalid attribute type for students');
    }
  }
}
