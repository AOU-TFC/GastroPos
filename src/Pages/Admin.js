import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import Sidebar from "Components/Sidebar";
import "Styles/Desktop/Admin.css";

function Admin() {
  const navigate = useNavigate();
  const location = useLocation();
  const stopRender = useRef(false);
  useEffect(() => {
    stopRender.current = true;
    if (stopRender.current === true) {
      if (location.pathname === "/admin") {
        navigate("./products", { replace: true });
      }
    }
    stopRender.current = false;
  }, [navigate, location]);
  return (
    <React.Fragment>
      <div className="admin-Container">
        <Sidebar />
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Admin;
