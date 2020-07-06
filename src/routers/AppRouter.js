import React from "react";
import { Header } from "../Components/Header";
import { HomeDisplay } from "../Components/HomeDisplay";
import { CardCollection } from "../Components/CardCollection";
import { GameDisplay } from "../Components/GameDisplay";
import { ShopDisplay } from "../Components/ShopDisplay";
import { NotFoundPage } from "../Components/NotFoundPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomeDisplay} exact={true} />
        <Route path="/collection" component={CardCollection} exact={true} />

        <Route path="/battle" component={GameDisplay} exact={true} />
        <Route path="/shop" component={ShopDisplay} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
