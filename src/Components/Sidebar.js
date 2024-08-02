import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getSidebarData } from "Services/barsServices";
import "Styles/Desktop/Sidebar.css";

function Sidebar() {
  const [sidenavItems, setSidenavItems] = useState([]);
  const location = useLocation();
  const stopRender = useRef(false);

  useEffect(() => {
    stopRender.current = true;
    if (stopRender.current === true) {
      async function fetchSideData() {
        await getSidebarData(location, setSidenavItems);
      }
      fetchSideData();
      stopRender.current = false;
    }
  }, [location]);
  return (
    <div className="sidebar-Container">
      <ul className="sidenav-list">
        {sidenavItems.map((item, index) => (
          <li key={index}>
            {location.pathname.startsWith("/admin")
              ? item.type === "link" && (
                  <Link
                    to={item.url}
                    className={location.pathname === item.url ? "active" : ""}
                  >
                    <strong>{item.text}</strong>
                  </Link>
                )
              : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
