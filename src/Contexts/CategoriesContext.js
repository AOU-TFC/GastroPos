import fetchCategories from "Utilities/fetchCategories";
// Importing the fetchCategories function from a utility module, which is used to fetch category data.

import React, { createContext, useState, useEffect, useRef } from "react";
// Importing React and specific hooks: createContext for creating a context, useState for managing state,
// useEffect for handling side effects, and useRef for creating mutable references.

export const CategoriesContext = createContext();
// Creating a context called CategoriesContext, which will be used to share category data across components.

export function CategoriesProvider({ children }) {
  // Defining the CategoriesProvider functional component.
  // It takes a children prop, which represents any child components that will be wrapped by this provider.

  const [categories, setCategories] = useState([]);
  // Declaring a state variable categories initialized as an empty array.
  // setCategories is used to update the state with fetched categories.

  const stopRender = useRef(false);
  // Creating a mutable ref variable stopRender initialized to false.
  // This ref is used to control the execution of the useEffect hook.

  useEffect(() => {
    stopRender.current = true;
    // Setting stopRender.current to true when the effect runs.

    if (stopRender.current === true) {
      // Checking if stopRender.current is true before proceeding.

      fetchCategories(setCategories);
      // Calling the fetchCategories function and passing setCategories to update the categories state with the fetched data.

      stopRender.current = false;
      // Setting stopRender.current to false after data fetching is done.
    }
  }, []);
  // The useEffect hook runs once when the component mounts (empty dependency array).
  // It ensures that the categories are fetched and state is updated when the provider component is first rendered.

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {/* Returning a CategoriesContext.Provider component.
          The value prop contains an object with the categories state and the setCategories function,
          making them available to any component that consumes this context. */}

      {children}
      {/* Rendering the children components that are wrapped by this provider. */}
    </CategoriesContext.Provider>
  );
}
