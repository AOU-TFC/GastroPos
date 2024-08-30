import React from "react";
// Importing React to use JSX and create components.

import { Routes, Route } from "react-router-dom";
// Importing the Routes and Route components from "react-router-dom" to define the application's routes.

import LoginPage from "Pages/Login";
// Importing the LoginPage component, which is the page responsible for handling user login.

function RoutesWithoutContexts() {
  // Defining the RoutesWithoutContexts functional component.

  return (
    <Routes>
      {/* Wrapping the Route components within Routes to define the application's routing structure. */}

      <Route path="/login" element={<LoginPage />} />
      {/* Defining a Route for the "/login" path, which renders the LoginPage component when the user navigates to "/login". */}
    </Routes>
  );
}

export default RoutesWithoutContexts;
// Exporting the RoutesWithoutContexts component as the default export of the module.
