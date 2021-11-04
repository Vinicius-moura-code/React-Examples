import React from "react";
import { isAuthenticated } from "./auth";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Deu bom dnv</h1>} />
      <PrivateRoute
        path="/app"
        component={() => <h1>Usuario autenticado</h1>}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
