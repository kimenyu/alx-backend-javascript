export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      const data = { status: 200, body: 'success' };
      resolve(data);
      console.log('Got a response from the API');
    } else {
      const error = new Error();
      reject(error);
      console.log('Got a response from the API');
    }
  });
}
