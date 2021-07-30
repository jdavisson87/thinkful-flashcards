import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Deck from '../../Containers/Deck/Deck';
import DecksList from '../../Components/DecksList/DecksList';
import CreateDeck from '../CreateDeck/CreateDeck';

const Decks = () => {
  return (
    <div>
      <Switch>
        <Route exact path={'/'}>
          <DecksList />
        </Route>
        <Route path={'/decks/new'}>
          <CreateDeck />
        </Route>
        <Route path={'/decks/:deckId'}>
          <Deck />
        </Route>
      </Switch>
    </div>
  );
};

export default Decks;
