export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    task = true;   // Avoid redeclaration
    task2 = false; // Avoid redeclaration
  }

  return [task, task2];
}

