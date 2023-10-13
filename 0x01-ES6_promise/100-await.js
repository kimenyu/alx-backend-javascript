import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const all = Promise.all([uploadPhoto(), createUser()]).then((values) => {
    const photo = values[0];
    const user = values[1];

    return { photo, user };
  })
    .catch((error) => {
      console.error(error.message);
    });

  const data = await all;

  return data;
}
