import axios from "axios";
// Importing the axios library, which is used to make HTTP requests.

export default async function LoginAuth(data) {
  // Defining an asynchronous function named LoginAuth, which takes a single argument `data`.
  // The function is exported as the default export of the module.

  const route = process.env.REACT_APP_API_ROUTE;
  // Storing the API route URL in the `route` variable.
  // The value is retrieved from the environment variable `REACT_APP_API_ROUTE`.

  const response = await axios.post(`${route}/auth/login`, data);
  // Making a POST request to the "/auth/login" endpoint of the API using axios.
  // The full URL is constructed by appending "/auth/login" to the `route` variable.
  // The `data` argument, which contains the login credentials, is sent in the body of the POST request.
  // The request is asynchronous, so `await` is used to wait for the response.

  return response;
  // Returning the response received from the POST request.
  // The response typically contains information such as the status of the request and any data returned by the API.
}
