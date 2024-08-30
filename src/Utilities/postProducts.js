import { postProduct } from "Services/productServices";
// Imports the `postProduct` function from the `productServices` module.
// This function is responsible for making a POST request to add a new product.

async function handlePostProduct(item) {
  // Defines an asynchronous function `handlePostProduct` which takes an `item` parameter.
  // `item` is expected to be the product data to be sent to the server.

  try {
    const { status, data } = await postProduct(item);
    // Calls the `postProduct` function with `item` and waits for the response.
    // Destructures the `status` and `data` from the response object.

    if (status === 201) {
      // Checks if the response status is 201 (Created), indicating that the product was successfully created.
      alert(data.message);
      // Displays a success message to the user using an alert.
    } else {
      // Handles cases where the status code is not 201.
      console.warn(`Unexpected status code: ${status}`);
      // Logs a warning message with the unexpected status code to the console.
    }
  } catch (error) {
    // Catches any errors that occur during the API request or in the `postProduct` function.
    console.error(`Error posting Product: ${error}`);
    // Logs an error message to the console, including details of the error.
  }
}

export default handlePostProduct;
// Exports the `handlePostProduct` function as the default export of the module.
