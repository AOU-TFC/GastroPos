import fetchCategories from "Utilities/fetchCategories";
import React, { createContext, useState, useEffect, useRef } from "react";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const stopRender = useRef(false);
  useEffect(() => {
    stopRender.current = true;
    if (stopRender.current === true) {
      fetchCategories(setCategories);
      stopRender.current = false;
    }
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
}
