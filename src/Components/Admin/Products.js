import React, { useContext, useRef, useState } from "react";
// Importing React and specific hooks (useContext, useRef, useState) from the React library.

import { CategoriesContext } from "Contexts/CategoriesContext";
// Importing the CategoriesContext from a custom context module to access category data.

import handlePostProduct from "Utilities/postProducts";
// Importing the handlePostProduct function from a utility module to handle posting product data.

import "Styles/Desktop/Products.css";
// Importing the CSS file for styling the Products component.

function Products() {
  // Defining the Products functional component.

  const { categories } = useContext(CategoriesContext);
  // Using the useContext hook to access the categories from CategoriesContext.

  const [item, setItem] = useState({
    title: "",
    description: "",
    Price: 0,
    Category: "",
    productImage: null,
  });
  // Declaring a state variable item and its setter setItem using the useState hook.
  // Initial state is an object with default values for product properties.

  const formRef = useRef(null);
  // Creating a reference to the form element using the useRef hook, initialized with null.

  const handleChanges = (e) => {
    // Defining a function to handle changes in form input fields.

    if (e.target.name === "Image") {
      // Checking if the input field name is "Image".

      setItem({
        ...item,
        Image: e.target.files[0],
      });
      // Updating the state with the selected image file if the input is for the image.
    } else {
      // Handling changes for other input fields.

      setItem({
        ...item,
        [e.target.name]: e.target.value,
      });
      // Updating the state for the corresponding input field based on its name and value.
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    // Preventing the default form submission behavior.

    await handlePostProduct(item);
    // Awaiting the asynchronous call to handlePostProduct to post the product data.

    setItem({
      title: "",
      description: "",
      Price: 0,
      Category: "",
      productImage: null,
    });
    // Resetting the item state to its initial values after the product is posted.

    formRef.current.reset();
    // Resetting the form fields using the formRef reference.
  };

  return (
    <React.Fragment>
      {/* Wrapping the component's content in a React.Fragment, which allows returning multiple elements. */}

      <div className="products-Container">
        {/* Defining a container div with a class name for styling. */}
        <h1>Welcome to Products</h1>
        {/* Displaying a heading for the Products page. */}
        <div className="products-Content">
          {/* Defining another div for content, with a class name for styling. */}

          <form ref={formRef} className="products-form" onSubmit={addProduct}>
            {/* Creating a form with a ref attribute pointing to formRef and an onSubmit handler pointing to addProduct. */}

            <input
              type="text"
              name="title"
              required
              placeholder="Title"
              onChange={handleChanges}
            />
            {/* Creating a text input for the product title, with required validation and an onChange handler pointing to handleChanges. */}

            <input
              type="text"
              name="description"
              required
              placeholder="Description"
              onChange={handleChanges}
            />
            {/* Creating a text input for the product description, with required validation and an onChange handler pointing to handleChanges. */}

            <select name="Category" onChange={handleChanges}>
              {/* Creating a select dropdown for choosing the product category, with an onChange handler pointing to handleChanges. */}

              <option>--select Category</option>
              {/* Default option prompting the user to select a category. */}

              {categories.map((category) => (
                <option key={category.Number} value={category.Number}>
                  {category.Category}
                </option>
              ))}
              {/* Mapping over the categories array from CategoriesContext to generate options for each category. 
                  The category's Number is used as the key and value, and the category name is displayed. */}
            </select>

            <input
              type="text"
              name="Price"
              required
              placeholder="Price"
              onChange={handleChanges}
            />
            {/* Creating a text input for the product price, with required validation and an onChange handler pointing to handleChanges. */}

            <input type="file" name="Image" required onChange={handleChanges} />
            {/* Creating a file input for uploading a product image, with required validation and an onChange handler pointing to handleChanges. */}

            <button type="submit">Add Product</button>
            {/* Creating a submit button to add the product when the form is submitted. */}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Products;
// Exporting the Products component as the default export of the module.
