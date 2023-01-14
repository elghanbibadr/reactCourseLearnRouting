import React from "react";
import { Route } from "react-router-dom";
import Welcome from "./component/Welcome";
import Products from "./component/Products";
import MainHeader from "./component/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
      <Route path="/welcome" >
        <Welcome />
      </Route>
      <Route path="/products" >
        <Products/>
      </Route>
      </main>
    </div>
  );
}

export default App;
