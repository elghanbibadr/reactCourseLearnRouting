import React from "react";
import { Route } from "react-router-dom";
import Welcome from "./component/Welcome";
import Products from "./component/Products";

function App() {
  return (
    <div>
      <Route path="/welcome" >
        <Welcome />
      </Route>
      <Route path="/products" >
        <Products/>
      </Route>
    </div>
  );
}

export default App;
