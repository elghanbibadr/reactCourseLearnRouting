import React from "react";
import { Route ,Redirect } from "react-router-dom";
import Welcome from "./component/Welcome";
import Products from "./component/Products";
import MainHeader from "./component/MainHeader";
import ProductDetail from "./component/ProductDetails";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
       <Route path="/welcome" >
        <Welcome />
      </Route> 
      <Route path="/products" exact >
        <Products/>
      </Route>
      <Route path="/products/:productId" >
        <ProductDetail/>
      </Route>
      </main>
    </div>
  );
}

export default App;
