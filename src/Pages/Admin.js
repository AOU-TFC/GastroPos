import React, { useEffect, useRef } from "react";
// Importing React and specific hooks: useEffect for handling side effects and useRef for creating mutable references.

import { useNavigate, useLocation, Outlet } from "react-router-dom";
// Importing useNavigate for programmatic navigation, useLocation for getting the current location,
// and Outlet for rendering nested routes from the "react-router-dom" package.

import Sidebar from "Components/Sidebar";
// Importing the Sidebar component from the "Components/Sidebar" module.

import "Styles/Desktop/Admin.css";
// Importing the CSS file for styling the Admin component.

function Admin() {
  // Defining the Admin functional component.

  const navigate = useNavigate();
  // Initializing the navigate function using the useNavigate hook.
  // This allows for programmatic navigation within the component.

  const location = useLocation();
  // Initializing the location object using the useLocation hook.
  // This provides information about the current URL, such as the pathname.

  const stopRender = useRef(false);
  // Creating a mutable ref variable stopRender initialized to false.
  // This ref is used to control the execution of the useEffect hook.

  useEffect(() => {
    stopRender.current = true;
    // Setting stopRender.current to true when the effect runs.

    if (stopRender.current === true) {
      // Checking if stopRender.current is true before proceeding.

      if (location.pathname === "/admin") {
        // Checking if the current pathname is exactly "/admin".

        navigate("./products", { replace: true });
        // If the pathname is "/admin", navigating to "./products" using navigate,
        // with replace: true to avoid adding a new entry in the history stack.
      }
    }

    stopRender.current = false;
    // Setting stopRender.current to false after the navigation check is done.
  }, [navigate, location]);
  // The useEffect hook runs when the component mounts and whenever navigate or location changes.

  return (
    <React.Fragment>
      {/* Wrapping the component's content in a React.Fragment, allowing for multiple elements to be returned. */}

      <div className="admin-Container">
        {/* Creating a div with a class name for styling. This is the main container for the Admin layout. */}

        <Sidebar />
        {/* Rendering the Sidebar component, which is part of the Admin layout. */}

        <div className="admin-content">
          {/* Creating a div for the main content area with a class name for styling. */}

          <Outlet />
          {/* Rendering the Outlet component, which will render any nested routes defined under the Admin route. */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Admin;
// Exporting the Admin component as the default export of the module.
