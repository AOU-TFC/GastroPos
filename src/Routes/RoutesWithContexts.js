import React from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesProvider } from "Contexts/CategoriesContext";
import Admin from "Pages/Admin";
import Products from "Components/Admin/Products";

function RoutesWithContexts() {
  return (
    <CategoriesProvider>
      <Routes>
        <Route path="/admin/*" element={<Admin />}>
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </CategoriesProvider>
  );
}

export default RoutesWithContexts;
