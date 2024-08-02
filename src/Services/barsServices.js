import sidenavData from "Assets/JSON/Sidebar.json";

function getSidebarData(location, setSidenavItems) {
  try {
    if (location.pathname.startsWith("/admin")) {
      return setSidenavItems(sidenavData.admin_sidebar);
    }
  } catch (error) {
    return console.log(error);
  }
}

export { getSidebarData };
