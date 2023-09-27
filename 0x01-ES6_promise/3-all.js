import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then((results) => {
      const [photoResult, userResult] = results;
      console.log(`${userResult.body.firstName} ${userResult.body.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}
