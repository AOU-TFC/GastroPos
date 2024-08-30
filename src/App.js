import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesWithContexts from "Routes/RoutesWithContexts";
import RoutesWithoutContexts from "Routes/RoutesWithoutContexts";

function App() {
  return (
    <BrowserRouter>
      <RoutesWithContexts />
      <RoutesWithoutContexts />
    </BrowserRouter>
  );
}

export default App;
