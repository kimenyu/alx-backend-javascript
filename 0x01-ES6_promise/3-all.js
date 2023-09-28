import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      const { firstName, lastName } = userResponse;
      console.log(`${firstName}, ${lastName}, ${photoResponse.body}`);
    })
    .catch((error) => {
      console.log("Signup system offline");
    });
}
