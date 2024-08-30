import getCategories from "Services/categoriesServices";
// Importing the `getCategories` function, which retrieves category data from an external API.

import { storeCategories, getCategoriesFromDB } from "./indexedDB";
// Importing `storeCategories` and `getCategoriesFromDB` functions from the `indexedDB` module.
// `storeCategories` is used to save category data to IndexedDB,
// and `getCategoriesFromDB` is used to retrieve category data from IndexedDB.

async function fetchCategories(setCategories) {
  // Defining an asynchronous function named `fetchCategories`, which takes `setCategories` as a parameter.
  // `setCategories` is a function used to update the state with the category data.

  try {
    // Wrapping the logic in a try block to handle potential errors.

    const response = await getCategories();
    // Awaiting the result of the `getCategories` function, which makes an API request to fetch category data.

    const { status, data } = response;
    // Destructuring `status` and `data` from the response object.

    if (status === 200) {
      // Checking if the response status is 200 (OK), indicating a successful API request.

      const categories = data.categories;
      // Extracting the `categories` array from the response data.

      const all_categories = categories.map((category) => ({
        Number: category.id,
        Category: category.description,
      }));
      // Mapping over the `categories` array to transform each category into an object with `Number` and `Category` properties.

      await storeCategories(all_categories);
      // Awaiting the result of the `storeCategories` function, which saves the transformed categories to IndexedDB.

      setCategories(all_categories);
      // Updating the state with the transformed categories using the `setCategories` function.
    }
  } catch (error) {
    // Handling any errors that occur during the API request or data transformation.

    console.error(error);
    // Logging the error to the console for debugging purposes.

    const storedCategories = await getCategoriesFromDB();
    // Awaiting the result of the `getCategoriesFromDB` function, which retrieves category data from IndexedDB.

    setCategories(storedCategories);
    // Updating the state with the categories retrieved from IndexedDB.
  }
}

export default fetchCategories;
// Exporting the `fetchCategories` function as the default export of the module.
