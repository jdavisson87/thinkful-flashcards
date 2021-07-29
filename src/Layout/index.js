import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Decks from '../Containers/Decks/Decks';
import CreateDeck from '../Containers/CreateDeck/CreateDeck';
import Deck from '../Containers/Deck/Deck';
import NotFound from './NotFound';

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Decks />
          </Route>
          <Route path={`/decks/new`}>
            <CreateDeck />
          </Route>
          <Route path={'/decks/:deckId'}>
            <Deck />
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
