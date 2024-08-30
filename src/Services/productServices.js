import axios from "axios";
// Importing the axios library, which is used to make HTTP requests.

async function postProduct(item) {
  // Defining an asynchronous function named postProduct, which takes a single argument `item`.
  // The `item` argument is expected to be an object containing product details.

  const route = process.env.REACT_APP_API_ROUTE;
  // Storing the base API route URL in the `route` variable.
  // The value is retrieved from the environment variable `REACT_APP_API_ROUTE`.

  const formData = new FormData();
  // Creating a new FormData object to handle file uploads and form data.

  formData.append("title", item.title);
  formData.append("description", item.description);
  formData.append("Category", item.Category);
  formData.append("Price", item.Price);
  formData.append("productImage", item.Image);
  // Appending product details to the FormData object.
  // Each key-value pair corresponds to a form field.

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  // Defining the configuration for the request.
  // Setting the "Content-Type" header to "multipart/form-data" to handle file uploads properly.

  const response = await axios.post(`${route}/products`, formData, config);
  // Making a POST request to the "/products" endpoint of the API using axios.
  // The full URL is constructed by appending "/products" to the `route` variable.
  // Sending the FormData object and the configuration in the request.
  // The request is asynchronous, so `await` is used to wait for the response.

  return response;
  // Returning the response received from the POST request.
  // The response typically contains information about the success of the request and any data returned by the API.
}

export { postProduct };
// Exporting the postProduct function for use in other modules.
