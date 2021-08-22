import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Women from "../pages/Women";
import Men from "../pages/Men";
import Kids from "../pages/Kids";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product/:slug" component={Product} />
      <Route path="/women" component={Women} />
      <Route path="/men" component={Men} />
      <Route path="/kids" component={Kids} />
      <Route path="/contact" component={Contact} />
      <Route path="/cart" component={Cart} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/login" component={Login} />
      <Route path="/signup" exact component={SignUp} />
    </Switch>
  );
};

export default Routes;
