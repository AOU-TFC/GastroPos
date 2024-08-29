import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesWithContexts from "Routes/RoutesWithContexts";

function App() {
  return (
    <BrowserRouter>
      <RoutesWithContexts />
    </BrowserRouter>
  );
}

export default App;
