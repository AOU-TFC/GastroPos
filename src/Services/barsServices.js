import sidenavData from "Assets/JSON/Sidebar.json";
// Importing the sidenavData object from a JSON file, which contains sidebar data.

function getSidebarData(location, setSidenavItems) {
  // Defining the getSidebarData function, which takes two parameters:
  // - `location`: an object containing information about the current location (e.g., URL pathname).
  // - `setSidenavItems`: a function used to update the state of sidebar items.

  try {
    // Wrapping the logic in a try block to handle any potential errors.

    if (location.pathname.startsWith("/admin")) {
      // Checking if the current pathname starts with "/admin".
      // This determines if the user is within the admin section of the application.

      return setSidenavItems(sidenavData.admin_sidebar);
      // If the pathname starts with "/admin", setting the sidebar items to the data found in `sidenavData.admin_sidebar`.
      // The `setSidenavItems` function updates the state with the admin sidebar data.
    }
  } catch (error) {
    // Catching any errors that occur during the execution of the try block.

    return console.log(error);
    // Logging the error to the console.
    // This helps in debugging if something goes wrong while fetching or setting sidebar data.
  }
}

export { getSidebarData };
// Exporting the getSidebarData function for use in other modules.
