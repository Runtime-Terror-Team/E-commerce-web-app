import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Women from "../pages/Women";
import Men from "../pages/Men";
import Kids from "../pages/Kids";
import Product from "../pages/Product";
import Contact from "../pages/Contact";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog/:slug" component={Product} />
      <Route path="/women" component={Women} />
      <Route path="/men" component={Men} />
      <Route path="/kids" component={Kids} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Routes;
