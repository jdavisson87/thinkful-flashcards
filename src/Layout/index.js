import React, { Fragment, useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from './Header';
import Decks from '../Containers/Decks/Decks';
import CreateDeck from '../Containers/CreateDeck/CreateDeck';
import Deck from '../Containers/Deck/Deck';
import NotFound from './NotFound';
import { listDecks, deleteDeck } from '../utils/api/index';

function Layout() {
  const [decks, setDecks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getDecks() {
      const response = await listDecks();
      setDecks(response);
    }
    getDecks();
  }, []);

  const deckDeleteHandler = (id) => {
    if (window.confirm('Delete this deck?')) {
      deleteDeck(id);
      setDecks((current) => current.filter((deck) => deck.id !== id));
      history.push('/');
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Decks decks={decks} deckDelete={deckDeleteHandler} />
          </Route>
          <Route path={`/decks/new`}>
            <CreateDeck />
          </Route>
          <Route path={'/decks/:deckId'}>
            <Deck deckDelete={deckDeleteHandler} />
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
