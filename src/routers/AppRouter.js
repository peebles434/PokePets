import React from "react";
import { Header } from "../Components/Header";
import { GameDisplay } from "../Components/GameDisplay";
import { ShopDisplay } from "../Components/ShopDisplay";
import { NotFoundPage } from "../Components/NotFoundPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={GameDisplay} exact={true} />
        <Route path="/shop" component={ShopDisplay} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
