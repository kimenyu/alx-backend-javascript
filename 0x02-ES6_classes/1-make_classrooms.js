import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  c1 = new ClassRoom(19);
  c2 = new ClassRoom(20);
  c3 = new ClassRoom(34);
  myArray = [c1, c2, c3];
  return myArray;
}
