import axios from "axios";
// Importing the axios library, which is used for making HTTP requests.

async function getCategories() {
  // Defining an asynchronous function named getCategories.
  // This function does not take any parameters.

  const route = process.env.REACT_APP_API_ROUTE;
  // Storing the base API route URL in the `route` variable.
  // The value is retrieved from the environment variable `REACT_APP_API_ROUTE`.

  const response = await axios.get(`${route}/categories`);
  // Making a GET request to the "/categories" endpoint of the API using axios.
  // The full URL is constructed by appending "/categories" to the `route` variable.
  // The request is asynchronous, so `await` is used to wait for the response.

  return response;
  // Returning the response received from the GET request.
  // The response typically contains data from the API, such as a list of categories.
}

export default getCategories;
// Exporting the getCategories function as the default export of the module.
