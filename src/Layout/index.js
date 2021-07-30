import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Decks from '../Containers/Decks/Decks';
import NotFound from './NotFound';

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/">
            <Decks />
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
