import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './Routes';
const router = () => (
  <section className="routerDiv">
    <Switch>
      {routes.map(route => (
        <Route
          key={`route-${route.name}`}
          path={route.path}
          exact={route.exact}
          component={route.component}
          render={route.render}
        />
      ))}
    </Switch>
  </section>
);
export default router;
