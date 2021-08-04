import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import DecksRoutes from '../Routes/DecksRoutes';
import NotFound from './NotFound';

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/">
            <DecksRoutes />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default Layout;
