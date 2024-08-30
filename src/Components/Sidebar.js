import React, { useEffect, useRef, useState } from "react";
// Importing React and specific hooks: useEffect for side effects, useRef for mutable references, and useState for managing state.

import { Link, useLocation } from "react-router-dom";
// Importing Link and useLocation from the "react-router-dom" package.
// Link is used for navigation, and useLocation is used to get the current location object.

import { getSidebarData } from "Services/barsServices";
// Importing the getSidebarData function from a service module that handles fetching data for the sidebar.

import "Styles/Desktop/Sidebar.css";
// Importing the CSS file for styling the Sidebar component.

function Sidebar() {
  // Defining the Sidebar functional component.

  const [sidenavItems, setSidenavItems] = useState([]);
  // Declaring a state variable sidenavItems with an initial empty array.
  // setSidenavItems is used to update the state with the fetched sidebar data.

  const location = useLocation();
  // Using the useLocation hook to get the current location object,
  // which contains information about the current URL.

  const stopRender = useRef(false);
  // Creating a mutable ref variable stopRender initialized to false.
  // This will be used to control the execution of the useEffect hook.

  useEffect(() => {
    stopRender.current = true;
    // Setting stopRender.current to true when the effect runs.

    if (stopRender.current === true) {
      // Checking if stopRender.current is true before proceeding.

      async function fetchSideData() {
        // Defining an asynchronous function to fetch sidebar data.

        await getSidebarData(location, setSidenavItems);
        // Calling the getSidebarData function, passing the current location
        // and setSidenavItems to update the state with the fetched data.
      }
      fetchSideData();
      // Invoking the fetchSideData function to fetch the sidebar data.

      stopRender.current = false;
      // Setting stopRender.current to false after data fetching is done.
    }
  }, [location]);
  // The useEffect hook runs when the component mounts and whenever the location changes.
  // It ensures that the sidebar data is re-fetched when the URL changes.

  return (
    <div className="sidebar-Container">
      {/* Returning a div with a class name for styling. This is the main container for the sidebar. */}

      <ul className="sidenav-list">
        {/* Creating an unordered list with a class name for styling. This will contain the sidebar items. */}

        {sidenavItems.map((item, index) => (
          // Mapping over the sidenavItems array to generate list items for each sidebar item.
          // Each item in the array is processed in the map function.

          <li key={index}>
            {/* Creating a list item with a unique key based on the index of the item in the array. */}

            {location.pathname.startsWith("/admin")
              ? // Checking if the current pathname starts with "/admin".

                item.type === "link" && (
                  // If the current pathname starts with "/admin", check if the item type is "link".

                  <Link
                    to={item.url}
                    className={location.pathname === item.url ? "active" : ""}
                  >
                    {/* If the item is a link, render a Link component pointing to the item's URL.
                        The className is set to "active" if the current pathname matches the item's URL. */}

                    <strong>{item.text}</strong>
                    {/* Display the item's text inside a <strong> tag for bold text. */}
                  </Link>
                )
              : ""}
            {/* If the current pathname doesn't start with "/admin", render nothing. */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
// Exporting the Sidebar component as the default export of the module.
