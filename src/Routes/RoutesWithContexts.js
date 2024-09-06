import React from "react";
// Importing React to use JSX and create components.

import { Routes, Route } from "react-router-dom";
// Importing the Routes and Route components from "react-router-dom" to define application routes.

import { CategoriesProvider } from "Contexts/CategoriesContext";
// Importing the CategoriesProvider component, which provides context for categories data across the application.

import Admin from "Pages/Admin";
// Importing the Admin component, which likely serves as the main layout for the admin area.

import Products from "Components/Admin/Products";
// Importing the Products component, which is probably a part of the Admin section, handling product-related functionality.
import { Authenticated } from "Utilities/Authentication";
import Staff from "Components/Admin/Staff";
// Importing the Auhtenticated component or function from "Utilities/Authentication" which likely checks user authentication status.

function RoutesWithContexts() {
  // Defining the RoutesWithContexts functional component.

  return (
    <CategoriesProvider>
      {/* Wrapping the entire component tree in CategoriesProvider to ensure that the categories context is available to all child components. */}

      <Authenticated />
      {/* Rendering the Auhtenticated component, which likely checks if the user is authenticated and possibly redirects them if not. */}

      <Routes>
        {/* Wrapping the Route components within Routes to define the application's routing structure. */}

        <Route path="/admin/*" element={<Admin />}>
          {/* Defining a Route for "/admin/*", which renders the Admin component. 
              The "/*" indicates that this route can have nested routes. */}

          <Route path="products" element={<Products />} />
          {/* Defining a nested Route for "products", which renders the Products component inside the Admin component.
              This means "/admin/products" will render the Products component. */}
          <Route path="staff" element={<Staff />} />
        </Route>
      </Routes>
    </CategoriesProvider>
  );
}

export default RoutesWithContexts;
// Exporting the RoutesWithContexts component as the default export of the module.
